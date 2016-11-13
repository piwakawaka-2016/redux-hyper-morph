var h = require('hyperscript')

module.exports = (products, dispatch) => {
  return h('div#products', {}, 'Products:',
    products.map(product => h('div.product', 
      {onclick: () => dispatch({type: 'ADD_TO_CART', payload: product.id})}, 
      [
        h('div.productName', {}, product.name), 
        h('div.productPrice', {}, product.price)  
      ])) 
  ) }

