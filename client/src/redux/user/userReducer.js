import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './userTypes';

const initialState = {
  loading: false,
  userData: null,
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        loading: false,
        userData: null,
        error: action.payload
      };
    default: return state
  }
};
