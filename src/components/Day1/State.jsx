// usestate hook: it gives us a way to make a reactive value and also provides us with a way to change that value whenever we want
// value inside usestate hook can be anything, from arrray, object to boolean

import React from "react";
import { useState } from "react";

const State = () => {
    const [name,setname]=useState('Pawan'); 
    const [age, setage] = useState(26);
    const handleClick = () =>{
        setname("Bhandari");
        setage(30);
    }

    return (
        <div className="stateReturn">
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>click here for state</button>
        </div>  

        
    );
}
 
export default State;   