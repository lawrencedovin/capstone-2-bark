import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditUser from './EditUser';

describe('<EditUser />', () => {
  test('it should mount', () => {
    render(<EditUser />);
    
    const editUser = screen.getByTestId('EditUser');

    expect(editUser).toBeInTheDocument();
  });
});