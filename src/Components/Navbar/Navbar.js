import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container'>
      <h1 className='container_inner'>NEWS-BIRD</h1>
       <ul className='container_ul'>
        <li  className='container_ul_li'>HOME</li>
        <li className='container_ul_li'>cricket</li>
        <li className='container_ul_li'>political</li>
        <li className='container_ul_li'>Entertainments</li>
        <li className='container_ul_li'>Sports</li>
        <li className='container_ul_li'>Health</li>
        <li className='container_ul_li'>Scrience</li>
       </ul>
    </div>
  )
}
