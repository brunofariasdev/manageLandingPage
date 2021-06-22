function btnOn(){
    var menuMb = document.querySelector('.menu-active');
    var iconClose = document.querySelector('.close');
    var iconOpen = document.querySelector('.open')

    if(menuMb.style.display === 'flex'){
        menuMb.style.display = 'none'
        iconClose.style.display = "none"
        iconOpen.style.display = "block"

    }else{
        menuMb.style.display = "flex"
        iconClose.style.display = "block"
        iconOpen.style.display = "none"
    }
}

const imgs = document.getElementById('img');
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    img.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 1800);