import { iosVhFix } from './utils/ios-vh-fix';
import { ScrollLock } from './utils/scroll-lock';//
import './modules/move-to';
import { NavigationChanger } from './modules/navigation-changer';
import { initBurgerMenu } from './modules/init-burger-menu';
import { initChangeLanguage } from './modules/init-change-language';
import { initDynamicAdaptive } from './modules/init-dynamic-adaptive';
import { initChangeColorTheme } from './modules/init-change-color-theme';
import { initTabs } from './modules/init-tabs';
import { annotateTextBlocks } from './modules/annotateTextBlocks';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();
  // ---------------------------------

  // Modules
  initChangeColorTheme();
  initChangeLanguage();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const navigationChanger = new NavigationChanger();
    navigationChanger.init();
    initDynamicAdaptive();
    initBurgerMenu();
    initTabs();
    annotateTextBlocks();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
