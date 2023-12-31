/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    const location = useLocation();
    console.log(location);
    
    if (loading) {
        return
    }

    if (user) {
        return children;
    }

    

    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivetRoute;