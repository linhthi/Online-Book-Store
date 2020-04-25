import React, {useState, useEffect} from 'react';

function ManageOrder() {

    useEffect(() => {
        fetchOrders();
    }, []);
    
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const data = await fetch('http://localhost:8081/api/orders',{method: 'GET' }
        );
    
        const orders = await data.json();
        //console.log(books);
        setOrders(orders);
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
                        {orders.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.client_name}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.product_name}</td>
                                <td>{item.address}</td>
                                <td>{item.amount}</td>
                                <td>{item.status}</td>
                                <td>{item.order_date}</td>
                                <td><button>Sửa</button></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
        </div>
    );
}

export default ManageOrder;
