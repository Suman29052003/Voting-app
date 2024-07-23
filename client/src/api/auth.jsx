import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/user/login`, credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/user/signup`, userData);
  return response.data;
};
