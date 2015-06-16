// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  // Page Load Animations

  $('img.header-image, i.fa-envelope-o, p.email, ul.nav-list').addClass('animated fadeIn');
  $('p.description').addClass('animated fadeInDown');


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
    $('div.active-service div.brand i, div.active-service div.brand h2').addClass('animated fadeOut');
    // $('div.active-service').removeclass('active-service');
    // Fade out SERVICE DESCRIPTION
    $('div.active-service p.service-description').addClass('animated fadeOut');
    $('div#' + currentID).removeClass('active-service');

    // Load new brand
    $('div#' + clickedID).addClass('active-service');

  });
});

/* This script pulls from the WDKEVO Tumblr Blog and then populates SECTION-FOUR of the homepage with two of the most recent posts, potentially with the ability to browse different hashtags upon further deliberation of such a feature's relevance and effect on load time of the site. */

var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'LyfM24XhBB7CjXOxtcTLNDoQJoZrMrkGJG23UxuZ0b9JPVcYPn',
  consumer_secret:  'i0ob7sECUBhlLXqtmXBDp8W6C8g7iIWQ81RdfaH5lIRLp505Fr',
  token: '<oauth token>',
  token_secret: '<oauth token secret>'
});