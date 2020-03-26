import React, {useEffect, useState} from 'react';
import './style.css';
import { useAppContext } from '../../ContextApp/useContextApp';
import {Link} from 'react-router-dom';

function SearchBox() {

    const {
        book
    } = useAppContext();

    const [load, setLoad] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
        setLoad(false);
    };

    const deleteList = event => {
        setLoad(true);
    }
    
    React.useEffect(() => {
        const results = book.filter(book =>
          book.title.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
    
    return (
        <div>
             <input value={searchTerm} 
                    onChange={handleChange}
                    className="form-control mr-sm-2"
                    type="search" placeholder="Search"
                    style={{marginTop: "30px"}}>
             </input>

             <ul style={!load ? {} : { display: 'none' }}>
                {searchResults.map(item => (
                    <li>
                        <Link to={`/book/${item.id}`}>
                            <div>
                                <a href="#" className="btn btn-primary" onClick={deleteList}>
                                    {item.title}
                                </a>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default SearchBox;