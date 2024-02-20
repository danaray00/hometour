/*
$(function(){
    $(".free_more_btn").on("click", function(){
        $(this).css({
            visibility: "hidden"
        });
        $(".free_all").stop(true).animate({
            height: "1300px"
        }, 100);
    })
})
*/

$(function(){
    var count = 0;
    $(".free_more_btn").on("click", function(){
        count++;

        if(count % 2 == 1){
            $(".free_more_btn > p").text("↑ 접기");
            $(".free_all").stop(true).animate({
                height: "1300px"
            }, 2000);
        } else{
            $(".free_more_btn > p").text("+ 더보기");
            $(".free_all").stop(true).animate({
                height: "300px"
            }, 2000);
        }
    })
})