import React,{useState} from "react";

function Mobiles(){

    const [mobiles,setMobiles]=useState([]);

    const [myear,setYear]=useState(new Date().getFullYear());

    const [mname,setMname]=useState();

    const [mbrand,setMbrand]=useState();

    function handleClickButton(){
        const newInfo={year:myear,name:mname,brand:mbrand};

        setMobiles(m=>[...m,newInfo]);

        setYear(new Date().getFullYear());
        setMname("");
        setMbrand("");
    }

    function handleRemoveMobile(index){
        setMobiles(m=>m.filter((_,i)=>i !== index));
    }    

    function handleYearChange(e) {
        setYear(e.target.value);
    }

    function handleNameChange(e) {
        setMname(e.target.value);
    }

    function handleBrandChange(e){
        setMbrand(e.target.value);
    }

    return(
    <div className="mobile-container">
        <h1>List of Mobile Objects</h1>

        <ul>
            {mobiles.map((mobile, index) => (
            <li key={index} onClick={() => handleRemoveMobile(index)}>
            {mobile.year} &nbsp;{mobile.name} &nbsp;{mobile.brand}
            </li>
            ))}
        </ul>


        <input value={myear} onChange={handleYearChange} type="number" placeholder="Enter the Year of Creation"/><br />

        <input value={mname} onChange={handleNameChange} type="text"  placeholder="Enter the Model Name"/><br />

        <input value={mbrand} type="text" onChange={handleBrandChange}  placeholder="Enter the Brand Name"/><br /><br />

        <button onClick={handleClickButton}>Add Mobile Info</button>
    </div>
    );
}

export default Mobiles