import './MovieCard.css'
import { useState, useEffect} from 'react'
import redHeart from "/src/assets/redHeart.webp"
import whiteHeart from "/src/assets/whiteHeart.png"
import regularEye from "/src/assets/watching.webp"
import redEye from "/src/assets/redeye.png"
import defaultMoviePoster from "/src/assets/movie.png"

const MovieCard = (props) => {
    const [isWatching, setIsWatching] = useState(props.watchedMovies.includes(props.data.id));
    const [isLiked, setIsLiked] = useState(props.favoriteMovies.includes(props.data.id));


    const openModal = () => {
        props.setModalData(props.data);
    }

    const handleWatching = (event) => {
        event.stopPropagation();
        addToWatched();
        setIsWatching(!isWatching);
    }

    const handleLikes = (event) => {
        event.stopPropagation();
        addToFavorites();
        setIsLiked(!isLiked);
    }

    const addToWatched = () => {
        
        if (!isWatching) { // put in the special list
            props.setWatchedMovies((prev) => (
                [...prev, props.data.id]
            ));
            
        } else {
            let prev = [...props.watchedMovies];
            prev = prev.filter((item) => (item) != props.data.id)
            
            const newData = [...prev]
            console.log(newData);
            props.setWatchedMovies(newData);
            
        }
    }

    const addToFavorites = () => { // seperate methods to isolate the actions of the buttons
        if (!isLiked) { // put in the special list
            props.setFavoriteMovies((prev) => (
                [...prev, props.data.id]
            ));
            
        } else {
            let prev = [...props.watchedMovies];
            prev = prev.filter((item) => (item) != props.data.id)
            
            const newData = [...prev]
            props.setFavoriteMovies(newData);
            
        }
    }


    return (
        <div className="movie-card" onClick={openModal}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt={props.title} onError={event => {
                event.target.src={defaultMoviePoster}
                event.onerror = null
            }} />
            <h3>{props.title}</h3>
            <h4>Rating: {props.rating}</h4>
            {isWatching ? <img className="watchLike" src={redEye} alt={"Watched"} onClick={handleWatching}/>:<img className="watchLike" src={regularEye} alt={"Watched"} onClick={handleWatching}/> }
            {isLiked ? <img className="watchLike" src={redHeart} alt={"Watched"} onClick={handleLikes}/> : <img className="watchLike" src={whiteHeart} alt={"Watched"} onClick={handleLikes}/>}
            {/* {props.booleans.isModal && <Modal data={props.data} setBooleans={props.setBooleans} booleans={props.booleans}/>} */}
        </div>
        
    );
}

export default MovieCard