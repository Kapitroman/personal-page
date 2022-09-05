const header = document.querySelector('.header');
const breakpoint = window.matchMedia('(min-width:768px)');

const initBurgerMenu = () => {
  if (!header) {
    return;
  }

  const navigationList = header.querySelector('.navigation-changer__list');
  const navigationButton = header.querySelector('.navigation-changer__toggle');

  const closeMenu = () => {
    navigationButton.ariaPressed = 'false';
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
    navigationButton.ariaPressed = 'true';
    header.classList.remove('is-closed');
    header.classList.add('is-opened');
    const height = navigationList.scrollHeight;
    navigationList.style.setProperty('height', height + 'px');
    navigationList.addEventListener('click', clickOnList);
    window.scrollLock.disableScrolling();
  };

  const clickOnMenu = () => {
    if (navigationButton.ariaPressed === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (navigationButton.ariaPressed === 'true') {
        closeMenu();
      }
      navigationList.style.setProperty('height', 'auto');
    } else {
      navigationButton.addEventListener('click', clickOnMenu);
      navigationList.style.setProperty('height', '0');
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initBurgerMenu};
