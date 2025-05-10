import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mt-2 mb-2'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;