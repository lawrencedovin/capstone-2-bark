import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreedsCardsList from './BreedsCardsList';

describe('<BreedsCardsList />', () => {
  test('it should mount', () => {
    render(<BreedsCardsList />);
    
    const breedsCardsList = screen.getByTestId('BreedsCardsList');

    expect(breedsCardsList).toBeInTheDocument();
  });
});