import React, { useState } from 'react';
import axios from 'axios';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/candidate', formData);
      alert('Candidate added successfully');
    } catch (error) {
      console.error('Error adding candidate', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Add Candidate</h2>
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
          type="text"
          name="party"
          placeholder="Party"
          value={formData.party}
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
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Candidate</button>
      </form>
    </div>
  );
};

export default CandidateForm;
