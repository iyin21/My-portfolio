// (function($) {
//   "use strict"; // Start of use strict

//   // Closes the sidebar menu
//   $("#expand").click(function(e) {
//     e.preventDefault();
//     $("#sidebar").toggleClass("active");
//     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
//     $(this).toggleClass("active");
//   });
// var menu= document.getElementById("expand");
// var sidewrapper = document.getElementById("sidebar")
// var 

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
} 