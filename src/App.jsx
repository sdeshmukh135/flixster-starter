import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import MovieData from "./data/data.js"
import { useState ,useEffect} from 'react'

const App = () => {
  const [pages, setPages] = useState(1);
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  

  const fetchData = async () => {
    //console.log("----");
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pages}`)
    //console.log(response);
    const data = await response.json()
    //console.log(data);
    if (movieData != null) {
      //console.log(data);
      movieData.results = [...movieData.results, ...data.results];
      setMovieData(movieData);
    } else {
      
      setMovieData(data);
    }

  };

  useEffect(() => {
    
    fetchData();

    if (searchQuery != '') { // searchQuery has been changed
      console.log(searchQuery);
      handleSearchQuery();
    }
    
    
  }, [pages, searchQuery]);

  const handlePageChange = () => {
    setPages(pages + 1);
  }

  const handleSearchQuery = async() => { // set searchQuery earlier
      // searchQuery now has our search
      const apiKey = import.meta.env.VITE_APP_API_KEY
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      const data = await response.json()
      setMovieData(data);
  }

  return (
    <div className="App">
      {movieData && <Header send={setSearchQuery} fetchData={fetchData}/>}
      {movieData && <MovieList data={movieData} />}
      <button type="button" onClick={handlePageChange} id="loadMore">Load More</button>
      <Footer />
    </div>
  )
}

export default App
