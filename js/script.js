const socialDiv = document.querySelector('.social');
const shareMobileIcon = document.querySelector('.share-mobile');
const socialMenu = document.querySelector('.social-menu');
const userInfo = document.querySelector('.user-info');
const triangleMenu = document.querySelector('.triangle');
const mediaQuery = window.matchMedia('(min-width: 1000px)');

let hidden = true;

mediaQuery.onchange = function () {
  shareMobileIcon.classList.remove('active-button');
  socialDiv.classList.remove('turn-dark');
  userInfo.style.display = 'flex';
  socialMenu.style.display = 'none';
  triangleMenu.style.display = 'none';
  if (!hidden) {
    hidden = !hidden;
  }
};

const socialMenuModal = () => {
  if (hidden) {
    shareMobileIcon.classList.add('active-button');
    if (window.innerWidth < 1000) {
      socialDiv.classList.add('turn-dark');
      userInfo.style.display = 'none';
    }
    triangleMenu.style.display = 'unset';
    socialMenu.style.display = 'flex';

    hidden = !hidden;
  } else {
    shareMobileIcon.classList.remove('active-button');
    socialDiv.classList.remove('turn-dark');
    userInfo.style.display = 'flex';
    socialMenu.style.display = 'none';
    triangleMenu.style.display = 'none';
    hidden = !hidden;
  }
};

shareMobileIcon.addEventListener('click', socialMenuModal);
