import React from 'react';
import {Button} from 'reactstrap';

class Basket extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Button >
                    <i class="fas fa-cart-plus"></i>
                </Button>
            </div>
        );
    }
}

export default Basket;