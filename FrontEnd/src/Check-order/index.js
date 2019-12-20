import React from 'react';

function Checkorder() {
    return(
    <div>

    <div >
       	<div className= "text-center">   <h2 >Kiểm Tra Đơn Hàng </h2>  </div>
       	<div>  
       		<form method="POST" role="form">
		       	<div className="form-group">
		       	<input type="number" className="form-control" placeholder="Nhập mã đơn hàng của bạn"></input>
		       	</div>	
		       	 <button type="button" class="btn btn-info" >
               <span class="glyphicon glyphicon-search"></span> Search
             </button>
       		</form>
       </div>
    
    </div>

        <div className="row">
        	<div className="col-md-1">STT </div>
        	<div className="col-md-2">Mã đơn hàng </div>
        	<div className="col-md-2">Người mua </div>
        	<div className="col-md-3">Địa chỉ </div>
        	<div className="col-md-2">Ngày mua </div>
        	<div className="col-md-2">Trạng thái </div>		
        </div>

	</div>
    );
}

export default Checkorder;