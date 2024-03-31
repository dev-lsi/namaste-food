import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [data, setData] = useState(restaurants);
  const [showName, setShowName] = useState("Show Top Rated Only");
  return (
    <div className="body">
      <div className="search-form">
        <input className="search-field" type="text" placeholder="search here..."></input>
        <button className="search-button">Search</button>
        <button className="filter-button"
          onClick={() => {
            if (showName === "Show Top Rated Only") {
              let filtered = restaurants.filter(
                (r) => Number(r.info.avgRating) >= 4.4
              );
              setData(filtered);
              setShowName("Show All");
            } else {
              setData(restaurants);
              setShowName("Show Top Rated Only");
            }
          }}
        >
          {showName}
        </button>
      </div>
      <div className="list-container">
        {data.map((r) => (
          <RestaurantCard
            key={r.info.id}
            resName={r.info.name}
            cuisine={r.info.cuisines}
            rating={r.info.avgRating}
            cloudinaryImageId={r.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
