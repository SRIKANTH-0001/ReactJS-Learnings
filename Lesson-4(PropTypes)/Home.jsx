import propTypes from 'prop-types'

function Home(props){
    return(
        <div className="Info">
            <p>Name of House: {props.Name}</p>
            <p>Color of House: {props.Color}</p>
            <p>Count of Rooms?: {props.Rooms}</p>
            <p>Is this Your Home?: {props.isMine ? "Yeah!" :"No!"}</p>
        </div>
    );
}

Home.propTypes={
    Name:propTypes.string,
    Color:propTypes.string,
    Rooms:propTypes.number,
    isMine:propTypes.boolean
}

Home.defaultProps={
    name:"Unnamed",
    Color:"Black",
    Rooms:0,
    ismine:false,
}
export default Home