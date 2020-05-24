/*jslint browser: true*/
/*global $*/

$(function () {
    
    function hideAll() {
        $('.gallery-item-active').removeClass('gallery-item-active');
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
    
    $(".nordic-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".nordic-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".nordic-pic").addClass("gallery-item-active");
    });
    $(".dogtown-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".dogtown-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".dogtown-pic").addClass("gallery-item-active");
    });
    $(".dma-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".dma-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".dma-pic").addClass("gallery-item-active");
    });
    $(".vivgo-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".vivgo-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".vivgo-pic").addClass("gallery-item-active");
    });
    $(".elffe-pic").click(function (e) {
        hideAll();
        e.preventDefault();
        $(".elffe-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".elffe-pic").addClass("gallery-item-active");
    });
    $(".adteam-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".adteam-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".adteam-pic").addClass("gallery-item-active");
    });
    $(".hacks-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".hacks-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".hacks-pic").addClass("gallery-item-active");
    });
    $(".idean-pic").click(function (e) {
        e.preventDefault();
        hideAll();
        $(".idean-captions").fadeIn(200);
        $(".modal").fadeIn(200);
        $(".idean-pic").addClass("gallery-item-active");
    });
    
    $(".x").click(function (e) {
        e.preventDefault();
        hideAll();
        //$("html, body").animate({ scrollTop: 0 }, "slow");
        $(".modal").fadeOut(200);
        return false;
    });
    
});