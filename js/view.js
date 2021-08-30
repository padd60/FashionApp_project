$(function () {
  $('.hamBtn').click(function () {
    $('.topMainmenu').addClass('on');
  });
  $('.close').click(function () {
    $('.topMainmenu').removeClass('on');
  });
  setInterval(next, 3500);
  function next() {
    let imgWidth = $('.imgBox > li').width();
    $('.imgBox')
      .stop()
      .animate({ left: -imgWidth }, 2000, function () {
        $('.imgBox > li:first').insertAfter('.imgBox > li:last');
        $('.imgBox').css('left', 0);
      });
  }
});
