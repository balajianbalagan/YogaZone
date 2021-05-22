
var navlinks = document.getElementById("navlinks")
navlinks.style.right = "-200px";
navlinks.style.opacity = "0";
function closeMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "-200px";
  navlinks.style.opacity = "0";
}
function showMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "0";
  navlinks.style.opacity = "1";
}
