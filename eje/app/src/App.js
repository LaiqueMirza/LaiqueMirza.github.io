import React from "react";
import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Shop from "./component/shop/shop";
import Cart from "./component/cart/cart";
import Product from "./component/product/product/product";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  userParam,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
          <Route component={() => <h1>You are lost baby girl</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
