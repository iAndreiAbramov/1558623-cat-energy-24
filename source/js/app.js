document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');
  const dashes = document.querySelectorAll('.main-nav__dash');
  const [topDash, middleDash, bottomDash] = dashes;

  //Menu open & close
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('main-nav__list--active');
    topDash.classList.toggle('main-nav__dash--rotated-plus');
    middleDash.classList.toggle('visually-hidden');
    bottomDash.classList.toggle('main-nav__dash--rotated-minus');
  });
});
