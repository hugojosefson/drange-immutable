# Immutable Discontinuous Range

Wrapper for the excellent npm package
[`DRange`](https://www.npmjs.com/package/drange).

This wrapper keeps the exact same API syntax as `DRange`, except:

- each method that mutates the range, instead returns a mutated clone,
- the range is also sorted after `.add()` is used, instead of putting
  loose ranges at the end.

The immutability makes it fit better with a purely functional code
style.

## Installation

You need to install `drange` yourself, so you can upgrade to newer
versions without me having to upgrade this wrapper too :)

```bash
yarn add drange drange-immutable

# or

npm install --save drange drange-immutable 
```

## Usage

```javascript
const range = require('drange-immutable')(require('drange'))
 // or
import wrapper from 'drange-immutable'
import DRange from 'drange'
const range = wrapper(DRange)
```

Example:

```javascript
const hundred = range(1, 100)
console.log(hundred.toString())        // [ 1-100 ]

const split = hundred.subtract(50, 60)
console.log(split.toString())          // [ 1-49, 61-100 ]
console.log(hundred.toString())        // [ 1-100 ]
                                       //   ^^ still the same.
                                       //   Original drange would have
                                       //   mutated 'hundred' too. 
```
