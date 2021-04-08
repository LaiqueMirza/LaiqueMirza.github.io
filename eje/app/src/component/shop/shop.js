import axios from "axios";
import React, { useEffect, useState } from "react";
import "./shop.css";
import Products from "../product/products/products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
        setLoading(false);
       
  }, []);
  console.log(products);
  return (
    <div className="shopDiv">
      {loading && <h1>Loading...</h1>}
      
<section className="clothing-section">

<h3 className="header-clothing">Clothing for Men and Women</h3>

<div className="clothing" id="clothing">
{products.map((product) => (
        <Products
         data={product} 
        key={product.id}
        />
      ))}
</div>
    

</section>
      
    </div>
  );
};

export default Shop;
