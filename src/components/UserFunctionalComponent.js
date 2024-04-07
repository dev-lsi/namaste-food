import { useState } from "react";

const UserFunctionalComponent=(props)=>{
    
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);

    const {name,contact,location}=props;

    

    function incrementCount(){
       
    };

    return (
        <div className="user-card">
            <h1>User Card by function</h1>
            <h2>Count : {count}</h2>
            <h2>Count2: {count2}</h2>

            <div className="user-image-container">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                      alt="user image"></img>
                </div>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>contact: {contact}</h2>
        </div>
        )
}

export default UserFunctionalComponent;