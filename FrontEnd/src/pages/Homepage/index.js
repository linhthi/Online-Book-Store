import React from 'react';
import Dashboar from './Dashboard';
import SearchBox from './SearchBox';
import BookCard from './BookCard';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                <Dashboar />
                <BookCard />
            </div>
        );
    }
}

export default HomePage;