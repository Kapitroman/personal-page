const header = document.querySelector('.header');
const breakpoint = window.matchMedia('(min-width:768px)');

const initBurgerMenu = () => {
  if (!header) {
    return;
  }

  const navigationList = header.querySelector('.navigation-changer__menu');//__list
  const navigationButton = header.querySelector('.navigation-changer__toggle');
  //
  const returnHeightAuto = () => {
    if (navigationList.style.height !== '0px') {
      navigationList.style.setProperty('height', 'auto');
    }
  };
  //
  const closeMenu = () => {
    navigationButton.setAttribute('aria-expanded', false);
    header.classList.remove('is-opened');
    header.classList.add('is-closed');
    navigationList.style.setProperty('height', '0');
    navigationList.removeEventListener('click', clickOnList);
    window.scrollLock.enableScrolling();
  };

  const clickOnList = (evt) => {
    if (evt.target.closest('a')) {
      closeMenu();
    }
  };

  const openMenu = () => {
    navigationButton.setAttribute('aria-expanded', true);
    header.classList.remove('is-closed');
    header.classList.add('is-opened');
    const height = navigationList.scrollHeight;
    navigationList.style.setProperty('height', `${height}px`);
    navigationList.addEventListener('click', clickOnList);
    window.scrollLock.disableScrolling();
  };

  const clickOnMenu = () => {
    if (navigationButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (navigationButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navigationList.removeEventListener('transitionend', returnHeightAuto);//
      }
      navigationList.style.setProperty('height', 'auto');
    } else {
      navigationButton.addEventListener('click', clickOnMenu);
      navigationList.style.setProperty('height', '0');
      navigationList.addEventListener('transitionend', returnHeightAuto);//
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initBurgerMenu};
