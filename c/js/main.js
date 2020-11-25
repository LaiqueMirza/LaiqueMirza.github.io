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

//main form 



$(document).ready(function(){
    $('.submit').click(function (event){
        // event.preventDefault()

        var email =$('.email').val()
        var name =$('.name').val()
        var message =$('.message').val()
        var statusElm =$('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div style="color: green">Email is valid</div>')
        } else{
            event.preventDefault()
            statusElm.append('<div style="color: red">Email is not valid</div>')
        }

        if(name.length > 1){
            statusElm.append('<div style="color: green">Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div style="color: red">Name is not valid</div>')
        }
        
        if(message.length > 7){
            statusElm.append('<div style="color: green">Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div style="color: red">Message is not valid</div>')
        }
        
    })
})