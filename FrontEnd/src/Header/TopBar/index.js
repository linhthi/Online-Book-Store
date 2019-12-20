import React from 'react';
import './style.css';
import { Navbar, Nav} from 'react-bootstrap';

function TopBar() {
    return (
        <div>
             <Navbar className="topbar" bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Trang chủ</Nav.Link>
                    <Nav.Link href="/checkorder">Kiểm tra đơn hàng</Nav.Link>
                    <Nav.Link href="/admin">Đăng nhập Admin</Nav.Link>
                    <Nav.Link href="/Cart">Giỏ hàng</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    ); 
}

export default TopBar;