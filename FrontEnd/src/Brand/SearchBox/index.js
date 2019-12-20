import React from 'react';
// import './style.css';
import {Form, FormControl} from 'react-bootstrap';

function SearchBox() {
    return (
        <div>
            <Form>
                <FormControl type="text" placeholder="Enter title book" className="mr-sm-2"></FormControl>
            </Form>
        </div>
    );
}

export default SearchBox;