let menuElem = document.getElementById('dessert');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};