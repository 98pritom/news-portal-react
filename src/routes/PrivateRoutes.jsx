import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <Loading></Loading>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location} to={'/auth/login'}></Navigate>;
};

export default PrivateRoutes;