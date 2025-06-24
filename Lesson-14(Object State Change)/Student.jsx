import React,{useState} from "react"

function Student(){

    const [student,setStudent]=useState({name:"Srikanth",age:15,class:"A"});

    //Here,If we want to change a particular value But it shouldn't affect the previos ones then we better to use as Following Steps

    function handleNameChange(e) {
        setStudent(student=>({...student,name:e.target.value}));
        //("..." this represents this[name:"Srikanth",age:15,class:"A",name:"Whatever we type at now"])

        //why we are tagetting only the name value means becuz,of this is only responsible for "name"
    }

    function handleAgeChange(e) {
        setStudent(s=>({...student,age:e.target.value}));
    }

    function handleClassChange(e) {
        setStudent(s=>({...student,class:e.target.value}));
    }


    return(
        <div className="container">
            <h2>Student Details:{student.name} {student.age} {student.class}</h2>

            <input className="add-field" type="text" value={student.name}  onChange={handleNameChange} placeholder="Type Student Name" /><br />

            <input className="add-field" type="number" value={student.age} onChange={handleAgeChange} placeholder="Type Student Age"/><br />

            <input className="add-field" type="text" value={student.class}  onChange={handleClassChange} placeholder="Type Student Class"/>
        </div>
    );
}

export default Student