import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import { useState ,useEffect} from 'react'
import Banner from './Banner.jsx'

const App = () => {
  const [pages, setPages] = useState(1);
  const [searchPages, setSearchPages] = useState(1);
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalData, setModalData] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]); // array of favorite movie titles
  const [watchedMovies, setWatchedMovies] = useState([]); // array of watched movie titles
  const [booleans, setBooleans] = useState({ // added nothing else, change name
    isLoading:false,
    isSearching:false
  });
  

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pages}`);
    const data = await response.json()

    if (movieData != null && booleans.isLoading) {
      setMovieData((prev) => ({
        ...data,
        results:[...prev.results, ...data.results]
      }));
      setBooleans(prev => ({...prev, isLoading:false}));
    } else {
      setMovieData(() => data);
    }
  };

  //for load more
  useEffect(() => {
    if (searchQuery !== '') {
      handleSearchQuery();
    } else {
      fetchData();
    }
    
  }, [pages, searchPages]);


  // to control closing the modal
  useEffect(() => {
    if (modalData == null) {
      setMovieData(movieData);
    }
  }, [modalData]);

  // search query
  useEffect(() => {
    fetchData();
    if (searchQuery !== '') {
      handleSearchQuery();
    }
  }, [searchQuery]);


  const handlePageChange = () => {
    setBooleans(prev => ({...prev, isLoading:true}));
    setBooleans(prev => ({...prev, isSearching:true}));
    if (searchQuery !== '') { // search screen currently
      setSearchPages(searchPages + 1);
    } else {
      setPages(pages + 1);
    }
    
  }

  const handleSearchQuery = async() => { // useEffect is necessary due to API fetching
      // searchQuery now has our search
      const apiKey = import.meta.env.VITE_APP_API_KEY
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${searchPages}`)
      const data = await response.json()

      if (booleans.isSearching) {
        setMovieData((prev) => ({
          ...data,
          results:[...prev.results, ...data.results]
        }));
        setBooleans(prev => ({...prev, isSearching:false}));
      } else {
        setMovieData(() => data);
      }
  }

  return (
    <div className="App">
      {movieData && <Header fetchData={fetchData} movieData={movieData} searchQuery={searchQuery} send={setSearchQuery} favoriteMovies = {favoriteMovies} watchedMovies={watchedMovies} setMovieData={setMovieData}/>}
      <Banner />
      {movieData && <MovieList data={movieData} setFavoriteMovies={setFavoriteMovies} favoriteMovies={favoriteMovies} setWatchedMovies={setWatchedMovies} watchedMovies={watchedMovies} modalData={modalData} setModalData={setModalData}/>}
      <button type="button" onClick={handlePageChange} id="loadMore">Load More</button>
      <Footer />
    </div>
  )
}

export default App
