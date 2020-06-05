import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import ManageBook from './ManageBook';
import ManageOrder from './ManageOrder';
import DeleteOrder from './DeleteOrder';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div>
        {/* <Login /> */}
        <NavBar />
        <Route path="/manageBook" component={ManageBook}></Route>
        <Route path="/manageOrder" component={ManageOrder}></Route>
        <Route path="/managerOrder/delete/:id" component={DeleteOrder} />
      </div>
    </Router>
  );
}

export default App;