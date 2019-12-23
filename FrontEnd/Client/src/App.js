import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
//import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import Header from './Header';
import Brand from './Brand';
import MainNav from './MainNav';
import BooksNewPage from './BooksNewPage';
import CategoryPage from './CategoryPage';
import Checkorder from './Check-order';
import Cart from './Cart';
import InforBook from './InforBook/index.js';
import Payment from './payment/index.js';
import BookList from './BookList';
import PromotionPage from './PromotionPage';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Brand />
        <MainNav />
        <Route path="/category" component={CategoryPage} />
        <Route path="/topselling" component={BookList} />
        <Route path="/promotion" component={PromotionPage} />
        <Route path="/discountSpecial" component={CategoryPage} />
        <Route path="/" exact component={BooksNewPage} />
        <Route path="/Checkorder" exact component={Checkorder} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/infor" exact component={InforBook} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/book/:id" component={InforBook} />
      </div>
      </Router>
  );
}

export default App;