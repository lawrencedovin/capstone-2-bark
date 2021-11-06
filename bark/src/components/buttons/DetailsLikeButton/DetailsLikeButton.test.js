import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsLikeButton from './DetailsLikeButton';

describe('<DetailsLikeButton />', () => {
  test('it should mount', () => {
    render(<DetailsLikeButton />);
    
    const detailsLikeButton = screen.getByTestId('DetailsLikeButton');

    expect(detailsLikeButton).toBeInTheDocument();
  });
});