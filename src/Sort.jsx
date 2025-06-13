import { useState, useEffect} from 'react'
import './Sort.css'

const Sort = (props) => {
    const [isOpen, setIsOpen] = useState(false); // set if the dropdown menu is open
   

    const handleIsOpen = () => {
        setIsOpen(!isOpen); // opposite what is currently there
    }

    const handleSortQuery = (type) => { // changing movieData according to sorting option
        const currentMovieData = [...props.movieData.results]
        if (type === "title") {
        // sort using the title
        currentMovieData.sort((a,b) => a['title'].localeCompare(b['title']))
        } else if (type === "date") {
        // sort using date
        currentMovieData.sort((a,b) => new Date(a['release_date']) - new Date(b['release_date']))
        } else {
        // sort using rating
        currentMovieData.sort((a,b) => (a['vote_average']) - (b['vote_average'])).reverse()
    }

    const newData = {
        ...props.movieData,
        results:currentMovieData
      }
    
    props.setMovieData(newData);
  }

    return (
        <div className="dropdown-container" >
            <h3 className="dropdown" onClick={handleIsOpen}>
                Sort
                {isOpen && <div className="dropdown-menu">
                    <button className="sort" onClick={() => handleSortQuery("title")}>Title</button>
                    <button className="sort" onClick={() => handleSortQuery("date")}>Release Date</button>
                    <button className="sort" onClick={() => handleSortQuery("rating")}>Rating</button>
                </div>}
            </h3>
        </div>
    )
}

export default Sort