import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import { fetchAllProducts, fetchCategories, fetchProductById, fetchProductsByCategory } from "./products-api";
import { hideLoadMoreBtn, renderCategories, renderModalProduct, renderProducts, showLoadMoreBtn } from "./render-function";
import { activeFirstBtn } from "./helpers";
import { PRODUCTS_PER_PAGE } from "./constants";
import { refs } from "./refs"
import { openModal, closeModal } from "./modal";

let currentPage = 1;
let currentCategory = 'ALL';

export async function getCategories() {
     try {
         const data = await fetchCategories();
         renderCategories(['All', ...data]);
         activeFirstBtn();
     } catch (error) {
       console.log(error);
         iziToast.error({ message: 'Error!' });
     }
}
export async function getAllProducts() {
    try {
        
        const data = await fetchAllProducts(currentPage);
        refs.productsList.innerHTML = '';
        renderProducts(data.products); 
        if (data.total > PRODUCTS_PER_PAGE) {
            showLoadMoreBtn();
        } else {
            hideLoadMoreBtn();
        }
    } catch (error) {
        console.log(error);
        iziToast.error({ message: 'Error!' });  
    }
}
export async function onLoadMoreClick() {
    try {
    currentPage += 1;
        let data;
        if (currentCategory.toUpperCase() === 'ALL') {
            data = await fetchAllProducts(currentPage);
          } else {
            data = await fetchProductsByCategory(currentCategory, currentPage);
          }
      
          renderProducts(data.products);
      
          if (currentPage * PRODUCTS_PER_PAGE >= data.total) {
            hideLoadMoreBtn();
          }
        } catch (error) {
          iziToast.error({ message: 'Error!' });
        }
      }
export function setActiveCategory(activeBtn) {
    document
      .querySelectorAll('.categories__btn')
      .forEach(btn =>
        btn.classList.remove('categories__btn--active')
      );
  
    activeBtn.classList.add('categories__btn--active');
  }

 export async function onCategoryClick(e) {
  const btn = e.target.closest('.categories__btn');
  if (!btn) return;

  const category = btn.textContent.trim();

  currentCategory = category.toUpperCase();
  currentPage = 1;

     setActiveCategory(btn);
     hideLoadMoreBtn();

  refs.notFound.classList.remove('not-found--visible');

  let data;

  if (category.toUpperCase() === 'ALL') {
      data = await fetchAllProducts(currentPage);
      showLoadMoreBtn();
      
  } else {
    data = await fetchProductsByCategory(category, currentPage);
      hideLoadMoreBtn();
  }

  if (!data.products.length) {
    refs.notFound.classList.add('not-found--visible');
      refs.productsList.innerHTML = '';
    return;
  }
  refs.productsList.innerHTML = '';
  renderProducts(data.products);
}
// Клік по картці
export async function onProductClick(e) {
    const card = e.target.closest(".products__item");
    if (!card) return;
  
    const id = card.dataset.id;
    if (!id) return;
  
    try {
        const product = await fetchProductById(id);
      if (!product) {
        iziToast.error({ message: "Product not found!" });
        return;
      }
  
      renderModalProduct(product);
      openModal(); // відкриваємо модалку
    } catch (error) {
      console.error(error);
      iziToast.error({ message: "Error loading product!" });
    }
}
export function onModalCloseClick() {
    closeModal();
  }
  
  