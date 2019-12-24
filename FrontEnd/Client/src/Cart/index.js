import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext} from '../ContextApp/useContextApp';

function Cart() {
    const {
        cart,
        updateCart
    } = useAppContext();

    

    return (

        <div className="row">
            
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h2 className="text-center">Giỏ hàng</h2>
                {console.log(cart)}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên Sách</th>
                        <th scope="col">Bìa</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.title}</td>
                                <td><img src={item.cover} style={{height: "100px", width: "100px"}}/></td>
                                <td>{item.price}</td>
                                <td>{localStorage.getItem(item.id)}</td>
                                <td>{localStorage.getItem(item.id)*item.price}</td>
                                <td><button >Xóa</button></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                <div className="confirm">
                    <Link to='/payment'>THANH TOÁN</Link>
            </div>
            </div>
            <div className="col-md-3"></div>

            
        </div>
    );
}

export default Cart;