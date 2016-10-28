"use strict";

$(document).ready(function() {
  var expression = "";

  function clear() {
    expression = "";
    $('.display').empty();
  }

  $('.button').click(function() {

    var entry = $(this).text();
    console.log(entry);
    console.log(typeof entry);
    if (entry === "AC") {
      clear();
    }
    else if (entry === "=") {
      evaluate(expression)
    } 
    else { 
      if (parseInt(entry) >= 0 && parseInt(entry) <= 9) {
        $('.display').append(entry);
        expression += entry;        
      } else {
        $('.display').append(" " + entry + " ");
        expression += entry;  
      } 
    } 
  });

  function evaluate(expression) {
    var argument = 0;
    var operator = 0;
    var args = [];
    var ops = [];
    for (var i=0; i<expression.length; i++) {
      if (Number(expression[i]) instanceof Number) {

      }
      // regext in number contatinate into argument and store in arguments array
      // if operator save in operands array
      // at end, contruct statement, convert arguments to number types and evalate
    }
  }

});