function ZmgcGuide() {
  var self = this;

  this.init = function() {
      self.leftNavToggle();
      self.leftMenuToggle();
  };
  // left-navigation toggle
  this.leftNavToggle = function () {
    var leftNavToggle = $( "#nav-toggle" ).on( "click", function( event ) {
      event.preventDefault();
      if ( leftNavToggle.hasClass( "active" ) ) {
        leftNavToggle.removeClass( "active" );
        leftNavToggle.css( "marginLeft",  230 );
        $( "#nav-container" ).css( "marginLeft", 0 );
      } else {
        leftNavToggle.addClass( "active" );
        leftNavToggle.css( "marginLeft", -15 );
        $( "#nav-container" ).css( "marginLeft", -245 );
        
      }
    });
  }
  // menu open close
  this.leftMenuToggle = function () {
      $('#nav-container').on('click', '.section', function(e) {
          e.preventDefault();

          $(this).next().andSelf().toggleClass('active');
      });
  }

  // Initialise
  this.init();
};

var ZmgcGuide;

jQuery(function() {
  ZmgcGuide = new ZmgcGuide();
});
