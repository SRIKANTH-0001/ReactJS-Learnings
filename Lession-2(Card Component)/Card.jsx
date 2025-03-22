import Bikepic from './assets/Bike1.jpg'

function Card(){
    return(
        <>
        <div className='card'>
            <img className='bike-image' src={Bikepic} alt="Bike Image"/>
            <h2 className='title'>Ducati Bike</h2>
            <p className='text'>Since,My childhood days it's been my Favorite Bike!!</p>
        </div>
        
        </>
    );
}

export default Card