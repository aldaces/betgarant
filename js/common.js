$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 10000
    })

    $('.carousel-tours .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    });
});