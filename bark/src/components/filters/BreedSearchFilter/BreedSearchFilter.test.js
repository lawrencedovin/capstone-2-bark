import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreedSearchFilter from './BreedSearchFilter';

describe('<BreedSearchFilter />', () => {
  test('it should mount', () => {
    render(<BreedSearchFilter />);
    
    const breedSearchFilter = screen.getByTestId('BreedSearchFilter');

    expect(breedSearchFilter).toBeInTheDocument();
  });
});