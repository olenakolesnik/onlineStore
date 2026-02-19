import { DARK_THEME, LIGHT_THEME } from "./constants";
import { refs } from "./refs";
import { loadTheme, saveTheme } from "./storage";


export function activeFirstBtn() {
    const firstBtn = document.querySelector('.categories__btn');
    if (firstBtn) {
        firstBtn.classList.add('categories__btn--active');
    }
}
export function showLoader() {
    document.querySelector('.loader')?.classList.remove('is-hidden');
  }
  
  export function hideLoader() {
    document.querySelector('.loader')?.classList.add('is-hidden');
  }
  

export function initTheme() {
    const savedTheme = loadTheme();
  
    if (savedTheme) {
      refs.body.className = savedTheme;
    } else {
      refs.body.className = LIGHT_THEME;
    }
  }
  
  export function toggleTheme() {
    const isLight = refs.body.classList.contains(LIGHT_THEME);
    const newTheme = isLight ? DARK_THEME : LIGHT_THEME;
  
    refs.body.className = newTheme;
    saveTheme(newTheme);
  }
