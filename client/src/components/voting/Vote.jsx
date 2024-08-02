import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

const Vote = () => {
    const navigate = useNavigate()
  const [candidates, setCandidates] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch user profile
        const profileResponse = await axios.get(
          "http://localhost:3000/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const user = profileResponse.data;
        setUserRole(user.role);
        setHasVoted(user.isVoted);

        // Fetch candidates
        const candidatesResponse = await axios.get(
          "http://localhost:3000/candidate"
        );
        setCandidates(candidatesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateTo = () =>{
    setTimeout(()=>{
        navigate('/vote-count')
    },3000)
  }

  const handleVote = async (candidateID) => {
    console.log("Candidate ID to vote for:", candidateID);

    if (userRole === "admin") {
      toast.error("Admins are not allowed to vote");
      return;
    }

    if (hasVoted) {
      toast.error("You have already voted");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/candidate/vote/${candidateID}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Vote recorded successfully!");
      setHasVoted(true);
      navigateTo()
    } catch (error) {
      console.error("Error recording vote:", error);
      toast.error(error.response?.data?.message || "Error recording vote");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 mt-8">Candidates</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        {candidates.map((candidate) => (
          <div
            key={candidate._id}
            className="mb-4 p-4 border border-gray-300 rounded"
          >
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Party:</strong> {candidate.party}</p>
            <p><strong>Age:</strong> {candidate.age || "N/A"}</p>
            <button
              onClick={() => handleVote(candidate._id)}
              className="bg-blue-500 text-white py-2 px-4 my-2 rounded hover:bg-blue-600"
            >
              Vote for {candidate.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
