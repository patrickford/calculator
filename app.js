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

  function evaluate(expression) {
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