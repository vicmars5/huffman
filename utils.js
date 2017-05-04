module.exports = {
  stringToCodes (str) {
    const codes = []
    for (let i = 0; i < str.length; i++) {
      codes.push(str.charCodeAt(i))
    }
    return codes
  },
  codesToString (codes) {
    return codes.map(code => String.fromCharCode(code)).join('')
  }
}
