import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:3000/candidate');
        console.log('API response:', response.data); // Log the response data
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserRole(response.data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchCandidates();
    fetchUserRole();
  }, []);

  const handleDelete = async (candidateID) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/candidate/${candidateID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCandidates(candidates.filter(candidate => candidate._id !== candidateID));
      toast.success('Candidate deleted successfully');
    } catch (error) {
      console.error('Error deleting candidate:', error);
      toast.error('Error deleting candidate');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 mt-8">Candidates</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        {candidates.map((candidate) => (
          <div key={candidate._id} className="mb-4 p-4 border border-gray-300 rounded">
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Party:</strong> {candidate.party}</p>
            <p><strong>Age:</strong> {candidate.age ? candidate.age : 'N/A'}</p> 
            {/* <p><strong>Id:</strong> {candidate._id ? candidate._id : 'N/A'}</p>  */}
            {userRole === 'admin' && (
              <div className="flex space-x-2 mt-4">
                <Link to={`/candidate/edit/${candidate._id}`} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                  Edit
                </Link>
                <button onClick={() => handleDelete(candidate._id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
