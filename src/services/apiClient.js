import axios from 'axios';

// Creating test api
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1'
});

export default api;
