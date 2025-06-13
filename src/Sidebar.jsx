import { useState} from 'react'
import './Sort.css' // same stylistic choices for the buttons
import './Sidebar.css' // for the sidebar itself

const Sidebar = (props) => {
    const [isOpen, setIsOpen] = useState(false); // set if the dropdown menu is open

    const handleWatched = async (type) => {
    const currentMovieData = [...props.movieData.results]
    const newResults = []

    if (type === "watched") {
      // filter according to titles that have been "watched"
 
      for (const movie of currentMovieData) {
        if (props.watchedMovies.length === 0) {
          break;
        }
        //console.log(watchedMovies);
        if (props.watchedMovies.includes(movie.id) && !newResults.includes(movie.id)) { // to prevent repeats
          newResults.push(movie);
        }
      }
    } else if (type === "home") {
      await props.fetchData();
      return;
    } else if (type === "favorite") {
  
        for (const movie of currentMovieData) {
            if (props.favoriteMovies.length === 0) {
                break;
            }
            if (props.favoriteMovies.includes(movie.id) && !newResults.includes(movie.id)) { // to prevent repeats
                newResults.push(movie);
            }
        }
    }
    
    const newData = {
      ...props.movieData,
      results:newResults
    }

    props.setMovieData(newData);

  }


    const handleIsOpen = () => {
        setIsOpen(!isOpen); // opposite what is currently there
    }

    return (
        <>
            <button className="sort" onClick={handleIsOpen}>☰</button>
            {isOpen && <div className="sidebar-container" >
                <h3 className="sidebar">
                    Sidebar
                    <div className="sidebar-menu">
                        <button className="sort" onClick={() => handleWatched("home")}>Home Page</button>
                        <button className="sort" onClick={() => handleWatched("watched")}>Watched</button>
                        <button className="sort" onClick={() => handleWatched("favorite")}>Favorites</button>
                    </div>
                </h3>
            </div>}
        </>
        
    );
}

export default Sidebar