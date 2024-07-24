import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null); // Initialize profile as null
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Render a loading state
    }

    if (!profile) {
        return <div>Error loading profile.</div>; // Handle the case where profile is null
    }

    return (
        <div className="profile">
            <h1>{profile.name}</h1>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
        </div>
    );
};

export default Profile;
