import MovieCard from "./MovieCard.jsx"
import {parseMovieData} from './utils/utils.js'
import './MovieList.css'
import Modal from "./Modal.jsx"


const MovieList = (props) => {
    const movieData = parseMovieData(props.data);

    return (
        <div className="movies-list">
            {
            movieData.map(object => {
                return (
                    <>
                        <MovieCard data={movieData} title={object.title} rating={object.rating} poster={object.poster} setBooleans={props.setBooleans} booleans={props.booleans}/>
                    </>
                    
                    
                )
             })
            } 
        </div>
        
    );
}

export default MovieList;