import './MovieCard.css'


const MovieCard = (props) => {
    const openModal = () => {
        console.log(props.data);
        props.setModalData(props.data);
    }

    return (
        <div className="movie-card" onClick={openModal}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt={props.title} />
            <h3>{props.title}</h3>
            <h4>Rating: {props.rating}</h4>
            {/* {props.booleans.isModal && <Modal data={props.data} setBooleans={props.setBooleans} booleans={props.booleans}/>} */}
        </div>
        
    );
}

export default MovieCard