import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogList from './DogList';

describe('<DogList />', () => {
  test('it should mount', () => {
    render(<DogList />);
    
    const dogList = screen.getByTestId('DogList');

    expect(dogList).toBeInTheDocument();
  });
});