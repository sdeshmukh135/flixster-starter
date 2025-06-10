import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import MovieData from "./data/data.js"
import { useState ,useEffect} from 'react'

const App = () => {
  const [pages, setPages] = useState(1);
  let [movieData, setMovieData] = useState(null);

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pages}`)
    console.log(response);
    const data = await response.json()
    console.log(data);
    if (movieData != null) {
      // movieData = [...movieData.results,...data.results];
      // setMovieData(movieData);
    } else {
      setMovieData(data);
    }
    

  };

  //fetchData();

  useEffect(() => {
    if (pages > 0) {
      fetchData();
    }
    
  }, [pages]);

  const handlePageChange = () => {

    setPages(pages + 1);
  }

  return (
    <div className="App">
      <Header />
      {movieData && <MovieList data={movieData} />}
      <button type="button" onClick={handlePageChange} id="loadMore">Load More</button>
      <Footer />
    </div>
  )
}

export default App
