// (function ($) {
  $(document).ready(function() {
    $('#more-button').mouseover(function(){
      $('#popup').animate({opacity: 0.0});
      $('#popup').delay(300).queue(function(next){ 
        $(this).css('display','none'); 
        next(); 
      });
      console.log("mouseover");
    });
  });

  function myFunction() {
    // $('more-pane').transition({x: 210}, 500, 'linear');
    // $('more-pane').fadeOut('normal', function(){
   //      $('more-pane').fadeIn();
   //  });
    // $('#more-pane').fadeToggle("fast", "linear");
    console.log("tests");
    if ($('#more-pane').css('opacity') == 0) {
      $('#more-pane').animate({opacity: 1.0});
    } else {
      $('#more-pane').animate({opacity: 0.0});
    }
  }


// }(jQuery));

// $('#more-pane').mouseover(function(event) {
//  $('#more-pane').show();
//  $('#more-pane').transition({ x: '300%' });
//  });

// $('#smart').mouseleave(function(event) {
//  $('#more-pane').hide();
//  $('#more-pane').transition({ x: '300%' });
//  });



// $(document).ready(function() {
//  $('#smart-description').hide();
//  $('#novare-description').hide();
//  $('#ppcrv-description').hide();

//  $('#smart').mouseover(function(event) {
//    $('#smart-description').show();
//    $('#smart-description').transition({ y: '-300%' });
//    // $(event.target).css({background: "red"});
//  });

//  $('#smart').mouseleave(function(event) {
//    $('#smart-description').transition({ y: '300%' });
//    $('#smart-description').delay(1000).hide();
//    // $(event.target).css({background: "red"});
//  });

//  $('#novare').mouseover(function(event) {
//    $('#novare-description').show();
//    $('#novare-description').transition({ y: '-300%' });
//    // $(event.target).css({background: "red"});
//  });

//  $('#novare').mouseleave(function(event) {
//    $('#novare-description').transition({ y: '300%' });
//    $('#novare-description').delay(1000).hide();
//    // $(event.target).css({background: "red"});
//  });

//  $('#ppcrv').mouseover(function(event) {
//    $('#ppcrv-description').show();
//    $('#ppcrv-description').transition({ y: '-300%' });
//    // $(event.target).css({background: "red"});
//  });

//  $('#ppcrv').mouseleave(function(event) {
//    $('#ppcrv-description').transition({ y: '300%' });
//    $('#ppcrv-description').delay(1000).hide();
//    // $(event.target).css({background: "red"});
//  });
// });