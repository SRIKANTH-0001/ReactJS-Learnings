import React,{useState,useEffect,useRef} from 'react';


//UseRef concepts are the substitution for useState,
//because it Re-render the elemnets or actions only once 
//No matters how many times you trigger the Action or for example you clicked the button.
//So,due to the use of useRef we can eliminate an unnecessary re-renders


function UseRefComponent(){

    const InputRef1=useRef(null);
    const InputRef2=useRef(null);
    const InputRef3=useRef(null);

    useEffect(()=>{
        console.log("BUTTON CLICKED");
    });

        function handleClick1(){
            InputRef1.current.focus();
            InputRef1.current.style.backgroundColor="Red";
            InputRef2.current.style.backgroundColor="";
            InputRef3.current.style.backgroundColor="";
        }
        function handleClick2(){
            InputRef2.current.focus();
            InputRef2.current.style.backgroundColor="Red";
            InputRef1.current.style.backgroundColor="";
            InputRef3.current.style.backgroundColor="";
        }
        function handleClick3(){
            InputRef3.current.focus();
            InputRef3.current.style.backgroundColor="Red";
            InputRef1.current.style.backgroundColor="";
            InputRef2.current.style.backgroundColor="";
        }

    return (<div>
            <h1 >Using the UesRef Concepts</h1>
            <button  onClick={handleClick1} style={{backgroundColor:"Yellow"}}>Smash Me Once!</button>

            <input ref={InputRef1} />
            <br />
            <button  onClick={handleClick2} style={{backgroundColor:"Pink"}}>Smash Me Twice!</button>

            <input ref={InputRef2} />
            <br />

            <button  onClick={handleClick3} style={{backgroundColor:"lightblue"}}>Smash Me Thrice!</button>

            <input ref={InputRef3} />
         </div>
       
   )

}
export default UseRefComponent