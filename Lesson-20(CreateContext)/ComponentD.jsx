import React,{useContext} from 'react';
import { userContext } from './ComponentA';

function ComponentD(){
    const user=useContext(userContext);
    

    
    return (<>
        <div className="container" style={{backgroundColor:"lightgreen"}}>
            <h1>Component D</h1>
            <h2>{`Thanks for coming ${user}`}</h2>
        </div>
    
    </>)
}

export default  ComponentD
