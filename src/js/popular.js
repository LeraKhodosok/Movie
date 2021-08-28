import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const swiper = new SwiperCore('.movie-slider', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.next',
        prevEl: '.previous',
    },
});