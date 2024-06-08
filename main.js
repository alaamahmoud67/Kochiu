let navbar=document.querySelector(".navbar");
let menu = document.querySelector("#menu-bar")
menu.onclick=function(){
    menu.classList.toggle('fa-times');

    navbar.classList.toggle("active");
}
let slides = document.querySelectorAll(".slide-container");
let index=0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// 
document.querySelectorAll(".featured-image-1").forEach(image1=>{
    image1.addEventListener("click",()=>{
var src=image1.getAttribute("src")
        document.querySelector(".big-image-1").src=src
    })
})

document.querySelectorAll(".featured-image-2").forEach(image2 => {
    image2.addEventListener("click", () => {
        var src = image2.getAttribute("src")
        document.querySelector(".big-image-2").src = src
    })
})

document.querySelectorAll(".featured-image-3").forEach(image3 => {
    image3.addEventListener("click", () => {
        var src = image3.getAttribute("src")
        document.querySelector(".big-image-3").src = src
    })
})

// 
