import React,{useState} from "react";

function Counter(){

    const [Count,setCount]=useState(0);

    const Decount=()=>{
        setCount(Count-1);
    } 
    const Recount=()=>{
        setCount(0);
    } 
    const Incount=()=>{
        setCount(Count+1);
    }

    return(
        <div className="container">
        <p className="Count">{Count}</p>
        <button className="Cbutton" onClick={Decount}>Decrement</button>
        <button className="Cbutton" onClick={Recount}>Reset</button>
        <button className="Cbutton" onClick={Incount}>Increment</button>
        </div>
    );
   
}
export default Counter