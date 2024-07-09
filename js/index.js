'use strict'
// ! JQUERY AUTO COMPLETE
// / <reference types="../@types/jquery" />




$('a[href^="#"]').on('click',function(e){
    let aHref= e.target.getAttribute('href')
    let sectionOffet=$(aHref).offset().top
    $('body,html').animate({scrollTop:sectionOffet},2000)
})








// OPEN 

    $('.open').click(function() {
        $('.sidebar').toggleClass('open');
        $(this).toggleClass('moved');
        $('.home-title').toggleClass('moved');
    });

    $('.close-icon').click(function() {
        $('.sidebar').removeClass('open');
        $('.open').removeClass('moved');
        $('.home-title').removeClass('moved');
    });




    // $('h3').on('click', function() {
    // $('.signer-p').addClass('d-none');
    // $(this).next('.signer-p').toggleClass('d-none');
    // });

// DDURATION SECTION LOGIC

    $('.container h3').click(function() {
        let $p = $(this).next('p');
        if ($p.is(':visible')) {
            $p.slideUp(2000);
            $p.addClass('d-none');
        } else {
            $('.container p').slideUp(2000).addClass('d-none');
            $p.slideDown(2000).removeClass('d-none');
        }
    });
//======= COUNTDOWN EVENT DAY =========
    var targetDate = new Date('2025-01-01T00:00:00').getTime();

    var countdownInterval = setInterval(function() {
    var currentDate = new Date().getTime();
    var difference = targetDate - currentDate;

      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = -days + ' D';
    document.querySelector('.hours').textContent = hours + ' h';
    document.querySelector('.minutes').textContent = minutes + ' m';
    document.querySelector('.seconds').textContent = seconds + ' s';

    if (difference <= 0) {
        clearInterval(countdownInterval);
        document.querySelector('.days').textContent = '0 D';
        document.querySelector('.hours').textContent = '0 h';
        document.querySelector('.minutes').textContent = '0 m';
        document.querySelector('.seconds').textContent = '0 s';
    }
    }, 1000); 



    
//======= COUNTDOWN EVENT DAY =========

// CHARCTER REMAINING
let maxChar=100;
$('textarea').on('keyup',function(){
    let length=$('textarea').val().length;
    let character=maxChar-length
    $('#char').text(character)
})