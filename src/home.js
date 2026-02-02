import { getAllProducts, getCategories, onCategoryClick, onLoadMoreClick } from "./js/handlers";
import { refs } from "./js/refs";

//Логіка сторінки Home
getCategories();
getAllProducts();
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
refs.categoryList.addEventListener('click', onCategoryClick);