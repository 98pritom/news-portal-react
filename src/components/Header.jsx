import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className="logo">
                <img src={logo} alt="" className='w-[400px]' />
            </div>
            <h2 className='text-gray-500 text-lg font-semibold'>Journalism without favor or fear.</h2>
        </div>
    );
};

export default Header;