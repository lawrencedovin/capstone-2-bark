import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchTitle from './SearchTitle';

describe('<SearchTitle />', () => {
  test('it should mount', () => {
    render(<SearchTitle />);
    
    const searchTitle = screen.getByTestId('SearchTitle');

    expect(searchTitle).toBeInTheDocument();
  });
});