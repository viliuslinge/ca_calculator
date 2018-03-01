'use strict';

// UZDUOTIS: #1 SCROLL EVENTS

// Option1: opacity 0 -> 1

/* let parArr = document.getElementsByTagName('p');

window.addEventListener('scroll', function() {
  let scrollPos = window.scrollY;

  for(let i = 0; i < parArr.length; i++) {
    let parTop = parArr[i].offsetTop;
    if(scrollPos >= (parTop - 300)) {
      parArr[i].classList.add('pVisible');
    };
  };
}); */

// Option2: infinity scroll

let parArr = document.getElementsByTagName('p');

window.addEventListener('scroll', function() {
  let test = parArr[parArr.length - 1].offsetTop;
  let scrollPos = window.scrollY;

  if(scrollPos >= test) {
    let newP = document.createElement('p');
    newP.innerHTML = parArr[0].innerHTML;
    document.querySelector('main').appendChild(newP);
    setInterval(function(){ newP.classList.add('pVisible'); }, 0);
  }
});

// UZDUOTIS: #2 SCROLL EVENTS




