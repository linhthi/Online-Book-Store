import React from 'react';
import './style.css';

function MainNav() {
    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <li>Danh mục sách</li>
                    <li>Sách bán chạy</li>
                    <li>Chương trình khuyến mại</li>
                    <li>Giảm giá đặc biệt</li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNav;