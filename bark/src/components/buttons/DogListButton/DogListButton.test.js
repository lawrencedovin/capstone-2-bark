import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogListButton from './DogListButton';

describe('<DogListButton />', () => {
  test('it should mount', () => {
    render(<DogListButton />);
    
    const dogListButton = screen.getByTestId('DogListButton');

    expect(dogListButton).toBeInTheDocument();
  });
});