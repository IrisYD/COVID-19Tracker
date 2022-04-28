import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import {BrowserRouter} from "react-router-dom";

const MockApp = () => {
  return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  )
}
test('renders learn react link', () => {
  render(<MockApp />);
  const linkElement = screen.getByText(/Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
