import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <Loading></Loading>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate to={'/auth/login'}></Navigate>;
};

export default PrivateRoutes;