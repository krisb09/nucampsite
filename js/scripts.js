

$(function() {
    $("#reserveButton").on('click',function() {
        $("#reserveModal").modal("show");
    });
});

$(function() {
    $("#loginButton").on('click',function() {
        $("#loginModal").modal("show");
    });
});



$(function() {
    $(".carousel").carousel( { interval: 1000 } );
    $("#carouselButton").on('click',function(){
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {
           $(".carousel").carousel("pause");
           $("#carouselButton").children("i").removeClass("fa-pause");
           $("#carouselButton").children("i").addClass("fa-play");
       } else {
           $(".carousel").carousel("cycle");
           $("#carouselButton").children("i").removeClass("fa-play");
           $("#carouselButton").children("i").addClass("fa-pause");
       }
    });
});