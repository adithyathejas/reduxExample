import classes from './Header.module.css';
import { authActions } from '../Store';
import { useDispatch,useSelector } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.auth.isAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn&&<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={(e)=>{e.preventDefault();dispatch(authActions.logout())}}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
