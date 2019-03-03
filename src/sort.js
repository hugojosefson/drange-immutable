export default DRange => range =>
  range.subranges()
    .sort((a, b) => a.low - b.low)
    .reduce(
      (result, { low, high }) => result.add(low, high),
      new DRange()
    )
