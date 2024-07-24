import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/User/Profile';
import CandidateList from './components/Candidate/CandidateList';
import VoteCount from './components/voting/VoteCount';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AddCandidate from './components/Candidate/AddCandidate';
import Vote from './components/voting/Vote';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/candidates" element={<CandidateList />} />
                        <Route path="/vote-count" element={<VoteCount />} />
                        <Route path="/add-candidate" element={<AddCandidate />} />
                        <Route path="/vote/:candidateID" element={<Vote />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/candidates" replace />} />
                    <Route path="*" element={<Navigate to="/candidates" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
