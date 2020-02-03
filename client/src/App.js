import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from './components/NavBar';
import { Loader } from './components/Loader';
import { useRoutes } from './routes';
import 'materialize-css';
import { fetchLogin } from "./redux";

function App() {
  const loading = useSelector(state => state.login.loading);
  const loginData = useSelector(state => state.login.loginData);
  const dispatch = useDispatch();

  let isAuthenticated = loginData && !!loginData.token;
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    dispatch(fetchLogin());
  }, [dispatch]);

  if (loading) {
    return <Loader />
  }

  return (
    <Router>
      <NavBar isAuth={ isAuthenticated } />
      <div className="container">
        { routes }
      </div>
    </Router>
  );
}

export default App;
