import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import ManageBook from './ManageBook';
import ManageOrder from './ManageOrder'

function App() {
  return (
    <Router>
      <div>
        <Login />
        <ManageBook />
        <ManageOrder />
      </div>
      </Router>
  );
}

export default App;