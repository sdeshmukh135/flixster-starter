import './Header.css'
import { useState } from 'react'
import MovieData from "./data/data.js"

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState(MovieData);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        const filteredData = MovieData.results.filter(movie)
        

        setSearchQuery(event.target.value);
    };


    return (
        <form id="SearchBar">
            <input type ="text" name ="search-movie" value={searchQuery} onChange={handleSearchChange} placeholder="Enter Movie Name" required/>
            <button type="submit" id="submitMovie">Search</button>
        </form>
    )
}

export default SearchForm