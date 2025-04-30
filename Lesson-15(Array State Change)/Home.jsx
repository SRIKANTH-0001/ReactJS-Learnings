import React,{useState} from "react"; 

function Home(){
   const [home,setHome]=useState(["Furniture","Window","Kitchen"]);
   
   function handleAddHome(e){
        const newItem=document.getElementById("HomeInput").value;
        document.getElementById("HomeInput").value="";

        setHome(h=>[...h,newItem]);

   }
   function handlRemoveHome(index){
        setHome(home.filter((_,i)=>i !=index));
   }
   
    return(
        <div class="container">
            <h1>List of Objects at Home</h1>
            <ul class="List-items">
               {home.map((home,index)=><li key={index} onClick={()=>handlRemoveHome(index)}>{home}</li>)}
            </ul>
            <input class="add-field" type="text" id="HomeInput"   placeholder="Enter Your Appliances"/>
            <button class="add-btn" onClick={handleAddHome}>Add Items</button>
        </div>
    );
}

export default Home