import React from "react";
import { imageURL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, cloudinaryImageId } = props;
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img className="restaurant-image" src={imageURL+cloudinaryImageId} alt="restaurant-image" />
      </div>
      <h2 className="restaurant-name">{resName}</h2>
      <h3 className="cuisine">{cuisine.join(', ')}</h3>
      <h3 className="restaurant-rating">{rating}</h3>
    </div>
  );
};

export default RestaurantCard;
