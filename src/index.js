
import menuElement from './menu.json';
import template from './templates/template.hbs';
import './styles.css';


const menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(post => template(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
const btnChange = document.querySelector('.js-switch-input');

btnChange.addEventListener('change', setClassList);
btnChange.addEventListener('change', setLocalStorage);

function setClassList(e) {
    const check = btnChange.checked;

    if (check) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    }
}

function setLocalStorage(e) {
    const check = btnChange.checked;

    if (check) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
    body.classList.add(Theme.DARK);
    btnChange.checked = true;
}