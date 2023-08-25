import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/Slices/NewsSlices';
import './NewsCarts.css'; // Import your CSS file for styling

export default function NewsCarts() {
    const { data, isLoading, error } = useSelector((state) => state.NewsSlices);
    const dispatch = useDispatch();
    const itemsPerPage = 6; // Number of articles to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const handleFetchNews = (category) => {
        dispatch(fetchNews({ category }));
    };

    useEffect(() => {
        handleFetchNews("sports");
        console.log(data.articles.length)
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedNews = data && data.articles ? data.articles.slice(startIndex, endIndex) : [];


    return (
        <div className='news_container'>
            {displayedNews ? (
                displayedNews.map((news) => (
                    <div className='inner_cart_container' key={news.title}>
                        <img src={news.urlToImage} alt="no img" className='news_img' />
                        <div className='inner_cart_description'>
                            <h4>{news.title}</h4>
                            <div style={{ marginTop: "1rem" }}>
                                <span>{news.description}</span>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <span>no data</span>
            )}
               {/* Pagination Buttons */}
               <div className="pagination-buttons">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= data.articles.length}
                >
                    Next
                </button>
            </div>
        </div>
      
    );
}
