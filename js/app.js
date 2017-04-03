// wait for the DOM to finish loading
$(document).ready(function() {
  // alert( "Handler for .click() called." );
  // console.log( "button.click() called." );
  var choose = " ";

  $(".button1").click( function() {
    choose = " ";
    $( "h3.center-block" ).text(" ");
  } );

  $(".buttonX").click( function() {
     choose = "X";
     $('.pleasechoosespan').text('You are choosing ' + choose);
    });

    $(".buttonY").click( function() {
       choose = "Y";
       $('.pleasechoosespan').text('You are choosing ' + choose);
      });

    $(".dTL").click( function() {
        var content = $(".hTL").text();
        if ( content == " ") {
          $('.hTL').text(choose);
        }
      });
      $(".dTC").click( function() {
          var content = $(".hTC").text();
          if ( content == " ") {
            $('.hTC').text(choose);
          }
        });
      $(".dTR").click( function() {
          var content = $(".hTR").text();
          if ( content == " ") {
            $('.hTR').text(choose);
          }
        });
      $(".dCL").click( function() {
          var content = $(".hCL").text();
          if ( content == " ") {
            $('.hCL').text(choose);
          }
        });
      $(".dCC").click( function() {
          var content = $(".hCC").text();
          if ( content == " ") {
            $('.hCC').text(choose);
          }
        });
        $(".dCR").click( function() {
            var content = $(".hCR").text();
            if ( content == " ") {
              $('.hCR').text(choose);
            }
          });
        $(".dBL").click( function() {
            var content = $(".hBL").text();
            if ( content == " ") {
              $('.hBL').text(choose);
            }
          });
        $(".dBC").click( function() {
            var content = $(".hBC").text();
            if ( content == " ") {
              $('.hBC').text(choose);
            }
          });
        $(".dBR").click( function() {
            var content = $(".hBR").text();
            if ( content == " ") {
              $('.hBR').text(choose);
            }
          });

    });   // this is for all document


  // all code to manipulate the DOM
  // goes inside this function
