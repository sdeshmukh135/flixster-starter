import './Header.css'
import SearchForm from './SearchForm.jsx'


const Header = () => {
    

    return (
        <div className="body">
            <h1>Flixster</h1>
            <div className ="toggleBar">
                 <SearchForm />
            </div>
        </div>
        
    );
}

export default Header