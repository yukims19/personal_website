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
/*
    $('#nav').find("a").click(function(){
        alert($(window).width());
    });
*/
    //When hover on icon, effect on menu and mains
    $('.home').mouseover(function(){
/*        if(!($('h1').css('display')=='none'  || $('h1').is(':visible'))){
//        if ($('h1').is(':visible')){

        }

        if(!($('.main_project').css('display')=='none')){
        }
        */
        $('h1').fadeTo(200,0.3);
        $('.intro').fadeTo(200,0.3);
        $('.main_project').animate({opacity:"0.3"},200);
        $('#display').fadeTo(200,0.3);
        $('.about, .projects, .contact').css('visibility','visible');
        $('.about, .projects, .contact').fadeTo(200, 1);
        $('.menu').css('height','265px');
    });
    $('.menu').mouseleave(function(){
  /*      if(!($('h1').css('display')=='none') || $('h1').is(':visible')){
//        if ($('h1').is(':visible')){

        };

        if(!($('.main_project').css('display')=='none')){

        }*/

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




//    $("li").remove(); // delete this line after finished

//    $("li").remove();
    //JS for project.html////////////////////



    $('.small_display .rap img').click(function(){
        let clicked=$(this).attr('id');
       //smooth transition from small to big
        $(".small_display").animate({top:"+=60%",
                                     opacity:"0"},
                                    {duration: 400,
                                     complete:function(){$(this).removeAttr('style')}
                                    });
        $(".rap li").css('display','none');
        setTimeout(function(){
            $('#display').removeClass("small_display");
       },300);
        setTimeout(function(){
            $('#display').addClass("big_display");
        },300);
        $('h1').css('visibility','visible');
        $('h1').fadeTo(400,1);
        $('.main_project').css('visibility','visible');
        $('.main_project').fadeTo(400,1);

// change contents depend on clicked project
        if('photo_gallery' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("PHOTO GALLERY");
            //            $('#main_img').attr("src","./img/photo_gallery.png");
            $('.photo_des').append('<img src=./img/gallery1.png />');
            $('.photo_des').append('<img src=./img/gallery2.png />');
            $('.photo_des').append('<img src=./img/gallery3.png />');
            $('.photo_des').append('<img src=./img/gallery4.png />');
            $('.photo_des').append('<img src=./img/gallery5.png />');
            $('.rap img').css('padding-bottom','0px');
            $('#photo_gallery').css('padding-bottom','10px');
        }else if("id_verification" == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("ID_VERIFICATION");
            $('#description').html("Used: Clojure, Emacs<br/>Purpose: Internship Project<br/> Function: Customers are able to upload id pictures to Amazon S3 as encrypted files, and administrators (with special password) are able to verify the id by seeing the id pictures customer's other information, which was stored in database.");
            //            $('#main_img').attr("src","./img/id_verification.jpeg");
            $('.photo_des').append("<img class='only' src=./img/id_verification.jpeg />");
            $('.rap img').css('padding-bottom','0px');
            $('#id_verification').css('padding-bottom','10px');
        }else if('web_chat' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("WEB CHAT");
            $('#description').html("Used: PHP, HTML, CSS, MySQL <br/>Purpose: Build my first web app<br/> Function: 1. Chat box - able to chat via text. Data will be stored but box dialog will renew everyday. (able to view past records). 2. Diary box - Be able to store text & image. Users can access to private diary box via login.<br/> Design sketch: <a href='https://precursorapp.com/document/Untitled-17592205940058' target='_blank'>here</a> <br/> Github link: <a href='https://github.com/yukims19/web_apps/tree/master/LVchat' target='_blank'>here</a> <br/> Status: In-progress");
            $('.photo_des').append('<img class=only src=./img/lvchat.png />');
            $('.rap img').css('padding-bottom','0px');
            $('#web_chat').css('padding-bottom','10px');
        }else if('bigbelly' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("BIGBELLY ANALYSIS");
            $('#description').html("Conducted design analysis on BigBelly trash-can and brainstormed it's redesign ideas.<br/> For details: <a href='https://www.youtube.com/watch?v=bzKYEfCGzAE' target='_blank'>here</a> ");
//            $('#main_img').attr("src","./img/bigbelly.jpg");
//            $('.photo_des').append('<img class=only src=./img/bigbelly.jpg />');
            $('.photo_des').append('<video class=video_bigbelly controls=controls  src=./img/bigbelly.mp4 type=video/mp4></video>');
            $('.rap img').css('padding-bottom','0px');
            $('#bigbelly').css('padding-bottom','10px');
        }else if('car_eating' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("CAR-EATING GAME");
            $('#description').html("Used: Java <br/>Purpose: In-class project<br/> Function: Able to use arrow keys to control car's(blue) direction");
//            $('#main_img').attr("src","./img/careating.png");
            $('.photo_des').append('<img class=only src=./img/careating.png />');
            $('.rap img').css('padding-bottom','0px');
            $('#car_eating').css('padding-bottom','10px');
        }else if('keylock' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("KEYLOCK");
            $('#description').html("Used: Python, Raspberry Pi, Twillio, soldering<br/>Purpose: For fun <br/>Function: Open the apartment door by texting, instead of pressing the button.");
//            $('.photo_des').append('<img class=only src=./img/keylock.png />');
            $('.photo_des').append('<video class= video_keylock controls=controls  src=./img/keylock.mp4 type=video/mp4></video>');
            $('.rap img').css('padding-bottom','0px');
            $('#keylock').css('padding-bottom','10px');
        }else if('lamp' == clicked){
            $('.photo_des img').remove();
            $('.photo_des video').remove();
            $('#main_title').text("LAMP");
            $('#description').html("Used: Laser cutter, Inkscape <br/>Purpose: For fun");
//            $('#main_img').attr("src","./img/lamp.jpeg");
            $('.photo_des').append('<img class=only src=./img/lamp.jpeg />');
            $('.rap img').css('padding-bottom','0px');
            $('#lamp').css('padding-bottom','10px');
        }
          });

    $(document).on('mouseover','.big_display ',(function(){
        $('#arrow').css('visibility','visible');
        $('#arrow').fadeTo(200,1);
        $('.rap').fadeTo(200,0.5);
    }));
    $(document).on('mouseleave','.big_display', (function(){
        $('.rap').fadeTo(100,1);
        $('#arrow').fadeTo(200,0);
        $('#arrow').css('visibility','hidden');
    }));


    //back to small_display
    $('#arrow').click(function(){
        $('#arrow').css('visibility','hidden');
        $(".rap li").css('display','block');
        $('.rap').css('opacity','1');
        $('.main_project').fadeTo(400,0);
//        $('h1').fadeTo(400,0);
        $('.main_project').css('visibility','hidden');
        //        $('h1').css('visibility','hidden');
        $('h1').text("PROJECTS");

        $("#display").animate({top:"-=60%",
                                     opacity:"0"},
                                    {duration: 400,
                                     complete:function(){$(this).removeAttr('style')}
                                    });

        setTimeout(function(){
            $('#display').removeClass("big_display");
        },300);

        setTimeout(function(){
            $('#display').addClass("small_display");
        },300);
    });
};


$(document).ready(main);
/*       $('.main_photo_gallery').css({'visibility':'visible',
         'display':'block'});
         $('.main_photo_gallery').fadeTo(400,1);*/

/*        $('.main_project').animate({width:"+=50%",
          height:"+=50%",
          opacity:"1"},
          {duration:400});*/

/*
  $('.main_id_verification').css('visibility','visible');
  $('.main_id_verification').fadeTo(400,1);*/
