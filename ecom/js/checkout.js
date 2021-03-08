  
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