import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'
import classes from './Header.module.css'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Sales</a>
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
