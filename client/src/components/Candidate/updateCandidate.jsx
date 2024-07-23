// UpdateCandidate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCandidate = () => {
    const { candidateID } = useParams();
    const [candidateData, setCandidateData] = useState({
        name: '',
        party: '',
        // other fields as needed
    });

    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`/api/candidate/${candidateID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCandidateData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCandidate();
    }, [candidateID]);

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
            const response = await axios.put(`/api/candidate/${candidateID}`, candidateData, {
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={candidateData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="party" value={candidateData.party} onChange={handleChange} placeholder="Party" />
            <input type="number" name="age" value={candidateData.age} onChange={handleChange} placeholder="Age" />
            <button type="submit">Update Candidate</button>
        </form>
    );
};

export default UpdateCandidate;
