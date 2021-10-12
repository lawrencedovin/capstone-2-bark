import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogSearchFilter from './DogSearchFilter';

describe('<DogSearchFilter />', () => {
  test('it should mount', () => {
    render(<DogSearchFilter />);
    
    const dogSearchFilter = screen.getByTestId('DogSearchFilter');

    expect(dogSearchFilter).toBeInTheDocument();
  });
});