$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    const $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
  
  $(".hover-div").on('click', function() {
    console.log("click")
    $(this).toggleClass('show-description');
    $(".click-here").toggle();
  });
});
