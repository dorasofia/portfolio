function makeScrollable($outer, $inner){
    var extra = 30;
    var divWidth = $outer.width();
    //Remove scrollbars
    $outer.css({
        overflow: 'hidden'
    });
    //Find last image in container
    var lastElem = $inner.find('a:last');
    $outer.scrollLeft(0);
    
    //When user move mouse over menu
    $outer.unbind('mousemove').bind('mousemove',function(e){
        var containerWidth = lastElem[0].offsetLeft + lastElem.outerWidth() + 2*extra;
        var left = (e.pageX - $outer.offset().left) * (containerWidth-divWidth) / divWidth - extra;
        $outer.scrollLeft(left);
    });
    
    //mouseclicking when no mousemove detected
    //scroll listener
    //phone has mousedown mouseup
}

function buildThumbs(){
    var $thumbs_wrapper = $('.gallery');
    var $thumbs         = $('.thumbnails');
    var finalW          = 0;
    
    $('a img', $thumbs).each(function() {
        finalW += $(this).width();
    });
    $thumbs.css('width',finalW + 'px');
    //make this element scrollable
    makeScrollable($thumbs_wrapper,$thumbs);
}

$(window).load(function() {
    buildThumbs();
});

$(window).resize(function() {
    buildThumbs();
});







$(function() {
    
   $(document).ready(function() {
        $(".top").fadeIn(1000);
       
        setTimeout(function() {
        $(".nav").animate({"left":"70%"},400);
        },
        1000);
        });

    $("h1").click(function(e) {
        e.preventDefault();
        hideAll();
        $(this).addClass('active');
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        });
    
    $("h2").click(function(e) {
        e.preventDefault();
        hideAll();
        $(this).addClass('active');
        $(".about-captions").fadeIn(600);
        if (document.documentElement.clientWidth < 1280) {
            $("html, body").animate({ scrollTop: 187 }, "slow");
            return false;}
        if (document.documentElement.clientWidth >= 1280) {
            $("html, body").animate({ scrollTop: 230 }, "slow");
            return false;}
        });
    
    $("h3").click(function(e) {
        e.preventDefault();
        hideAll();
        $(this).addClass('active');
        $(".contact-captions").fadeIn(600);
        if (document.documentElement.clientWidth < 1280) {
            $("html, body").animate({ scrollTop: 187 }, "slow");
            return false;}
        if (document.documentElement.clientWidth >= 1280) {
            $("html, body").animate({ scrollTop: 230 }, "slow");
            return false;}
        });
    
    function hideAll() {
        $('.active').removeClass('active');
        $(".psych-captions").fadeOut(600);
        $(".map-captions").fadeOut(600);
        $(".cards-captions").fadeOut(600);
        $(".processing-captions").fadeOut(600);
        $(".sway-captions").fadeOut(600);
        $(".posters-captions").fadeOut(600);
        $(".app-captions").fadeOut(600);
        $(".vivgo-captions").fadeOut(600);
        $(".hum-captions").fadeOut(600);
        $(".darling-captions").fadeOut(600);
        $(".elffe-captions").fadeOut(600);
        $(".book-captions").fadeOut(600);
        $(".bnw-captions").fadeOut(600);
        $(".about-captions").fadeOut(600);
        $(".contact-captions").fadeOut(600);
        
        
        $(".dulcolax-captions").fadeOut(600);
        $(".hacks-captions").fadeOut(600);
        $(".idean-captions").fadeOut(600);
        
    }
    
    $(".gallery").click(function(e) {
        e.preventDefault();
        $(".captions").fadeIn(600);
        $("h1").addClass("active");
        if (document.documentElement.clientWidth < 1280) {
            $("html, body").animate({ scrollTop: 187 }, "slow");
            return false;}
        if (document.documentElement.clientWidth >= 1280) {
            $("html, body").animate({ scrollTop: 230 }, "slow");
            return false;}
        });    
                $(".psych-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".psych-captions").fadeIn(600);
                    });
                $(".map-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".map-captions").fadeIn(600);
                    });
                $(".cards-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".cards-captions").fadeIn(600);
                    });
                $(".processing-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".processing-captions").fadeIn(600);
                    });
                $(".sway-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".sway-captions").fadeIn(600);
                    });
                $(".posters-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".posters-captions").fadeIn(600);
                    });
                $(".app-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".app-captions").fadeIn(600);
                    });
                $(".vivgo-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".vivgo-captions").fadeIn(600);
                    });
                $(".hum-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".hum-captions").fadeIn(600);
                    });
                $(".darling-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".darling-captions").fadeIn(600);
                    });
                $(".elffe-pic").click(function(e) {
                    hideAll();
                    e.preventDefault();
                    $(".elffe-captions").fadeIn(600);
                    });
                $(".book-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".book-captions").fadeIn(600);
                    });
                $(".bnw-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".bnw-captions").fadeIn(600);
                    });
    
    
                $(".dulcolax-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".dulcolax-captions").fadeIn(600);
                    });
                $(".hacks-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".hacks-captions").fadeIn(600);
                    });
                $(".idean-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".idean-captions").fadeIn(600);
                    });
    
    
    $(".x").click(function(e) {
        e.preventDefault()
        hideAll();
        $("h2").removeClass("active");
        $("h3").removeClass("active");
        $("h1").addClass("active");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        });
    
});