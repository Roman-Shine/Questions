import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux';
import { StorageName } from '../redux/login/loginTypes';

export const NavBar = ({ isAuth = false }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem(StorageName);
    dispatch(logout());
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
