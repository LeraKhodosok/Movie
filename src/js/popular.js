import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);

const swiper = new SwiperCore('.movie-slider', {
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".next",
        prevEl: ".previous",
    },
});