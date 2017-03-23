// scroll to specified id
function faqScroll(id) {
  var idString = "#" + id;
  jQuery('html, body').animate({scrollTop: jQuery(idString).offset().top - jQuery('.site-header').outerHeight()}, 'slow');
}
