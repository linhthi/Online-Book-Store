import React, {useState, useEffect} from 'react';
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
import BookItem from './BookItem';
import Payment from './payment';
import BookList from './BookList';
import PromotionPage from './PromotionPage';
import CategoryItem from './CategoryItem';
import Slider from './Slider'
function App() {

  return (
    <Router>
      <div>
        <Header />
        <Brand />
        <MainNav />
        <Route path="/category/:id" component={CategoryItem} />
        <Route path="/category" exact component={CategoryPage} />
        <Route path="/topselling" component={BookList} />
        <Route path="/promotion" component={PromotionPage} />
        <Route path="/discountSpecial" component={BookList} />
        <Route path="/" exact component={BooksNewPage} />
        <Route path="/Checkorder" exact component={Checkorder} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/infor" exact component={BookItem} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/book/:id" component={BookItem} />
      </div>
      </Router>
  );
}

export default App;