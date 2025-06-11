import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import { useState ,useEffect} from 'react'

const App = () => {
  const [pages, setPages] = useState(1);
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalData, setModalData] = useState(null);
  const [booleans, setBooleans] = useState({ // will add more for modal and extra stuff
    isLoading:false,
    isModal:false
  });
  

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pages}`);
    const data = await response.json()

    if (movieData != null && booleans.isLoading) {
      console.log(data);
      movieData.results = [...movieData.results, ...data.results];
      setMovieData(movieData);
      setBooleans(prev => ({...prev, isLoading:false}));
    } else {
      setMovieData(data);
    }
  };

  useEffect(() => {
    //console.log(booleans.isModal);
    if (modalData == null) { // if false
      fetchData();

      if (searchQuery != '') { // searchQuery has been changed
        handleSearchQuery();
      }
    }
    
    //console.log(booleans.isModal);
  }, [pages, searchQuery, modalData]); // dependency array

  const handlePageChange = () => {
    setBooleans(prev => ({...prev, isLoading:true}));
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
      {movieData && <Header send={setSearchQuery}/>}
      {movieData && <MovieList data={movieData} setBooleans={setBooleans} booleans={booleans} modalData={modalData} setModalData={setModalData}/>}
      <button type="button" onClick={handlePageChange} id="loadMore">Load More</button>
      
      <Footer />
    </div>
  )
}

export default App
