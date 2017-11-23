(function($){
  $(function(){

    $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);
    $(document).ready(function(){
     
      $('.carousel').carousel();

      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
   
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
