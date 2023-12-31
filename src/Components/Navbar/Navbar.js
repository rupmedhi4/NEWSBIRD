import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/Slices/NewsSlices';
import { setCategory, setCurrentPage } from '../Redux/Slices/PaginationSlice';

export default function Navbar() {
  const {currentPage } = useSelector((state) => state.PaginationSlice);

  const dispatch = useDispatch();

  const handleFetchNews = (category) => {
     dispatch(fetchNews({category}));
     dispatch(setCategory(category));
  }
     
  
  return (
    <div className='container'>
      <h1 className='container_inner'>NEWS-BIRD</h1>
       <ul className='container_ul'>
        <li  className='container_ul_li' onClick={(e)=>handleFetchNews("general")}>HOME</li>
        <li className='container_ul_li' onClick={(e)=>handleFetchNews("sports")}>Sports</li>
        <li className='container_ul_li' onClick={(e)=>handleFetchNews("health")}>Health</li>
        <li className='container_ul_li'onClick={(e)=>handleFetchNews("entertainment")}>Entertainments</li>
        <li className='container_ul_li'onClick={(e)=>handleFetchNews("business")}>Business </li>
        <li className='container_ul_li'onClick={(e)=>handleFetchNews("technology")}>Technology</li>
        <li className='container_ul_li'onClick={(e)=>handleFetchNews("science")}>Scrience</li>
       </ul>
    </div>
  )
  }

