let fadeout;
let fadein;

function fadeOut() {
    fadeout = setInterval(hide, 20)
    clearInterval(fadein)
}

function hide() {
    let img = document.getElementById('imag')
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if (opacity > 0) {
        opacity = opacity - 0.01;
        img.style.opacity = opacity;
    } else {
        clearInterval(fadeout)
    }

}

function fadeIn() {
    fadein = setInterval(show, 20)
    clearInterval(fadeout)
}
 
function show (){
    let img = document.getElementById('imag')
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if (opacity < 1) {
        opacity = opacity + 0.01;
        img.style.opacity = opacity;
    }else{
        clearInterval(fadein)
    }
}