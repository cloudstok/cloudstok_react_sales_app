import React from 'react'
import { Navigate } from "react-router-dom";
// import { Navigate, Redirect, Route } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};


export default ProtectedRoute