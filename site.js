jQuery.easing.def = "easeInOutQuad";

$(window).on("load", function() {
    let body = $(document.body);
    let root = $("html, body");

    $("a[href^=\"#\"]").click(function(e) {
        let href = $.attr(this, "href");
        if (href == "#") {
            return;
        }
        e.preventDefault();

        root.animate({
            scrollTop: $(href).offset().top - 80
        }, "slow");
    });

    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let nextKonamiInput = 0;
    $(window).keydown(function(ev) {
        if (nextKonamiInput !== -1 && ev.keyCode === konamiCode[nextKonamiInput]) {
            nextKonamiInput += 1;
            if (nextKonamiInput === konamiCode.length) {
                $('.home').css('background', 'url(https://pbs.twimg.com/profile_banners/2540435814/1537379284/1500x500)').css('background-size', 'cover').css('background-position', 'center');
                nextKonamiInput = -1;
            }
        } else {
            if (nextKonamiInput !== 3 || ev.keyCode !== 38) {
                nextKonamiInput = 0;
            }
        }
    });
});

$(window).scroll(function() {
    let body = $(document.body);
    let header = $("header");
    let y = $(window).scrollTop();

    header.css("background", "rgba(38, 38, 38, " + Math.min(1, y * (1 / 200)) + ")");
    header.css("box-shadow", "0 0 " + Math.min(20, (y * (20 / 200))) + "px black");
});
