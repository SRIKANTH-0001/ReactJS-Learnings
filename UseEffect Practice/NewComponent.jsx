import React,{useState,useEffect} from "react"

function NewComponent(){

    const [count,setCount]=useState(0);
    const [color,setColor]=useState("Blue")

    function IncCount(){
        setCount(c=>c+1);
    }
    
    function subtractCount(){
        setCount(c=>c-1);
    }
    const changeColor = () => {
        const colors = ['#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
      };
      
    useEffect(()=>{
        document.title=`Count:${count} Color:${color}`;
    },[count,color])
    
    return (
    <>
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={IncCount}>Add count</button>

    <button onClick={subtractCount}>Subtract</button> <br />

    <button onClick={changeColor}>Change Color</button>
    </>
    )
}

export default NewComponent;
