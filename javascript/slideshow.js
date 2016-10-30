var slide = 0;
var slides = document.getElementsByClassName("slide");
$(slides[slide]).show();
console.log(slides.length);

$("#arrow-right").click(function() {
    $(slides[slide]).fadeOut(100);
    slide += 1;
    if(slide == slides.length) {slide = 0}
    $(slides[slide]).fadeIn(100);
});

$("#arrow-left").click(function() {
    $(slides[slide]).fadeOut(100);
    slide -= 1;
    if(slide < 0) {slide = slides.length - 1}
    $(slides[slide]).fadeIn(100);
});

$(slides[slide]).click(function() {
    $("#enlarged-image").fadeIn(100);
});