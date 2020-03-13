$(function () {
  //drawer-iconをクリックするとdrawser-navが開く
  $('#drawer-icon').on('click', function(){
    $('.drawer-nav').slideToggle()
    $('#drawer-open').toggleClass('drawer-action')
    $('#drawer-close').toggleClass('drawer-action')
  });

  //to-top途中から出現
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('#to-top').fadeIn();
    } else {
      $('#to-top').fadeOut();
    }
  });

  //to-top押すと上に
  $('#to-top').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });

})