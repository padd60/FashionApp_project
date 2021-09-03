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

  // 다크, 라이트 모드
  $('.dark button').on('click', function () {
    let check =
      document.documentElement.style.getPropertyValue('--main-color1');
    if (check == '#fff') {
      document.documentElement.style.setProperty('--main-color1', '#000');
      document.documentElement.style.setProperty('--main-color2', '#fff');
      $('.dark button').text('Dark Mode');
    } else {
      document.documentElement.style.setProperty('--main-color1', '#fff');
      document.documentElement.style.setProperty('--main-color2', '#000');
      $('.dark button').text('Light Mode');
    }
  });

  // 스크롤 될때
  $(window).scroll(function () {
    let st = $(window).scrollTop();
    console.log(st);

    if (st < 300) {
      $('.topBtn').fadeOut(300);
    } else {
      $('.topBtn').fadeIn(300);
    }

    let lineTop1 = $('#content h2:first').offset().top;
    let lineTop2 = $('#content h2:last').offset().top;

    if (st > lineTop1 - 400) {
      $('#content h2:first').addClass('on');
    } else {
      $('#content h2:first').removeClass('on');
    }

    if (st > lineTop2 - 400) {
      $('#content h2:last').addClass('on');
    } else {
      $('#content h2:last').removeClass('on');
    }
  });

  // resize 될때
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
