import MovieCard from "./MovieCard.jsx"
import {parseMovieData} from './utils/utils.js'
import './MovieList.css'


const MovieList = (props) => {
    const movieData = parseMovieData(props.data);
    console.log(movieData);
    return (
        <div className="movies-list">
            {
            movieData.map(object => {
                return (
                    <MovieCard title={object.title} rating={object.rating} poster={object.poster}/>
                )
             })
            } 
        </div>
        
    );
}

export default MovieList;