import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ManageOrder() {

    useEffect(() => {
        fetchOrders();
    }, []);
    
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const data = await fetch('api/orders',{method: 'GET' }
        );
    
        const orders = await data.json();
        //console.log(books);
        setOrders(orders);
    }

    function deleteOrder(item) {
        console.log(item);
    }
    

    return(
        <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên Khách hàng</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Tên sách</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Tổng</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col">Ngày đặt</th>
                        <th scope="col">Sửa</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.client_name}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.product_name}</td>
                                <td>{item.address}</td>
                                <td>{item.amount}</td>
                                <td>{item.status}</td>
                                <td>{item.order_date}</td>
                                <td>
                                    <Link to={`/managerOrder/edit/${item.id}`}>
                                        <button>Sửa</button>
                                    </Link>
                                    <Link to={`/managerOrder/delete/${item.id}`}>
                                        <button>Xoa</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
        </div>
    );
}

export default ManageOrder;
