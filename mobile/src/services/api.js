import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.42.209:3333',
});

export default api;
