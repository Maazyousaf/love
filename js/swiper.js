
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints:{
    1400:{
        slidesPerView: 5,
        spaceBetween: 60,
      },
   
      992:{
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576:{
        slidesPerView: 2,
        spaceBetween: 10,
      }
      
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints:{
        1400:{
            slidesPerView: 5,
            spaceBetween: 30,
          },
       
          992:{
            slidesPerView: 4,
            spaceBetween: 25,
          },
          768:{
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576:{
            slidesPerView: 2,
            spaceBetween: 10,
          }
          
      },
navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });