import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin, loginError } from '../../redux';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';

export const LoginForm = () => {
  const auth = useContext(AuthContext);
  const loading = useSelector(state => state.login.loading);
  const loginData = useSelector(state => state.login.loginData);
  const error = useSelector(state => state.login.error);
  const dispatch = useDispatch();
  const message = useMessage();

  useEffect(() => {
    message(error, 'red');
    dispatch(loginError(''));
  }, [error, message, dispatch]);

  useEffect(() => {
    if (loginData) {
      message('Успешная авторизация', 'teal');
      auth.login(loginData.token, loginData.userId);
    }
  }, [loginData, message, auth]);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      await dispatch(fetchLogin({...form}));
      setForm({
        email: '',
        password: ''
      });
    } catch (e) {}
  };

  return (
    <div className="card grey darken-2">
      <div className="card-content white-text">
        <span className="card-title">Войти</span>
        <div className="card-group">
          <div className="input-field">
            <input
              placeholder="Email"
              id="email-login"
              type="email"
              name="email"
              className="validate"
              value={form.email}
              onChange={ changeHandler }
            />
            <label htmlFor="email-login">Ваш email*</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Пароль"
              id="password-login"
              type="password"
              name="password"
              className="validate"
              value={form.password}
              onChange={ changeHandler }
            />
            <label htmlFor="password-login">Пароль*</label>
          </div>
        </div>
      </div>
      <div className="card-action">
        <button
          className="btn indigo"
          onClick={ loginHandler }
          disabled={ loading }
        >
          Войти
        </button>
      </div>
    </div>
  );
};
