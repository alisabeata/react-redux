import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

export default store

// the OLD WAY to create the reducer
// (!) never mutate the state here

// import { createStore } from 'redux'

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return { ...state, counter: state.counter + 1 }
//   }

//   if (action.type === 'INCREASE') {
//     return { ...state, counter: state.counter + action.amount }
//   }

//   if (action.type === 'DECREMENT') {
//     return { ...state, counter: state.counter - 1 }
//   }

//   if (action.type === 'TOGGLE') {
//     return { ...state, isShown: !state.isShown }
//   }

//   return state
// }

// const store = createStore(counterReducer)
