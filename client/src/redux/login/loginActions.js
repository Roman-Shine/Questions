import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_LOGIN,
  FETCH_LOGOUT,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  StorageName
} from './loginTypes';

export const fetchLogin = (formData) => {
  return async (dispatch) => {
    dispatch(login());
    const storageData = JSON.parse(localStorage.getItem(StorageName));
    if (storageData && storageData.token) {
      dispatch(loginSuccess(storageData));
    } else if (formData) {
      try {
        const { data } = await axios({
          url: api.auth.login,
          method: 'POST',
          data: {...formData}
        });
        localStorage.setItem(StorageName, JSON.stringify(data));
        dispatch(loginSuccess(data));
      } catch (error) {
        dispatch(loginError(error.response.data.message || error.message));
      }
    } else {
      dispatch(loginSuccess(null));
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
