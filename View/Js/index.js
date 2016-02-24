$(function () {
    //城市列表
    $("#divTopMenuCon .dorpdown").mouseover(function () {
        $(this).addClass('hover');
        $("#divTopMenuCon .icon").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).mouseout(function () {
        $(this).removeClass('hover');
        $("#divTopMenuCon .icon").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
    $("#divTopMenuCon .dorpdown-layer li a").click(function () {
        $("#divTopMenuCon .dorpdown-layer li a").removeClass("selected");
        $(this).addClass("selected");
        $("#myCity").text($(this).text());
    })
})