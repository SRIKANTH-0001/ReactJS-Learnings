
function Button(){
    //Inline-css
    const styles={
        
            border: "2px solid rgb(146, 142, 142)",
            borderRadius: "2%",
            backgroundColor:"rgb(240, 217, 12)",
            color:"rgb(14, 15, 14)",
            height: "50px",
            width: "120px",
            marginRight:"10px",

        
    }
    
    return(
        <>
        <button style={styles}>Inline Button</button>
        <button className="button">External Button</button>
        </>
    );
}

export default Button