import React from 'react';
import RestaurantCard from './RestaurantCard';
import {restaurants} from '../../utils/mockData'
import {useState, useEffect} from 'react';

const Body = ()=>{
    
    return (
        <div className='body'>
            <div className='search-form'>
                <input type='text' placeholder='search here...'></input>
                <button>Search</button>
            </div>
            <div className='list-container'>
                  {restaurants.map(r=><RestaurantCard key={r.info.id} resName={r.info.name} cuisine={r.info.cuisines} rating={r.info.avgRating} cloudinaryImageId={r.info.cloudinaryImageId} />)}
            </div>
        </div>
    )
}

export default Body;