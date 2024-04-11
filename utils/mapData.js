import { Link } from "react-router-dom";
import RestaurantCard from "../src/components/RestaurantCard";
import RestaurantCardStarred from "../src/components/RestaurantCardStarred";

function mapData(currentData){

    
    
    const result=currentData.map(r=>{

        if(Number(r.info.avgRating)<= 4.2){
            
            return (
                <Link key = {"rm"+ r.info.id} to={'restaurants/'+ r.info.id }>
                    <RestaurantCard resName={r.info.name}
                          cuisine={r.info.cuisines}
                          rating={r.info.avgRating}
                          cloudinaryImageId={r.info.cloudinaryImageId}/>
                </Link>
            )
            
        }else{
            
            return (<Link key = {"rm"+ r.info.id} to={'restaurants/'+ r.info.id }>
                <RestaurantCardStarred resName={r.info.name}
                          cuisine={r.info.cuisines}
                          rating={r.info.avgRating}
                          cloudinaryImageId={r.info.cloudinaryImageId}/>
            </Link>)
        }
    

    })

    return result;
}    

export default mapData;

    
        
        
