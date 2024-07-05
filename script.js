var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (_, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            document.querySelectorAll('.swiper-pagination-bullet-active').forEach(function (bullet) {
                bullet.style.setProperty('animation', 'none');
                setTimeout(function () {
                    bullet.style.setProperty('animation', '');
                }, 10);
            });
        },
    },
});
