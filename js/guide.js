function ZmgcGuide() {
  var self = this;

  this.init = function() {
      self.leftNavToggle();
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
  // Initialise
  this.init();
};

var ZmgcGuide;

jQuery(function() {
  ZmgcGuide = new ZmgcGuide();
});
