import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantsURL } from "../../utils/constants";
import Shirm from "./Shirm";
import useResMenu from "../../utils/useResMenu";
//const restaurantsArr =
//fetchedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    
    const resMenu = useResMenu(resId);

    return (
        <div className="restaurant-menu">
            <h1>Menu</h1>
            <h2>{resId}</h2>
            <h2>{resMenu}</h2>
        </div>
    );
};

export default RestaurantMenu;
