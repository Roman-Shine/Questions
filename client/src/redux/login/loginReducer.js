import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR
} from './loginTypes';

const initialState = {
  loading: false,
  loginData: null,
  error: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        loading: true,
        loginData: null
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        loginData: action.payload
      };
    case FETCH_LOGIN_ERROR:
      return {
        loading: false,
        loginData: null,
        error: action.payload
      };
    default: return state
  }
};
