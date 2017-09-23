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
            $('#main_title').text("PHOTO GALLERY");
            $('#main_img').attr("src","./img/photo_gallery.png");
            $('.rap img').css('padding-bottom','0px');
            $('#photo_gallery').css('padding-bottom','10px');
        }else if("id_verification" == clicked){
            $('#main_title').text("ID_VERIFICATION");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","./img/id_verification.jpeg");
            $('.rap img').css('padding-bottom','0px');
            $('#id_verification').css('padding-bottom','10px');
        }else if('web_chat' == clicked){
            $('#main_title').text("WEB CHAT");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","");
            $('.rap img').css('padding-bottom','0px');
            $('#web_chat').css('padding-bottom','10px');
        }else if('bigbelly' == clicked){
            $('#main_title').text("BIGBELLY ANALYSIS");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","./img/bigbelly.jpg");
            $('.rap img').css('padding-bottom','0px');
            $('#bigbelly').css('padding-bottom','10px');
        }else if('car_eating' == clicked){
            $('#main_title').text("CAR-EATING GAME");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","./img/careating.png");
            $('.rap img').css('padding-bottom','0px');
            $('#car_eating').css('padding-bottom','10px');
        }else if('keylock' == clicked){
            $('#main_title').text("KEYLOCK");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","./img/keylock.png");
            $('.rap img').css('padding-bottom','0px');
            $('#keylock').css('padding-bottom','10px');
        }else if('lamp' == clicked){
            $('#main_title').text("LAMP");
            $('#description').html("Technic: Clojure <br/> Purpose:  Summer Internship Project <br/> Function:  Display pictures in original ratio; provide options of display sizes<br/> Design sketch: hereherehreh <br/> Github link: herehrehre");
            $('#main_img').attr("src","./img/lamp.jpeg");
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
