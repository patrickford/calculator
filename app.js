"use strict";

$(document).ready(function() {
  var expression = "";

  function clear() {
    expression = "";
    $('.display').empty();
  }

  $('.button').click(function() {
    var entry = $(this).text();

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
        expression += " " + entry + " ";  
      } 
    } 
  });

 //  "577 + 6"  ===> 577 + 6'
 // + - / 88

  function evaluate(expression) {
    var argument = 0;
    var operator = 0;
    var args = [];
    var ops = [];
    var components = expression.split(" ");

    for (var i=0; i<components.length; i++) {
      if (isNaN(parseInt(components[i]))) {
        ops.push(components[i]);
      } else {
        args.push(parseInt(components[i]));
      }
    }
      // regext in number contatinate into argument and store in arguments array
      // if operator save in operands array
      // at end, contruct statement, convert arguments to number types and evalate

    if (ops[0] == "+") {
      var result = args[0] + args[1];
      $(".display").text(result);
    } 
    else if (ops[0] == "-") {
      var result = args[0] - args[1];
      $(".display").text(result);
    } 
    else if (ops[0] == "*") {
      var result = args[0] * args[1];
      $(".display").text(result);
    } 
    else if (ops[0] == "/") {
      var result = args[0] / args[1];
      $(".display").text(result);
    }  
    expression = "";   
  }

});