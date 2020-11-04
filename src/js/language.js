import refs from './refs';

const { languageCheckBox, rusFlagSvg, usaFlagSvg } = refs;

function onLoadPage() {
  if (!localStorage.getItem('language')) {
    const defaultLang = {
      language: 'en-EN',
      checked: false,
    };

    localStorage.setItem('language', JSON.stringify(defaultLang));
  }

  let selectedLang = localStorage.getItem('language');
  selectedLang = JSON.parse(selectedLang);

  languageCheckBox.checked = selectedLang.checked;
  changeLanguageFlag(selectedLang.checked);
}

function saveLangToLocalStorage(checkBox) {
  const selectedLang = {};

  selectedLang.checked = checkBox.checked;

  if (checkBox.checked) {
    selectedLang.language = 'ru-RU';
  } else {
    selectedLang.language = 'en-EN';
  }

  localStorage.setItem('language', JSON.stringify(selectedLang));
}

function changeLanguageFlag(check) {
  if (check) {
    usaFlagSvg.classList.add('language-hidden');
    rusFlagSvg.classList.remove('language-hidden');
  } else {
    usaFlagSvg.classList.remove('language-hidden');
    rusFlagSvg.classList.add('language-hidden');
  }
}

function changeLanguage(event) {
  const checkBox = event.target;

  changeLanguageFlag(checkBox.checked);
  saveLangToLocalStorage(checkBox);
}

function handleLanguageBtn(event) {
  changeLanguage(event);
}

languageCheckBox.addEventListener('change', handleLanguageBtn);

onLoadPage();
