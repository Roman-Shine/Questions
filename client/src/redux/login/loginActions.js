import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_LOGIN,
  FETCH_LOGOUT,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR
} from './loginTypes';

export const fetchLogin = (formData) => {
  return async (dispatch) => {
    dispatch(login());
    try {
      const { data } = await axios({
        url: api.auth.login,
        method: 'POST',
        data: {...formData}
      });
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error.response.data.message || error.message));
    }
  };
};

export const logout = () => {
  return {
    type: FETCH_LOGOUT
  };
};

export const login = () => {
  return {
    type: FETCH_LOGIN
  };
};

export const loginSuccess = (data) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data
  };
};

export const loginError = (error) => {
  return {
    type: FETCH_LOGIN_ERROR,
    payload: error
  };
};
