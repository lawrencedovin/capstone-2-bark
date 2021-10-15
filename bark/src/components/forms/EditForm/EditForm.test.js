import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditForm from './EditForm';

describe('<EditForm />', () => {
  test('it should mount', () => {
    render(<EditForm />);
    
    const editForm = screen.getByTestId('EditForm');

    expect(editForm).toBeInTheDocument();
  });
});