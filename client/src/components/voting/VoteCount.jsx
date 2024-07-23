import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VoteCount = () => {
    const [voteCounts, setVoteCounts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVoteCounts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/candidate/vote/count');
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
        <div>
            <h1>Vote Counts</h1>
            <ul>
                {voteCounts.map((vote, index) => (
                    <li key={index}>
                        {vote.party}: {vote.count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VoteCount;
