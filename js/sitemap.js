/* 1번째 박스 시작 ---------------------------- */
$(function() { 
    function site_box01_over() { 
        $("#site_box_01").siblings("div").css({
            "z-index": 1
        }) 
        $(this).css({ "z-index": 100
        }) 
        $("#site_box_01").animate({ 
            left: "0px"
        }, 1000) }

    function site_box01_out() { 
        $("#site_box_01").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ 
            "z-index": 1
        }) 
        $("#site_box_01").animate({
            left: "1000px",
        }, 1000) }

        $("#site_box_01").hover(site_box01_over, site_box01_out);
    })

/* 2번째 박스 시작 ---------------------------- */
    $(function() {
        function site_box02_over() { 
            $("#site_box_02").siblings("div").css({
                "z-index": 1
            })
            $(this).css({ 
                "z-index": 100
            })
            $("#site_box_02").animate({
                left: "0px"
            }, 1000) }

        function site_box02_out() {
            $("#site_box_02").siblings("div").css({
                 "z-index": 1
            }) 
            $(this).css({ 
                "z-index": 1
            })
            $("#site_box_02").animate({ 
                left: "1100px", 
            }, 1000) }

            $("#site_box_02").hover(site_box02_over, site_box02_out);
       })

/* 3번째 박스 시작 ---------------------------- */

$(function() {
     function site_box03_over() {
        $("#site_box_03").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ "z-index": 100
        })
        $("#site_box_03").animate({ left: "0px"
        }, 1000)
    }
    function site_box03_out() { 
        $("#site_box_03").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ 
            "z-index": 1
        })
        $("#site_box_03").animate({
             left: "1200px", 
            }, 1000) }
        $("#site_box_03").hover(site_box03_over, site_box03_out);
})


/* 4번째 박스 시작 ---------------------------- */
$(function() {
    function site_box04_over() { 
        $("#site_box_04").siblings("div").css({
             "z-index": 1
        }) 
        $(this).css({ "z-index": 100
        })
        $("#site_box_04").animate({
            left: "0px"
        }, 1000) }
    function site_box04_out() {
         $("#site_box_01").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ "z-index": 1
        })
        $("#site_box_04").animate({ left: "1300px",
        }, 1000) }
        $("#site_box_04").hover(site_box04_over, site_box04_out);
   })
   

/* 5번째 박스 시작 ---------------------------- */
$(function() { 
    function site_box05_over() {
        $("#site_box_05").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ "z-index": 100
        })
        $("#site_box_05").animate({
            left: "0px"
        }, 1000) }

    function site_box05_out() { 
        $("#site_box_05").siblings("div").css({ 
            "z-index": 1
        }) 
        $(this).css({ "z-index": 1
        })
        $("#site_box_05").animate({ left: "1400px", }, 1000) }
        $("#site_box_05").hover(site_box05_over, site_box05_out);
})

/* 6번째 박스 시작 ---------------------------- */
$(function() { 
    function site_box06_over() {
         $("#site_box_06").siblings("div").css({
             "z-index": 1
        }) 
        $(this).css({ 
            "z-index": 100
        })
        $("#site_box_06").animate({
            left: "0px"
        }, 1000) }

    function site_box06_out() {
        $("#site_box_01").siblings("div").css({
             "z-index": 1
        }) 
        $(this).css({ "z-index": 1
        })
        $("#site_box_06").animate({ left: "1500px",
        }, 1000) }
        $("#site_box_06").hover(site_box06_over, site_box06_out);
})

