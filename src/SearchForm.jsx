import './Header.css'


const SearchForm = ({onSearchQuery}) => {

    const handleSearchChange = (event) => {
        
        event.preventDefault();
        onSearchQuery(event.target.elements['search-movie'].value);
        event.target.reset();
    };

    return (
        <form id="SearchBar" onSubmit={handleSearchChange}>
            <input type ="text" name ="search-movie" placeholder="Enter Movie Name" required/>
            <button type="submit" id="submitMovie">Search</button>
            <button type="button" id="submitMovie" onClick={() => onSearchQuery('')}>Now Playing</button>
        </form>
    )
}

export default SearchForm