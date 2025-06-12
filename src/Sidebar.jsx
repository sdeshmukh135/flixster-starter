import { useState, useEffect} from 'react'


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
        <div className="dropdown-container" >
            <div className="dropdown" onClick={handleIsOpen}>
                Sidebar
                {isOpen && <div className="dropdown-menu">
                    <button className="sort" onClick={() => handleWatched("home")}>Home Page</button>
                    <button className="sort" onClick={() => handleWatched("watched")}>Watched</button>
                    <button className="sort" onClick={() => handleWatched("favorite")}>Favorites</button>
                </div>}
            </div>
        </div>
    );
}

export default Sidebar