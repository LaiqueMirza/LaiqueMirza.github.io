
import React from 'react';
import { Link } from "react-router-dom";
import "./featuredProduct.css";


const FeaturedProduct = () => {

  
  return (
    <div className="featuredProductDiv">
      <h2 className="featuredProducth2">FEATURED PRODUCTS</h2>
      <div className="featuredProductDiv2">
        <div className="featuredProductCard">
        <Link
            to="/shop"
            style={{ textDecoration: "none", color: "black" }}
          >
          <div className="productImageMainDiv">
            <img
              className="productImageMain"
              src="https://product.koovs.com/167694_32fbd589bdb54a1f8572cff9d18daa2e_image1_super_zoom.webp"
              alt="product image"
            />
          </div>
          <h3 className="productNameMain">White Tent </h3>
          <h3 className="productBrandMain">Polo tshirsts </h3>
          <h3 className="productPriceMain">₹ 200</h3>
          {/* <button className="productButtonMain">Details</button> */}
          </Link>
        </div>
        <div className="featuredProductCard">
          <Link
            to="/shop"
            style={{ textDecoration: "none", color: "black" }}
          > 
          
          <div className="productImageMainDiv">
          <img
              className="productImageMain"
              src="https://product.koovs.com/167694_32fbd589bdb54a1f8572cff9d18daa2e_image1_super_zoom.webp"
              alt="product image"
            />
          </div>
          <h3 className="productNameMain">White Tent </h3>
          <h3 className="productBrandMain">Polo tshirsts </h3>
          <h3 className="productPriceMain">₹ 200</h3>
          {/* <button className="productButtonMain">Details</button> */}
          </Link>
        </div>
        <div className="featuredProductCard">
          <Link
            to="/shop"
            style={{ textDecoration: "none", color: "black" }}
          >
          <div className="productImageMainDiv">
             <img
              className="productImageMain"
              src="https://product.koovs.com/167694_32fbd589bdb54a1f8572cff9d18daa2e_image1_super_zoom.webp"
              alt="product image"
            />
          </div>
          <h3 className="productNameMain">White Tent </h3>
          <h3 className="productBrandMain">Polo tshirsts </h3>
          <h3 className="productPriceMain">₹ 200</h3>        
          {/* <button className="productButtonMain">Details</button> */}
          </Link>
        </div>
      </div>
      <Link
            to="/shop"
            style={{ textDecoration: "none", color: "black" }}
          >
             <button className="featuredProductButton">View All Products</button>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
