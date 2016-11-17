var h = require('hyperscript')

module.exports = (products, dispatch) => {
  return h('div#products', {},
    products.map(function(product, index){
      return singleProduct(product, dispatch, index)
    })
  )
}

function singleProduct(product, dispatch, index){
  const text = product.showDetail
  if (text) {
    return h('div#singleProduct',
    {
     onclick: () => dispatch({type: 'TOGGLE_INFO', payload: index})
   },
    h('h3', `Product Name: ${product.name}`),
    h('p', `Price: ${product.price}`),
    h('p', `Description: ${product.details}`)
  )
  }
  else {
    return h('div#singleProduct',
    {
     onclick: () => dispatch({type: 'TOGGLE_INFO', payload: index})
   },
    h('h3', `Product Name: ${product.name}`),
    h('p', `Price: ${product.price}`)
  )
  }
}
