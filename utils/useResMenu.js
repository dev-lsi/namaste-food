import { useEffect, useState } from "react"
import { restaurantsURL } from "./constants";

const useResMenu=(resId)=>{

    const [resLink,setResLink]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const response=await fetch(restaurantsURL);
        const fetchedData = await response.json();
        const restaurantsArr =
        fetchedData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const menuLink = ((restaurantsArr.filter(r => r.info.id === resId))[0]).cta.link;
        setResLink(menuLink);
    }
       
    
    return resLink;
}

export default useResMenu;