
let products;







if(window.location.href === "http://127.0.0.1:5500/index.html"){

const menuOpen = document.querySelector(".div-hamburger-header");
const menuClose = document.querySelector(".close-sliding");
const overlay = document.querySelector(".sliding-menu-header");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("sliding-menu-header-active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("sliding-menu-header-active");
});


const elementCountOFCart = document.getElementById("count-of-product");
if(!localStorage.getItem("countOfCart")){
console.log("if")
let countOfCarts = 0;
console.log(countOfCarts)
elementCountOFCart.innerHTML = countOfCarts;

} else{
  const countOfCarts = JSON.parse(localStorage.getItem("countOfCart"));
console.log(countOfCarts)
console.log("else");
elementCountOFCart.innerHTML = countOfCarts;
}




// Javascript for image slider manual navigation


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;


var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 5000);
  }
  repeater();
}
repeat();






// home page api call

const clothing = document.getElementById("clothing")


function clickCardClothing(e) {
  const number = e.target.parentNode.id;
  console.log(number, 85);
  let value = products[number]
  value = JSON.stringify(value)
  console.log(value)
  localStorage.setItem("value", value)
    window.location.assign("http://127.0.0.1:5500/html/products.html")

}




function getDataHomePage() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    true
  )

  xhr.onreadystatechange= () => {
    console.log("in")
    console.log(xhr.readyState)

    if(xhr.readyState === 4){
      console.log(JSON.parse(xhr.response));
         products = JSON.parse(xhr.response);
        console.log(products.length);

      
        let j = 0;

        for(let i = 0; i < products.length; i++){
      

          if(!products[i].isAccessory){

      clothing.innerHTML= clothing.innerHTML+`
      <div class="card-clothing" id="${j++}">
      <img class="img-clothing" src="${products[i].photos[0]}" alt="" width="150px">
      
      <h4 class="h4-clothing">${products[i].name}</h4>
      <h5 class="brand-clothing">${products[i].brand}</h5>
      <h5 class="price-clothing">Rs ${products[i].price}</h5>
      `
    } else {
          accessories.innerHTML= accessories.innerHTML+`
          <div class="card-clothing" id="${j++}">
          <img class="img-clothing" src="${products[i].photos[0]}" alt="" width="150px">
          
          <h4 class="h4-clothing">${products[i].name}</h4>
          <h5 class="brand-clothing">${products[i].brand}</h5>
          <h5 class="price-clothing">Rs ${products[i].price}</h5>
          `
      }
    
    }
    const cardClothing = document.querySelectorAll(".card-clothing");
          console.log(cardClothing)
          cardClothing.forEach(item => {
            item.addEventListener("click",clickCardClothing)
        })
  }

    };
      console.log("out")

  xhr.send(); 
};

getDataHomePage();

} else if(window.location.href === "http://127.0.0.1:5500/html/products.html") {


  let countOfImage = 0
  let mainSection = document.getElementById("main-section");
  console.log("hi")
  let x =localStorage.getItem("value");
  const targetProduct =  JSON.parse(x);
  const lengthOfPhotos = targetProduct.photos.length;

  console.log(targetProduct);
  const elementCountOfCart = document.getElementById("count-of-product");
  // let  countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
  //   elementCountOfCart.innerHTML = countOfCart;
    if(!localStorage.getItem("countOfCart")){
let countOfCart = 0;
countOfCart = JSON.stringify(countOfCart)
localStorage.setItem("countOfCart", countOfCart)
  }
   countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
    elementCountOfCart.innerHTML = countOfCart;
  console.log(elementCountOfCart)
  function incrementingTheCartCount() {
    countOfCart = JSON.parse(localStorage.getItem("countOfCart"));
    countOfCart = countOfCart + 1;
    elementCountOfCart.innerHTML = countOfCart;
    countOfCart = JSON.stringify(countOfCart)
    localStorage.setItem("countOfCart", countOfCart);
    

// ---------------------------

// making the local storage if it is not there
console.log(localStorage.getItem("theAddedItems"))
if(!localStorage.getItem("theAddedItems")) {
let theAddedItems = [];
  theAddedItems.push(targetProduct);
    console.log("hi3")
    console.log(theAddedItems,targetProduct)
  theAddedItems = JSON.stringify(theAddedItems);
localStorage.setItem("theAddedItems", theAddedItems) 
}
//parsing the local storage if the item is not there thanupadting
 theAddedItems = JSON.parse(localStorage.getItem("theAddedItems"))
// console.log(theAddedItems[0].id,"id")
const lengthOfItemsInCart = theAddedItems.length;
let thereInCart = false
for(let i = 0; i< lengthOfItemsInCart; i++){
  if(theAddedItems[i].id === targetProduct.id){
    console.log("hi")
    thereInCart = true;
  }
}
if(!thereInCart){
  theAddedItems.push(targetProduct);
}

    theAddedItems = JSON.stringify(theAddedItems);
localStorage.setItem("theAddedItems", theAddedItems) 

    console.log(theAddedItems)

  }

  function clickedOnImage(e) {
    const numberOfImage = e.target.id;
  countOfImage = numberOfImage;
    mainImg.innerHTML = `
    <img class="img-main" src="${targetProduct.photos[countOfImage]}" alt="" class="img"> 
    `
  }

  mainSection.innerHTML=`
  <div class="img-div" id="img-div">
  <img class="img-main" src="${targetProduct.photos[countOfImage]}" alt="" class="img">
</div>
<div class="body-part">
  <h2 class="mainheading">
          ${targetProduct.name}
  </h2>
  <h4 class="brand">
  ${targetProduct.brand}
  </h4>
  <h4>
      Price: Rs ${targetProduct.price}
  </h4>
  <h4>
      Description
  </h4>
  <p class="description">
      ${targetProduct.description}
  </p>
  <h4>
      Product Preview
  </h4>
  <div class="img-previews" id="img-preview">
  
  </div>

  <button class="add-button" id="add-to-cart">
      ADD TO CART
  </button>
</div>

  `;
  const mainImg = document.getElementById("img-div")
  const imgPreview = document.getElementById("img-preview");
  const addToCart = document.getElementById("add-to-cart");

  addToCart.addEventListener("click", incrementingTheCartCount)
  for (let i = 0; i< lengthOfPhotos;i++){
  imgPreview.innerHTML = imgPreview.innerHTML +`
  <img class="img-pre" src="${targetProduct.photos[i]}" id="${i}"/>
  `
  }
  const allImagesOFProductPage = document.querySelectorAll(".img-pre");
  allImagesOFProductPage.forEach(item => {
      item.addEventListener("click", clickedOnImage)
  })
} else {
  console.log("h");
  
const elementCountOFCart = document.getElementById("count-of-product");
const countOfCarts = JSON.parse(localStorage.getItem("countOfCart"));
console.log(countOfCarts)
elementCountOFCart.innerHTML = countOfCarts;

const checkoutContent = document.getElementById("product-in-checkout");

  const arrayOfCheckoutItems = JSON.parse(localStorage.getItem("theAddedItems"))
console.log(arrayOfCheckoutItems.length);
console.log(arrayOfCheckoutItems);

  for(let i =0; i < arrayOfCheckoutItems.length;i++){
  checkoutContent.innerHTML = checkoutContent.innerHTML + `
  <div class="card-checkout">
  <div class="img-div">
      <img class="img-main" src="${arrayOfCheckoutItems[i].photos[0]}" alt="" class="img">
  </div>
  <div class="body-part">
      <h3 class="mainheading">
               ${arrayOfCheckoutItems[i].name}               
              
      </h3>
      
      <h4 class="price-checkout"> 
          Price: Rs  ${arrayOfCheckoutItems[i].price}
      </h4>
      
  
  </div>
</div>
  `;

} 
}


