import axios from 'axios';
axios.interceptors.request.use( async (request) => {
  let token = await localStorage.getItem('access-token') || '';
  if(token) request.headers.Authorization = `Bearer ${token}`;
  if (request.body) {
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
});
