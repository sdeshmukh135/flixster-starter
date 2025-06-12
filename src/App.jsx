import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import { useState ,useEffect} from 'react'
import Banner from './Banner.jsx'

const App = () => {
  const [pages, setPages] = useState(1);
  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalData, setModalData] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [booleans, setBooleans] = useState({ // will add more for modal and extra stuff
    isLoading:false,
  });
  

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pages}`);
    const data = await response.json()

    if (movieData != null && booleans.isLoading) {
      //console.log(data);
      //movieData.results = [...movieData.results, ...data.results]; // FIX
      setMovieData((prev) => ({
        ...data,
        results:[...prev.results, ...data.results]
      }));
      setBooleans(prev => ({...prev, isLoading:false}));
    } else {
      setMovieData(() => data);
    }
  };

  useEffect(() => { // for testing purposes
    console.log("movieData changed", movieData);
  }, [movieData]);

  // useEffect(() => {
  //   //console.log(booleans.isModal);
    
  //   if (modalData == null) { // if false
  //     fetchData();
      
  //     if (sortOption != '') {
  //       console.log("---");
  //       handleSortQuery();
  //     }

  //     if (searchQuery != '') { // searchQuery has been changed
  //       console.log("------");
       
  //       handleSearchQuery();
  //     }
      
  //   }

  // }, [pages, searchQuery, modalData, sortOption]); // dependency array

  // only separating the useEffect worked

  //for load more
  useEffect(() => {
    fetchData();
  }, [pages]);

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

  // sort query
  useEffect(() => {
    if (sortOption !== '') {
      handleSortQuery();
    }
  }, [sortOption]);

  const handlePageChange = () => {
    setBooleans(prev => ({...prev, isLoading:true}));
    setPages(pages + 1);
  }

  const handleSearchQuery = async() => { // 
      // searchQuery now has our search
      console.log("searching")
      const apiKey = import.meta.env.VITE_APP_API_KEY
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
      const data = await response.json()
      setMovieData(data);
  }

  const handleSortQuery = async() => { // changing movieData according to sorting option
    const currentMovieData = [...movieData.results]
    if (sortOption === "title") {
      // sort using the title
      console.log("sorting by title")
      currentMovieData.sort((a,b) => a['title'].localeCompare(b['title']))
    } else if (sortOption === "date") {
      // sort using date
      currentMovieData.sort((a,b) => new Date(a['release_date']) - new Date(b['release_date']))
    } else {
      // sort using rating
      currentMovieData.sort((a,b) => (a['vote_average']) - (b['vote_average']))
    }

    const newData = {
        ...movieData,
        results:currentMovieData
      }
    console.log(currentMovieData);
    console.log(movieData);
    setMovieData(newData);
  }

  return (
    <div className="App">
      {movieData && <Header send={setSearchQuery} setSortOption={setSortOption}/>}
      <Banner />
      {movieData && <MovieList data={movieData} setBooleans={setBooleans} booleans={booleans} modalData={modalData} setModalData={setModalData}/>}
      <button type="button" onClick={handlePageChange} id="loadMore">Load More</button>
      <Footer />
    </div>
  )
}

export default App
