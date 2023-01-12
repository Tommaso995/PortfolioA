$(document).ready(function(){

$('#darkmode').click(function(){
  $('nav').addClass("navbarDark");
})

  $('#lightmode').click(function(){
    $('nav').removeClass("navbarDark");
  });
});

/* const darkmode = document.querySelector('#darkmode');
const navbar = document.querySelector('nav');

darkmode.addEventListener('click', function(){

  navbar.style.backgroundColor='rgb(33, 32, 32)';
}) */
