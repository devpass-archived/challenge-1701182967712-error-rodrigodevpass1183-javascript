const { safeDivide } = require('./errorUtils');

// Example usage
try {
  const result = safeDivide(10, 2);
  console.log('Result:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
}