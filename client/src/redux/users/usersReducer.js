import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from './usersTypes';

const initialState = {
  loading: false,
  usersData: [],
  error: ''
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        usersData: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        usersData: [],
        error: action.payload
      };
    default: return state
  }
};
