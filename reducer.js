var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'REMOVE_FROM_CART':
      var cart = newState.cart
      var productId = action.payload

      cart[productId] = cart[productId] - 1  
      if (!cart[productId]) {
        delete cart[productId] 
      }

      return newState
      
    case 'ADD_TO_CART':
      var cart = newState.cart
      var productId = action.payload

      cart[productId] = cart[productId] + 1 || 1

      return newState
  }
  return newState
}

