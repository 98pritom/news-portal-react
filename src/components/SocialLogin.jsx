import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-2">Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className="btn border-none"><FaGoogle />Login With Google</button>
                <button className="btn border-none"><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;