const main = function(){
    if($(window).width()<600){
        $('#nav').removeClass('window_big');
        //$('#nav').prepend("<img class='menu' src='./img/menu.png' alt='Menu' width='50px' height='50px'/>");
    }else{
        $('#nav').addClass('window_big');
    }

    $(window).on('resize', function() {
        if($(window).width() < 600) {
            $('#nav').removeClass('window_big');
            $('#nav').addClass('window_small');
        }else{
            $('#nav').addClass('window_big');
            $('#nav').removeClass('window_small');
        }
    });


    //When hover on icon, effect on menu and mains
    $('.home').mouseover(function(){
        $('h1').fadeTo(200,0.3);
        $('.intro').fadeTo(200,0.3);
        $('.main_project').animate({opacity:"0.3"},200);
        $('#display').fadeTo(200,0.3);
        $('.about, .projects, .contact').css('visibility','visible');
        $('.about, .projects, .contact').fadeTo(200, 1);
        $('.menu').css('height','265px');
    });
    $('.menu').mouseleave(function(){
        $('h1').fadeTo(200,1);
        $('.intro').fadeTo(200,1);
        $('.main_project').fadeTo(200,1);
        $('#display').fadeTo(200,1);
        $(this).css('height','55px');
        //       $('.menu').fadeOut(200);
        $('.about, .projects, .contact').fadeTo(200, 0);
        $('.about, .projects, .contact').css('visibility','hidden');
    });
    //when click on icon, go index.html
    $('.home').click(function(){
        location.href="./index.html";
    });

    //js for contact page

    $('#wechat').click(
        function(){
            if($('.wechat').css('display')==='none'){
                $('.wechat').css('display','block');
                $('.line').css('display','none')
            }else{
                $('.wechat').css('display','none')
            }
        }
    );

    $('#line').click(
        function(){
            if($('.line').css('display')==='none'){
                $('.line').css('display','block');
                $('.wechat').css('display','none')
            }else{
                $('.line').css('display','none')
            }
        }
    );








};


$(document).ready(main);
