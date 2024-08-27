// let menuElem = document.getElementById('dessert');
// let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
// };



//                  вторая задача               //

let i = 1;

for(let li of carusel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130;
let count = 3;

let list = carusel.querySelector('ul');
let listElems = carusel.querySelectorAll('li');

let position = 0;

carusel.querySelector('.levo').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carusel.querySelector('.pravo').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};