var redux = require('medux')
var h = require('hyperscript')
var morphdom = require('morphdom')

var reducer = require('./reducer')

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
  return h('div', {}, `My count is: ${state.cart[1]} `,[
    h('button', {onclick: () => dispatch({type: 'ADD_TO_CART', payload: 1})}, 'Add one')
  ]
  )
}
