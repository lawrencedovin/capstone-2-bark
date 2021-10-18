import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormFooter from './FormFooter';

describe('<FormFooter />', () => {
  test('it should mount', () => {
    render(<FormFooter />);
    
    const formFooter = screen.getByTestId('FormFooter');

    expect(formFooter).toBeInTheDocument();
  });
});