/**
 * Created by Tim on 15/12/16.
 */

// Adapted from http://stackoverflow.com/questions/2605889/fading-between-images
// THANKS :)
$(document).ready(function () {
  setImageOne();
});

function setImageOne() {
  $('#name_logo_cont').fadeIn(400).html('<img id="name_logo" src="img/tb_V3.0.0-01_sm.png" />').delay(3500).fadeOut(600, function () { setImageTwo(); });
}

function setImageTwo() {
  $('#name_logo_cont').fadeIn(400).html('<img id="name_logo" src="img/tb_V3.0.0-02_sm.png" />').delay(3000).fadeOut(600, function () { setImageOne(); });
}