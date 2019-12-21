import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


function BookList() {

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

    return(
        <ul className="list-inline" style={{marginTop: "30px", marginLeft: "60px", marginRight: "40px"}}>
            {books.map(book => (
                <li className="list-inline-item" key={book.id}>
                   {/* <h3>{book.title}</h3> */}
                    {/* <img src={book.cover} /> */}
                    <div className="card" style={{width: "10rem", height: "15rem", margin: "20px"}}>
                            <img className="card-img-top" style={{width:"8rem", height: "10rem", margin: "0 auto"}}
                            src={book.cover} alt="Card image cap" />
                        <Link to={`/book/${book.id}`}>
                            <div className="card-body" style={{margin: "0 auto"}}>
                                <a href="#" className="btn btn-primary">Xem chi tiết</a>
                            </div>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default BookList;
