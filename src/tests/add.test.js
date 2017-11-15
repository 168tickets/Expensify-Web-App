const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add 2 numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);

  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Expected 7.`);
  // }
});

test('should have correct text', () => {
  const result = generateGreeting('Joe');
  expect(result).toBe('Hello Joe!');
})