import React from 'react';
import Logo from '../Product/product.jpg';

function InforBook() {

	function addToBag(){
		alert("Bạn đã thêm vào giỏ hàng thành công");
	}

    return(
    <div>

		<div className= "text-center">   <h2 >Thông tin sản phẩm </h2>  </div>
        <div className="row">
        	<div className="col-md-3" style={{marginLeft:"70px",marginRight:"40px"}}> 
        		<img src={Logo} alt='ảnh sản phẩm' width="300" height="400" />
        	</div> 
        	<div className="col-md-4">
        		<div role="tabpanel" className="my-3">
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<h5>Tên sản phẩm</h5>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Mã sản phẩm: </a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Tác giả: </a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Nhà xuất bản: </a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Số trang: </a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Kích thước: </a>
        				</li>	
        			</ul><ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Ngày phát hành: </a>
        				</li>	
        			</ul>		
        		</div>
        	</div> 
        	<div className="col-md-3">

        		<button type="button" className="btn btn-outline-secondary btn-block">
        		<del>Giá bìa: </del>
        		</button>
        		<button type="button" className="btn btn-primary btn-block">
        			Giá Sách: 120.000đ <br/>
        			Đã có VAT
        		</button>
        		<button type="button" className="btn btn-primary btn-block" onClick={addToBag}>
        			THÊM VÀO GIỎ HÀNG
        		</button>

        	</div>           
		</div>
	</div>

    );
}

export default InforBook;
