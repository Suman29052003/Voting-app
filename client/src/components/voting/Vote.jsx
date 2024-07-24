import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vote = () => {
    const { candidateID } = useParams();
    console.log("Candidate ID:", candidateID); // Add this line to debug

    const handleVote = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`http://localhost:3000/candidate/vote/${candidateID}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            toast.success('Vote recorded successfully!');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Error recording vote');
        }
    };

    return (
        <div>
            <ToastContainer />
            <button onClick={handleVote} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Vote for Candidate
            </button>
        </div>
    );
};

export default Vote;
