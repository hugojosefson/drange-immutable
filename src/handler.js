/** methods on DRange that mutate the instance */
const mutators = [
  'add',
  'subtract',
  'intersect'
]

const wrapInstance = target => new Proxy(target, handler)

const handler = {
  get: (target, property) => {
    if (mutators.includes(property)) {
      return (...args) => {
        const clone = target.clone()
        clone[property](...args)
        return wrapInstance(clone)
      }
    } else {
      return target[property]
    }
  }
}

export default handler
