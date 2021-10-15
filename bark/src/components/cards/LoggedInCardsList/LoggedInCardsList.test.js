import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoggedInCardsList from './LoggedInCardsList';

describe('<LoggedInCardsList />', () => {
  test('it should mount', () => {
    render(<LoggedInCardsList />);
    
    const loggedInCardsList = screen.getByTestId('LoggedInCardsList');

    expect(loggedInCardsList).toBeInTheDocument();
  });
});