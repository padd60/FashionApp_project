$(function () {
  // 슬라이더 공통
  setInterval(next, 3500);
  function next() {
    let imgWidth = $('.imgBox > li').width();
    $('.imgBox')
      .stop()
      .animate({ marginLeft: -imgWidth }, 2000, function () {
        $('.imgBox > li:first').insertAfter('.imgBox > li:last');
        $('.imgBox').css('marginLeft', 0);
      });
  }

  $(window).resize(function () {
    let width = $(window).width();
    if (width > 860) {
      //pc
      $('.topMainmenu > ul > li').off();

      $('.topMainmenu > ul > li').on('mouseenter', function () {
        console.log('active');
        $('.bg').addClass('on');
        $(this).addClass('on').siblings('li').removeClass('on');
      });

      $('.bg, .topMainmenu > ul').on('mouseleave', function () {
        console.log('active2');
        $('.bg').removeClass('on');
        $('.topMainmenu > ul > li').removeClass('on');
      });
    } else {
      // tablet, mobile
      $('.topMainmenu > ul > li').off();
      $('.bg, .topMainmenu > ul').off();

      $('.topMainmenu > ul > li').on('click', function () {
        $(this).toggleClass('on').siblings('li').removeClass('on');
      });

      $('.hamBtn').click(function () {
        $('.topMainmenu').addClass('on');
      });

      $('.close').click(function () {
        $('.topMainmenu').removeClass('on');
        $('.topMainmenu > ul > li').removeClass('on');
      });
    }
  });

  $(window).resize();
});
