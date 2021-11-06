import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsUnlikeButton from './DetailsUnlikeButton';

describe('<DetailsUnlikeButton />', () => {
  test('it should mount', () => {
    render(<DetailsUnlikeButton />);
    
    const detailsUnlikeButton = screen.getByTestId('DetailsUnlikeButton');

    expect(detailsUnlikeButton).toBeInTheDocument();
  });
});