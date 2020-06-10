import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function CategoryPage() {

    useEffect(() => {
        fetchCategories();
    }, []);
    
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const data = await fetch('api/categories',{ method: 'GET' });
    
        const categories = await data.json();
        //console.log(books);
        setCategories(categories);
    }
    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên Thể loại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link to={`/category/${item.id}`}>{item.category_name}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default CategoryPage;