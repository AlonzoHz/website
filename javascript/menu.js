var animationTime = 100;

$(".link").mouseenter(function() {
  $(this).animate({opacity: .5}, animationTime);
});
$(".link").mouseleave(function() {
  $(this).animate({opacity: 1}, animationTime);
});