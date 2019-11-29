import React from 'react';
import {Input} from 'reactstrap';

class SearchBox extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <Input type="text" name="title" id="title" placeholder="Tìm kiếm sách..."></Input>
            </div>
        );
    }
}

export default SearchBox;