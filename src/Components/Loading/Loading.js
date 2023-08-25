import React from 'react'
import loading from './loading-fast.gif'

export default function Loading() {
    return (
        <div >
            <img  src={loading} alt="loading..." style={{marginLeft:"30rem"}}/>
        </div>
    )
}
