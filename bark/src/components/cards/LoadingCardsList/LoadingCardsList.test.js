import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingCardsList from './LoadingCardsList';

describe('<LoadingCardsList />', () => {
  test('it should mount', () => {
    render(<LoadingCardsList />);
    
    const loadingCardsList = screen.getByTestId('LoadingCardsList');

    expect(loadingCardsList).toBeInTheDocument();
  });
});