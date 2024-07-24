import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 ">
            <div className="flex justify-between items-center">
                <div className="text-white text-xl">
                    <Link to="/">Voting App</Link>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <ul className={`lg:flex lg:space-x-4 ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden'} lg:block`}>
                <li>
                    <Link to="/profile" className="text-white hover:underline block lg:inline">Profile</Link>
                </li>
                <li>
                    <Link to="/candidates" className="text-white hover:underline block lg:inline">Candidates</Link>
                </li>
                <li>
                    <Link to="/vote-count" className="text-white hover:underline block lg:inline">Vote Count</Link>
                </li>
                <li>
                    <Link to="/add-candidate" className="text-white hover:underline block lg:inline">Add Candidate</Link>
                </li>
                <li>
                    <Link to="/vote" className="text-white hover:underline block lg:inline">Vote</Link>
                </li>
                <li>
                    <Link to="/login" className="text-white hover:underline block lg:inline">Login</Link>
                </li>
                <li>
                    <Link to="/signup" className="text-white hover:underline block lg:inline">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
