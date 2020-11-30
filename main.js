
// window.onscroll = function() {myFunction()};

// var navbar = document.querySelector("header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

let btn_rezervacija = document.querySelector('.btn-over')



btn_rezervacija.addEventListener('click',(e)=>{
btn_rezervacija.classList.add('paspaustas')


})

// --------------------------------/

let btn_menu = document.getElementById('menu_btn');
let slide_menu = document.getElementById('slide_menu')
let slide_menu_close = document.getElementById('slide_menu_close_btn')


btn_menu.addEventListener('click',()=>{
slide_menu.style.width = '100vw';


})

slide_menu_close.addEventListener('click',()=>{
    slide_menu.style.width = '0vw';
})



$('.multiple-items').slick({
  
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay :true,
    dots:true,
    speed: 2000,
    fade:true,
    arrows: true,
    // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"></button>'


  }); 
  $('.multiple-items').on('edge', function(event, slick, direction){
    console.log('edge was hit')
  });

  