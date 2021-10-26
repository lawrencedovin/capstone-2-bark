import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInput from './UserInput';

describe('<UserInput />', () => {
  test('it should mount', () => {
    render(<UserInput />);
    
    const userInput = screen.getByTestId('UserInput');

    expect(userInput).toBeInTheDocument();
  });
});