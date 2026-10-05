const test = require('node:test')
const assert = require('node:assert/strict')
const sum = require('./sum')

test('adds two numbers', () => {
  assert.equal(sum(1, 2), 3)
})
