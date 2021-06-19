console.log("working");

$("#Features-tabs ul li").on("click", function () {
    $('li ').removeClass("active");
    // $( this ).find( 'li.active' ).removeClass( 'active' );
    var x = $(this).find('.active');
    $(this).addClass('active');
    $(".Tabs-content").hide();
    $("div[id=" + $(this).attr("data-tab-type") + "]").show();
    console.log(x);
});

$(".Burger-nav").on("click",function () {
    $(".Nav-wrapper").toggleClass("open");
}); 