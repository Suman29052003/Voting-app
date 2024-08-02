import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!profile) {
    return <div className="flex items-center justify-center h-screen">Error loading profile.</div>;
  }

  return (
    <div className="w-full bg-white h-[70vh] flex flex-col justify-center items-center">
      <div className="profile flex flex-col items-start text-2xl gap-4 font-medium rounded-md shadow-2xl p-12">
        <h1 className="text-3xl font-bold">Profile Details</h1>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Mobile No:</strong> {profile.mobile}</p>
        <p><strong>Aadhar No:</strong> {profile.aadharCardNumber}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Candidate ID:</strong> {profile.candidateId || "N/A"}</p>
      </div>
    </div>
  );
};

export default Profile;
