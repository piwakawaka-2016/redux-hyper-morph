var redux = require('redux')
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
    {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool', showDetail: false},
    {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires', showDetail: false},
    {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature', showDetail: false}
  ],
  cart: {
    1: 2 // There are two items with id 1 in the cart
  }
}

var store = redux.createStore(reducer, initialState)

store.subscribe(render)

const dispatch = store.dispatch

function render () {
  const state = store.getState()
  const newView =  h('div#app', {}, [
    productsTemplate(state.products, dispatch),
    cartTemplate(state.cart, state.products, dispatch)
  ])
  morphdom(app, newView)
}

store.dispatch({type: 'INIT'}) //triggers an initial render
