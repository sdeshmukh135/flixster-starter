import './Header.css'
import SearchForm from './SearchForm.jsx'
import Sort from './Sort.jsx'
import Sidebar from './Sidebar.jsx'


const Header = (props) => {

    const handleSearchChange = (input) => {
        props.send(input);
    };
    

    return (
        <div className="body">
            <h1>Flixster</h1>
            <div className ="toggleBar">
                 <SearchForm onSearchQuery={handleSearchChange} />
                 <Sort setMovieData={props.setMovieData} movieData={props.movieData} />
                 <Sidebar setMovieData={props.setMovieData} movieData={props.movieData} watchedMovies={props.watchedMovies} fetchData={props.fetchData}/>
            </div>
        </div>
        
    );
}

export default Header