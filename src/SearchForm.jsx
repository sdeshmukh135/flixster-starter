import './Header.css'
import { useState} from 'react'

const SearchForm = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (event) => {
        
        event.preventDefault();
        props.onSearchQuery(event.target.elements['search-movie'].value);

    };

    const handleClear = () => {
        setSearchInput("");
        props.onSearchQuery('');
    }

    return (
        <form id="SearchBar" onSubmit={handleSearchChange}>
            <input type ="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} name ="search-movie" placeholder="Enter Movie Name" required/>
            <button type="submit" id="submitMovie">Search</button>
            <button type="button" id="submitMovie" onClick={() => handleClear()}>Clear</button>
        </form>
    )
}

export default SearchForm