let men = document.querySelector('.menu');
let navi = document.querySelector('nav');
let logo = document.getElementById('logo');
let header = document.querySelector('header');
let moreInfoBtn = document.getElementById('more');
let moreInfo = document.querySelector('.more-info');
let main = document.querySelector('main');
let x = document.getElementById("moreSpan");

men.addEventListener('click', () => {
    navi.classList.toggle('active');
    men.classList.toggle('active');
    logo.classList.toggle('active-img')
    header.classList.toggle('active')
    x.classList.toggle('hidde')
})


moreInfoBtn.addEventListener('click', () => {
    moreInfo.classList.toggle('info-active')
    main.classList.toggle('main-active');

})

function swap() {
    if (x.textContent === "More +") {
        x.textContent = "More -";
    } else {
        x.textContent = "More +";
    }
}