// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('token'); // or whatever logic you use to check authentication

    if (!isAuthenticated) {
        return <Navigate to="/signup" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;