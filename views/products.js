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
  const { name, price, details, showDetails } = productItem
  const customClass = showDetails ? 'show' : 'noShow'
  return h('li', {
  }, [
    h('div', {}, ['$', price]),
    h('div', {}, name),
    h('div', {className: customClass}, details),
    h('button#details', {
      onclick: () => dispatch({type: 'TOGGLE_DETAILS', payload: index})
    }, 'Show Details'),
    h('button#add', {}, 'Add to Cart'),
    h('button#remove', {}, 'Remove from Cart'),
  ])
}

// have a div with description with a custom class, but on click is in li
