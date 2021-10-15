import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogsCardsList from './DogsCardsList';

describe('<DogsCardsList />', () => {
  test('it should mount', () => {
    render(<DogsCardsList />);
    
    const dogsCardsList = screen.getByTestId('DogsCardsList');

    expect(dogsCardsList).toBeInTheDocument();
  });
});