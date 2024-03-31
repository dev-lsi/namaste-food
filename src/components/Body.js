import React from 'react';
import RestaurantCard from './RestaurantCard';
import {useState, useEffect} from 'react';

const Body = ()=>{
     
    
    
    

    //const restaurants = data.cards[4].card.gridElements.infoWithStyle.restaurants;
    

    
    

    return (
        <div className='body'>
            <div className='search-form'>
                <input type='text' placeholder='search here...'></input>
                <button>Search</button>
            </div>
            <div className='list-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default Body;