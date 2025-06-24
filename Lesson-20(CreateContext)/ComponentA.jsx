import React,{useState,createContext} from 'react';
import ComponentB from "./ComponentB";

export const userContext=createContext();
export const QualificationContext=createContext();
export const QContext=createContext();

//Instead of drilling down the props ,we can move on to the concepts of "createContext"
//In this Lesson I just created four components one within another
// TO use the createContext concepts-->In provider file,Wrie the following,
/*  1.import React,{useState,createContext} from 'react';
    2.export const VarContext=createContext();# const [var,setVar]=useState("my variable");
    3.  <VarContext.Provider value={var}>
                <QContext.Provider value={q}> --
                            <ComponentB /> --     For multiple variables,IF you need only one variable
                </QContext.Provider> ---    You can skip it.
        </VarContext.Provider>
*/

function ComponentA(){

    const [user,setUser]=useState("Srikanth");
    const [qualification,setQualification]=useState("UG");
    const [q,setQ]=useState("What's your qualification?")
    
    return (
        <div className="container" style={{backgroundColor:"yellow"}}>
            <h1>Component A</h1>
            <h2>{`Hello:${user}`}</h2>
            
            <userContext.Provider value={user}>
                <QualificationContext.Provider value={qualification}>
                    <QContext.Provider value={q}>
                                <ComponentB />
                    </QContext.Provider>
                </QualificationContext.Provider>
            </userContext.Provider>
        </div>
        
    )
}

export default  ComponentA


