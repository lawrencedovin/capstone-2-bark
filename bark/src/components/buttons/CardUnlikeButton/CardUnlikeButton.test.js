import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardUnlikeButton from './CardUnlikeButton';

describe('<CardUnlikeButton />', () => {
  test('it should mount', () => {
    render(<CardUnlikeButton />);
    
    const cardUnlikeButton = screen.getByTestId('CardUnlikeButton');

    expect(cardUnlikeButton).toBeInTheDocument();
  });
});