import { annotate, annotationGroup } from 'rough-notation'; //

const pathContent = "data/site-content.json";
let lang = "ru";

const fetchContentData = async (path) => {
  const response = await fetch(path);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const contentData = await response.json();
  return contentData;
}

const getSavedLang = () => localStorage.getItem('lang-value');

const setLang = (langValue) => localStorage.setItem('lang-value', langValue);

const setLanguageValue = (evt) => {
  lang = evt.target.value;
  setLang(lang);
  changeLanguage(lang);
}

const changeLanguage = async (langValue) => {
  try {
    const languageData = await fetchContentData(pathContent);

    for (let key in languageData) {
      let elems = Array.from(document.querySelectorAll(`[data-lang-key="${key}"]`));

      if (elems.length) {
        elems.forEach((elem, index) => {
          if (languageData[key][langValue] && languageData[key][langValue][index]) {
            elem.innerHTML = languageData[key][langValue][index];
          }
        })
      }
    }

    document.documentElement.setAttribute("lang", lang);

  } catch (error) {
    console.log(error.message);
  }
}

const initChangeLanguage = () => {

  let savedLangValue = getSavedLang();
  let currentRadio;

  if (savedLangValue !== null) {
    currentRadio = document.querySelector(`[name="toggle-language"][value=${savedLangValue}]`);
    lang = savedLangValue;

  } else {
    currentRadio = document.querySelector('[name="toggle-language"][value=ru]');
  }

  currentRadio.checked = true;
  changeLanguage(lang);

  const toggleLanguage = document.querySelector('[data-toggle-language]');
  toggleLanguage.addEventListener('change', setLanguageValue);
}

export { initChangeLanguage };
