var h = require('hyperscript')

// module.exports = ({products}, dispatch) => {
// return h('div#products', {}, )
// }

module.exports = productsTemplate

function productsTemplate (initialState, dispatch) {
  return h('ul#products', [
    initialState.map( (product, index) => createList(product, index, dispatch)),
    ]
  )
}

function createList(productItem, index, dispatch) {
  const { name, price } = productItem
  return h('li', {}, name)
}
