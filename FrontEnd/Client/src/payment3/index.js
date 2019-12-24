import Logo from './logoheader.png';
import React from 'react';
import {Link} from 'react-router-dom' 

function Payment3() {
    return (
<div>
    <img src={Logo} alt='Logo' style={{width:"80%", marginLeft:"100px"}} />
    <div style={{marginLeft:"50px"}}>
    <h5>Thông tin người mua:</h5>
    <p>Họ và tên: </p>
    <p>Email: </p>
    <p>Số điện thoại:</p>
    <p>Địa chỉ: </p>
    <h5>Thông tin sản phẩm: </h5>

    <div >
        	<table className="table table-hover">
        		<thead>
        			<tr>
        				<th>STT</th>
        				<th >Tiêu đề</th>
        				<th >Giá</th>
        				<th >Số lượng</th>
        				<th >Tổng cộng</th>
        			</tr>
        		</thead>
        		<tbody>
        			<tr>
        				<td>1</td>
        				<td>Tôi thấy hoa vàng trên cỏ xanh</td>
        				<td>45.000 VNĐ</td>
        				<td>2</td>
        				<td>90.000 VNĐ</td>
        			</tr>
        			<tr>
        				<td></td>
        				<td>Phí vận chuyển</td>
        				<td></td>
        				<td></td>
        				<td>20.000 VNĐ</td>
        			</tr>
        			

        		</tbody>
        		<tr>
    			<th style={{float:"right", marginRight:"100px"}}> Tổng cộng : 110.000 VNĐ</th>
  				</tr>
        	</table>
        </div>
    </div>    
    <div>
    <button type="button" className="btn btn-default" style={{width:"100%",height:"50px",background:"#585858", marginBottom:"20px"}}> 
    <p style={{fontsize:"20px",color:"#ffffff"}}>Tiếp</p> </button>
  </div>

</div>
    );
}

export default Payment3;
