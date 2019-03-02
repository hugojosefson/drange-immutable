import handler from './handler'

export default DRange => (...args) => new Proxy(new DRange(...args), handler)
