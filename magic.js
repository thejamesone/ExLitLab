function resizeNav() {
    var t = document.getElementById("nav").offsetWidth,
        e;
    document.getElementById("navUl").style.width = t + "px"
}


function openAbout() {
    aboutButton.classList.add("open"), aboutDrawer.classList.add("open"), backgroundOverlay.classList.add("open")
}
function closeAbout() {
    aboutButton.classList.remove("open"), aboutDrawer.classList.remove("open"), backgroundOverlay.classList.remove("open")
}

aboutButton = document.getElementById("about-button");
backgroundOverlay = document.getElementById("background-overlay");
aboutDrawer = document.getElementById("about-drawer");

document.addEventListener("DOMContentLoaded", function(event) {
  closeAbout();
});

aboutButton.onclick = function() {
    openAbout();
}, backgroundOverlay.onclick = function() {
    closeAbout();
    var t = window.location.toString();
    t = t.split("#")[0], history.pushState({
        aboutDrawer: closed
    }, "", t)
}, window.location.href.indexOf("#about") > -1 && openAbout(), window.onpopstate = function(t) {
    window.location.href.indexOf("#about") > -1 ? openAbout() : closeAbout()
}
