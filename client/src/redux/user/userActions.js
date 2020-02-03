import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './userTypes';

export const fetchUser = (login) => {
  return async (dispatch) => {
    dispatch(user());
    try {
      const { data } = await axios({
        url: `${api.users.list}/${login}`,
        method: 'GET'
      });
      dispatch(userSuccess(data));
    } catch (error) {
      dispatch(userError(error.response.data.message || error.message));
    }
  };
};

export const user = () => {
  return {
    type: FETCH_USER
  }
};

export const userSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data
  }
};

export const userError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
};
