import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-gray-100 p-2 rounded'>
            <p className='bg-red-400 text-base-500 px-2 py-1 rounded text-white'>Latest</p>
            <Marquee pauseOnHover='true' speed={100} className='space-x-10'>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates dolor fugiat autem eum ut?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, adipisci.</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;