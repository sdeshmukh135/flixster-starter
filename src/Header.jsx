import './Header.css'
import SearchForm from './SearchForm.jsx'
import Sort from './Sort.jsx'


const Header = (props) => {

    const handleSearchChange = (input) => {
        props.send(input);
    };
    

    return (
        <div className="body">
            <h1>Flixster</h1>
            <div className ="toggleBar">
                 <SearchForm onSearchQuery={handleSearchChange} />
                 <Sort setSortOption={props.setSortOption} />
            </div>
        </div>
        
    );
}

export default Header