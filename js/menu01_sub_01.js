$(function(){
    $(window).scroll(function(){
        $(".people_row_01_all").each(function(){
            var screen_bottom = $(window).scrollTop() + $(window).height();
            var object_half = $(this).offset().top + $(this).height()/2;

            if(screen_bottom >= object_half){
                $(this).animate({
                    "left" : "0px",
                    "opacity" : "1"
                }, 2000)
            }
        })
    })
})