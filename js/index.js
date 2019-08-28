$(document).ready(function(){
    var height = $('#header-nav').height();
    console.log(height);    
    $(".header").css("margin-bottom", height);
    $(window).resize(function(){
        var height = $('#header-nav').height();
        console.log(height);    
        
        $(".header").css("margin-bottom", height);
      });

    $("#ham-toggle").click(function(e){
        $(".toggle-menu").css("display", "flex");
        $(".toggle-menu").css("margin-left", 0);
        $(".toggle-menu").css("position", "fixed");
    });
    
    $(".exit-ham").click(function(){
        $(".toggle-menu").css("margin-left", '100%');
        $(".toggle-menu").css("position", "absolute");
    });

});