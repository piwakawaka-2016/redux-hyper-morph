var h = require('hyperscript')

module.exports = ({products}, dispatch) => {
  return h('div#products', {}, "Products:", products.map(product => h('div.product',[
    h('div.prodName', product.name),
    h('div.prodPrice', product.price),
    h('div.prodDetail', product.details),
    h('input.details', {type: 'button', value: 'show details'}),
    h('input.addCart', {type: 'button', value: 'add to cart'}, ),
    h('input.removeCart', {type: 'button', value: 'remove from cart'}, )
  ])))
}
