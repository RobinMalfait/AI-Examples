const Table = require('cli-table')

function table (input, options = {}) {
  input = makeSureItIsTwoDimensional(input)
  const table = new Table(options)
  table.push(...input)
  return table.toString()
}

function tableWithHeader (input, head) {
  return table(input, { head })
}

function makeSureItIsTwoDimensional (input) {
  if (Array.isArray(input) && Array.isArray(input[0])) {
    return input
  } else if (Array.isArray(input) && !Array.isArray(input[0])) {
    return [input]
  } else if (!Array.isArray(input)) {
    return [[input]]
  }
}

module.exports = {
  table,
  tableWithHeader
}
