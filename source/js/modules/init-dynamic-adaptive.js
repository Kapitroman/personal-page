import {DynamicAdaptive} from './dynamic-adaptive';

const togglesContainer = document.querySelector('.toggles-container');

const initDynamicAdaptive = () => {
  const dynamicAdaptive = new DynamicAdaptive('max');
  dynamicAdaptive.init();
  togglesContainer.classList.remove('hidden');
};

export {initDynamicAdaptive};
