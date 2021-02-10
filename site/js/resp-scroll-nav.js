//code for menubar

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



//code for animation

const faders = document.querySelectorAll('.animated');
const appearOptions = {
  threshold: 0.50
};

const appearOnScroll = new IntersectionObserver(function(enteries, appearOnScroll) {
  enteries.forEach(entry => {
    if(!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('fadeInUp');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

//code for the owl sliders
                        
window.addEventListener("scroll",function() {
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 50);
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
      760: {
          items: 4
      },
      1000: {
        items: 5
      },
      1600: {
        items:7
      }
  }
})

// $('.reviews .owl-carousel').owlCarousel({
//   loop: true,
//   autoplay: true,
//   dots: true,
//   responsive: {
//       0: {
//           items: 1
//       }
//   }
// })

 //Sort random function
 function random(owlSelector){
  owlSelector.children().sort(function(){
      return Math.round(Math.random()) - 0.5;
  }).each(function(){
    $(this).appendTo(owlSelector);
  });
}

$("#owl-demo").owlCarousel({
  navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
  navigationText:	["prev","next"],
  beforeInit : function(elem){
    //Parameter elem pointing to $("#owl-demo")
    random(elem);
  },
  loop: true,
     autoplay: true,
     dots: true,
     responsive: {
         0: {
             items: 1
         }
     }
});


})


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
        statusElm.append('<div style="color: green">Phone Number is valid</div><h5>Thanks for subscribing</h5> <br>')
    } else {
        event.preventDefault()
        statusElm.append('<div style="color: red">Phone Number is not valid </div><div style="color: red">form is not submitted</div><br>')
    }
      
console.log('happened')

  })
})
