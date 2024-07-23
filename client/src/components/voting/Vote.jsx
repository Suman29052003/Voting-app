// Vote.js
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Vote = () => {
    const { candidateID } = useParams();

    const handleVote = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`/api/candidate/vote/${candidateID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={handleVote}>Vote for Candidate</button>
    );
};

export default Vote;
