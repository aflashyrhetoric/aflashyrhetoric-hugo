// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  // Page Load Animations
  $('img.header-image, i.fa-envelope-o, p.email, ul.nav-list').addClass('animated fadeIn');
  $('p.description').addClass('animated fadeInDown');

  // Page interactions
  $('ul.services-list li a').hover(
    function() { 
      $(this).addClass('hoverLink');
    },
    function() {
      $(this).removeClass('hoverLink');
    }
  )

  // Navigation List
  $('ul.services-list li a').click(function(){
    // The clicked item
    var clicked = $(this);
    var currentID = $('div.active-service').attr('id');
    console.log(currentID);
    var clickedID = clicked.attr("id");

    // Highlight proper link
    $('a.active').removeClass('active');
    clicked.addClass("active");


    // Fade out SERVICE BRAND
    $('div#' + currentID).removeClass('active-service');

    // Load new brand
    $('div#' + clickedID).addClass('active-service');

  });

  $('a#pers-link').click(function() {
    $('div.personal-projects').removeClass('hide');
    $('div.personal-projects').addClass('show');
    $('div.professional-projects').addClass('hide');
    $('div.professional-projects').removeClass('show');
  });
  $('a#prof-link').click(function() {
    $('div.professional-projects').removeClass('hide');
    $('div.professional-projects').addClass('show');
    $('div.personal-projects').addClass('hide');
    $('div.personal-projects').removeClass('show');
  });

});
