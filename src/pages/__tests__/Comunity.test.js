import Community from '../Community';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '../../context';
import { insertPost, getPosts } from '../../services/CommunityService';

const defaultPost = {
    comments: "122sdfasdfds",
    startTime: "02/03/2022",
    symptoms: ['Cough'],
    testResult: "positive",
    vaccine: "moderna",
    _id: "6243ba37cd7be3119f69513a"
}

jest.mock('../../services/CommunityService', () => ({
    insertPost: jest.fn(),
    getPosts: jest.fn()
}));

jest.mock('chart.js/auto');
jest.mock('../components/Polls', () => () => <div></div>);

describe("Community test", () => {
    beforeEach(() => {
        getPosts.mockImplementation(() => Promise.resolve([defaultPost]));
    });

    xit("should render community", async () => {
        const { findByText } = render(<Community />);
        const card = await findByText("02/03/2022");
        expect(card).toBeInTheDocument();
    });

    it("should open dialog", async () => {
        const { findByText } = render(
            <AppContext.Provider value={{ username: "harry", setUsername: jest.fn() }}>
                <Community />
            </AppContext.Provider>
        );
        const button = await findByText("Share Your Symptoms");
        fireEvent.click(button);
        const dialog = await findByText("Choose Your Symptoms (Required)");
        expect(dialog).toBeInTheDocument();
    });

    it("should add post", async () => {
        insertPost.mockImplementation(() => Promise.resolve());
        const { findByText, getByText } = render(
            <AppContext.Provider value={{ username: "harry", setUsername: jest.fn() }}>
                <Community />
            </AppContext.Provider>
        );
        const button = await findByText("Share Your Symptoms");
        fireEvent.click(button);
        const dialog = await findByText("Choose Your Symptoms (Required)");
        const checkbox = dialog.parentNode.querySelector("#feverCheckbox");
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(checkbox);
        fireEvent.click(getByText("Post"));
        expect(insertPost).toHaveBeenCalledWith(expect.objectContaining({ symptoms: ["Fever"] }));
    });
})