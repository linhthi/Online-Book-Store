import React, { useState } from 'react';
import swal from 'sweetalert';

function Payment() {

	const [name, setName] = useState("");
	const [phone_num, setPhone_num] = useState("");
	const [address, setAddress] = useState("");

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handPhoneNumberChange(e) {
		setPhone_num(e.target.value);
	}

	function handleAddressChange(e) {
		setAddress(e.target.value);
	}

	function confirm(e) {
		console.log(name, phone_num, address);
		fetchPayment();
	}

	function fetchPayment() {
		fetch(`api/orders`, {
			"method": "POST",
			"headers": {
				"content-type": "application/json",
				"accept": "application/json"
			},
			"body": JSON.stringify({
				client_name: name,
				phone_number: phone_num,
				product_name: "Tham tham mua he",
				address: address,
				amount: 65000,
				status: "ready"
			})
		})
		.then(response => response.json())
		.then(response => {
			console.log(response);
			swal("Ban da dat sach thanh cong!")
		})
		.catch(err => {
			console.log(err);
			swal("Loi");
		});
	}

	return (
		<div style={{marginTop: "2%"}}>
			<div className="row">
			<div className="col-sm-3"></div>

			<div className="col-sm-6" style={{backgroundColor: 'lightblue'}}>
				<div className="d-flex justify-content-center" style={{marginTop: "2%"}}>
					<strong >HOÀN TẤT THÔNG TIN</strong>
				</div>

				<div className="row">
				<div className="col">
					<div className="form-group">
						<label for="name">Họ và tên:</label>
						<input type="text" className="form-control" id="name" placeholder="Nhập tên" 
							onChange={handleNameChange}/>
					</div>
				</div>

				<div className="col">
					<div className="form-group">
					<label for="phone_number">Số điện thoại:</label>
					<input type="text" className="form-control" id="phone_number" placeholder="Nhập số điện thoại" 
						onChange={handPhoneNumberChange}/>
					</div>
				</div>
				</div>

				<div className="form-group">
					<label for="address">Địa chỉ:</label>
					<input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ"
						onChange={handleAddressChange}/>
				</div>

				<div>
					<label>Tên sản phẩm</label>
					<div style={{backgroundColor: 'white'}}><strong>Tham tham mua he, Tat den</strong></div>
				</div>

				<div style={{marginTop: "2%"}}>
					<label>Don gia</label>
					<div style={{backgroundColor: 'white'}}><strong>150000 Vnd</strong></div>
				</div>

				<div className="d-flex justify-content-center" style={{marginTop: "2%", marginBottom: "2%"}}>
					<button onClick={confirm}>Xac nhan</button>
				</div>

			</div>  

			<div className="col-sm-3"></div>
			
			</div>
		</div>
		)}

export default Payment;
