import News from "../News";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

describe("News", () => {

    it('should render news', async () => {
        render(<News />);
        const NewsDivElement = await screen.findByTestId("news-item-0");
        expect(NewsDivElement).toBeInTheDocument();
    })

})