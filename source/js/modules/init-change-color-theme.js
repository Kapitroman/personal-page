const getSystemScheme = () => {
  const darkScheme = matchMedia('(prefers-color-scheme: dark)').matches;

  return darkScheme ? 'dark' : 'light';
}

const getSavedColorTheme = () => localStorage.getItem('color-theme');

const setColorTheme = (colorValue) => localStorage.setItem('color-theme', colorValue);

const changeColorTheme = (colorValue) => {
  document.body.setAttribute('data-color-theme', colorValue);
}

const setColorThemeValue = (evt) => {
  const colorTheme = evt.target.value;
  setColorTheme(colorTheme);
  changeColorTheme(colorTheme);
}

const initChangeColorTheme = () => {

  let savedColorThemeValue = getSavedColorTheme();
  let currentRadio;

  if (savedColorThemeValue !== null) {
    document.body.setAttribute('data-color-theme', savedColorThemeValue);
    currentRadio = document.querySelector(`[name="toggle-color-theme"][value=${savedColorThemeValue}]`);
  } else {
    document.body.setAttribute('data-color-theme', getSystemScheme());
    currentRadio = document.querySelector(`[name="toggle-color-theme"][value=${getSystemScheme()}]`);
  }

  currentRadio.checked = true;

  const toggleColorTheme = document.querySelector('[data-toggle-color-theme]');
  toggleColorTheme.addEventListener('change', setColorThemeValue);
}

export {initChangeColorTheme};
