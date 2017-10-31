$(function(){
    function resizeSwiper() {
        var h=$(".swiper-container .swiper-slide > img:eq(0)").height();
        $(".swiper-container,.swiper-container .swiper-slide").css("height",h);
    }
    resizeSwiper();
    $(window).resize(function(){
        resizeSwiper();
    })

    //首页顶部轮播
    if($('.swiper-container .swiper-slide').length > 1) {
         var mySwiper = $('.swiper-container').swiper({
            loop: true,
            autoplay : 3000,
            speed: 600,
            simulateTouch : false,
            pagination : '.pagination',
            paginationClickable :true,
        });
    }


    $('.swiper-btn-prev').click(function(){
        mySwiper.swipePrev();
    })
    $('.swiper-btn-next').click(function(){
        mySwiper.swipeNext();
    })

    var mySwiper2 = $('.swiper-container-2').swiper({
        autoplay : 3000,
        speed: 600,
        centeredSlides: true,
        slidesPerView: 3,
        watchActiveIndex: true
    })
    $('.swiper-btn-prev2').click(function(){
        mySwiper2.swipePrev();
    })
    $('.swiper-btn-next2').click(function(){
        mySwiper2.swipeNext();
    })
});
