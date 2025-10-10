import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const getSwiperConfig = (itemsLength) => {
    // Only enable loop if we have enough slides
    const shouldLoop = itemsLength >= 3;
    
    return {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        navigation: true,
        pagination: {
            clickable: true,
            dynamicBullets: false,
        },
        autoplay: shouldLoop ? {
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        } : false,
        loop: shouldLoop,
        initialSlide: 0,
        centeredSlides: false,
        allowTouchMove: true,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
            }
        }
    };
};