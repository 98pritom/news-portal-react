import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />
    },
    {
        path: '/news',
        element: <h2>News</h2>
    },
    {
        path: '/auth',
        element: <h2>Login</h2>
    },
    {
        path: '*',
        element: <h2>Error</h2>
    },
]);

export default Routes;