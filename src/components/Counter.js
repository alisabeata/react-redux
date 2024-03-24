// UseSelector allows to add the part of the store to the component
// connect should be used with class-based compenents
import { useSelector } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  // useSelector adds an automatic subsctription to the store
  const counter = useSelector((state) => state.counter)

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
