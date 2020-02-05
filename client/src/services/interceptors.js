import axios from 'axios';
axios.interceptors.request.use( async (request) => {
  let storageData = await localStorage.getItem('userData') || '';
  if(storageData) {
    const token = JSON.parse(storageData).token;
    request.headers.Authorization = `Bearer ${token}`;
  }
  if (request.body) {
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
});
