$(function () {
    //城市列表
    $("#divTopMenuCon .dorpdown").mouseover(function () {
        $(this).addClass('hover');
        $("#divTopMenuCon .icon").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).mouseout(function () {
        $(this).removeClass('hover');
        $("#divTopMenuCon .icon").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
    $("#divTopMenuCon .dorpdown-panel li a").click(function () {
        $("#divTopMenuCon .dorpdown-panel li a").removeClass("selected");
        $(this).addClass("selected");
        $("#myCity").text($(this).text());
        $("#divTopMenuCon .dorpdown").trigger("mouseout");
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

    $("#categorys-2014 .dorpdown-layer .item-sub").mouseover(function () {
        var index = $(this).attr("data-id");
        $("#categorys-2014 .dd-inner .item[data-index='" + index + "']")
            .trigger("mouseover");
    }).mouseout(function () {
        var index = $(this).attr("data-id");
        $("#categorys-2014 .dd-inner .item[data-index='" + index + "']")
            .trigger("mouseout");
    });

    //分类信息菜单 横向
    $("#clothes .mt ul a").mouseover(function () {
        $("#clothes .mt ul a").removeClass("hover");
        $("#clothes .mt ul").next("span").show();
        $("#clothes .mc ul li").hide();
        
        var index = $(this).parent().index();
        $("#clothes .mc ul li:eq(" + index + ")").show();

        $(this).addClass("hover");
        $(this).next("span").hide();
        $(this).parent().prev("li").find("span").hide();
    })

    $("#clothes .mt ul a:first").trigger("mouseover");
})