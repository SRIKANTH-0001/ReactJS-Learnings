import PropTypes from 'prop-types'

function PassMessage(props){

    return(props.isRegister ? <h2 className="true">This is your password. {props.PassWord}</h2> : <h2 className="false">This is your Default UserId. <br/> {props.UserId}</h2>
        
    );

    /* if(props.isRegister){
        return<><h2>You are already Registered.So,</h2><div>Your Password is here!: {props.PassWord} </div></> 
        
    }else{
        return <><h2>You are Not Registered yet.So,</h2><div>Enter Your UserId: {props.UserId} </div></>
    }*/
    
}

PassMessage.propTypes={
    isRegister:PropTypes.bool,
    UserId:PropTypes.string,
    Password:PropTypes.string,
}

PassMessage.propTypes={
    isRegister:false,
    UserId:"Guest",
    PassWord:"none",
}
export default PassMessage