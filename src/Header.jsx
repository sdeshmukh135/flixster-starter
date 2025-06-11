import './Header.css'
import SearchForm from './SearchForm.jsx'



const Header = ({send}) => {

    const handleSearchChange = (input) => {
        send(input);
    };
    

    return (
        <div className="body">
            <h1>Flixster</h1>
            <div className ="toggleBar">
                 <SearchForm onSearchQuery={handleSearchChange} />
            </div>
        </div>
        
    );
}

export default Header