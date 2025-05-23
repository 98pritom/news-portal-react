import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, []);
    console.log(categories);

    return (
        <div>
            <h2 className='font-semibold mb-2 md:text-center'>All Category ({categories.length})</h2>
            <div className='flex flex-col gap-2'>
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn border-none rounded-2xl'>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;