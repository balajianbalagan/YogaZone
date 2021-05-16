var navlinks = document.getElementById("navlinks")
function closeMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "-200px";
}
function showMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "0";
}
