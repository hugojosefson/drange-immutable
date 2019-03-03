import Handler from './handler'

export default DRange => {
  const handler = Handler(DRange)
  return (...args) => new Proxy(new DRange(...args), handler)
}
