import { refs } from './refs';

export function openModal() {
    refs.modal.classList.add('modal--is-open');
}
export function closeModal() {
    refs.modal.classList.remove('modal--is-open');
}