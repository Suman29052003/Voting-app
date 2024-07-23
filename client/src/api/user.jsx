import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updatePassword = async (token, passwordData) => {
  const response = await axios.put(`${API_URL}/user/profile/password`, passwordData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
