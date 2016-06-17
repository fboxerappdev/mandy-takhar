

$(document).ready(function(){

    var lefthigh = $(".leftbar").outerHeight();
    $(".index-gallery").css("height",lefthigh);


    $(".index-gallery>div").each(function(index){
        var src = $(this).find("img").attr("src");
        src = 'url("'+src+'")';
        $(this).find("a").append("<span></span>");
        $(this).find("span").css("background-image",src);
    });

    var $gallery = $(".gallery .gallery-grid a .gallery-item");

    var wt  = $gallery.outerWidth();

    $gallery.css("height",wt+"px");

    $gallery.each(function(){
        var src = $(this).find("img").attr("src");
        src  = 'url("'+src+'")';
        $(this).css("background-image",src);
    });


    $(".nav-bar ul li a").click(function(){

        var data = $(this).attr("data-click");
        var target = $('div[data-target="'+data+'"]');
        var cc = target.offset().top;
        cc-=40;
        $('html, body').stop(true,false).animate({
            scrollTop: cc
        }, 1000);
    })

});

