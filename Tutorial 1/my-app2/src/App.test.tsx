import { describe, test, expect } from 'vitest';
import App  from '../../app/src/App';


describe('add function', () => {
  test('adds two numbers correctly', () => {
    expect(App()).toBe(5);
  });
});
