import React from 'react';
import InforBook from './../InforBook';
import Logo from './product.jpg'
import {Router, Link} from "react-router-dom";

function Product() {
    return(
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                            <h4>Tên sản phẩm</h4>
                            <div>
                                <Link to="/infor">
                                <img src={Logo} alt="ảnh sản phẩm"/>
                                </Link>
                                
                            </div>

                            <p>
                                Giá: 45.000 VND
                            </p>
                            <p>
                                <a className="btn btn-primary">Thêm vào giỏ hàng</a>

                            </p>
                        </div>
                    </div>
                </div>
            
		
        

    );
}
export default Product;