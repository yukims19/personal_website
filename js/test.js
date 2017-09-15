const main = function(){
    if($(window).width()<500){
        $('#nav').addClass('window_small');
//        $('#nav').prepend("<img class='menu' src='./img/menu.png' alt='Menu' width='50px' height='50px'/>");
    }else{
        $('#nav').addClass('window_big');
    }

    $(window).on('resize', function() {
        if($(window).width() < 500) {
            $('#nav').removeClass('window_big');
            $('#nav').addClass('window_small');
        }else{
            $('#nav').addClass('window_big');
            $('#nav').removeClass('window_small');
        }
    });

    $('#nav').find("a").click(function(){
        alert($(window).width());
    });
};


$(document).ready(main);
