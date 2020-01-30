import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from './usersTypes';

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(users());
    try {
      const { data } = await axios({
        url: api.users.list,
        method: 'GET'
      });
      dispatch(usersSuccess(data));
    } catch (error) {
      dispatch(usersError(error.response.data.message || error.message));
    }
  };
};

export const users = () => {
  return {
    type: FETCH_USERS
  }
};

export const usersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data
  }
};

export const usersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
};
