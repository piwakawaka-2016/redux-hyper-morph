var h = require('hyperscript')

module.exports = (cart, products, dispatch) => {
  let cartProducts = products.filter((product) => Object.keys(cart).includes(product.id.toString()))
  return h('div#cart', {},
    h('ul', {},
      cartProducts.map((product) => showProduct(product, dispatch))
  ))
}

const showProduct = (product, dispatch) => {
  return h('li', {}, product.name)
}


// if products.id[i] === Object.keys(cart[i])
