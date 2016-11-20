const h = require('hyperscript')
const html = require('yo-yo')

const Product = require('./product')

module.exports = (products, dispatch) => html`
  <div id='products'>
    Products:
    ${ 
      products.map(product => Product(product, dispatch) ) 
    }
  </div>
`

