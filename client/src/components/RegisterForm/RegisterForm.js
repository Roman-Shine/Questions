import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMessage } from '../../hooks/message.hook';
import { fetchRegister, registerError, registerSuccess } from '../../redux';

export const RegisterForm = () => {
  const loading = useSelector(state => state.register.loading);
  const registerData = useSelector(state => state.register.registerData);
  const error = useSelector(state => state.register.error);
  const dispatch = useDispatch();
  const message = useMessage();

  useEffect(() => {
    message(error, 'red');
    dispatch(registerError(''));
  }, [error, message, dispatch]);

  useEffect(() => {
    message(registerData, 'teal');
    dispatch(registerSuccess(''));
  }, [registerData, message, dispatch]);

  const [form, setForm] = useState({
    email: '',
    login: '',
    password: '',
    name: '',
    secondName: '',
    // img: ''
  });
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await dispatch(fetchRegister({ ...form }));
      setForm({
        email: '',
        login: '',
        password: '',
        name: '',
        secondName: '',
        // img: ''
      });
    } catch (e) {}
  };

  return (
    <div className="card blue-grey darken-2">
      <div className="card-content white-text">
        <span className="card-title">Регистрация</span>
        <p>Обазательные поля:</p>
        <div className="card-group">
          <div className="input-field">
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              className="validate"
              value={form.email}
              onChange={ changeHandler }
            />
            <label htmlFor="email">Ваш email*</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Login"
              id="login"
              type="text"
              name="login"
              className="validate"
              value={form.login}
              onChange={ changeHandler }
            />
            <label htmlFor="login">Ваш login (будет отображать в строке браузера)*</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Пароль"
              id="password"
              type="password"
              name="password"
              className="validate"
              value={form.password}
              onChange={ changeHandler }
            />
            <label htmlFor="password">Пароль*</label>
          </div>
        </div>

        <p>Дополнительная информация для профиля:</p>

        <div className="card-group">
          <div className="input-field">
            <input
              placeholder="Ваше Имя"
              id="name"
              type="text"
              name="name"
              className="validate"
              value={form.name}
              onChange={ changeHandler }
            />
            <label htmlFor="name">Ваше Имя</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Ваша фамилия"
              id="secondName"
              type="text"
              name="secondName"
              className="validate"
              value={form.secondName}
              onChange={ changeHandler }
            />
            <label htmlFor="secondName">Ваша фамилия</label>
          </div>
          <div className="file-field input-field">
            <div className="btn grey lighten-2">
              <span className="black-text">Фото</span>
              <input
                type="file"
                name="img"
                accept=".jpg, .jpeg, .png"
                // value={form.img}
                // onChange={ changeHandler }
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate" type="text"
                placeholder="В разработке"
                // placeholder="Минимум 800x600 (.jpg, .jpeg или .png)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-action">
        <button
          className="btn teal"
          onClick={ registerHandler }
          disabled={ loading }
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};
