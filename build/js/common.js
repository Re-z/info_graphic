$(document).ready(function(){
    //start adaptive slider
    var sliderOptions = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            ]
    };
    var repliesOptions = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true
    };

    function repliesLoad() {
        var replies = $('.replies');
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (replies.hasClass('slick-initialized')) {
                replies.slick('unslick');
            }
        } else {
            if (!replies.hasClass('slick-initialized')) {
                replies.slick(repliesOptions);
            }
        }
    }
    repliesLoad();


    function sliderLoad() {
        var slider = $('.slider');
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
        } else {
            if (!slider.hasClass('slick-initialized')) {
                slider.slick(sliderOptions);
            }
        }
    }
    sliderLoad();

    //added functions on resizing
    $(window).resize(function(){
        sliderLoad();
        repliesLoad();
        //zoomingSliderImg();
    });



    //transforming slider for moblie
    $('body').on('click', '.more-works', function(){
        $('.slider__item.two').fadeIn();
        $('.more-works').addClass('js-two-showed')
    });
    $('body').on('click', '.more-works.js-two-showed', function(){
        $('.slider__item.three').fadeIn();
        $('.more-works').removeClass('js-two-showed').addClass('js-three-showed');

    });
    $('body').on('click', '.more-works.js-three-showed', function(){
        $('.slider__item.four').fadeIn();
        $('.more-works').removeClass('js-three-showed').addClass('js-four-showed').hide();
    });

    $('body').on('click', '.more-testimonals', function(){
        $("div[class^='replies__item-wrap'].two").fadeIn();
        $('.more-testimonals').addClass('js-two-showed')
    });
    $('body').on('click', '.more-testimonals.js-two-showed', function(){
        $("div[class^='replies__item-wrap'].three").fadeIn();
        $('.more-testimonals').removeClass('js-two-showed').addClass('js-three-showed')
    });
    $('body').on('click', '.more-testimonals.js-three-showed', function(){
        $("div[class^='replies__item-wrap'].four").fadeIn();
        $('.more-testimonals').removeClass('js-three-showed').addClass('js-four-showed').hide();
    });

    //cloning were section
        if ($(window).width() < 768) {
            var whereMob =  $('.where').clone();
            $(whereMob).insertAfter('.portfolio').addClass("is-cloned").show();
        }
    // open feedback popup
    $('.write-us').click(function(){
        $('.feedback').fadeIn()
    });
    $('body').on('click', '.feedback__close', function(){
        $('.feedback').fadeOut();
        $('.feedback_mob').fadeOut();
        $('.write-us-mob').removeClass('js-opened').addClass('js-ready')
    });

    //open feedback popup on mob devices
    $('body').on('click', '.write-us-mob.js-ready', function(){
        $(this).removeClass('js-ready').addClass('js-opened');
        var feedbackClone = $('.feedback').clone();
        $(feedbackClone).removeClass('feedback').addClass('feedback_mob').appendTo('.footer__btn-wrap').fadeIn();
    });
    //adding hover effect on slider image

    //adding zoomed img
    $('body').on('mouseenter', '.slider__img', function(){
        if($(window).width()>1000) {
            var path = $(this).prop("src");
            var zoomedWrap = $('<div class="zoomed-wrap"><img class="slider__img zoomed" src="' + path + '"></div>');
            //$(this).clone().addClass('zoomed').appendTo(zoomedWrap);
            if ($('.zoomed-wrap').length) {
                $('.zoomed-wrap').find('img').attr('src', path);
            } else {
                $(zoomedWrap).prependTo('.slider__wrap');
            }
        }
    });
    $('.slider__wrap').on('mouseleave', function(){
        $('.zoomed-wrap').remove();
    });








});