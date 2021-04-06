import axios from "axios";
import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/product";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
   
  //   axios
  //     .get("/api/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  //       setLoading(false);
     
  // }, []);
  // console.log(products);
  return (
    <div className="shopDiv">
      Shop
      {/* {loading && <h1>Loading...</h1>}
      {products.map((product) => (
        <Product name={product.name} />
      ))} */}
    </div>
  );
};

export default Shop;
