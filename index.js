
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
if(window.innerWidth<=700){
  showMenu();
  closeMenu();
}
if(window.innerWidth>800){
  closeMenu();
  showMenu();
}
