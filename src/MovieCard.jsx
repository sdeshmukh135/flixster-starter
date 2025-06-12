import './MovieCard.css'
import { useState, useEffect} from 'react'

const MovieCard = (props) => {
    const [isWatching, setIsWatching] = useState(false);
    const [isLiked, setIsLiked] = useState(true);

    const openModal = () => {
        console.log(props.data);
        props.setModalData(props.data);
    }


    const handleWatching = (event) => {
        event.stopPropagation();
        addToWatched();
        setIsWatching(!isWatching); // opposite
    }

    const addToWatched = () => {
        console.log(props.title + "," + isWatching);
        if (!isWatching) { // put in the special list
            console.log(props.title);
            //rops.watchedMovies = [...props.watchedMovies, props.data]; // append data to the end of object (add an array to an array)
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


    return (
        <div className="movie-card" onClick={openModal}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt={props.title} onError={event => {
                event.target.src="assets/movie.png"
                event.onerror = null
            }} />
            <h3>{props.title}</h3>
            <h4>Rating: {props.rating}</h4>
            <img className="watchLike" src={isWatching ? "src/assets/redeye.png" : "src/assets/watching.webp"} alt={"Watched"} onClick={handleWatching}/>
            {/* {props.booleans.isModal && <Modal data={props.data} setBooleans={props.setBooleans} booleans={props.booleans}/>} */}
        </div>
        
    );
}

export default MovieCard