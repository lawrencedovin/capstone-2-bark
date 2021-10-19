import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreedList from './BreedList';

describe('<BreedList />', () => {
  test('it should mount', () => {
    render(<BreedList />);
    
    const breedList = screen.getByTestId('BreedList');

    expect(breedList).toBeInTheDocument();
  });
});