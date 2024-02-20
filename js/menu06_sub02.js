$(function() {
    $("#free_button_01").on("click", function() {
        $(this).css({
            backgroundColor: "#f4f4f4"
        })
        $("#free_button_01").siblings("div").css({
            backgroundColor: "#fff"
        })
        $(".slide_img_all").stop(true).animate({
            left: "0px"
        }, 1000)
    })
})

$(function() {
    $("#free_button_02").on("click", function() {
        $(this).css({
            backgroundColor: "#f4f4f4"
        })
        $("#free_button_02").siblings("div").css({
            backgroundColor: "#fff"
        })
        $(".slide_img_all").stop(true).animate({
            left: "-1200px"
        }, 1000)
    })
})

$(function() {
    $("#free_button_03").on("click", function() {
        $(this).css({
            backgroundColor: "#f4f4f4"
        })
        $("#free_button_03").siblings("div").css({
            backgroundColor: "#fff"
        })
        $(".slide_img_all").stop(true).animate({
            left: "-2400px"
        }, 1000)
    })
})