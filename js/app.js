// Ensures nothing will exicute until page is finished loading
$(function() {
   //Tells browser to be 'strict' with JS. Good Prctice
   "use strict";

   var topoffset = 51; //variable for menu height
   var slideqty = $('#featured .item').length; //stores the number of items in slideqty
   var wheight = $(window).height(); //store the hight of the window in wheight

   $('.fullheight').css('height', wheight);

   //Replace IMG inside carousels with a backgroun image

   $('#featured .item img').each(function() {
     var imgSrc = $(this).attr('src');
     $(this).parent().css({'background-image': 'url('+imgSrc+')'});
     $(this).remove();
   });

   //Adjust height of .fullheight elements on window resize
   $(window).resize(function() {
     wheight = $(window).height();
     $('.fullheight').css('height', wheight);
   });

   //Remove carousel captions
  //  $('#featured .carousel-caption div').remove();

   //Activate Scrollspy
   $('body').scrollspy({
     target: 'header .navbar',
     offset: topoffset
   });

   //adds inbody if not #featured
   var hash = $(this).find('li.active a').attr('href');
   if(hash !== '#featured') {
     $('header nav').addClass('indbody');
   } else {
     $('header nav').removeClass('inbody');
   }

   //Use smooth scrolling when clicking on navigation MAKE SNIPPET!!
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  }

   //Add an inbody class to nav when not at #featured
   $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
     var hash = $(this).find('li.active a').attr('href');
     if(hash !== '#featured') {
       $('header nav').addClass('inbody');
     } else {
       $('header nav').removeClass('inbody');
     }
   });

   //Sets the carousel to pause upon hover and time interval
   $('.carousel').carousel({
      //  pause: "hover"
      pause: "hover",
       interval: 7000
   });
});
