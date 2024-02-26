$('.product li').mouseenter(function(){
    $(this).children('.fruit_icon').stop().css({
        'transform':'translateY(50px)',
        'transition':'all 1s'
    })
});
$('.product li').mouseleave(function(){
    $(this).children('.fruit_icon').stop().css({
        'transform':'translateY(0px)',
        'transition':'all 1s'
    })
});
$('cover').mouseover(function(){
    $(this).show();
});