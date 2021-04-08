import React, { useState } from 'react';
import './product.css'
const Product = () => {
    const targetProduct = JSON.parse(sessionStorage.getItem("product"))
    console.log(targetProduct);
    //  recentPic = targetProduct.photos[1]
    const [recentPic, setRecentPic] = useState(targetProduct.photos[1])
console.log(recentPic);

const addedToCart=(e) => {
    
}
return (<>
    <section className="main-section" id="main-section">

         <div className="img-div" id="img-div">
    <img className="img-main" src={recentPic} alt="" />
  </div>
  <div className="body-part">
    <h2 className="mainheading">
            {targetProduct.name}
    </h2>
    <h4 className="brand">
    {targetProduct.brand}
    </h4>
    <h4>
        Price: Rs {targetProduct.price}
    </h4>
    <h4>
        Description
    </h4>
    <p className="description">
        {targetProduct.description}
    </p>
    <h4>
        Product Preview
    </h4>
    <div className="img-previews" id="img-preview">
        {targetProduct.photos.map((pic) =>
            
        <img 
        className="img-pre" 
        src={pic}
        onClick={(e) => setRecentPic(e.target.currentSrc)}
        />
        
            )}
    </div>
  
   
    <a href="./checkout.html">
    <button className="add-button">
        BUY NOW
    </button>
    <button 
    className="add-button" 
    id="add-to-cart"
    onClick={addedToCart}
    >
        ADD TO CART
    </button>
    </a>
  </div> 
  </section>



  </>);
}
 
export default Product;