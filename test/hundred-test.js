import { strictEqual } from 'assert'
import { describe, it } from 'mocha'

import wrapper from '..'
import DRange from 'drange'

const range = wrapper(DRange)

describe('hundred', () => {
  describe('const hundred = range(1, 100)', () => {
    it('hundred should be [ 1-100 ]', () => {
      const hundred = range(1, 100)
      strictEqual(hundred.toString(), '[ 1-100 ]')
    })
  })
  describe('const split = hundred.subtract(50, 60)', () => {
    it('split should be [ 1-49, 61-100 ]', () => {
      const hundred = range(1, 100)
      const split = hundred.subtract(50, 60)
      strictEqual(split.toString(), '[ 1-49, 61-100 ]')
    })
    it('hundred should STILL be [ 1-100 ]', () => {
      const hundred = range(1, 100)
      const split = hundred.subtract(50, 60) // eslint-disable-line no-unused-vars
      strictEqual(hundred.toString(), '[ 1-100 ]')
    })
  })
})
