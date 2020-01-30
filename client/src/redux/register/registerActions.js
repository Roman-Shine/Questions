import axios from 'axios';
import { api } from '../../services/api';
import {
  FETCH_REGISTER,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_ERROR
} from "./registerTypes";

export const fetchRegister = (formData) => {
  return async (dispatch) => {
    dispatch(register());
    try {
      const { data } = await axios({
        url: api.auth.register,
        method: 'POST',
        data: {...formData}
      });
      dispatch(registerSuccess(data.message));
    } catch (error) {
      dispatch(registerError(error.response.data.message || error.message));
    }

  };
};

export const register = () => {
  return {
    type: FETCH_REGISTER
  };
};

export const registerSuccess = (data) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: data
  };
};

export const registerError = (error) => {
  return {
    type: FETCH_REGISTER_ERROR,
    payload: error
  };
};
