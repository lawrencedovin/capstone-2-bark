import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnlikeButton from './UnlikeButton';

describe('<UnlikeButton />', () => {
  test('it should mount', () => {
    render(<UnlikeButton />);
    
    const unlikeButton = screen.getByTestId('UnlikeButton');

    expect(unlikeButton).toBeInTheDocument();
  });
});