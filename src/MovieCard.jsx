import './MovieCard.css'
import Modal from './Modal.jsx'
import { useEffect } from 'react';

const MovieCard = (props) => {
    const openModal = async () => {
        props.setBooleans(prev => ({...prev, isModal:true}));
        
    }

    // useEffect = (() => {
    //     props.setBooleans(prev => ({...prev, isModal:true}));
    // }, [props.setBooleans]);

    return (
        <div className="movie-card" onClick={openModal}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt={props.weather} />
            <h3>{props.title}</h3>
            <h4>Rating: {props.rating}</h4>
            {props.booleans.isModal && <Modal data={props.data} setBooleans={props.setBooleans}/>}
        </div>
        
    );
}

export default MovieCard