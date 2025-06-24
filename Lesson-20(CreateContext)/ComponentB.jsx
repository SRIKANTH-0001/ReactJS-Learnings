import ComponentC from './ComponentC';
import React,{useContext} from 'react';
import { QContext } from "./ComponentA";

function ComponentB(props){

    const AskQ=useContext(QContext);

    return (<>
        <div className="container" style={{backgroundColor:"pink"}}>
        <h1>Component B</h1>
        <h2>{`${AskQ}`}</h2>
        <ComponentC qualification={props.qualification} />
        </div>
    </>)
}

export default  ComponentB
