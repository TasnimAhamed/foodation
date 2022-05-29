$(document).ready(function() {


    // Single Product Slide
    $('.all__product-row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true
    });

    //Popove
    var options = {
        html: true,
        content: $('[data-name="popover-content"]')
    }
    var customPopover = document.getElementById('custom__popover')
    var popover = new bootstrap.Popover(customPopover, options)
        


})


