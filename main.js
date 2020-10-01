// hambugerMenu animation
const hambugerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links')
const links = document.querySelector('.nav-links li')
let menuOpen = false;
hambugerMenu.addEventListener('click', () => {
  if (!menuOpen) {
    hambugerMenu.classList.add('open');
    navLinks.classList.add('openPage');
    navLinks.classList.remove('nav-links');
    menuOpen = true;
  } else {
    hambugerMenu.classList.remove('open');
    navLinks.classList.remove('openPage');
    navLinks.classList.add('nav-links');
    menuOpen = false;
  }
});
// accordion animation
const accordion=document.getElementsByClassName('accordion');
        for(i=0;i<accordion.length;i++){
            accordion[i].addEventListener('click',function(){
                this.classList.toggle('down')
            })
        }
  // background animation
var bslide=document.getElementById('bslide');
window.onmousemove=function(e){
  var x=e.clientX;
  bslide.style.left=x+'px';
}

// up arrow
var link = document.getElementById("back-to-top");
var amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if ( window.pageYOffset > amountScrolled ) {
        link.classList.add('show');
    } else {
        link.className = 'back-to-top';
    }
});


link.addEventListener('click', function(e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance/(500/16);
    function animateScroll() {
        window.scrollBy(0, increments);
        if (window.pageYOffset <= document.body.offsetTop) {
            clearInterval(runAnimation);
        }
    };
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
});
