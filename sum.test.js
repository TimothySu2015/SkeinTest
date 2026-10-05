const test = require('node:test')
const assert = require('node:assert/strict')
const sum = require('./sum')

test('adds two numbers', () => {
  assert.equal(sum(1, 2), 3)
})

test('adds digit strings as numbers', () => {
  assert.equal(sum('2', 3), 5)
  assert.equal(sum(2, '3'), 5)
  assert.equal(sum('2', '3'), 5)
})
