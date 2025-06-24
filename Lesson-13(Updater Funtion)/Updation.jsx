import React,{useState} from "react"

function Updation(){
    const [num,setNum] =useState(0);
    
    const handleNumInChange=()=>{
        
        /*setNum(num+1);
        setNum(num+1);*/
        
        //Instead of previous one if we use following one then those two functions works simmultaneously unlike previous one
        setNum(n=>n+1);
        //above and below are doing the same thing 
        setNum(prevNum=>prevNum+1);
    }

    const handleNumDeChange=()=>{
        if(num>=2){
            setNum(prevNum=>prevNum-1);
            setNum(prevNum=>prevNum-1);
        }
    }
    
    return(
        <div className="container">
            <h2>Number:{num}</h2>
            <button className="add-btn" onClick={handleNumInChange}> Increment</button>
            <button className="sub-btn" onClick={handleNumDeChange}> Decrement</button>
        </div>
    );

}

export default Updation