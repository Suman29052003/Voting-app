import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    address: '',
    aadharCardNumber: '',
    password: '',
    role: 'voter' // Set the default value for role here
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
    console.log('Form Data:', formData); // Log form data
    try {
      const response = await axios.post('http://localhost:3000/user/signup', formData);
      console.log('Response:', response);
      alert('Signup successful');
      navigate('/login'); 
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          className="mb-4 p-2 w-full border border-gray-300 rounded"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
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
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
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
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
