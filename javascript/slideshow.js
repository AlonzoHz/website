var slide = 0;
var slides = document.getElementsByClassName("slide");
$(slides[slide]).show();
interval = setInterval(changeSlide, 5000, 1);

$("#arrow-right").click(function() {
    changeSlide(1);
});

$("#arrow-left").click(function() {
    changeSlide(-1);
});

function changeSlide(amount) {
    $(slides[slide]).fadeOut(100);
    slide += amount;
    if(slide < 0) {slide = slides.length - 1}
    if(slide == slides.length) {slide = 0}
    $(slides[slide]).fadeIn(100);
    clearInterval(interval);
    interval = setInterval(changeSlide, 5000, 1);
}

$(slides).click(function() {
    var slideSource = slides[slide].src;
    $("#enlarged-image").attr("src", slideSource);
    $("#enlarged-image-container").slideToggle(100);
});

$("#enlarged-image-container").click(function() {
    if ($("#enlarged-image-container").is(":visible")) { 
        $("#enlarged-image-container").slideToggle(100);
    }
});