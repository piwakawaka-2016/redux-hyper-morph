var redux = require('medux')
var clone = require('clone')
var html = require('yo-yo')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  count: 0
}

var store = redux.createStore(reducer,initialState)

store.subscribe(function() {
  var state = store.getState() 
  var view = render(state, store.dispatch)
  html.update(app, view)
})

store.dispatch({type: 'INIT'})

function reducer(state, action) {
  var newState = clone(state)
  switch(action.type){
    case 'INIT':
      return newState
    case 'INCREMENT_COUNT':
      newState.count += 1
      return newState
  }  
  return newState
}


function render(state, dispatch) {
  return html`
    <div>
      My count is ${state.count}
      <button onclick=${() => dispatch({type: 'INCREMENT_COUNT'})}>Add 1</button>
    </div>`
}
