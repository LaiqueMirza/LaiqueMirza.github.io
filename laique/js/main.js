
//code for animation

const faders = document.querySelectorAll('.animated');
const appearOptions = {
  threshold: 0.40
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



const fadersPro = document.querySelectorAll('.animatedPro');
const appearOptionsPro = {
  threshold: 0.1
};

const appearOnScrollPro = new IntersectionObserver(function(enteries, appearOnScrollPro) {
  enteries.forEach(entry => {
    if(!entry.isIntersecting) {
      return
    } else {
       
        // entry.target.classList.add('fadeInUp');
        console.log(document.getElementById("btn1"))

        document.getElementById("btn1").click();
        appearOnScrollPro.unobserve(entry.target);
    }
  })
}, appearOptionsPro);

fadersPro.forEach(fader => {
  appearOnScroll.observe(fader);
})


//code for menubar

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const closing = doc.querySelectorAll(".closing")

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

closing.forEach(item =>{
  item.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
})



$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click')


//owl-carousel

$('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
})

})


//contact form submission


// $(document).ready(function(){
//     $('.submit').click(function (event){
//         // event.preventDefault()

//         let email =$('.email').val()
//         let name =$('.name').val()
//         let message =$('.message').val()
//         let statusElm =$('.status')
//         statusElm.empty()

//         if(email.length > 5 && email.includes('@') && email.includes('.')){
//             statusElm.append('<div style="color: green">Email is valid</div>')
//         } else{
//             event.preventDefault()
//             statusElm.append('<div style="color: red">Email is not valid</div>')
//         }

//         if(name.length > 1){
//             statusElm.append('<div style="color: green">Name is valid</div>')
//         } else {
//             event.preventDefault()
//             statusElm.append('<div style="color: red">Name is not valid</div>')
//         }
        
        
//     })
// })



$(document).ready(function(){
    $('.submit').click(function (event){
        // event.preventDefault()
  
        let email =$('.email').val()
        let firstName =$('.your-name').val()
        let lastName =$('.any-feedback').val()
        let phoneNumber =$('.phone-number').val()
        let statusElm =$('.status')
        statusElm.empty()
  
  
        if(firstName.length > 1){
            statusElm.append('<div style="color: green">Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div style="color: red">First Name is not valid</div>')
        }
        
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div style="color: green">Email is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div style="color: red">Email is not valid</div><div style="color: red">form is not submitted</div><br>')
        }      
  console.log('happened')
  
    })
  })