import { getAllProducts, getCategories, onCategoryClick, onLoadMoreClick, onModalCloseClick, onProductClick } from "./js/handlers";
import { closeModal, openModal } from "./js/modal";
import { refs } from "./js/refs";

//Логіка сторінки Home
getCategories();
getAllProducts();
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
refs.categoryList.addEventListener('click', onCategoryClick);
refs.productsList.addEventListener('click', onProductClick);
refs.modalCloseBtn.addEventListener('click', onModalCloseClick);
refs.modal.addEventListener("click", e => {
    if (e.target === refs.modal || e.target.classList.contains("modal-close")) {
      closeModal();
    }
  });