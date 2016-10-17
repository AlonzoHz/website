$("#article1").mouseenter(function() {
    $("#vignette1").show(250);
    $("#thumb1").animate({
        opacity: .5,
    }, 250);
});
$("#article1").mouseleave(function() {
    $("#vignette1").hide(250);
    $("#thumb1").animate({
        opacity: 1
    }, 250);
});