import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center py-2'>
            <div></div>
            <div className='nav space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    {user && user?.email ? (
                        <div><img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                    ) : (
                        <img className='w-10 rounded-full' src={userIcon} alt="" />
                    )}
                </div>
                {
                    user ? <button onClick={logout} className='btn rounded-none'> Logout</button>
                        : <Link to='/auth/login'><button className='btn rounded-none'>Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;