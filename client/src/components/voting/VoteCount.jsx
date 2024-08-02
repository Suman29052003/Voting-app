import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VoteCount = () => {
    const [voteCounts, setVoteCounts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVoteCounts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/candidate/vote/count');
                console.log('Server response:', response.data); // Check the response structure
                if (Array.isArray(response.data)) {
                    setVoteCounts(response.data);
                } else {
                    throw new Error('Response is not an array');
                }
            } catch (error) {
                console.error('Error fetching vote counts:', error);
                setError(error.message || 'An error occurred');
            }
        };
        fetchVoteCounts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='w-full bg-white h-[70vh] flex flex-col justify-center items-center gap-3'>
            <div className="w-full flex flex-col items-center justify-center gap-4">
            <h1 className='text-4xl font-bold text-center'>Vote Counts</h1>
            <ul className='text-2xl'>
                {voteCounts.map((vote, index) => (
                    <li key={index} className='mb-2 p-4 px-24 border border-gray-300 rounded'>
                        <p><strong>{vote.party}:</strong> {vote.count}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default VoteCount;
