var swiperEl = document.querySelector(".mySwiper");

Object.assign(swiperEl, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
swiperEl.initialize()