// UpdatePassword.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdatePassword = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put('/api/user/profile/password', passwordData, {
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
            <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handleChange} placeholder="Current Password" />
            <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handleChange} placeholder="New Password" />
            <button type="submit">Update Password</button>
        </form>
    );
};

export default UpdatePassword;
