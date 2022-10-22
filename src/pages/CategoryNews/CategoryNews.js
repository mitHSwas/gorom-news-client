import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    const ctNews = useLoaderData([])
    return (
        <div>
            {
                ctNews.map(newsCard => <NewsCard key={newsCard._id} newsCard={newsCard}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;