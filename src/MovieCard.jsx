import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img className="movie-img" src={`src/assets/movie.png`} alt={props.weather} />
            <h3>{props.title}</h3>
            <h4>Rating: {props.rating}</h4>
        </div>
        
    );
}

export default MovieCard