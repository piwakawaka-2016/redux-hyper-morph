var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'TOGGLE_DETAILS':
      newState.products[action.payload].showDetails = !newState.products[action.payload].showDetails
      return newState
    case 'ADD_ITEM':
    var cart = newState.cart
    var productId = action.payload
    cart[productId] = cart[productId] + 1 || 1
     return newState
    default:
      return newState
  }
}
