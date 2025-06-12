import './Modal.css'
import { useState, useEffect} from 'react'

const Modal = (props) => {
    const [runtime, setRuntime] = useState(0);
    const [trailer, setTrailer] = useState(null); // video link to the trailer
    const [genres, setGenres] = useState([]); // array of genres

    const closeModal = async () => {
        props.setModalData(null);
    }

    useEffect(() => {
        findDetails(); // for additional details like runtime and genre
        findTrailer();
      
    },[props.data.id]);


    const findDetails = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.data.id}?api_key=${apiKey}`)
        const data = await response.json();

        const runtime = data.runtime;
        setRuntime(runtime);
        setGenres(data.genres.map(object => ((object.name) + "  ")));
    }

    const findTrailer = async () => {
        const apiKey = import.meta.env.VITE_APP_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.data.id}/videos?api_key=${apiKey}`)
        const videos = await response.json();
        let trailer = null; // initially

        // iterate through videos looking for a trailer
        for (const video of videos.results) {
            if (video.type === "Trailer") {
                trailer = video;
            }
        }

        setTrailer(trailer.key);
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
                        <div >
                            { // map names of genres to output
                            genres.map(object => {
                                return (
                                    <h2 className="genres"> {object} </h2>
                                )
                            })
                            }
                        </div>
                    </div>
                    
                </div>
                <h2>Trailer:</h2>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}?si=oahWDkEerMavEcZC`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>
        </div>
    )
}

export default Modal