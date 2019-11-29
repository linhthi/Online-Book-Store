import React from 'react';
import SearchBox from './SearchBox';
//import Basket from './Basket';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">BookShop Online</NavbarBrand>
                
                <Nav className="mr-auto" navbar>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Danh mục sách
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Văn học
                            </DropdownItem>
                            <DropdownItem>
                            Khoa học
                            </DropdownItem>
                            <DropdownItem>
                            Ngôn tình
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                    <NavLink href="">Sách bán chạy</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">Giảm giá đặc biệt</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/categorys/">Chương trình khuyến mãi</NavLink>
                    </NavItem>
                    
                </Nav>
                <SearchBox />
               
            </Navbar>
            </div>
        );
    }
}

export default Dashboard;