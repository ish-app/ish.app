window.addEventListener('scroll', function(e) {
    let header = document.getElementById("headr");
    let y = document.documentElement.scrollTop;

    header.style.background = "rgba(38, 38, 38, " + Math.min(1, y * (1 / 200)) + ")";
    header.style.boxShadow = "0 0 " + Math.min(20, (y * (20 / 200))) + "px black";
});