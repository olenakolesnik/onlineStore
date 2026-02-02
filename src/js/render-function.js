import { refs } from "./refs";

export function renderCategories(data) {
    const markup = data.map((category) => `
<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`).join('');
    refs.categoryList.innerHTML = markup;
}

export function renderProducts(data) {
    // refs.productsList.innerHTML = '';
    const markup = data.map(({id, thumbnail, title, brand, category, price}) => `
       <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>`).join('');
    refs.productsList.insertAdjacentHTML('beforeend', markup);
}
export function clearProductsList() {
    refs.productsList.innerHTML = '';
}
export function showLoadMoreBtn() {
   refs.loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreBtn() {
    refs.loadMoreBtn.classList.add('is-hidden');
}