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
    
    //When user move mouse over menu on desktop
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
	if ('scrollRestoration' in history) {
  		// Don't remember scroll position from history
  		history.scrollRestoration = 'manual';
	}
    $("html, body").animate({ scrollTop: 0 });
    $(".about-captions").fadeIn(0);
    // $("h2").addClass("active");
    buildThumbs();
});

$(window).resize(function() {
    buildThumbs();
});







$(function() {
    
    function hideAll() {
        $('.active').removeClass('active');
        $(".dogtown-captions").fadeOut(0);
        $(".dma-captions").fadeOut(0);
        $(".vivgo-captions").fadeOut(0);
        $(".elffe-captions").fadeOut(0);
        $(".nordic-captions").fadeOut(0);
        $(".adteam-captions").fadeOut(0);
        $(".hacks-captions").fadeOut(0);
        $(".idean-captions").fadeOut(0);        
        $(".about-captions").fadeOut(0);
    }
    
    $(".gallery").click(function(e) {
        e.preventDefault();
        $(".captions").fadeIn(0);
        // $("h2").addClass("active");
        if (document.documentElement.clientWidth < 500) {
            $("html, body").animate({ scrollTop: 350 }, "slow");
            return false;}
        if (document.documentElement.clientWidth >= 500) {
            $("html, body").animate({ scrollTop: 750 }, "slow");
            return false;}
        });    
    
                $(".nordic-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".nordic-captions").fadeIn(0);
                    });
                $(".dogtown-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".dogtown-captions").fadeIn(0);
                    });
                $(".dma-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".dma-captions").fadeIn(0);
                    });
                $(".vivgo-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".vivgo-captions").fadeIn(0);
                    });
                $(".elffe-pic").click(function(e) {
                    hideAll();
                    e.preventDefault();
                    $(".elffe-captions").fadeIn(0);
                    });
                $(".adteam-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".adteam-captions").fadeIn(0);
                    });
                $(".hacks-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".hacks-captions").fadeIn(0);
                    });
                $(".idean-pic").click(function(e) {
                    e.preventDefault();
                    hideAll();
                    $(".idean-captions").fadeIn(0);
                    });
    
    
    $(".x").click(function(e) {
        e.preventDefault()
        hideAll();
        //$("h1").removeClass("active");
        $(".about-captions").fadeIn(0);
        $("h2").addClass("active");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        });
    
});