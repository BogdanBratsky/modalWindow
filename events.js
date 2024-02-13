const wrap = document.querySelector('.wrap');
const imgBlock = document.querySelector('.image-block');
const modal = document.querySelector('#modalWindow');
const closeBtn = document.querySelector('.close');
const background = document.querySelector('#background');
const othrImg = document.querySelector('.other-images');
const anthrImg = document.querySelectorAll('.another-img');
const myImg = document.querySelector('#myImg');
const modalImg = document.querySelector('#modalImg');
const scrollImg = document.querySelectorAll('.scrollImg');
const up = document.querySelector('.up')
const down = document.querySelector('.down')


let imgLocalStorage = localStorage.setItem("lastImg", "img/img-7.jpg");
myImg.setAttribute('src', imgLocalStorage)


othrImg.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        othrImg.scrollBy(0, 35);
    }
    console.log(event);
    if (event.deltaY < 0) {
        othrImg.scrollBy(0, -35);
    }
    console.log(event);
});


up.addEventListener('click', () => {
    othrImg.scrollBy(0, -60);
});


down.addEventListener('click', () => {
    othrImg.scrollBy(0, 60);
});


othrImg.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.another-img')) {
        const img = target.getAttribute('src');
        myImg.setAttribute('src', img);
    };
});


myImg.addEventListener('click', () => {
    const image = myImg.getAttribute('src');
    wrap.style.zIndex = "0";
    modal.style.zIndex = "9999";
    background.style.display = "block";
    modal.style.display = "block";
    modalImg.setAttribute('src', image);
    // document.body.style.overflow = "hidden"
});


closeBtn.addEventListener('click', () => {
    wrap.style.display = "flex";
    modal.style.display = "none";
    background.style.display = "none";
    // document.body.style.overflow = "auto";
});


document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('#modalWindow') && !target.closest('.wrap')) {
        wrap.style.display = "flex";
        modal.style.display = "none";
        background.style.display = "none";
        // document.body.style.overflow = "auto";
    }
});