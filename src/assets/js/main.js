document.ready(function(){

  $('#darkmode').click(function(){

    $('nav').addClass("navbarDark");
    $('footer').addClass("footerDark");
    $('section').addClass('containerDark');
    $('.container-fluid').addClass('containerDark');
    $('#login').addClass('login-formDark');
    $('containerLogin').addClass('container-fluidDark');
    $('.articoliContainer').addClass('articoliContainerDark');
    $('table').addClass('tableDark');
    $('#titolo').addClass('titoloDark');
});
$('#lightmode').click(function(){

    $('nav').removeClass("navbarDark");
    $('footer').removeClass("footerDark");
    $('.container-fluid').removeClass('containerDark');
    $('section').removeClass('containerDark');
    $('#login').removeClass('login-formDark');
    $('containerLogin').removeClass('container-fluidDark');
    $('.articoliContainer').removeClass('articoliContainerDark');
    $('table').removeClass('tableDark');
    $('#titolo').removeClass('titoloDark');
});

});
