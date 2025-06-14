import React,{useState,useEffect,useRef} from 'react';

function StopWatch(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
            },10);
        }
        return() =>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
        
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatOfTimer(){
       let Hours=Math.floor(elapsedTime/(1000*60*60));
       let Minutes=Math.floor(elapsedTime/(1000*60)%60);
       let Seconds=Math.floor(elapsedTime/(1000)%60);
       let MilliSeconds=Math.floor((elapsedTime % 1000)/10);
       
       //For displaying one more '0' with already existed one zero

       Hours=String(Hours).padStart(2,"0");
       Minutes=String(Minutes).padStart(2,"0");
       Seconds=String(Seconds).padStart(2,"0");
       MilliSeconds=String(MilliSeconds).padStart(2,"0");
       
        return `${Hours}:${Minutes}:${Seconds}:${MilliSeconds}`;

    }

    return(
       <div className='Container'>
        <div className='Timer-container'>{formatOfTimer()} </div>
            <div className='control-buttons'>
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        
       </div>
    );
}

export default StopWatch