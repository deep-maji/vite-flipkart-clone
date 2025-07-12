

// Banner Swiper.js
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.ri-arrow-right-s-line',
        prevEl: '.ri-arrow-left-s-line',
    },
    pagination: {
        el: '.banner-sliders',
        clickable: true,
    },
});





