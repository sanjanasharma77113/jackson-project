/*========sticky navbar===========*/
window.onscoll =() => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky',window.scrolly > 100);
};

/*========swiper========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCusror: true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
        el:".swiper-pagination",
        clickable:true,
    }
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});