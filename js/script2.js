// (function ($) {
  $(document).ready(function() {
    $('#one-line').click(function(){
      $('#two-line').css("background", "transparent");
      $('#one-line').css("background", "#F1F1F1");
      $('#one-pane').css("display", "block");
      $('#two-pane').css("display", "none");
      // $('.more-pane').delay(100).queue(function(next){ 
      //   $(this).css('display','none'); 
      //   next(); 
      // });
      // $('#me').animate({opacity: 1.0});
      console.log("boo");
    });
    $('#two-line').click(function(){
      $('#one-line').css("background", "transparent");
      $('#two-line').css("background", "#F1F1F1");
      $('#one-pane').css("display", "none");
      $('#two-pane').css("display", "block");
      // $('.more-pane').delay(100).queue(function(next){ 
      //   $(this).css('display','none'); 
      //   next(); 
      // });
      // $('#me').animate({opacity: 1.0});
      console.log("boor2");
    });

    $('#orig-label').click(function() {
      if (document.getElementById("main-text").className == "one-third column") {
        document.getElementById("main-text").className = "sixteen columns";
        $('#col-2').css("display", "none");
        $('.end-translation').css("display", "none");

        $('#one-line').css("background", "transparent");
        $('#two-line').css("background", "transparent");
        console.log("change1");
      } else {
        document.getElementById("main-text").className = "one-third column";
        console.log("change2");
        $('#col-2').css("display", "block");
      }
    });
  });


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