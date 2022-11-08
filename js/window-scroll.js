$(document).ready(function() {
 
 
   $("a.arrowUp").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1200,
         easing: "swing"
      });
      return false;
   });
 $('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});
 
});