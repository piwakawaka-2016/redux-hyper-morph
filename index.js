var redux = require('redux')
var h = require('hyperscript')
var morph = require('morphdom')
var clone = require('clone')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  count: 0
}

var store = redux.createStore(reducer,initialState)

store.subscribe(function() {
  var state = store.getState() 
  updatePage(state)
})

store.dispatch({type: 'INIT'})

function reducer(state, action) {
  var newState = clone(state)
  switch(action.type){
    case 'INIT':
    return newState
  }  
  return newState
}

function updatePage(state) {
  var view = render(state)
  morph(app, view) 
}

function render(state) {
  return h('h1', `Hi, my count is ${state.count}`)  
}
