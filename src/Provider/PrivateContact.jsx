import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateContact = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  
    if (loading) {
      return <span className="loading loading-ring loading-lg"></span>;
    }
  
    if (!user) {
      return <Navigate state={location.pathname} to="/login" />;
    }
  
    return children;
};

export default PrivateContact;