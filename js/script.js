$(".mnav__open").click(function() {
    $(".mnav__dropdown").css({ "display":"block" });
    $(".mnav__close").css({ "display":"block" });
    $(".mnav__open").css({ "display":"none" });


})
$('.mnav__close').click(function() {
    $(".mnav__close").css({ "display":"none"});
    $(".mnav__open").css({ "display":"block" });
    $(".mnav__dropdown").css({ "display":"none" });

});
$('.dropdown ').click(function(event){
    event.stopPropagation();
});