// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


/* This script pulls from the WDKEVO Tumblr Blog and then populates SECTION-FOUR of the homepage with two of the most recent posts, potentially with the ability to browse different hashtags upon further deliberation of such a feature's relevance and effect on load time of the site. */

var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'LyfM24XhBB7CjXOxtcTLNDoQJoZrMrkGJG23UxuZ0b9JPVcYPn',
  consumer_secret:  'i0ob7sECUBhlLXqtmXBDp8W6C8g7iIWQ81RdfaH5lIRLp505Fr',
  token: '<oauth token>',
  token_secret: '<oauth token secret>'
});