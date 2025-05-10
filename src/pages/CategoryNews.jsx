import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    const paramId = useParams();
    console.log(paramId);
    console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-3'>News Portal</h2>
            <p className='text-gray-500'>{news.length} News found in this category</p>
            <div className='space-y-8'>
                {
                    news.map(singleNews => <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;