// UseSelector allows to add the part of the store to the component
// connect should be used with class-based compenents
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  // useSelector adds an automatic subsctription to the store
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 5 })
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
