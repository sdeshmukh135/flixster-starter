import MovieCard from "./MovieCard.jsx"
import {parseMovieData} from './utils/utils.js'
import './MovieList.css'
import Modal from "./Modal.jsx"


const MovieList = (props) => {
    const movieData = parseMovieData(props.data);
    console.log("called")
    return (
        <div className="movies-list">
            {props.modalData && <Modal data={props.modalData} setModalData={props.setModalData} modalData={props.modalData}/>}
            {
            movieData.map(object => {
                return (
                    <>
                        <MovieCard data={object} key={object.id} title={object.title} rating={object.rating}
                        poster={object.poster} setFavoriteMovies={props.setFavoriteMovies} favoriteMovies={props.favoriteMovies} modalData={props.modalData} setModalData={props.setModalData} setWatchedMovies={props.setWatchedMovies} watchedMovies={props.watchedMovies}/>
                    </>
                    
                    
                )
             })
            } 
        </div>
        
    );
}

export default MovieList;