"use strict";

$(document).ready(function() {
  var expression = "";

  function clear() {
    expression = "";
    $('.display').empty();
  }

  $('.button').click(function() {
    var entry = $(this).text();
    $('.display').append(entry);

  })


});