import News from "../News";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

/**
 * test news page
 */
describe("News test", () => {

    it('should render news', async () => {
        render(<News />);
        const newsDivElement = await screen.findByTestId("news-item-0");
        expect(newsDivElement).toBeInTheDocument();
    })

})