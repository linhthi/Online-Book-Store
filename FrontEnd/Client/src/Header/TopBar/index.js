import React from 'react';
import './style.css';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
    return (
        <div>
             <Navbar className="topbar" bg="light" variant="light">
                <Nav className="mr-auto">
                    <Link to='/' className="topbar__style">Trang chủ</Link>
                    <Link to='/checkorder' className="topbar__style">Kiểm tra đơn hàng</Link>
                    <Link to='/Cart' className="topbar__style">Giỏ Hàng</Link>
                </Nav>
            </Navbar>
        </div>
    ); 
}

export default TopBar;