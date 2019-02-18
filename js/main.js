adjustHeightGallery();
adjustHeightHeader();
adjustHeightEntries();

function adjustHeightGallery() {
  var myWidth = $('#img-gallery img').width();
  var myString = myWidth + 'px';
  $('#img-gallery img').css('height', myString);
}

// calls adjustHeight anytime the browser window is resized
$(window).resize(function () {
  adjustHeightGallery();
});

function adjustHeightHeader() {
  var myWidth = $('#img-header img').width();
  var myString = myWidth + 'px';
  $('#img-header img').css('height', myString);
}

// calls adjustHeight anytime the browser window is resized
$(window).resize(function () {
  adjustHeightHeader();
});

function adjustHeightEntries() {
  var myWidth = $('#img-entry img').width();
  var myString = myWidth + 'px';
  $('#img-entry img').css('height', myString);
}

// calls adjustHeight anytime the browser window is resized
$(window).resize(function () {
  adjustHeightEntries();
});


//toggle stick-bottom class
jQuery(document).ready(function ($) {
  var addStickBottom = function () {
    if ($(window).width() >= 1024) {
      $('#left-side').addClass('stick-bottom');
      $('#right-side').addClass('stick-bottom');
    } else {
      $('#left-side').removeClass('stick-bottom');
      $('#right-side').removeClass('stick-bottom');
    };
  };
  $(window).resize(function () {
    addStickBottom();
  });
  addStickBottom();
});

