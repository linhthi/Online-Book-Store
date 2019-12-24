import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function NavBar() {

    const navStyle = {
        color: 'white',
        fontSize: '18px'
    }
    
    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <Link to="/manageBook" style={navStyle}>
                        <li>Quản lý Sách</li>
                    </Link>

                    <Link to="/manageOrder" style={navStyle}>
                        <li>Quản lý Đơn Hàng</li>
                    </Link>

                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
