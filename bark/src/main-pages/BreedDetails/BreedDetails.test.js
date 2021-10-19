import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreedDetails from './BreedDetails';

describe('<BreedDetails />', () => {
  test('it should mount', () => {
    render(<BreedDetails />);
    
    const breedDetails = screen.getByTestId('BreedDetails');

    expect(breedDetails).toBeInTheDocument();
  });
});