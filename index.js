var redux = require('redux')
var h = require('hyperscript')
var morph = require('morphdom')

var reducer = require('./reducer')
var productsTemplate = require('./views/products')

var main = document.querySelector('main')
var app = document.createElement('div')
// main.appendChild(app)

const initialState = {
  products: [
    {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
    {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
    {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
  ],
  cart: {
    1: 2 // There are two items with id 1 in the cart
  }
}

const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const updateView = () => {
  const initialState = store.getState()
  const newState = productsTemplate(initialState.products, dispatch)
  morph(products, newState)
}

store.subscribe(updateView)

const products = productsTemplate(initialState.products, dispatch)

document.body.appendChild(products)

dispatch({type: 'INIT'}) //triggers an initial render

// function render (initialState, dispatch) {
//   return h('div#app', {}, [
//     productsTemplate(initialState, dispatch)
//   ])
// }
