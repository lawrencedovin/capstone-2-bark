import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './Cards';

describe('<Cards />', () => {
  test('it should mount', () => {
    render(<Cards />);
    
    const Cards = screen.getByTestId('Cards');

    expect(Cards).toBeInTheDocument();
  });
});