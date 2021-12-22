var toggleButton = $(".toggle-button");
var navbarLinks = $(".navbar__links");

toggleButton.on("click", function() {
    navbarLinks.slideToggle("active");
});