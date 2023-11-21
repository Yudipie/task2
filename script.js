let initpos = window.scrollY;
let flagpos = 60;

var prevScrollpos = window.scrollY;

window.onscroll = function() 
{
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.top = "0";
  } else {
    document.getElementById("main-header").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;

  if(currentScrollPos > flagpos)
    document.getElementById("hidden-nav").style.top = "0";

  else
    document.getElementById("hidden-nav").style.top = "-100%";

}

let navLeft = document.getElementById("nav-left");
let navRight = document.getElementById("nav-right");

navLeft.onclick = function ()
{
  var galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.scrollLeft -= galleryGrid.clientWidth;
}

navRight.onclick = function ()
{
  var galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.scrollLeft += galleryGrid.clientWidth;
}

  