import { strictEqual } from 'assert'
import { describe, it } from 'mocha'

import wrapper from '../esmodule'
import DRange from 'drange'

const range = wrapper(DRange)

describe('combine-singles', () => {
  describe('several single numbers combined are seen as one range', () => {
    it('in order', () => {
      const actual = range(1).add(2).add(3).add(4)
      strictEqual(actual.toString(), '[ 1-4 ]')
    })
    it('in reverse order', () => {
      const actual = range(4).add(3).add(2).add(1)
      strictEqual(actual.toString(), '[ 1-4 ]')
    })
    it('out of order', () => {
      const actual = range(3).add(1).add(4).add(2)
      strictEqual(actual.toString(), '[ 1-4 ]')
    })
  })
})
