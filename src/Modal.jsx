import './Modal.css'
import { useState, useEffect} from 'react'

const Modal = (props) => {
    const [runtime, setRuntime] = useState(0);
    const [genres, setGenres] = useState([]); // array of genres

    const closeModal = async () => {
        props.setModalData(null);
    }

    useEffect(() => {
        findDetails(); // for additional details like runtime and genre
    },[props.data.id]);

    const findDetails = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.data.id}?api_key=${apiKey}`)
        const data = await response.json();

        const runtime = data.runtime;
        setRuntime(runtime);
        setGenres(data.genres.map(object => object.name));
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={element => element.stopPropagation()}>
                <h1>{props.data.title}</h1>
                <div className="details">
                    <img className="modal-img" src={`https://image.tmdb.org/t/p/w500/${props.data.poster}`} alt={props.title} />
                    <div className="extraDetails">
                        <h2>{props.data.release_date}</h2>
                        <h3>{props.data.overview}</h3>
                        <h2>{runtime} Minutes</h2>
                        <h2>Genres:</h2>
                        { // map names of genres to output
                            genres.map(object => {
                                return (
                                    <h3 className="genres">{object}</h3>
                                )
                            })
                        }
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Modal