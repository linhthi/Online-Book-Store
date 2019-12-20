import React, {useEffect, useState} from 'react';


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
        <ul className="list-inline" >
            {books.map(book => (
                <li className="list-inline-item" key={book.id}>
                   {/* <h3>{book.title}</h3> */}
                    {/* <img src={book.cover} /> */}
                    <div className="card" style={{width: "10rem", height: "15rem", margin: "0 auto"}}>
                        <img className="card-img-top" style={{width:"8rem", height: "10rem", margin: "0 auto"}}
                        src={book.cover} alt="Card image cap" />
                        <div className="card-body">
                            <a href="#" className="btn btn-primary">Xem chi tiết</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default BookList;
