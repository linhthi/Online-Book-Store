import React from 'react';
import InforBook from './../InforBook';
import Product from '../Product/product.js';
function BooksNewpage() {
    return(
        <div>
           	<div className= "text-center">   <h2 >Trang chủ </h2>  </div>
            <div className="container">
            	<div className="row">
            			<div className="row">
            				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            					<Product> </Product>
                                <Product> </Product>
                                <Product> </Product>
                                <Product> </Product>
            				</div>
            			</div>
            	</div>	

            </div>
		
        </div>

    );
}

export default BooksNewpage;