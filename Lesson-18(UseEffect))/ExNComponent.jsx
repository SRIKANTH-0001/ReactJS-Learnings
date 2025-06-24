import React,{useState,useEffect} from "react"

function Example(){

    //We can use this,instead of useState,because useEffect re-renderr
    //when we are doing the actions like clicking the buttons

    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

   
    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        console.log("It is added")

        return()=>{
            window.removeEventListener("resize",handleResize)
        console.log("It is Removed")

        }
    },[])
    
    useEffect(()=>{
        document.title=`Size:${width}x${height}`
    },[width,height])
    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Max width:{width}px</p>
        <p>Max Height:{height}px</p>

    </>)
}

export default Example