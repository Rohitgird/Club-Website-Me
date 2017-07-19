
$(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();

    $("#c2").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '0px ' + parseInt(- y/6) + 'px');
});


$(document).ready(function() {
    $(".changing-text").typed({
            strings: [        "We Code.^800", "We Make Pretty Stuff.^800",        "       We Build The Web.^800", "We Are IECSE ^800"],
            typeSpeed: 20,
            backSpeed: 10,
            backDelay: 20,
            loop: true
        });

        $('#card-1').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(74, 244, 183)");
        });
        $('#card-2').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(129, 251, 118)");
        });
        $('#card-3').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(194, 213, 84)");
        });
        $('#card-4').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(245, 121, 75)");
        });
        $('#card-5').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(73, 214, 155)");
        });
        $('#card-6').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(185, 246, 116)");
        });
        $('#card-7').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(246, 116, 245)");
        });
        $('#card-8').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(189, 187, 193)");
        });
        $('#card-9').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(138, 92, 231)");
        });
        $('#card-10').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(56, 55, 57)");
        });
        $('#card-11').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(93, 194, 198)");
        });
        $('#card-12').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(84, 223, 181)");
        });
        $('#card-13').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(232, 238, 104)");
        });
        $('#card-14').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(118, 79, 195)");
        });
        $('#card-15').on("mouseover", function() {
            $('#c7').css("background-color", "rgb(252, 198, 91)");
        });

        function randNum()
        {
            var random = Math.floor(Math.random() * 4);
            var ran = Math.floor(Math.random() * 6);
            $('.row').eq(random).children().find('.person').eq(ran).toggleClass('tada');
        }

        setInterval(function(){
            randNum();
        }, 1000);

        $(".link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });



    $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if(wScroll > $('#c7').offset().top - $(window).height()/2){

        $('.card').each(function(i){

            setTimeout(function(){
                $('.card').eq(i).addClass('comeIn');
            }, 150 * (i+1));

        });
    }


    if(wScroll > $('#c3').offset().top - $(window).height()/3){
        $('#c3').children().find('img').addClass('comeUp');

        $('#c3').children().find('p.set').addClass('comeUp');
    }

    if(wScroll > $('#c4').offset().top - $(window).height()/10) {
        $('.research-content p').addClass('comeOut');

    }

    if(wScroll > $('.secondary-events').offset().top - $(window).height()/3){
        $('.secondary-events').children().find('img').addClass('comeUp');

        $('.secondary-events').children().find('p.set').addClass('comeUp');
    }

});
