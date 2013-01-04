jQuery(function($) {
    language_complete = navigator.language.split("-");
    language = (language_complete[0]);
    console.log("I speak (root): %s", language);

    i18n.init({ lng: language, debug: true }, function() {
        // save to use translation function as resources are fetched
        $(".tzm-i18n").i18n();
        $(".menu-i18n").i18n();
        $(".search-i18n").i18n();
    });
    // footer navigation
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