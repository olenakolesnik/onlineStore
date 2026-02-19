
import { getAllProducts, getCategories, onCategoryClick, onLoadMoreClick, onModalCloseClick, onProductClick } from "./js/handlers";
import { initTheme, toggleTheme } from "./js/helpers";
import { refs } from "./js/refs";
import { updateCartCount, updateWishlistCount } from "./js/storage";


//Логіка сторінки Home
getCategories();
getAllProducts();
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
refs.categoryList.addEventListener('click', onCategoryClick);
refs.productsList.addEventListener('click', onProductClick);
updateCartCount();
updateWishlistCount();
initTheme();
refs.themeBtn.addEventListener('click', toggleTheme);

