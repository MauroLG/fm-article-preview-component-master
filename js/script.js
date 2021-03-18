let socialDiv = document.querySelector('.social');
let shareMobileIcon = document.querySelector('.share-mobile');

socialDiv.setAttribute(
  'style',
  'background-color: var(--very-dark-grayish-blue)'
);

socialDiv.firstChild.nextSibling.classList.replace('user-info', 'social-menu');

socialDiv.firstChild.nextSibling.innerHTML =
  '<span class="share-title">share</span><div class="social-icons"><img id="fb-icon" src="images/icon-facebook.svg" alt="facebook icon"><img id="tw-icon" src="images/icon-twitter.svg" alt="twitter icon"><img id="pint-icon" src="images/icon-pinterest.svg" alt="pinterest icon"></div>';

shareMobileIcon.classList.add('active');
