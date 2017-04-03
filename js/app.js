// wait for the DOM to finish loading
$(document).ready(function() {
  // alert( "Handler for .click() called." );
  // console.log( "button.click() called." );
  $(".button1").click( function() {
    $( "h3.center-block" ).text(" ");
  } );

  $(".buttonX").click( function() {
    var choose = "X";
    //  alert( "You are choosing " + choose );
    //  console.log( choose +" chosen." );
     $('.pleasechoosespan').text('You are choosing ' + choose);
    });

    $(".buttonY").click( function() {
      var choose = "Y";
       $('.pleasechoosespan').text('You are choosing ' + choose);
      });

    });   // this is for all document


  // all code to manipulate the DOM
  // goes inside this function
