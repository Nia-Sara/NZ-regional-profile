
/* -------add tooltip to the map----------*/

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});



/* -------select region from customised selection menu on regional profile page  ----------*/
function change_url(val) {
  window.location = val;

}