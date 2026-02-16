
import { refs } from './refs';

export function openModal() {
    refs.modal.classList.add('modal--is-open');

}
  
export function closeModal() {
    refs.modal.classList.remove('modal--is-open');
}

function onBackdropClick(e) {
    if (e.target === refs.modal) {
      closeModal();
    }
  }
  
  // 🔥 додаємо слухачі один раз
if (refs.modal) {
    refs.modalCloseBtn.addEventListener("click", closeModal);
    refs.modal.addEventListener("click", onBackdropClick);
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
          closeModal();
        }
      });
}