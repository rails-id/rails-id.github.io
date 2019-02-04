$(document).ready(function () {
  var showChar = (parseInt($('.show-more').data('less'))) ? parseInt($('.show-more').data('less')) : 0;
  var ellipsestext = "...";
  var moretext = "lihat lebih banyak";
  var lesstext = "lihat lebih sedikit";

  $('.show-more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="more-content"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="more-link">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".more-link").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
