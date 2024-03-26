// import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, isShown: true }

// the slice approach
// mutating state inside is allowed inside of slice reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      // state.counter++ is allowed too
      // redux toolkit is using immer
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount
    },
    toggle(state) {
      state.isShown = !state.isShown
    },
  },
})

// the OLD WAY of creating reducer
// (!) never mutate the state
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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

// redux toolkit automatically creates the action identifiers
// and puts it in the actions property
export const counterActions = counterSlice.actions

export default store
