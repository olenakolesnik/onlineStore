import { updateCartCount } from "./cart";
import { getAllProducts, getCategories, onCategoryClick, onLoadMoreClick, onModalCloseClick, onProductClick } from "./js/handlers";
import { closeModal, openModal } from "./js/modal";
import { refs } from "./js/refs";
import { updateWishlistCount } from "./js/storage";


//Логіка сторінки Home
getCategories();
getAllProducts();
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
refs.categoryList.addEventListener('click', onCategoryClick);
refs.productsList.addEventListener('click', onProductClick);
updateCartCount();
updateWishlistCount();

