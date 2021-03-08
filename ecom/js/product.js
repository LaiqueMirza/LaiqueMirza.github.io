
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