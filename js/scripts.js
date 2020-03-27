$(document).ready(function() {
  
  

  $("form#language").submit(function(event) {
    var background = $('input#background').val();
    var critical = $("input#critical").val();
    var life = $("input#life").val();
    var job = $("input#job").val();
    var time = $('input#time').val();
   

    var result;

    if (background === a) {
      result = 'python';
  } else{
    result = 'Java'
  }

    $('#output').text(result);

    event.preventDefault();
  });
  });
});