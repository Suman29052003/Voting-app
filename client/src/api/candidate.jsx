import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getCandidates = async () => {
  const response = await axios.get(`${API_URL}/candidate`);
  return response.data;
};

export const addCandidate = async (token, candidateData) => {
  const response = await axios.post(`${API_URL}/candidate`, candidateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const voteCandidate = async (token, candidateID) => {
  const response = await axios.get(`${API_URL}/candidate/vote/${candidateID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
