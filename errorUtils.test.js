const { safeDivide } = require('./errorUtils');

test('Divide two numbers', () => {
  expect(safeDivide(10, 2)).toBe(5);
});

test('Divide by zero', () => {
  expect(() => safeDivide(10, 0)).toThrow('Cannot divide by zero');
});

test('Divide by non-zero number', () => {
  expect(() => safeDivide(10, 'a')).toThrow('Invalid number');
});