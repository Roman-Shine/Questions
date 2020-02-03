import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBar } from './components/NavBar';
import { Loader } from './components/Loader';
import { useRoutes } from './routes';
import 'materialize-css';

function App() {
  const loading = useSelector(state => state.login.loading);
  const loginData = useSelector(state => state.login.loginData);

  let isAuthenticated = loginData ? !!loginData.token : false;
  const routes = useRoutes(isAuthenticated);

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
