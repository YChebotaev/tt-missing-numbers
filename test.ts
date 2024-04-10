import { describe, it } from 'node:test'
import assert from 'node:assert'
import { findMissing } from './index'

describe('findMissing()', () => {
  it('should return undefined when passing empty array', () => {
    assert.equal(findMissing([]), undefined)
  })

  it('should return undefined when passing 1 element array', () => {
    assert.equal(findMissing([1]), undefined)
  })

  it('should return undefined when all numbers are present', () => {
    assert.equal(findMissing([1, 2]), undefined)
  })

  it('should return 2', () => {
    assert.equal(findMissing([1, 3]), 2)
  })

  it('should return 4', () => {
    assert.equal(findMissing([5, 0, 1, 3, 2]), 4)
  })

  it('should return 8', () => {
    assert.equal(findMissing([7, 9, 10, 11, 12]), 8)
  })

  it('should return 3 despite two numbers are missing', () => {
    assert.equal(findMissing([1, 2, 4, 5, 7, 8]), 3)
  })

  it('should return 2 despite two numbers duplicated', () => {
    assert.equal(findMissing([1, 3, 4, 4, 5]), 2)
  })

  it('should return 2 despite two numbers duplicated before missing number', () => {
    assert.equal(findMissing([1, 2, 2, 3, 5]), 4)
  })

  it('should return 3 despite two numbers are missing and two have duplicates', () => {
    assert.equal(findMissing([1, 2, 4, 4, 5, 7, 7]), 3)
  })

  it('should return 3 despite two numbers are missing and two have duplicates before missing numbers', () => {
    assert.equal(findMissing([1, 2, 2, 3, 4, 4, 5, 7]), 6)
  })
})
