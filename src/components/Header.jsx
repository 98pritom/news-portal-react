import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    console.log(import.meta.env.VITE_a);
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo">
                <img src={logo} alt="" className='w-[400px]' />
            </div>
            <h2 className='text-gray-400 text-lg'>Journalism without favor or fear.</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;