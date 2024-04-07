import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
//const restaurantsArr =
//fetchedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantMenu=()=>{

    const [menuItems,SetMenuItems]=useState("");
    const params = useParams();

    
    
    
    useEffect(()=>{fetchMenu()},[]);

    async function fetchMenu(url){
    
        const response = await fetch(url);
        const data = await response.json();
        SetMenuItems(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(menuItems);
    }

    return (
        <div className="restaurant-menu">
          {/* {menuItems.map(i=>i.cta.link)} */}
        </div>
    )
}

export default RestaurantMenu;

