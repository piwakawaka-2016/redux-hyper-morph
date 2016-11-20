var html = require('yo-yo')

const Product = (product, dispatch) => {
  const { name, price, showDetails, details, id } = product    // destructuring

  return html`
   <div class='product'>
     <div class='productName'>${name}</div>
     <div class='productPrice'>${price}</div>
     <div class='productDetails'>${showDetails ? details : ''}</div>

     <button
       class='details'
       onclick=${() => dispatch({ type: 'TOGGLE_DETAILS', payload: id }) }
     >
       ${showDetails ? 'Hide' : 'Show'} details
     </button>

     <button
       class='addToCart'
       onclick=${() => dispatch({ type: 'ADD_TO_CART', payload: id }) }
     >
       Add to cart
     </button>

     <button
       class='removeFromCart'
       onclick=${() => dispatch({ type: 'REMOVE_FROM_CART', payload: id }) }
     >
       Remove from cart
     </button>

   </div>
 `
}

module.exports = Product

// Action Object Creator (it makes monopoly cards)
function toggleDetailAction(id) {
  return {
    type: 'TOGGLE_DETAILS',
    payload: id 
  }
}
