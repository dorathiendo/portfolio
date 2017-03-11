$(document).ready(function(){
    showAll();
    clickCarousel();
    moveTitles();
    scrollAnimation();
});

function showAll(){
    $('.section:nth-child(odd):not(#intro)').hover(function(){
        $(this).find('.title').toggleClass('showAllRight');
    });
    $('.section:nth-child(even)').hover(function(){
        $(this).find('.title').toggleClass('showAllLeft');
    });
}

function clickCarousel(){
    $('.carousel .nextBtn').click(function(){
        var current = $('.carousel li.active');
        var next = current.next();
        if(next.length < 1) {
            next = $('.carousel li:first-child');
        }
        //current.removeClass('active');
        current.animate({
            opacity: 0
        }, 500);
        next.addClass('active');
    });
    $('.carousel .prevBtn').click(function(){
        var current = $('.carousel li.active');
        var prev = current.prev();
        if(prev.length < 1) {
            prev = $('.carousel li:last-child');
        }
        current.toggleClass('active');
        prev.addClass('active');
    })
}

function moveTitles(){
    $(window).on( 'scroll', function(e){
        var left = parseInt($('.section:nth-child(odd) .title h2').css('left').replace('px', ''));
        if(left <= 50){
            $('.section:nth-child(odd) .title h2').css('left', left+10 + 'px');
        } else {
            $('.section:nth-child(odd) .title h2').css('left', left-10 + 'px');
        }

        var right = parseInt($('.section:nth-child(even) .title h2').css('right').replace('px', ''));
        if(right <= 50){
            $('.section:nth-child(even) .title h2').css('right', right+10 + 'px');
        } else {
            $('.section:nth-child(even) .title h2').css('right', right-10 + 'px');
        }
    });
}

function scrollAnimation(){
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
}