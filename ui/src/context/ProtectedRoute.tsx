import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      return <Navigate to="/einloggen" replace />;
    }
  
    return <Outlet />;
  };
  
export default ProtectedRoute;
