import React,{useState} from 'react'

function ColorChooser(){

    const [color,setColor] =useState("yellow");

    function handleColorChange(e){
        setColor(e.target.value);
    }

    return(
        <div className='container'>
            <h1>Color Selection Process!</h1>
            <div className='Selected'  style={{backgroundColor:color}}>
                <p>Selected Color:{color}</p>
            </div>
            <label > Select Your Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
            
        </div>
    );
}

export default ColorChooser