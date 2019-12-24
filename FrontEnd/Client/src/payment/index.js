import Logo from './logoheader.png';
import React from 'react';
import {Link} from 'react-router-dom' 

function Payment1() {
    return (
<div>
        <img src={Logo} alt='Logo' style={{width:"80%", marginLeft:"100px"}} />
    <div style={{marginLeft:"150px"}}>
      <strong >Thông tin người mua:</strong>

      <div style={{marginRight:"200px"}}>
        <div className="form-group">
          <label for="ten">Họ và tên:</label>
          <input type="text" className="form-control" id="ten" placeholder="Nhập tên" name="text"/>
        </div>
        <div className="form-group">
          <label for="sdt">Số điện thoại:</label>
          <input type="number" className="form-control" id="sdt" placeholder="Nhập số điện thoại" name="sdt"/>
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Nhập email" name="email"/>
        </div>
        <div className="form-group">
          <label for="node">Ghi chú:</label>
          <input type="text" className="form-control" id="node" placeholder="" name="node"/>
        </div>
      </div> 
    </div>       

<div style={{marginLeft:"150px"}}>
      <strong>Địa chỉ nhận hàng:</strong>

      <div style={{marginRight:"200px"}}>
        <div className="form-group">
          <label for="tp">Địa chỉ:</label>
          <input type="text" className="form-control" id="tp" placeholder="Nhập địa chỉ" name="tp"/>
        </div>
        
      </div> 
</div>       
  
<div>
<Link to='/payment2'>
<button type="button" class="btn btn-default" style={{width:"100%",height:"50px",background:"#585858", marginBottom:"20px"}}> 
    <p style={{fontsize:"20px",color:"#ffffff"}}>Tiếp</p> </button>
</Link>    
</div>
</div>
    );
}

export default Payment1;
