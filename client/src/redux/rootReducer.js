import { combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { loginReducer } from './login/loginReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});
