import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    aadharCardNumber: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/profile'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="text"
          name="aadharCardNumber"
          placeholder="Aadhar Card Number"
          value={formData.aadharCardNumber}
          onChange={handleChange}
        />
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
