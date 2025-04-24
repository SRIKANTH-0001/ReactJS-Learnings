import React,{useState} from "react"

function Details(){

    const [name,setName]=useState("empty");
    const [Age,setAge]=useState(0);
    const [isEmployed,setisEmployed]=useState();

    const nameVar=()=>{
        setName("SRIKANTH K");
    }
    const ageVar=()=>{
        setAge(20);
    }
    const isEmployedVar=()=>{
        setisEmployed(!isEmployed);
    }

    return(
        <>
        <div>
            <p>Name:{name}</p>
            <button onClick={nameVar}>Set Name</button>
        </div>

        <div>
            <p>Age:{Age}</p>
            <button onClick={ageVar}>Set Age</button>
        </div>

        <div>
            <p>Did he has Job:{isEmployed  ? "Good Job" :" Try More!"}</p>
            <button onClick={isEmployedVar}>Set Job Info</button>
        </div>
        </>
    );
}

export default Details