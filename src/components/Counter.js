// UseSelector allows to add the part of the store to the component
// connect should be used with class-based compenents
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store'

const Counter = () => {
  // useSelector adds an automatic subsctription to the store
  const counter = useSelector((state) => state.counter.counter)
  const isShown = useSelector((state) => state.counter.isShown)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    // old version of using actions: dispatch({ type: 'INCREMENT' })

    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    // dispatch({ type: 'INCREASE', amount: 5 })

    // direct .increment(5) --> { payload: 5 }
    dispatch(counterActions.increase({ amount: 5 }))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
