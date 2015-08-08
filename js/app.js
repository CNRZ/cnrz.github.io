// Ensures nothing will exicute until page is finished loading
$(function() {
   //Tells browser to be 'strict' with JS. Good Prctice
   "use strict";

   var topoffset = 50; //variable for menu height

   //Activate Scrollspy
   $('body').scrollspy({
     target: 'header .navbar'
   });

   $('.carousel').carousel({
       pause: "hover",
       interval: 6000
   });
});
