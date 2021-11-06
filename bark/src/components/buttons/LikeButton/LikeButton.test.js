import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeButton from './LikeButton';

describe('<LikeButton />', () => {
  test('it should mount', () => {
    render(<LikeButton />);
    
    const likeButton = screen.getByTestId('LikeButton');

    expect(likeButton).toBeInTheDocument();
  });
});