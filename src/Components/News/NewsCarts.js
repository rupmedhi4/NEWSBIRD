import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/Slices/NewsSlices';
import './NewsCarts.css';
import { setCurrentPage } from '../Redux/Slices/PaginationSlice';

export default function NewsCarts() {
    const { data, isloading, error } = useSelector((state) => state.NewsSlices);
    const { currentPage } = useSelector((state) => state.PaginationSlice);
    const dispatch = useDispatch();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    };


    const handleFetchNews = (category) => {
        dispatch(fetchNews({ category }));
    };

    useEffect(() => {
        handleFetchNews("sports");

    }, []);


    const endIndex = currentPage + 6;
    const lenth = data?.articles?.length

    const displayedNews = data?.articles?.slice(currentPage, endIndex) || [];

    return (
        <div className='news_container'>
            {isloading ? <h2>Loading</h2> : 
            displayedNews.length > 0 ? (
                displayedNews.map((news) => (
                    <div className='inner_cart_container' key={news.title}>
                        <img src={news.urlToImage} alt="no img" className='news_img' />
                        <div className='inner_cart_description'>
                            {news.title.length > 44 ? <h4>{news.title.slice(0, 44)}...</h4>
                                : <h4>{news.title}</h4>}
                            <div style={{ marginTop: "1rem" }}>
                                <span>By {news.author} </span>
                                <span>{new Date(news.publishedAt).toGMTString()}</span>
                            </div>


                            <div style={{ marginTop: "1rem", textAlign: "justify" }}>
                                <span>{news.description.length > 87 ? news.description.slice(0, 87) : news.description}</span>

                            </div>
                            <button className='read_more_btn'>Read More</button>
                        </div>
                    </div>
                ))
            ) : (
                <span>No news articles available.</span>
            )}
            {isloading ? null
                : <div className="pagination-buttons">
                    <button
                        onClick={() => dispatch(setCurrentPage(currentPage - 6))}
                        disabled={currentPage === 0 || isloading}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => dispatch(setCurrentPage(currentPage + 6))}
                        disabled={endIndex >= lenth || isloading}
                    >
                        Next
                    </button>
                </div>}



        </div>
    );
}
