import React, {useEffect, useState} from 'react';
import './style.css';
import { useAppContext } from '../../ContextApp/useContextApp';
//import {Form, FormControl} from 'react-bootstrap';

function SearchBox() {

    const {
        book
    } = useAppContext();

    const [Text, setText] = useState("");
    const [match, setMatch] = useState([]);
    handleChange = handleChange.bind(this);
    
    function handleChange(e) {
        setText(e.target.value);
        // for (let i = 0; i < books.length; i++) {
        //     if (books[i].title.includes(Text)) {
        //         console.log(books[i].title);
                
        //     }
        // };

    }

    function handleOnClick() {
        console.log(book);
    }
    console.log(Text);
    
    // useEffect(() => {
    //     fetchBooks();
    // }, []);  
    // const [books, setBooks] = useState([]);
    // const fetchBooks = async () => {
    //     const data = await fetch('http://localhost:8081/api/books',
    //         {
    //            method: 'GET' 
    //         }
    //     );
    //     const books = await data.json();
    //     console.log(books);
    //     setBooks(books);
    // }
    

    
    return (
        <div>
             <input  value={Text} onChange={handleChange}
             className="form-control mr-sm-2" type="search" placeholder="Search"
             style={{marginTop: "30px"}}>
             </input>
             {console.log(book)}

        </div>
    );
}

export default SearchBox;