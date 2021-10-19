import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogDetails from './DogDetails';

describe('<DogDetails />', () => {
  test('it should mount', () => {
    render(<DogDetails />);
    
    const dogDetails = screen.getByTestId('DogDetails');

    expect(dogDetails).toBeInTheDocument();
  });
});