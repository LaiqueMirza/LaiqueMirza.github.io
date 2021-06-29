import React, { useEffect, useState } from 'react';
import './product.css'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { incrementCart, selectedSize } from '../../redux/action/index';
import { useHistory } from "react-router-dom";
// import { STATES } from 'mongoose';


const Product = () => {

  // const loginUser = useSelector((state) => state.loginUser);
  // console.log(loginUser,">>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<")
  const [loginCheck, setLoginCheck] = useState(false);

  const [checkSelectedSize,setCheckSelectedSize] = useState("")
  const[targetProduct, setTargetProduct] = useState(JSON.parse(sessionStorage.getItem("product")))
  const [quantity, setQuantity] = useState(targetProduct.quantity);
  const history = useHistory();

  const incrementQuantity =() => {
    if(quantity >= 10) {
      return;
    }
    
    setQuantity(quantity + 1);
    // console.log(quantity)
    // targetProduct.quantity = quantity;
  }
  const decrementQuantity =() => {
    if(quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);   
    // console.log(quantity)
    // targetProduct.quantity = quantity;
  }
  // console.log(quantity)
  targetProduct.quantity = quantity;
  const dispatch= useDispatch();
  //   const targetProduct = JSON.parse(sessionStorage.getItem("product"))
  useEffect(() => {
    setLoginCheck(JSON.parse(sessionStorage.getItem("login")));
  },[])


    const handleSizeClick =(e) => {
      let selectSize = e.target.innerHTML
      console.log(e.target.innerHTML);
      // dispatch(selectedSize(selectSize));
      setTargetProduct({...targetProduct, selectedSize: selectSize});
      setCheckSelectedSize(selectSize);

    }
    console.log(targetProduct);
    
    const [recentPic, setRecentPic] = useState(targetProduct.photos[1])

    console.log(loginCheck);
      function incrementingTheCartCount() {
        if(!loginCheck){

          alert("SignUp or LogIn First");
          history.push("/signUp")

  //      let countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
       
        
    
  //   // ---------------------------
    
  //   // making the local storage if it is not there
  //   // console.log(localStorage.getItem("theAddedItems"))
  //   if(!localStorage.getItem("theAddedItems")) {
  //   let theAddedItems = [];
  //     theAddedItems.push(targetProduct);
  //     countOfCart = countOfCart + 1;
  //     countOfCart = JSON.stringify(countOfCart)
  //     localStorage.setItem("countOfCart", countOfCart);
  //     countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
  //     dispatch(incrementCart(countOfCart));
     
  //       console.log("Setting the local Storage Cart",targetProduct)
  //       console.log(theAddedItems,targetProduct)
  //     theAddedItems = JSON.stringify(theAddedItems);
  //   localStorage.setItem("theAddedItems", theAddedItems) ;
    
  //   } else{
  //   //parsing the local storage if the item is not there thanupadting
  //   let theAddedItems = JSON.parse(localStorage.getItem("theAddedItems"))
  //   // console.log(theAddedItems[0].id,"id")
  //   const lengthOfItemsInCart = theAddedItems.length;
  //   let thereInCart = false
  //   for(let i = 0; i< lengthOfItemsInCart; i++){
  //     if(theAddedItems[i]._id === targetProduct._id && theAddedItems[i].selectedSize === checkSelectedSize){
  //       console.log("Product Is already there in cart");
  //       alert("Same Item is already There in Cart")

  //       // console.log(checkSelectedSize)
  //       // console.log(theAddedItems[i].selectedSize)
  //       // console.log(theAddedItems[i].id)
  //       // console.log(targetProduct.id)
  //       thereInCart = true;
  //     }
  //   }
  //   if(!thereInCart){
  //     theAddedItems.push(targetProduct);
  //     console.log("Product Added  as it was not there in cart")
   
  //     countOfCart = countOfCart + 1;
  //     countOfCart = JSON.stringify(countOfCart)
  //     localStorage.setItem("countOfCart", countOfCart);
  //     countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
  //     dispatch(incrementCart(countOfCart));
  //     console.log(countOfCart)
  //   }
  //   theAddedItems = JSON.stringify(theAddedItems);
  //   localStorage.setItem("theAddedItems", theAddedItems) 
    
  //       console.log(theAddedItems)
  // }
        
} else {

let userData = JSON.parse(sessionStorage.getItem("userInfo"))  

if(userData.countOfCart === 0) {
  // let userModified = 
  userData.userCart.itemsInCart.push(targetProduct);
  userData.userCart.countOfCart+=1;
  let countOfCart = userData.userCart.countOfCart;
  dispatch(incrementCart(countOfCart));

  // adding the data on the mongodb data base through post request
axios.post("/users",{
  userData
}).then(res =>{
console.log(res.data);
}).catch(err =>alert("Could Not Add To Cart"))

  console.log(userData,"1111111111111>>>>>>>>>>>>>>");
  sessionStorage.setItem("userInfo", JSON.stringify(userData));
} else{
  let itemsInCart =  userData.userCart.itemsInCart;
  let thereInCart = false
    for(let i = 0; i< itemsInCart.length; i++){
      console.log(itemsInCart[i]._id , targetProduct._id,itemsInCart[i].selectedSize,checkSelectedSize)
  
      if(itemsInCart[i]._id === targetProduct._id && itemsInCart[i].selectedSize === checkSelectedSize){
        console.log("Product Is already there in cart");
        alert("Same Item is already There in Cart")
        // console.log(checkSelectedSize)
        // console.log(theAddedItems[i].selectedSize)
        // console.log(theAddedItems[i].id)
        // console.log(targetProduct.id)
        thereInCart = true;
      }
    }
    if(!thereInCart){
      userData.userCart.itemsInCart.push(targetProduct);
  userData.userCart.countOfCart+=1;
  let countOfCart = userData.userCart.countOfCart;
  dispatch(incrementCart(countOfCart));

  // adding the data on the mongodb data base through post request
  axios.post("/users",{
    userData
}).then(res =>{
  console.log(res.data);
}).catch(err =>alert("Could Not Add To Cart"))


   console.log(userData,"22222222222222>>>>>>>>>>>>>>");
  sessionStorage.setItem("userInfo", JSON.stringify(userData));

    }
  sessionStorage.setItem("userInfo", JSON.stringify(userData));

}

//   let countOfCart = JSON.parse(localStorage.getItem("countOfCart"));

//   // ---------------------------
  
//   // making the local storage if it is not there
//   // console.log(localStorage.getItem("theAddedItems"))
//   if(!localStorage.getItem("theAddedItems")) {
//   let theAddedItems = [];
//     theAddedItems.push(targetProduct);
//     countOfCart = countOfCart + 1;
//     countOfCart = JSON.stringify(countOfCart)
//     localStorage.setItem("countOfCart", countOfCart);
//     countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
//     dispatch(incrementCart(countOfCart));
   
//       console.log("Setting the local Storage Cart",targetProduct)
//       console.log(theAddedItems,targetProduct)
//     theAddedItems = JSON.stringify(theAddedItems);
//   localStorage.setItem("theAddedItems", theAddedItems) ;
  
//   } else{
//   //parsing the local storage if the item is not there thanupadting
//   let theAddedItems = JSON.parse(localStorage.getItem("theAddedItems"))
//   // console.log(theAddedItems[0].id,"id")
//   const lengthOfItemsInCart = theAddedItems.length;
//   let thereInCart = false
//   for(let i = 0; i< lengthOfItemsInCart; i++){
//     if(theAddedItems[i]._id === targetProduct._id && theAddedItems[i].selectedSize === checkSelectedSize){
//       console.log("Product Is already there in cart")
//       console.log(checkSelectedSize)
//       console.log(theAddedItems[i].selectedSize)
//       thereInCart = true;
//     }
//   }
//   if(!thereInCart){
//     theAddedItems.push(targetProduct);
//     console.log("Product Added  as it was not there in cart")
 
//     countOfCart = countOfCart + 1;
//     countOfCart = JSON.stringify(countOfCart)
//     localStorage.setItem("countOfCart", countOfCart);
//     countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
//     dispatch(incrementCart(countOfCart));
//     console.log(countOfCart)
//   }
//   theAddedItems = JSON.stringify(theAddedItems);
//   localStorage.setItem("theAddedItems", theAddedItems) 
  
//       console.log(theAddedItems)
// }
     
}
      }
    //   cart inner html will be count of cart

   
return (<>
    <section className="main-sectionProduct" id="main-section">
         <div className="img-divProduct" id="img-div">
    <img className="img-mainProduct" src={recentPic} alt="" />
  </div>
  <div className="body-partProduct">
    <h2 className="mainheadingProduct">
            {targetProduct.productName}
    </h2>
    <h4 className="brandProduct">
    {targetProduct.brand}
    </h4>
    <h4>
        Price: Rs {targetProduct.price}
    </h4>
    
    <h4>
        Product Preview
    </h4>
    <div className="img-previewsProduct" id="img-preview">
        {targetProduct.photos.map((pic) =>
            
        <img 
        className="img-preProduct" 
        src={pic}
        onClick={(e) => setRecentPic(e.target.currentSrc)}
        />
        
            )}
    </div>
    <div className="sizeProduct">
      <h4  className="headSizeProduct">
        Size 
        </h4>
          {targetProduct.size.map(size => 
        // <div className="divSpanSizeProduct">
          <h4 className="spanSizeProduct"
          onClick={handleSizeClick}
          >
            {size}
         </h4>
        // </div>
        )}
    </div>
    { checkSelectedSize ? <h4>Selected Size {checkSelectedSize} </h4> : <h4>Select Size First</h4>}
    <div className="product-price-button-div">
   
    <h4 className="product-quantity">
        Qty : 
    </h4>
   
    <button 
    className="product-operatingQuantity"
    onClick={decrementQuantity}
    >
        -
    </button>
    <h4 className="product-quantity-number">
    {quantity}
    </h4>
    <button 
    className="product-operatingQuantity" 
    onClick={incrementQuantity}

    >
       +
    </button>
    </div>
    <button className="add-buttonProduct">
        BUY NOW
    </button>
    { checkSelectedSize ? 
    <button 
       
    className="add-buttonProduct" 
    id="add-to-cart"
    onClick={incrementingTheCartCount}
    >
        ADD TO CART
    </button>
    :
    <button 
    disabled
    className="add-buttonDisabledProduct" 
    >
        ADD TO CART
    </button>
    }
    <h4>
        Description
    </h4>
    <p className="descriptionProduct">
        {targetProduct.description}
    </p>
  </div> 

  </section>



  </>);

}
 
export default Product;