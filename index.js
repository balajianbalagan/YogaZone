var navlinks = document.getElementById("navlinks")
navlinks.style.right = "-200px";
navlinks.style.display = "none";
function closeMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "-200px";
  navlinks.style.display = "none";
}
function showMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "0";
  navlinks.style.display = "block";
}
