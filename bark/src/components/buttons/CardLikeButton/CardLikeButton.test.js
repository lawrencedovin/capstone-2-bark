import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardLikeButton from './CardLikeButton';

describe('<CardLikeButton />', () => {
  test('it should mount', () => {
    render(<CardLikeButton />);
    
    const cardLikeButton = screen.getByTestId('CardLikeButton');

    expect(cardLikeButton).toBeInTheDocument();
  });
});