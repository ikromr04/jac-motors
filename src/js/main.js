document.querySelector('.page-header__button')
  .addEventListener('click', () => document.body.classList.toggle('menu-shown'));

document.querySelector('.main-logo')
  .addEventListener('click', () => window.location.href = '/');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.body.classList.add('header-sticky')
    return;
  }
  document.body.classList.remove('header-sticky')
});

new Swiper('.banner', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

new Swiper('.swiper-models', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// document.addEventListener('click', (evt) => {
//   if (evt.target.closest('.test-drive')) {
//     document.body.classList.add('modal-shown');
//   }
//   if (evt.target.closest('.modal__close') || evt.target.tagName === 'DIALOG') {
//     document.body.classList.remove('modal-shown');
//   }
// });

// document.querySelector('.modal__form')
//   .addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     document.body.classList.remove('modal-shown');
//   });

// let inactivityTime = function () {
//   let time;
//   window.onload = resetTimer;
//   document.addEventListener('mousemove', () => {
//     resetTimer();
//   });
//   document.addEventListener('keypress', () => {
//     resetTimer();
//   });

//   function logout() {
//     document.body.classList.add('modal-shown');
//   }
//   function resetTimer() {
//     clearTimeout(time);
//     time = setTimeout(logout, 10000)
//   }
// };

window.onload = function () {
  inactivityTime();
}

document.querySelector('select').addEventListener('change', (evt) => {
  if (evt.target.value === 'E-J7') {
    document.querySelector('dialog img').src = './img/banner-2.webp';
    return;
  }
  document.querySelector('dialog img').src = './img/banner-1.webp';
});
