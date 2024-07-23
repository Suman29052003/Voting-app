import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get('http://localhost:3000/candidate');
      setCandidates(response.data);
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
