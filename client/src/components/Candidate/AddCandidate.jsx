// AddCandidate.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCandidate = () => {
    const [candidateData, setCandidateData] = useState({
        name: '',
        party: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateData({
            ...candidateData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/candidate', candidateData, {
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
        <form onSubmit={handleSubmit} className='w-full bg-transparent'>
            <input type="text" name="name" value={candidateData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="party" value={candidateData.party} onChange={handleChange} placeholder="Party" />
            {/* other fields as needed */}
            <button type="submit">Add Candidate</button>
        </form>
    );
};

export default AddCandidate;
