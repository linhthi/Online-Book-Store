import React from 'react';
import Logo from '../brand.png';
import './style.css';
import SearchBox from './SearchBox';

function Brand() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <img src={Logo} alt="Logo name" />
                    </div>
                    <div className="col2">
                        <SearchBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;