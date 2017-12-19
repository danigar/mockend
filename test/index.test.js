const greet = require('../src/index')

test('greet function should return hello!', () => {
  expect(greet()).toBe('Hello!')
})
