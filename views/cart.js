var h = require('hyperscript')

module.exports = (cart, dispatch) => {
  var cartItems = Object.keys(cart).reduce((prev, curr)=> prev + cart[curr], 0)
  return h('div#cart', {}, [
    h('div#cartQty', {}, `Qty in cart: ${cartItems}`)   
  ]) 
}


