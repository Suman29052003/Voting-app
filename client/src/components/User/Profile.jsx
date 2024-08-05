import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordUpdateLoading, setPasswordUpdateLoading] = useState(false);
  const [passwordUpdateState, setPasswordUpdateState] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateState = (e) =>{
    // update state here
    setPasswordUpdateState(!passwordUpdateState)
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setPasswordUpdateLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://localhost:3000/user/profile/password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error(
        error.response?.data?.error || "Error updating password"
      );
    } finally {
      setPasswordUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">Loading...</div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error loading profile.
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="profile flex flex-col items-start text-2xl gap-4 font-medium rounded-md shadow-2xl p-12 mb-">
        <h1 className="text-3xl font-bold mb-6">Profile Details</h1>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Mobile No:</strong> {profile.mobile}</p>
        <p><strong>Aadhar No:</strong> {profile.aadharCardNumber}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Candidate ID:</strong> {profile.candidateId || "N/A"}</p>
      </div>

    <p className="text-blue-700 font-medium text-lg text-left w-full pt-[20px] px-10" onClick={handleUpdateState}>Update Password ?</p>
    {
      passwordUpdateState ? (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Update Password</h2>
        <form onSubmit={handlePasswordUpdate} className="flex flex-col gap-4">
          <div>
            <label htmlFor="currentPassword" className="block text-lg font-medium">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-lg font-medium">New Password:</label>
            <input
              type="password"
              id="newPassword"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={passwordUpdateLoading}
          >
            {passwordUpdateLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>)
      :<></>
    }

      
    </div>
  );
};

export default Profile;
