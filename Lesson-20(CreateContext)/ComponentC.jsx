import ComponentD from "./ComponentD";
import React,{useContext} from 'react';
import {QualificationContext} from './ComponentA';

function ComponentC(props){

    const qualification=useContext(QualificationContext);

    return (<>
        <div className="container" style={{backgroundColor:"lightblue"}}>
        <h1>Component C</h1>
        <h2>{`My qualification is:${qualification}`}</h2>
        
             <ComponentD />
        
        </div>
    </>)
}

export default  ComponentC
