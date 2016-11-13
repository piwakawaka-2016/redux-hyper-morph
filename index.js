var redux = require('medux')
var h = require('hyperscript')
var morphdom = require('morphdom')

var reducer = require('./reducer')

var productsTemplate = require('./views/products')
var cartTemplate = require('./views/cart')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  products: [
    {id: 1, name: 'The Name of the Wind', price: 12.50},
    {id: 2, name: 'Firefall', price: 11.29},
    {id: 2, name: 'Kingdom of fear', price: 34.33} 
  ],
  cart: {
    '1': 2 //There are two items with id 1 in the cart 
  }  
}

var store = redux.createStore(reducer, initialState)

store.subscribe(function () {
  var state = store.getState()
  var view = render(state, store.dispatch)
  morphdom(app, view)
})

store.dispatch({type: 'INIT'})

function render (state, dispatch) {
  return h('div.app', {}, [
    productsTemplate(state.products, dispatch),
    cartTemplate(state.cart, dispatch)
  ])
}
