var topScrollThreshhold = 100;

var mq = window.matchMedia( "(min-width : 1024px)" );

$(function () {
  var recalc = function () {
    if($(window).scrollTop() > topScrollThreshhold || !mq.matches) {
      $('.header').fadeIn();
    } else {
      $('.header').fadeOut();
    }
  };
  mq.addListener(recalc);
  $(window).scroll(recalc);
  if (mq.matches) {
    $('.header').hide();
  }
});
