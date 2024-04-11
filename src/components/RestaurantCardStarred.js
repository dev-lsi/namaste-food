import RestaurantCard from "./RestaurantCard";


const RestaurantCardStarred = (props) => { 
        
        return (
            <div className="label-container">
                <p className="label">promoted</p>
                <RestaurantCard {...props} />
            </div>
        )
}
export default RestaurantCardStarred;