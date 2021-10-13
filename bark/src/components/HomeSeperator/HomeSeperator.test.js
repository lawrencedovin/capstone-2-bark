import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeSeperator from './HomeSeperator';

describe('<HomeSeperator />', () => {
  test('it should mount', () => {
    render(<HomeSeperator />);
    
    const homeSeperator = screen.getByTestId('HomeSeperator');

    expect(homeSeperator).toBeInTheDocument();
  });
});