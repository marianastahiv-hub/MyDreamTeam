import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My dream team header', () => {
  render(<App />);
  const headerElement = screen.getByText(/my dream team/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders developer cards', () => {
  render(<App />);
  const developerCards = screen.getAllByText(/студент групи пз-24/i);
  expect(developerCards.length).toBeGreaterThan(0);
});
