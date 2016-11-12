var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer');

test('ADD_TO_CART adds one when there is none', function(t) {
  var initialState = {
    cart: {
     
    } 
  }
  var newState = reducer(initialState, {type: 'ADD_TO_CART', payload: 1})
  t.equal(newState.cart[1], 1)
  t.end()
})

test('ADD_TO_CART adds one when there are already some', function(t) {
  var initialState = {
    cart: {
      '1': 2
    } 
  }
  var newState = reducer(initialState, {type: 'ADD_TO_CART', payload: 1})
  t.equal(newState.cart[1], 3)
  t.end()
})

test('REMOVE_FROM_CART', function(t) {

  t.end()
})
