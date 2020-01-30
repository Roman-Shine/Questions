import { combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { loginReducer } from './login/loginReducer';
import { usersReducer } from './users/usersReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  users: usersReducer
});
