var redux = require('medux')
var clone = require('clone')
var h = require('hyperscript')
var morphdom = require('morphdom')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  count: 0
}

var store = redux.createStore(reducer, initialState)

store.subscribe(function () {
  var state = store.getState()
  var view = render(state, store.dispatch)
  morphdom(app, view)
})

store.dispatch({type: 'INIT'})

function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'INCREMENT_COUNT':
      newState.count += 1
      return newState
  }
  return newState
}

function render (state, dispatch) {
  return h('div', {}, `My count is: ${state.count} `,
    h('button', {onclick: () => dispatch({type: 'INCREMENT_COUNT'})}, 'Add one')
  )
}
