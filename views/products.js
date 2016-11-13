var h = require('hyperscript')

module.exports = (products, dispatch) => {
  return h('div#products', {}, 'Products:',
    products.map(product => h('div.product',
      [
        h('div.productName', {}, product.name),
        h('div.productPrice', {}, product.price),
        h('button.addToCart', {onclick: () => dispatch({type: 'ADD_TO_CART', payload: product.id})}, 'Add to cart'),
        h('button.addToCart', {onclick: () => dispatch({type: 'REMOVE_FROM_CART', payload: product.id})}, 'Remove from cart')
      ]))
  ) }

