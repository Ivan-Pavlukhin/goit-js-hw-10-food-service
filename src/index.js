import menuTpl from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';
import ref from './ref.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

ref.menu.insertAdjacentHTML('beforeend', createMenuMarkup(menu));

ref.input.checked = JSON.parse(localStorage.getItem('theme'));

changeTheme(ref.input.checked);

ref.input.addEventListener('change', onClickThemeSwitchInput);

function changeTheme(boole) {
  if (boole) {
    ref.body.classList.add(Theme.DARK);
    return;
  }
  ref.body.classList.add(Theme.LIGHT);
  return;
}

function saveTheme() {
  localStorage.setItem('theme', ref.input.checked);
}

function onClickThemeSwitchInput(e) {
  if (e.target.checked) {
    ref.body.classList.remove(Theme.LIGHT);
    ref.body.classList.add(Theme.DARK);
    return saveTheme();
  }
  ref.body.classList.remove(Theme.DARK);
  ref.body.classList.add(Theme.LIGHT);
  return saveTheme();
}

function createMenuMarkup(menu) {
  return menu.map(menuTpl).join('');
}
