import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardsList from './CardsList';

describe('<CardsList />', () => {
  test('it should mount', () => {
    render(<CardsList />);
    
    const CardsList = screen.getByTestId('CardsList');

    expect(CardsList).toBeInTheDocument();
  });
});