$(function () {
  $(window).resize(function () {
    let width = $(window).width();
    if (width > '860px') {
      // pc
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

      $('.topMainmenu > ul > li').mouseenter(function () {
        console.log('active');
        $('.bg').addClass('on');
        $(this).addClass('on').siblings('li').removeClass('on');
      });

      $('.bg, .topMainmenu > ul').mouseleave(function () {
        console.log('active2');
        $('.bg').removeClass('on');
        $('.topMainmenu > ul > li').removeClass('on');
      });
    } else {
      // tablet, mobile
      $('.hamBtn').click(function () {
        $('.topMainmenu').addClass('on');
      });

      $('.close').click(function () {
        $('.topMainmenu').removeClass('on');
      });

      $('.topMainmenu > ul > li').click(function () {
        $(this).children('ul').slideToggle(500);
      });
    }
  });
  $(window).resize();
});
