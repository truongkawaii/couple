$(document).ready(function() {
    $('.registry-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    });
});