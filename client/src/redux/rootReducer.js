import { combineReducers } from 'redux';
import { registerReducer } from './register/registerReducer';
import { loginReducer } from './login/loginReducer';
import { usersReducer } from './users/usersReducer';
import { userReducer } from './user/userReducer';
import { questionsReducer } from './questions/questionsReducer';
import { postQuestionsReducer } from './questions/questionsReducer';

export const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  user: userReducer,
  questions: questionsReducer,
  postQuestions: postQuestionsReducer
});
