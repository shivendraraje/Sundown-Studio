const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1")

// var abc = a.getAttribute("data-image")

var elemC = document.querySelector("#elem-container")
var fixImg = document.querySelector("#fixedImg")

elemC.addEventListener("mouseenter", function (){
    fixImg.style.display = "block"
})

elemC.addEventListener("mouseleave", function (){
    fixImg.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var imgLink = elem.getAttribute("data-image")
        fixImg.style.backgroundImage = `url(${imgLink})`;
    })
})







var para = document.querySelector("#para")
var img = document.querySelector("#rightImg")

var headings = document.querySelectorAll(".headings")

headings.forEach(function(event) {
    event.addEventListener("click", function() {
        event.style.borderLeft = "2px solid red"
        event.style.color = "white"
       para.textContent = event.getAttribute("content")
       var link = event.getAttribute("img")
       img.src = `${link}`;
    })
    
})

function swiperAnimation () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
      });
}
swiperAnimation()



function menuAnimation () {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navImg = document.querySelector("nav img")
    var upperLine = document.querySelector("#menu #upper-line")
    var lowerLine = document.querySelector("#menu #lower-line")
    var flag = 0
    var lineDiv = document.querySelector("#line-div")

    menu.addEventListener("click", function() {
        if (flag === 0) {
            full.style.top = 0;
            navImg.style.opacity = 0
            lineDiv.style.gap = 0;
            upperLine.style.rotate = "-45deg"
            lowerLine.style.rotate = "45deg"
            flag=1
        }   
        else {
            full.style.top = "-100%";
            upperLine.style.rotate = "0deg"
            lowerLine.style.rotate = "0deg"
            lineDiv.style.gap = "1vw";
            navImg.style.opacity = 1
            flag=0
            
        }
        
})

}
menuAnimation();


function loaderAnimation () {
    var loader = document.querySelector("#loader")
    setTimeout(function() {
    loader.style.top = "-100%"
    }, 4000 );
}   
loaderAnimation();