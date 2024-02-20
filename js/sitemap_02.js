/* HOME (index.html) 시작 */
$(function() {
    $(".ss_box_item_01").on("mouseenter", function() {
         $(".ss_box_item_01 > #ss_box_over").animate({
             scale: "1.2", opacity: "0%"
            }, 500)
        $(".ss_box_item_01 > .ss_box_text_02").animate({
            scale: "2", opacity: "0%"
            }, 500)
    })
    $(".ss_box_item_01").on("mouseleave", function() {
        $(".ss_box_item_01 > #ss_box_over").animate({
            scale: "1", opacity: "100%"
        }, 500) 
        $(".ss_box_item_01 > .ss_box_text_02").animate({ 
            scale: "1", opacity: "100%"
        }, 500) 
    })
})


/* 회사소개 = 인사말 (menu01_sub01.html) 시작 */
$(function() {
    $(".ss_box_item_02").on("mouseenter", function() { 
        $(".ss_box_item_02 > #ss_box_over").animate({ 
            scale: "1.2", opacity: "0%"
        }, 500) 
        $(".ss_box_item_02 > .ss_box_text_02").animate({
            scale: "2", opacity: "0%"
        }, 500)
    })

    $(".ss_box_item_02").on("mouseleave", function() {
        $(".ss_box_item_02 > #ss_box_over").animate({ 
            scale: "1", opacity: "100%"
        }, 500) 
        $(".ss_box_item_02 > .ss_box_text_02").animate({ 
            scale: "1", opacity: "100%"
        }, 500) })
    })

    /* 연혁(History) (menu01_sub02.html) 시작 */
    $(function() {
        $(".ss_box_item_03").on("mouseenter", function() { 
            $(".ss_box_item_03 > #ss_box_over").animate({ 
                scale: "1.2", opacity: "0%"
            }, 500) 
            $(".ss_box_item_03 > .ss_box_text_02").animate({
                scale: "2", opacity: "0%"
            }, 500)
        }) 
        
        $(".ss_box_item_03").on("mouseleave", function() { 
            $(".ss_box_item_03 > #ss_box_over").animate({
                scale: "1", opacity: "100%"
            }, 500) 
            $(".ss_box_item_03 > .ss_box_text_02").animate({
                scale: "1", opacity: "100%"
            }, 500) 
        })
    })

    /* 오시는 길 (menu01_sub03.html) 시작 */
    $(function() {
        $(".ss_box_item_04").on("mouseenter", function() { 
            $(".ss_box_item_04 > #ss_box_over").animate({ 
                scale: "1.2", opacity: "0%"
            }, 500) 
            $(".ss_box_item_04 > .ss_box_text_02").animate({ 
                scale: "2", opacity: "0%"
            }, 500)
        }) 
        $(".ss_box_item_04").on("mouseleave", function() {
             $(".ss_box_item_04 > #ss_box_over").animate({
                 scale: "1", opacity: "100%"
            }, 500)
            $(".ss_box_item_04 > .ss_box_text_02").animate({
                 scale: "1", opacity: "100%"
            }, 500) 
        })
    })