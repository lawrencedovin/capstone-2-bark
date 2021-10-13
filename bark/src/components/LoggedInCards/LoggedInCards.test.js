import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoggedInCards from './LoggedInCards';

describe('<LoggedInCards />', () => {
  test('it should mount', () => {
    render(<LoggedInCards />);
    
    const loggedInCards = screen.getByTestId('LoggedInCards');

    expect(loggedInCards).toBeInTheDocument();
  });
});