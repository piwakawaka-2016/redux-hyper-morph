var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  var {products, cart} = newState
  var {type, payload} = action
  switch (type) {
    case 'INIT':
      return newState
    case 'TOGGLE_INFO':
      products[payload].showDetail = !products[payload].showDetail
      return newState;
  }
  return newState
}
