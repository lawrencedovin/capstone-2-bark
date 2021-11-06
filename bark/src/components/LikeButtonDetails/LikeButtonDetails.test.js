import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeButtonDetails from './LikeButtonDetails';

describe('<LikeButtonDetails />', () => {
  test('it should mount', () => {
    render(<LikeButtonDetails />);
    
    const likeButtonDetails = screen.getByTestId('LikeButtonDetails');

    expect(likeButtonDetails).toBeInTheDocument();
  });
});