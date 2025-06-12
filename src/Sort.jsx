import { useState, useEffect} from 'react'
import './Sort.css'

const Sort = ({setSortOption}) => {
    const [isOpen, setIsOpen] = useState(false); // set if the dropdown menu is open

    const handleIsOpen = () => {
        setIsOpen(!isOpen); // opposite what is currently there
    }

    const handleButtonChoice = (type) => {
        // pass this back to the main App.jsx to change the order of the data sent to fetch data
        setSortOption(type);
   
    };

    return (
        <div className="dropdown-container" >
            <div className="dropdown" onClick={handleIsOpen}>
                Sort
                {isOpen && <div className="dropdown-menu">
                    <button className="sort" onClick={() => handleButtonChoice("title")}>Title</button>
                    <button className="sort" onClick={() => handleButtonChoice("date")}>Release Date</button>
                    <button className="sort" onClick={() => handleButtonChoice("rating")}>Rating</button>
                </div>}
            </div>
        </div>
    )
}

export default Sort