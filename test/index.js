var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')

test('ADD_TO_CART adds one when that item is not in the cart', function (t) {
  var initialState = {
    cart: {
    }
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'ADD_TO_CART', payload: 1})
  t.equal(newState.cart[1], 1)
  t.end()
})

test('ADD_TO_CART adds one when there are already some of that item in the cart', function (t) {
  var initialState = {
    cart: {
      '1': 2
    }
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'ADD_TO_CART', payload: 1})
  t.equal(newState.cart[1], 3)
  t.end()
})

test('REMOVE_FROM_CART when there are not any in the cart', function (t) {
  var initialState = {
    cart: {
    }
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'REMOVE_FROM_CART', payload: 1})
  t.deepEqual(newState, {cart: {}})
  t.end()
})

test('REMOVE_FROM_CART when there are some in the cart', function (t) {
  var initialState = {
    cart: {
      '1': 2
    }
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'REMOVE_FROM_CART', payload: 1})
  t.deepEqual(newState, {cart: {'1': 1}})
  t.end()
})

test('TOGGLE_DETAILS', function (t) {
  var initialState = {
    products: [
      {id:2, showDetails: false} 
    ]
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'TOGGLE_DETAILS', payload: 2})
  t.deepEqual(newState, {
    products: [
      {id:2, showDetails: true} 
    ]
  })
  newState = reducer(newState, {type: 'TOGGLE_DETAILS', payload: 2})
  t.deepEqual(newState, initialState)
  t.end()
})
