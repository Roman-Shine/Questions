import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavBar } from './components/NavBar';
import { Loader } from './components/Loader';
import { Provider } from 'react-redux';
import { useRoutes } from './routes';
import 'materialize-css';

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <Provider store={ store }>
        <Router>
          <NavBar isAuth={ isAuthenticated } />
          <div className="container">
            { routes }
          </div>
        </Router>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
