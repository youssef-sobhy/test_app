import axios from 'axios';

// Api configuration
setDefaultHeaders();
const rootApi = 'http://localhost:3001';
export const usersApi = `${rootApi}/users`;
export const sessionApi = `${rootApi}/login`;

function setDefaultHeaders() {
  const token = sessionStorage.jwt;
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
}