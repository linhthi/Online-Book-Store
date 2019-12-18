import React from 'react';
import './style.css';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
    return (
        <div>
             <Navbar className="topbar" bg="light" variant="light">
                <Nav className="mr-auto">
                    <Link to="/"><Nav.Link href="/">Trang chủ</Nav.Link></Link>
                    <Link to="/checkOrder"><Nav.Link href="/checkOrder">Kiểm tra đơn hàng</Nav.Link></Link>
                    <Link to="/admin"><Nav.Link href="/admin">Admin</Nav.Link></Link>
                </Nav>
            </Navbar>
        </div>
    ); 
}

export default TopBar;