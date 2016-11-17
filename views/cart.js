var h = require('hyperscript')

module.exports = ({cart, products}, dispatch) => {

  function productFinder(products, id) {
    products.map(function (product) {
      if (product.id === id) {
        return product
      }
    })
  }

  return h('div#cart', {}, ['Your Cart:',
    h('div', {}, "Quantity:"),
    h('div', {}, "Total:")
  ])
}
