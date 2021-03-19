const socialDiv = document.querySelector('.social');
const shareMobileIcon = document.querySelector('.share-mobile');

let hidden = true;

const socialMenu = () => {
  if (hidden) {
    socialDiv.classList.add('turn-dark');

    socialDiv.firstChild.nextSibling.classList.replace(
      'user-info',
      'social-menu'
    );

    socialDiv.firstChild.nextSibling.innerHTML =
      '<span class="share-title">share</span><div class="social-icons"><img id="fb-icon" src="images/icon-facebook.svg" alt="facebook icon"><img id="tw-icon" src="images/icon-twitter.svg" alt="twitter icon"><img id="pint-icon" src="images/icon-pinterest.svg" alt="pinterest icon"></div>';

    shareMobileIcon.classList.add('active-button');

    hidden = !hidden;
  } else {
    socialDiv.classList.remove('turn-dark');

    socialDiv.firstChild.nextSibling.classList.replace(
      'social-menu',
      'user-info'
    );

    socialDiv.firstChild.nextSibling.innerHTML = `<div class="user-info">
          <img
            class="avatar"
            src="images/avatar-michelle.jpg"
            alt="avatar person"
          />
          <div class="name-date">
            <h3>Michelle Appleton</h3>
            <span>28 Jun 2020</span>
          </div>
        </div>`;

    shareMobileIcon.classList.remove('active-button');

    hidden = !hidden;
  }
};

shareMobileIcon.addEventListener('click', socialMenu);
