import React, {useEffect, useState} from 'react';
import Logo from '../Product/product.jpg';

function InforBook({match}) {

	useEffect(() => {
		fetchItem();
		console.log(match);
	}, []);

	const [book, setBook] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(`http://localhost:8081/api/books/${match.params.id}`,
		{
			method: 'GET'
		});
		const book = await fetchItem.json();
		console.log(book);
		setBook(book);
	}

	function addToBag(){
		alert("Bạn đã thêm vào giỏ hàng thành công");
	}

    return(
    <div>

		<div className= "text-center">   <h2 >Thông tin sản phẩm </h2>  </div>
        <div className="row">
        	<div className="col-md-3" style={{marginLeft:"70px",marginRight:"40px"}}> 
        		<img src={book.cover} alt='ảnh sản phẩm' width="300" height="400" />
        	</div> 
        	<div className="col-md-4">
        		<div role="tabpanel" className="my-3">
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
							<h5>{book.title}</h5>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Mã sản phẩm: {book.id}</a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Tác giả: {book.author}</a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Nhà xuất bản: {book.publisher}</a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Số trang: {book.page_number}</a>
        				</li>	
        			</ul>
        			<ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Kích thước: {book.size}</a>
        				</li>	
        			</ul><ul className="nav nav-tabs" role="tablist">
        				<li role="presentation" className="active">
        					<a>Ngày phát hành: {book.day_release}</a>
        				</li>	
        			</ul>
					<h5 style={{textAlign: "center", marginTop: "40px"}}>Giới thiệu</h5>
					<p>{book.description}</p>		
        		</div>
        	</div> 
        	<div className="col-md-3">

        		<button type="button" className="btn btn-outline-secondary btn-block">
        		<del>Giá bìa: </del>
        		</button>
        		<button type="button" className="btn btn-primary btn-block">
        			Giá Sách: {book.price} VND<br/>
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
