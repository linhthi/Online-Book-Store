import React from 'react';
import {Link} from 'react-router-dom' 

function Cart() {
    return (
    	<div>
        <h2 className="text-center">Giỏ hàng</h2>
        <button className="btn btn-primary">
        	<Link to='/payment'>THANH TOÁN</Link>
        </button>
        </div>
    );
}

export default Cart;