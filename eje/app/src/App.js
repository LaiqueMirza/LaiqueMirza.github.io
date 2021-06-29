import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import blog from "./component/blog/blog";
// import Contact from "./component/contact/contact";
import SignUp from "./component/Log/signUp/signUp";
import LogIn from "./component/Log/logIn/logIn";
import Shop from "./component/shop/shop";
import MainCart from "./component/mainCart/mainCart";
import Checkout from "./component/checkout/checkout";
import Product from "./component/product/product/product";
import AddressSection1 from "./component/addressSection/addressSection1/addressSection1";
import SelectAddress from "./component/addressSection/selectAddress/selectAddress";
import RenderSearchResult from "./component/renderSearchResult/renderSearchResult";
import "./App.css";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  userParam,
} from "react-router-dom";

function App() {
  // useEffect(() =>{
  //   console.log("use")
  // },[])
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={blog} />
          <Route path="/shop" component={Shop} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/logIn" component={LogIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/cart" component={MainCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/address" component={AddressSection1} />
          <Route path="/addressNew" component={SelectAddress} />
          <Route path="/product" component={Product} />
          <Route path="/searchResult" component={RenderSearchResult} />
          <Route component={() => <h1>You are lost baby girl</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
