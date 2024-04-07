import { useEffect, useState } from "react"
import { restaurantsURL } from "./constants";

const useResMenu=(resId)=>{

    const [resLink,setResLink]=useState(null);
    const [menuData,setMenuData]=useState(null);

    // useEffect(()=>{
    //     fetchLink();
    // },[]);

    // useEffect(()=>{
    //    fetchMenu();
    // },[resLink]);

    const fetchMenu=async()=>{
    
        if(resLink!=null){
            const res = await fetch(resLink.toString());
            const dat= await response.json();
            console.log(dat);
            setMenuData(dat);
        }
    }

    const fetchLink= async()=>{
        const response=await fetch(restaurantsURL);
        const fetchedData = await response.json();
        const restaurantsArr =
        fetchedData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const resLink = (restaurantsArr.filter(r=>r.info.id===resId))[0].cta.link;
        setResLink(resLink);
    }

    return "menuData";
}

export default useResMenu;