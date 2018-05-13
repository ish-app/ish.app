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
			scrollTop: $(href).offset().top - 96
		}, "slow");
	});
});

$(window).scroll(function() {
	let body = $(document.body);
	let header = $("header");
	let y = $(window).scrollTop();

	header.css("background", "rgba(38, 38, 38, " + Math.min(1, y * (1 / 200)) + ")");
	header.css("box-shadow", "0 0 " + Math.min(20, (y * (20 / 200))) + "px black");
});