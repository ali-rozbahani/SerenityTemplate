$("#burger-btn").click(function(){
    $(".nav-list").slideToggle("slow");
});

$(window).resize(function(){
    if($(window).width() >= 980){
        $(".nav-list").slideDown("slow");
    }
});
// $(window).scroll(function () { 
//     if ($(window).scrollTop() > 90) {
//         $(".nav").css("position" , "fixed")
//     }else{
//         $(".nav").css("position" , "relative")
//     }
// });