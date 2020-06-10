import React, {useEffect, useState} from 'react';
import { useAppContext } from '../ContextApp/useContextApp';
import swal from 'sweetalert';


function BookItem({match}) {

	const {
        cart,
        updateCart
    } = useAppContext();

	useEffect(() => {
		fetchItem();
	}, []);

	const [book, setBook] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(`api/books/${match.params.id}`,
		{
			method: 'GET'
		});
		const book = await fetchItem.json();
		setBook(book);
	}

	function addToBag(){
		swal("Bạn đã thêm vào giỏ hàng thành công!");
		if (localStorage.getItem(book.id) !== null) {
			localStorage.setItem(book.id, parseInt(localStorage.getItem(book.id)) + 1);
		}
		else {
			localStorage.setItem(book.id, 1);
		}

		if (cart.indexOf(book) == -1) {
			cart.push(book);
			updateCart(cart);
		}
		
	}


    return(
    <div>

		<div className= "text-center">
			<h2 >Thông tin sản phẩm </h2>  
		</div>
		
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
        		<del>Giá bìa: {book.price+3000}</del>
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

export default BookItem;
