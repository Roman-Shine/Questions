import {
  FETCH_REGISTER,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_ERROR
} from './registerTypes';

const initialState = {
  loading: false,
  registerData: '',
  error: ''
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER:
      return {
        ...state,
        loading: true
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        registerData: action.payload
      };
    case FETCH_REGISTER_ERROR:
      return {
        loading: false,
        registerData: '',
        error: action.payload
      };
    default: return state
  }
};
