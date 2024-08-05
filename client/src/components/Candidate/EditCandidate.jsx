import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCandidate = () => {
  const { candidateID } = useParams();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState({
    name: '',
    party: '',
    age: ''
  });

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/candidate/${candidateID}`);
        setCandidate(response.data);
      } catch (error) {
        console.error('Error fetching candidate:', error);
        // toast.error('Error fetching candidate data');
      }
    };

    fetchCandidate();
  }, [candidateID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:3000/candidate/${candidateID}`, candidate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Candidate updated successfully');
      navigate('/candidates');
    } catch (error) {
      console.error('Error updating candidate:', error);
      toast.error('Error updating candidate');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 mt-8">Edit Candidate</h2>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={candidate.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="party">
              Party
            </label>
            <input
              type="text"
              id="party"
              name="party"
              value={candidate.party}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={candidate.age}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Update Candidate
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCandidate;
