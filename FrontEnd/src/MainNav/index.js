import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function MainNav() {
    const navStyle = {
        color: 'black',
        fontSize: '18px'
    }


    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <Link to="/category" style={navStyle}>
                        <li>Danh mục sách</li>
                    </Link>

                    <Link to="/topselling" style={navStyle}>
                        <li>Sách bán chạy</li>
                    </Link>

                    <Link to="promotion" style={navStyle}>
                        <li>Chương trình khuyến mại</li>
                    </Link>  

                    <Link to="discountSpecial" style={navStyle}>
                            <li>Giảm giá đặc biệt</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default MainNav;