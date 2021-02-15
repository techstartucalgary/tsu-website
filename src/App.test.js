import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.tsx';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/under construction/i);
  expect(linkElement).toBeInTheDocument();
});
