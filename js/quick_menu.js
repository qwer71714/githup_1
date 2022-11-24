$(document).ready(function(){
    var currentPosition = parseInt($(".quick_menu").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
        $(".quick_menu").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});