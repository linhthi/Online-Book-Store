import React, {useEffect, useState} from 'react';
import './style.css';
//import {Form, FormControl} from 'react-bootstrap';

function SearchBox() {

    const [Text, setText] = useState("");
    const [match, setMatch] = useState([]);
    handleChange = handleChange.bind(this);
    
    function handleChange(e) {
        setText(e.target.value);
        for (let i = 0; i < books.length; i++) {
            if (books[i].title.includes(Text)) {
                console.log(books[i].title);
                
            }
        };

    }
    console.log(Text);
    
    useEffect(() => {
        fetchBooks();
    }, []);  
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const data = await fetch('http://localhost:8081/api/books',
            {
               method: 'GET' 
            }
        );
        const books = await data.json();
        console.log(books);
        setBooks(books);
    }
    

    
    return (
        <div>
             <input  value={Text} onChange={handleChange}
             className="form-control mr-sm-2" type="search" placeholder="Search"
             style={{marginTop: "30px"}}>
             </input>
        </div>
    );
}

export default SearchBox;