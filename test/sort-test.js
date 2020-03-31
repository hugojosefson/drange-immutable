import { strictEqual } from 'assert'
import { describe, it } from 'mocha'

import wrapper from '../esmodule'
import DRange from 'drange'

const range = wrapper(DRange)

describe('sort', () => {
  it('subranges are kept sorted', () => {
    const first = range(1, 100)
    const second = first.subtract(50, 60)
    const third = second.add(55)
    strictEqual(first.toString(), '[ 1-100 ]')
    strictEqual(second.toString(), '[ 1-49, 61-100 ]')
    strictEqual(third.toString(), '[ 1-49, 55, 61-100 ]')
  })
})
