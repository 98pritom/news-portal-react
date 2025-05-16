import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loadedUser = result.user;
                console.log(loadedUser);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }
    return (
        <div className='min h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 px-16 py-14">
                <div className="card-body">
                    <h2 className='text-center text-2xl mb-4'>Login to your account</h2>
                    <form onSubmit={handleLogin} className="form">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    <p>Don't have an account? <Link to='/auth/register' className='font-semibold'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;