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

    //菜单
    $("#categorys-2014 .dd-inner .item").mouseover(function () {
        $(this).addClass("hover");
        var index = $(this).attr("data-index");
        $("#categorys-2014 .dorpdown-layer").show();
        $("#category-item-" + index).addClass("hover");
    }).mouseout(function () {
        $(this).removeClass("hover");
        var index = $(this).attr("data-index");
        $("#categorys-2014 .dorpdown-layer").hide();
        $("#category-item-" + index).removeClass("hover");
    });
})