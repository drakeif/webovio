const btn = document.getElementById('btn'),
      modal = document.getElementById('modal'),
      closeMenu = document.querySelectorAll('.modal__links'),
      social = document.querySelectorAll('.modal__social'),
      toGo = document.querySelector('.modal__toGo'),
      body = document.getElementById('body'),
      header = document.getElementById('header'),
      logo = document.querySelector('.header__logo');

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('no--bg');
    logo.classList.toggle('no--logo');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    btn.classList.remove('active');
    modal.classList.remove('active');
    body.classList.remove('active');
    header.classList.remove('no--bg');
    logo.classList.remove('no--logo');
  }));

  social.forEach(el => el.addEventListener('click', ()=> {
    btn.classList.remove('active');
    modal.classList.remove('active');
    body.classList.remove('active');
    header.classList.remove('no--bg');
    logo.classList.remove('no--logo');
  }));

  toGo.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        btn.classList.remove('active');
        modal.classList.remove('active');
        body.classList.remove('active');
        header.classList.remove('no--bg');
        logo.classList.remove('no--logo');
    }
});
// SWIPER
var swiper = new Swiper(".brandsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
   /*  el: ".swiper-pagination",
    clickable: true, */
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
// FIXED MENU
let waypoint = new Waypoint({
  element: document.getElementById('wedo'),
  handler: function(direction) {
    let header = document.getElementById('header');
    if(direction === 'down') {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
});