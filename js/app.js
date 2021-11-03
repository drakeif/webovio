const btn = document.getElementById('btn'),
      modal = document.getElementById('modal'),
      closeMenu = document.querySelectorAll('.modal__links'),
      social = document.querySelectorAll('.modal__social'),
      toGo = document.querySelector('.modal__toGo'),
      body = document.getElementById('body');

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
    body.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    btn.classList.remove('active');
    modal.classList.remove('active');
    body.classList.remove('active');
  }));

  social.forEach(el => el.addEventListener('click', ()=> {
    btn.classList.remove('active');
    modal.classList.remove('active');
    body.classList.remove('active');
  }));

  toGo.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        btn.classList.remove('active');
        modal.classList.remove('active');
        body.classList.remove('active');
    }
});

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