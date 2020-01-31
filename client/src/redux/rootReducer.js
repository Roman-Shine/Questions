import { combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { loginReducer } from './login/loginReducer';
import { usersReducer } from './users/usersReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  user: userReducer
});
