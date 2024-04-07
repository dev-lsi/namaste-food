import { useState } from "react";

const SearchTab = (props) => {
  
  const { returnData, restaurants} = props;

  const [currentData, setCurrentData] = useState(restaurants);
  const [showName, setShowName] = useState("Show Top Rated Only");
  const [searchText,setSearchText]=useState("");

  return (
    <div className="search-tab">
      <div className="search-form">
        <input
          onChange={(e)=>{setSearchText(e.target.value)}}
          value={searchText}
          className="search-field"
          type="text"
          placeholder="search here... buddy"
          
        ></input>
        <button onClick={()=>{
          
          const filtered=restaurants
          .filter(r=>r?.info?.name
          .toLowerCase()
          .includes(searchText.toLowerCase()));
           returnData(filtered);
           
        }} className="search-button">Search</button>
        <button
          className="filter-button"
          onClick={() => {
            let filtered;
            if (showName === "Show Top Rated Only") {
              filtered = restaurants.filter(
                (r) => Number(r.info.avgRating) > 4.5
              );
              
              setShowName("Show All");
              console.log(filtered)
              returnData(filtered);
              
            } else {
             
              setShowName("Show Top Rated Only");
              returnData(restaurants);
            }
          }}
        >
          {showName}
        </button>
      </div>
    </div>
  );
};

export default SearchTab;
