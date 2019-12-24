import React, {useEffect, useState} from 'react';

function Checkorder() {

	const [id, setId] = useState("");
	const [order, setOrder] = useState({});
	function handleOnChange(e) {
		setId(e.target.value);
	}
	function handleOnClick(e) {
		fetchItem();
	}
	const fetchItem = async () => {
		const fetchItem = await fetch(`http://localhost:8081/api/orders/${id}`,
		{
			method: 'GET'
		});
		const order = await fetchItem.json();
		setOrder(order);
	}
    return(
    <div>

		<div >
			<div className= "text-center">   <h2 >Kiểm Tra Đơn Hàng </h2>  </div>
			<div style={{marginLeft:"50px"}}>  
				<form method="POST" role="form">
					<div className="col-md-4">
					<input type="number" className="form-control" placeholder="Nhập mã đơn hàng của bạn"
						onChange={handleOnChange}></input>
					</div>	<br/>
					<button type="button" className="btn btn-info" style={{marginLeft:"50px"}} 
						onClick={handleOnClick}>
						<span className="glyphicon glyphicon-search"></span> Search
					</button>
				</form>
		</div>
		
		</div>
		<br/>
        <div className="row" >
        	<div className="col-md-1"></div>
			<div className="col-md-10">
			<table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Tên Khách Hàng</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ngày đặt</th>
						<th scope="col">Giá</th>
                        <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr >
								<th scope="row">{order.id}</th>
                                <td>{order.client_name}</td>
                                <td>{order.phone_number}</td>
                                <td>{order.address}</td>
                                <td>{order.product_name}</td>
								<td>{order.createdAt}</td>
								<td>{order.amount}</td>
                                <td>{order.status}</td>
                            </tr>
                        
                    </tbody>
                </table>
			</div>
			<div className="col-md-1"></div>
			
        </div>


	</div>
    );
}

export default Checkorder;