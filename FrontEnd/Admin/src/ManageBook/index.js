import React, {useEffect, useState} from 'react';

function ManageBook() {

    useEffect(() => {
        fetchBooks();
    }, []);
    
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const data = await fetch('api/books',
            {
               method: 'GET' 
            }
        );
    
        const books = await data.json();
        //console.log(books);
        setBooks(books);
    }
    return(
        <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Tác giả</th>
                        <th scope="col">Bìa</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td><img src={item.cover} style={{height: "100px", width: "100px"}}/></td>
                                <td>{item.price}</td>
                                <td><button >Sửa</button></td>
                                <td><button >Xóa</button></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
        </div>
    );
}

export default ManageBook;
