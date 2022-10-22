import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            {
                allNews.map(newsCard => <NewsCard key={newsCard._id} newsCard={newsCard}></NewsCard>)
            }
        </div>
    );
};

export default Home;