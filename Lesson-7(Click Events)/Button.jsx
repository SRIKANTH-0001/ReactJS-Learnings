

function Button() {
   
    /*let count=0;

    const handleNclick=(name) => {
        if(count<3){
            count++;
            console.log(`${name} clicked me ${count} Times`)
        }
        else{
            console.log("Stop clicking Me")
        }
    };

    return(
        <div>
            <button onClick={()=>handleNclick("Srikanth ")}>Click Me</button>
        </div>
    );*/

    /*
    const ChangeBtn=(e)=>e.target.textContent="Clicked!";

    //Instead of onclick we can also use onDoubleClick
    return(
        <div>
            <button onClick={(e)=>ChangeBtn(e)}>Click!</button>
        </div>
    );
    */

    const imageURL="./src/assets/Bike1.jpg";

    const handleclick=(e) =>e.target.style.display="none";

    return(

        <img onClick={(e)=>handleclick(e)} src={imageURL} alt="Loading" />
       
    );

}

export default Button