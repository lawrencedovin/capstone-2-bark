import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainFooter from './MainFooter';

describe('<MainFooter />', () => {
  test('it should mount', () => {
    render(<MainFooter />);
    
    const mainFooter = screen.getByTestId('MainFooter');

    expect(mainFooter).toBeInTheDocument();
  });
});