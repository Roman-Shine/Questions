export const api = {
  auth: {
    register: '/api/auth/register',
    login: '/api/auth/login',
    // logout: '',
  },
  users: {
    list: '/api/users'
  },
  questions: {
    postQuestion: '/api/questions/generate',
    putQuestion: '/api/questions/update',
    list: '/api/questions',
    new: '/api/questions/new-questions'
  },
};
