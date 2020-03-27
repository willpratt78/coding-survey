$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").toggleClass("change-mode");

  });
  

  $("form#language").submit(function(event) {
    var background = $('#background').val();
    var critical = $("#critical").val();
    console.log(critical)
    var life = $("#life").val();
    console.log(life)
    var job = $("#job").val();
    console.log(job)
    var time = $('#time').val();
    console.log(time)
   var name = $('#name').val();
   console.log(name)

    var result;

    if (background === "a" && critical === 'e' && life === 'h' && job === 'k' && time === 'm') {
      result = 'Wow it was the first dropdown for each. You should learn Python'.link();
  } else if (critical === 'f' && job === 'k') {
    result = 'Ruby'
  } else if (time === 'o' && job === 'k') {
    result = 'C#'
  } else {
    result = 'Go'
  }
  

    $('#output').text(`${name}you should learn${result}`);

    event.preventDefault();
});
});