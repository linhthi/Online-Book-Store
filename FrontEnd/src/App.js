import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
//import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import Header from './Header';
import Brand from './Brand';
import MainNav from './MainNav';
import BooksNewPage from './BooksNewPage';
import CategoryPage from './CategoryPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Brand />
        <MainNav />
        <Route path="/category" component={CategoryPage} />
        <Route path="/topselling" component={CategoryPage} />
        <Route path="/promotion" component={CategoryPage} />
        <Route path="/discoutSpecial" component={CategoryPage} />
        <Route path="/" exact component={BooksNewPage} />
      </div>
      </Router>
  );
}

export default App;