import React from 'react';

function Payment() {
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
                <input type="text" className="form-control" id="name" placeholder="Nhập tên" name="name"/>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label for="phone_number">Số điện thoại:</label>
              <input type="text" className="form-control" id="phone_number" placeholder="Nhập số điện thoại" name="phone_number"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="address">Địa chỉ:</label>
          <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ" name="address"/>
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
          <button>Xac nhan</button>
        </div>


      </div>  

      <div className="col-sm-3"></div>
    
    </div>
  </div>
    )}

export default Payment;
