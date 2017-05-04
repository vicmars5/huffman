const utils = require('./utils')

const toCodes = str => utils.stringToCodes(str)

const makeList = (str) => {
  const codes = utils.stringToCodes(str)
  const list = []
  codes.forEach(code => {
    const node = list.find(node => node.code === code)
    if (node) node.count++
    else list.push({ code, count: 1 })
  })
  return list
}

const sortList = (list) => {
  const nlist = list.slice(0)
  nlist.sort((a, b) => a.count - b.count)
  return nlist
}

const makeTree = (list) => {
  const tree = list.slice(0)
  const auxTree = 0
}

module.exports = {
  makeList,
  sortList,
  toCodes
}
