jQuery(function($) {
  var slide = false;
  var height = $('#footer').height();
  $('#footer_trigger').click(function() {
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPos = docHeight - windowHeight + height;
    $('#footer').animate({ height: "toggle"}, 300);
    $("#footer_trigger").toggleClass("trigger_active");
    if(slide == false) {
      if($.browser.opera) {
        $('html').animate({scrollTop: scrollPos+'px'}, 300);
      } else {
        $('html, body').animate({scrollTop: scrollPos+'px'}, 300);
      }
      slide = true;
    } else {
      slide = false;
    }
  });
});