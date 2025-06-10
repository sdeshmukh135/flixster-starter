import './Header.css'
import { useState } from 'react'

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    

    return (
        <form id="SearchBar">
            <input type ="text" name ="search-movie" value={searchQuery} onChange={handleSearchChange} placeholder="Enter Movie Name"required/>
            <button type="submit" id="submitMovie">Search</button>
        </form>
    )
}

export default SearchForm