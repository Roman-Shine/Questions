import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from './components/NavBar';
import { Loader } from './components/Loader';
import { useRoutes } from './routes';
import { loginSuccess } from './redux';
import { StorageName } from './redux/login/loginTypes';
import 'materialize-css';

function App() {
  const [ready, setReady] = useState(false);
  const loading = useSelector(state => state.login.loading);
  const loginData = useSelector(state => state.login.loginData);
  const dispatch = useDispatch();

  let isAuthenticated = loginData && !!loginData.token;
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {
    if (loginData) {
      localStorage.setItem(StorageName, JSON.stringify(loginData));
    } else {
      const storageData = JSON.parse(localStorage.getItem(StorageName));
      if (storageData && storageData.token) {
        dispatch(loginSuccess(storageData));
      }
    }
    setReady(true);
  }, [loginData, dispatch]);

  if (!ready || loading) {
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
