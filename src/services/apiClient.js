import axios from 'axios';

// Creating test api
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6QGVtYWlsLmNvbSIsImV4cCI6MTY0ODQwNzI3NX0.u2o_UAyqF1vPJmKb8USU7s5Mmc1PUK11sZQyRuDr6rq0yryXcobtLI9Nl4YVBCTbtp7auebci4PdUgDQS8rkow'
  }
});
export default api;
