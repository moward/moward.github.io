var topScrollThreshhold = 100;

var mq = window.matchMedia( "(min-width : 1024px)" );

$(function () {
  var recalc = function (event, instantOut) {
    if($(window).scrollTop() > topScrollThreshhold || !mq.matches) {
      $('.header').fadeIn();
    } else {
      if (instantOut) {
        $('.header').hide();
      } else {
        $('.header').fadeOut();
      }
      
    }
  };
  //respond to changes in viewport
  mq.addListener(recalc);
  //respond to scrolling
  $(window).scroll(recalc);
  //initialize view of header
  recalc({}, true);
});
