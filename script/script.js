//DOM Strings
const valueItemSlide = document.querySelector('.first-slide');
const iconMenu = document.querySelector('.icon-menu');
const navUl = document.querySelector('.nav-ul');
const menuProfileImg = document.querySelector('.menu-profile-img');
const aside = document.querySelector('aside');
const main = document.querySelector('main');

//Event
iconMenu.addEventListener('click', () => {
  navUl.classList.toggle('show-nav-ul');
  aside.classList.remove('aside-show');
  main.classList.remove('main-opacity');
});
menuProfileImg.addEventListener('click', () => {
  aside.classList.toggle('aside-show');
  main.classList.toggle('main-opacity');
  navUl.classList.remove('show-nav-ul');
});

let counter = '-65%';
setInterval(() => {
  valueItemSlide.style.marginLeft = counter;

  if (counter === '-65%') {
    counter = '-131%';
  } else if (counter === '-131%') {
    counter = '0';
  } else {
    counter = '-65%';
  }
}, 3000);
