  
const elementCountOFCart = document.getElementById("count-of-product");
const countOfCarts = JSON.parse(localStorage.getItem("countOfCart"));
const totalAmount = document.getElementById("total-amount");
let totalAmountCount = 0;
console.log(countOfCarts)
elementCountOFCart.innerHTML = countOfCarts;

const checkoutContent = document.getElementById("product-in-checkout");

  const arrayOfCheckoutItems = JSON.parse(localStorage.getItem("theAddedItems"))
console.log(arrayOfCheckoutItems.length);
console.log(arrayOfCheckoutItems);

  for(let i =0; i < arrayOfCheckoutItems.length;i++){
      totalAmountCount=totalAmountCount+arrayOfCheckoutItems[i].price
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

totalAmount.innerHTML= totalAmountCount;



const orderPlaced = document.getElementById("order-placed");
orderPlaced.addEventListener("click", orderHasBeenPlaced);

function orderHasBeenPlaced() {
    sendData();
    window.localStorage.clear();
    alert("YOUR ORDER IS PLACED")
}
const sendingToServer = JSON.stringify(arrayOfCheckoutItems)
function sendData() {
    const xhr = new XMLHttpRequest;
    xhr.open(
        "POST",
        "https://5d76bf96515d1a0014085cf9.mockapi.io/order",
        true
    )
        xhr.send(sendingToServer);
       
}