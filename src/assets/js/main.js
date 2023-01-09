document.ready(function(){

  $('#darkmode').on("click", function(){


    $('nav').addClass("navbarDark");
  });

  $('#lightmode').click(function(){
    $('nav').removeClass("navbarDark")
  });
});
