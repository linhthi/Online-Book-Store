
import React from 'react';
import Logo from './bookmark.jpg';
import Logoo from './mockhoa.jpg';
import './style.css';
function PromotionPage() {
    return(
        
        <div className="main">
            <br />
        	<h1>GIÁNG SINH RINH QUÀ</h1>
        	<br />
        	<div className="Promotion">
        		<h3>Khuyến Mãi Đặc Điệt chào mừng lễ giáng sinh</h3>
        		<p>Từ ngày 21/12-31/12/2019</p>
        		<p>Chỉ cần mua từ 2 cuốn sách trở lên, mỗi cuốn sách sẽ đc tặng kèm một bookmark giáng sinh siêu đẹp</p>                            
                <div>                                
                    <img className="logo" src={Logo} alt="ảnh sản phẩm"/>                                
                </div>
                <br />
                <p>Không những thế, với những hóa đơn hàng trên 500k bạn sẽ nhận được thêm một bộ móc khóa noen</p>
                <br />
                <div>                                
                    <img className="logo" src={Logoo} alt="ảnh sản phẩm"/>                                
                </div>
            </div>
        </div>
    );
}
export default PromotionPage;