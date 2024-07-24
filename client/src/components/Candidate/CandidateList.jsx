import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

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

    fetchCandidates();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 mt-8">Candidates</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        {candidates.map((candidate, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Party:</strong> {candidate.party}</p>
            <p><strong>Age:</strong> {candidate.age ? candidate.age : 'N/A'}</p> {/* Fallback for missing age */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
