/*우측 이미지 4장---------------------*/

$(function(){
    /*사진 1 마우스 over 상태--------*/
    $("#food_row_01_right_box_01").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);

        $("#food_row_01_right_box_01 > img").stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);
    })
    /*사진 1 마우스 out상태----------------------------------*/
    $("#food_row_01_right_box_01").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            top: "0px",
            left: "0px",
            width: "400px",
            height: "400px"
        }, 100);

        $("#food_row_01_right_box_01 > img").stop(true).animate({
            top: "0px",
            left: "0px",
            width: "400px",
            height: "400px"
        }, 100);
    })


     /*사진 2 마우스 over 상태----------------------------------*/
     $("#food_row_01_right_box_02").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);

        $("#food_row_01_right_box_02 > img").stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);
    })

    /*사진 2 마우스 out상태----------------------------------*/
    $("#food_row_01_right_box_02").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            top: "0px",
            left: "400px",
            width: "400px",
            height: "400px"
        }, 100);

        $("#food_row_01_right_box_02 > img").stop(true).animate({
            top: "0px",
            left: "400px",
            width: "400px",
            height: "400px"
        }, 100);
    })


         /*사진 3 마우스 over 상태----------------------------------*/
         $("#food_row_01_right_box_03").on("mouseover", function(){
            $(this).css({
                "z-index":"99"
            });
            $(this).stop(true).animate({
                top: "0px",
                left: "0px",
                width: "800px",
                height: "800px"
            }, 100);
    
            $("#food_row_01_right_box_03 > img").stop(true).animate({
                top: "0px",
                left: "0px",
                width: "800px",
                height: "800px"
            }, 100);
        })
    
        /*사진 3 마우스 out상태----------------------------------*/
        $("#food_row_01_right_box_03").on("mouseout", function(){
            $(this).css({
                "z-index":"1"
            });
            $(this).stop(true).animate({
                top: "400px",
                left: "0px",
                width: "400px",
                height: "400px"
            }, 100);
    
            $("#food_row_01_right_box_03 > img").stop(true).animate({
                top: "400px",
                left: "0px",
                width: "400px",
                height: "400px"
            }, 100);
        })


    /*사진 4 마우스 over 상태----------------------------------*/
     $("#food_row_01_right_box_04").on("mouseover", function(){
        $(this).css({
            "z-index":"99"
        });
        $(this).stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);

        $("#food_row_01_right_box_04 > img").stop(true).animate({
            top: "0px",
            left: "0px",
            width: "800px",
            height: "800px"
        }, 100);
    })

    /*사진 2 마우스 out상태----------------------------------*/
    $("#food_row_01_right_box_04").on("mouseout", function(){
        $(this).css({
            "z-index":"1"
        });
        $(this).stop(true).animate({
            top: "400px",
            left: "400px",
            width: "400px",
            height: "400px"
        }, 100);

        $("#food_row_01_right_box_04 > img").stop(true).animate({
            top: "400px",
            left: "400px",
            width: "400px",
            height: "400px"
        }, 100);
    })
})