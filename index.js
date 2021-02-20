$(document).ready(function() {

    $("#menu-img").click(function(){
        console.log("clicked");
        $(".nav-links").css("right", "0px")
    })

    $(".navigation-items").click(function(){
        $(".nav-links").css("right", "-300px")
        
    });

    $(".btn-close").click(function(){
        $(".nav-links").css("right", "-300px")
        
    });

    
    $(window).scroll(function() { 
        let scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").css("background-color", "black");
        }else if (scroll_pos == 0){
            $("nav").css("background-color", "transparent");
        }

    });      

});
