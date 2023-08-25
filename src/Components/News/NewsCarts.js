import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/Slices/NewsSlices';
import './NewsCarts.css';
import { setCurrentPage } from '../Redux/Slices/PaginationSlice';
import Loading from '../Loading/Loading';

export default function NewsCarts() {
    const { data, isloading, error } = useSelector((state) => state.NewsSlices);
    const { currentPage,category } = useSelector((state) => state.PaginationSlice);
    const dispatch = useDispatch();



    const handleFetchNews = (category) => {
        dispatch(fetchNews({ category }));
    };

    useEffect(() => {
        handleFetchNews("general");
        
    }, []);

    const endIndex = currentPage + 6;
    const length = data?.articles?.length;

    const displayedNews = data?.articles?.slice(currentPage, endIndex) || [];

    return (
        <>
            {isloading ? null : <h2 style={{marginLeft:"30rem", marginTop:"2rem"}}>`NEWS BIRD -  Top {category} Headlines` </h2>}
            <div className='news_container'>

                {isloading ? <Loading /> : (
                    <>
                        {displayedNews.length > 0 ? (
                            displayedNews.map((news) => (
                                
                                <div className='inner_cart_container' key={news.title}>
                                
                                    <img src={news.urlToImage} alt="no img" className='news_img' />
                                    <div className='inner_cart_description'>
                                        {news.title.length > 44 ? <h4>{news.title.slice(0, 44)}...</h4> : <h4>{news.title}</h4>}
                                        <div style={{ marginTop: "1rem" }}>
                                            <span>By {news.author} </span>
                                            <span>{new Date(news.publishedAt).toGMTString()}</span>
                                        </div>
                                        <div style={{ marginTop: "1rem", textAlign: "justify" }}>
                                            <span>{news.description ? (news.description.length > 87 ? news.description.slice(0, 87) : news.description) : 'No description available'}</span>
                                        </div>
                                        <button className='read_more_btn'>Read More</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <span>No news articles available.</span>
                        )}

                        <div className="pagination-buttons">
                            <button
                                onClick={() => dispatch(setCurrentPage(currentPage - 6))}
                                disabled={currentPage === 0 || isloading}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => dispatch(setCurrentPage(currentPage + 6))}
                                disabled={endIndex >= length || isloading}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
