import React from "react";

const RestaurantCard = (props) => {
  //const { resName, cuisine } = props;
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img src="" alt="restaurant-image" />
      </div>
      <h2 className="restaurant-name">resName</h2>
      <h3 className="cuisine">ciusine</h3>
      <h3 className="restaurant-rating">Stars:100</h3>
    </div>
  );
};

export default RestaurantCard;
