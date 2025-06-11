import './Header.css'


const SearchForm = ({onSearchQuery, fetchData}) => {

    const handleSearchChange = (event) => {
        
        event.preventDefault();
        //console.log(event.target.elements['search-movie'].value);
        onSearchQuery(event.target.elements['search-movie'].value);
        event.target.reset();
    };

    const handleFetchData = async () => {
        
        await fetchData();
    }


    return (
        <form id="SearchBar" onSubmit={handleSearchChange}>
            <input type ="text" name ="search-movie" placeholder="Enter Movie Name" required/>
            <button type="submit" id="submitMovie">Search</button>
            <button type="button" id="submitMovie" onClick={handleFetchData}>Clear</button>
        </form>
    )
}

export default SearchForm