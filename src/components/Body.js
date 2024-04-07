import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shirm from './Shirm';
import { useState, useEffect } from "react";
import { restaurantsURL } from "../../utils/constants";
import SearchTab from "./SearchTab";
import { Link } from "react-router-dom";

const Body = () => {

  const [currentData, setCurrentData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {fetchData();}, []);
  
  async function fetchData() {

    const response = await fetch(restaurantsURL);
    const fetchedData = await response.json();

    
    
    const restaurantsArr =
      fetchedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setFetchedData(restaurantsArr)
      setCurrentData(restaurantsArr);
  }

  const getFilteredData = (filtered) => {setCurrentData(filtered)};

  

  if (currentData !== null) {
    console.log(currentData)
    return (
      <div className="body">
        <SearchTab returnData={getFilteredData} restaurants={fetchedData} />
        <div className="list-container">
          {currentData.map((r) => (
        <Link to={'restaurants/'+ "1000" + r.cta.link.split("https://www.swiggy.com/restaurants/")[0]}>
            <RestaurantCard
              key={r.info.id}
              resName={r.info.name}
              cuisine={r.info.cuisines}
              rating={r.info.avgRating}
              cloudinaryImageId={r.info.cloudinaryImageId}
              menuLink={r.cta.link}
            />
        </Link>
          ))}
        </div>
      </div>
    );
  }else{
    return <Shirm/>
  }
    


  
};

export default Body;
