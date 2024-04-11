import { useState } from "react";

const Menu = (props) => {
    
    const [menu,setMenu] = useState("");
    const {dishes} = props;
    
    const result = dishes.map(d=>{
      return  (
        <div>
            <h3>{d.name}</h3>
            <h3>{d.price}</h3>
        </div>
        )
    });
    setMenu(result);
    console.log(result)
    return (<div>{result}</div>);
    
};

export default Menu;