const redux = require('redux')

const initialState = { counter: 0 }

// Reducers must be a pure function, without mutations
// state also must have an initial value, state = initialState here
const counterReducer = (state = initialState, action) => {
  return { ...state, counter: state.counter + 1 }
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
store.dispatch({type: 'increment'})
