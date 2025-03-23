import PropTypes from 'prop-types';

function Home(
    { Name = "Unnamed house", Color = "Black", Rooms = 0, isMine = false }
    ) {
    return (
        <div className="Info">
            <p>Name of House: {Name}</p>
            <p>Color of House: {Color}</p>
            <p>Count of Rooms?: {Rooms}</p>
            <p>Is this Your Home?: {isMine ? "Yeah!" : "No!"}</p>
        </div>
    );
}

Home.propTypes = {
    Name: PropTypes.string,
    Color: PropTypes.string,
    Rooms: PropTypes.number,
    isMine: PropTypes.bool,
};

export default Home;
