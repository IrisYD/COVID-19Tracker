import Card from '../Card';
import { render } from '@testing-library/react';

const defaultPost = {
    comments: "122sdfasdfds",
    startTime: "02/03/2022",
    symptoms: ['Cough'],
    testResult: "positive",
    vaccine: "moderna",
    _id: "6243ba37cd7be3119f69513a"
}

xtest("should render", () => {
    const { container } = render(<Card post={defaultPost} />);
    expect(container).toMatchSnapshot();
});