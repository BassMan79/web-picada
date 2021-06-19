$(document).ready(function(){
    //Efecto del menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0px'
        }, 1500 + (index * 500));
    });

    //Efecto del texto
    if ($(window).width() > 800) {
        $('header .texto').css({
            opacity: 0,
            marginTop: 100
        })
        $('header .texto').animate({
            opacity: 1,
            marginTop: 0
        }, 2000)
    }

    //Scroll elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#picadas').offset().top,
        galeria = $('#galeria').offset().top;
        


    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe 
        }, 500);
    });

    $('#btn-picadas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria 
        }, 500);
    });
});