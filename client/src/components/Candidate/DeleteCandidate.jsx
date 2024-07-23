// DeleteCandidate.js
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteCandidate = () => {
    const { candidateID } = useParams();

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`/api/candidate/${candidateID}`, {
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
        <button onClick={handleDelete}>Delete Candidate</button>
    );
};

export default DeleteCandidate;
