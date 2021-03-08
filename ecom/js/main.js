
let products;


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
    // window.location.assign(baseUrl+"html/products.html")

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
      <a href="./html/products.html">
      <div class="card-clothing" id="${j++}">
      <img class="img-clothing" src="${products[i].photos[0]}" alt="" width="150px">
      
      <h4 class="h4-clothing">${products[i].name}</h4>
      <h5 class="brand-clothing">${products[i].brand}</h5>
      <h5 class="price-clothing">Rs ${products[i].price}</h5>
      </div>
      </a>
      `
    } else {
          accessories.innerHTML= accessories.innerHTML+`
      <a href="./html/products.html">
          <div class="card-clothing" id="${j++}">
          <img class="img-clothing" src="${products[i].photos[0]}" alt="" width="150px">
          
          <h4 class="h4-clothing">${products[i].name}</h4>
          <h5 class="brand-clothing">${products[i].brand}</h5>
          <h5 class="price-clothing">Rs ${products[i].price}</h5>
          </div>
          </a>
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
