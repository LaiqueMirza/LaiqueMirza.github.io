const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});



                        
window.addEventListener("scroll",function() {
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);
})


//owl-carousel
$(document).ready(function () {
$('.insurance .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
      0: {
          items: 2
      },
      560: {
          items: 4
      },
      1000: {
        items: 5
      },
      1500: {
        items:7
      }
  }
})

$('.reviews .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
      0: {
          items: 1
      }
  }
})
})



//contact form submission


$(document).ready(function(){
  $('.submit').click(function (event){
      // event.preventDefault()

      let email =$('.email').val()
      let firstName =$('.first-name').val()
      let lastName =$('.last-name').val()
      let phoneNumber =$('.phone-number').val()
      let statusElm =$('.status')
      statusElm.empty()

      if(email.length > 5 && email.includes('@') && email.includes('.')){
          statusElm.append('<div style="color: green">Email is valid</div>')
      } else{
          event.preventDefault()
          statusElm.append('<div style="color: red">Email is not valid</div>')
      }

      if(firstName.length > 1){
          statusElm.append('<div style="color: green">Name is valid</div>')
      } else {
          event.preventDefault()
          statusElm.append('<div style="color: red">First Name is not valid</div>')
      }
      
      if(phoneNumber.length > 7){
        statusElm.append('<div style="color: green">Phone Number is valid</div><br>')
    } else {
        event.preventDefault()
        statusElm.append('<div style="color: red">Phone Number is not valid </div><div style="color: red">form is not submitted</div><br>')
    }
      
console.log('happened')

  })
})