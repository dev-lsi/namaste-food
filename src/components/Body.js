import React from "react";

import Shirm from './Shirm';
import { useState, useEffect } from "react";
import { restaurantsURL } from "../../utils/constants";
import SearchTab from "./SearchTab";
import mapData from '../../utils/mapData';

const Body = () => {

  const [currentData, setCurrentData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData()
  },[]);
  
  async function fetchData() {

    const response = await fetch(restaurantsURL);
    const fetchedData = await response.json();
    
    const restaurantsArr =
    fetchedData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFetchedData(restaurantsArr);
    setCurrentData(restaurantsArr);
  }

  const getFilteredData = (filtered) => {setCurrentData(filtered)};

  

  if (currentData !== null) {
    console.log(currentData)
    return (
      <div className="body">
        <SearchTab returnData={getFilteredData} restaurants={fetchedData} />
        <div className="list-container">
          {mapData(currentData)}
        </div>
      </div>
    );
  }else{
    return <Shirm/>
  }
};

export default Body;
