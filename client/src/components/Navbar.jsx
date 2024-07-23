// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-xl">
                    <Link to="/">Voting App</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/profile" className="text-white hover:underline">Profile</Link>
                    </li>
                    <li>
                        <Link to="/candidates" className="text-white hover:underline">Candidates</Link>
                    </li>
                    <li>
                        <Link to="/vote-count" className="text-white hover:underline">Vote Count</Link>
                    </li>
                    <li>
                        <Link to="/add-candidate" className="text-white hover:underline">Add Candidate</Link>
                    </li>
                    <li>
                        <Link to="/vote" className="text-white hover:underline">Vote</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white hover:underline">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="text-white hover:underline">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
