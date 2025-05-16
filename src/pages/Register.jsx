import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log({ name, image, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <div className='min h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0  px-16 py-14">
                <div className="card-body">
                    <h2 className='text-center text-2xl mb-4'>Register your account</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Name" />
                        <label className="label">Image</label>
                        <input name='image' type="text" className="input w-full" placeholder="Image URL" />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </form>
                    <div><p>Already have an account? <Link to='/auth/login' className='font-semibold'>Login</Link></p></div>
                </div>
            </div>
        </div>
    );
};

export default Register;