import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const NavBar = ({ isAuth = false }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/')
  };

  if (!isAuth) {
    return (
      <nav className="mb-2">
        <div className="nav-wrapper indigo prl-2">
          <span className="brand-logo">Questions App</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/users">Пользователи</NavLink></li>
            <li><NavLink to="/">Войти / Зарегистрироваться</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="mb-2">
      <div className="nav-wrapper indigo prl-2">
        <span className="brand-logo">Questions App</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/users">Пользователи</NavLink></li>
          <li><NavLink to="/questions">Мои вопросы</NavLink></li>
          <li><NavLink to="/profile">Профиль</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  );
};
