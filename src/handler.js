import Sort from './sort'

export default DRange => {
  const sort = Sort(DRange)

  const handler = {
    get: (target, property) => {
      // When user tries to find any of the mutating functions...
      if (['add', 'subtract', 'intersect'].includes(property)) {
        // ...return a similar function...
        return (...args) => {
          // ...that first clones the original range,
          const clone = target.clone()
          // ...then calls the original function to mutate the clone,
          clone[property](...args)

          // ...and returns the clone, wrapped
          if (property === 'add') {
            // (sort the clone after .add())
            return new Proxy(sort(clone), handler)
          } else {
            return new Proxy(clone, handler)
          }
        }
      } else {
        // If not one of the mutating functions, just give the original one to them
        return target[property]
      }
    }
  }

  return handler
}
