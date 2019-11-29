import React from 'react';
import HomePage from '../pages/Homepage';
import BookDetail from '../pages/BookDetail';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                <HomePage />
                <BookDetail />
            </div>
        );
    }
    
}

export default App;