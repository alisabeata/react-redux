// launch this file:
// node redux-demo.js in the terminal

const redux = require('redux')

const initialState = { counter: 0 }

// Reducers must be a pure function, without mutations
// state also must have an initial value, state = initialState here
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, counter: state.counter + 1 }
  }

  if (action.type === 'DECREMENT') {
    return { ...state, counter: state.counter - 1 }
  }

  return state
}

// create store
const store = redux.createStore(counterReducer)

console.log(store.getState())

// create subscriber
const counterSubscriber = () => {
  const latestState = store.getState()

  console.log(latestState)
}

store.subscribe(counterSubscriber)

// create actions
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
