import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Calculator from './Calculator';

describe('Calculator Addition', () => {
  it('should add two numbers correctly (e.g., 7 + 5 = 12)', () => {
    render(<Calculator />);

    // 1. Click '7'
    fireEvent.click(screen.getByText('7'));
    // 2. Click '+'
    fireEvent.click(screen.getByText('+'));
    // 3. Click '5'
    fireEvent.click(screen.getByText('5'));
    // 4. Click '='
    fireEvent.click(screen.getByText('='));

    // Assert the result is displayed
    // Assuming your Display component renders the text inside its container
    expect(screen.getByText('12')).toBeDefined();
  });
});