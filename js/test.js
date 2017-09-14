const main = function(){
    if($(window).width()<600){
        $('#nav').addClass('window_small');
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

    $('#nav').find("a").click(function(){
        alert($(window).width());
    });
};


$(document).ready(main);
