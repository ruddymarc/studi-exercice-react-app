/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/made with ❤️ by Ruddy Marc/i);
  expect(linkElement).toBeInTheDocument();
});
