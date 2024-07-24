import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCandidate = () => {
    const [candidateData, setCandidateData] = useState({
        name: '',
        party: '',
        age: ''
    });

    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Profile response:', response.data); // Log the entire response
                setUserRole(response.data.user.role); // Updated this line to access the correct nested field
                console.log('User role fetched:', response.data.user.role); // Updated this line
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        fetchUserRole();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateData({
            ...candidateData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form with user role:', userRole);

        if (userRole !== 'admin') {
            toast.error('You do not have permission to add a candidate.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/candidate', candidateData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            toast.success('Candidate added successfully!');
        } catch (error) {
            console.error('Error adding candidate:', error);
            toast.error('Error adding candidate. Please try again.');
        }
    };

    return (
        <div className="w-full bg-white p-4">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={candidateData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mb-4 p-2 w-full border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="party"
                    value={candidateData.party}
                    onChange={handleChange}
                    placeholder="Party"
                    className="mb-4 p-2 w-full border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="age"
                    value={candidateData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="mb-4 p-2 w-full border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add Candidate
                </button>
            </form>
        </div>
    );
};

export default AddCandidate;
