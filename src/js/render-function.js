
import { getCart, getWishlist, saveCart, saveWishlist, updateCartCount, updateWishlistCount } from "./storage";
import { refs } from "./refs";

export function renderCategories(data) {
    const markup = data.map((category) => `
<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`).join('');
    refs.categoryList.innerHTML = markup;
}

export function renderProducts(products) {
    const markup = products.map(({id, thumbnail, title, brand, category, price}) => `
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
export function renderModalProduct(product) {
  if (!product) return;
  const {
    id,
    thumbnail,
    title,
    description,
    price,
    shippingInformation,
    returnPolicy,
    tags,
  } = product;
    
  const markup = `
        <img class="modal-product__img" src="${thumbnail}" alt="${title}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${title}</p>
    
          <ul class="modal-product__tags">
            ${tags.map(tag => `<li>${tag}</li>`).join('')}
          </ul>
    
          <p class="modal-product__description">${description}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${shippingInformation}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${returnPolicy}
      </p>
          <p class="modal-product__price">Price: $${price}</p>
    
           
        </div>
      `;
    
  refs.modalProduct.innerHTML = markup;
  refs.modal.dataset.id = id;
  const cartBtn = refs.modal.querySelector('.modal-product__btn--cart');
  const cart = getCart();
  
  if (cart.includes(id)) {
    cartBtn.textContent = 'Remove from Cart';
  } else {
    cartBtn.textContent = 'Add to Cart';
  }
  cartBtn.onclick = onCartBtnClick;

  const wishlistBtn = refs.modal.querySelector('.modal-product__btn--wishlist');
  const wishlist = getWishlist();

  if (wishlist.includes(id)) {
    wishlistBtn.textContent = 'Remove from Wishlist';
  } else {
    wishlistBtn.textContent = 'Add to Wishlist';
  }
  wishlistBtn.onclick = onWishlistBtnClick;
}
 
  function onCartBtnClick() {
    const productId = Number(refs.modal.dataset.id);
    let cart = getCart();
    let wishlist = getWishlist();
    if (cart.includes(productId)) {
      // ❌ REMOVE
      cart = cart.filter(id => id !== productId);
      this.textContent = 'Add to Cart';
    } else {
      // ✅ ADD
      cart.push(productId);
      this.textContent = 'Remove from Cart';
      wishlist = wishlist.filter(id => id !== productId);
    saveWishlist(wishlist);
    updateWishlistCount();
    }
    saveCart(cart);
    updateCartCount();
  }
function onWishlistBtnClick() {
  const productId = Number(refs.modal.dataset.id);
  let wishlist = getWishlist();
  let cart = getCart();
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    this.textContent = 'Add to Wishlist';
  } else {
    wishlist.push(productId);
    this.textContent = 'Remove from Wishlist';
    cart = cart.filter(id => id !== productId);
    saveCart(cart);
    updateCartCount();
  }
  saveWishlist(wishlist);
  updateWishlistCount();
}
    
export function renderProductsReplace(products) {
  refs.productsList.innerHTML = products
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
      <li class="products__item" data-id="${id}">
        <img class="products__image" src="${thumbnail}" alt="${title}"/>
        <p class="products__title">${title}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${brand}</span>
        </p>
        <p class="products__category">Category: ${category}</p>
        <p class="products__price">Price: ${price}$</p>
      </li>
    `
    )
    .join('');
}
export function renderProductsWishlist(products) {
  const productsList = document.querySelector('.products');
  if (!productsList) return;
  const markup = products.map(({id, thumbnail, title, brand, category, price}) => `
       <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>`).join('');

  productsList.innerHTML = markup;

}

export function renderProductsCartlist(products) {
  const productsList = document.querySelector('.products');
  if (!productsList) return;
  const markup = products.map(({id, thumbnail, title, brand, category, price}) => `
       <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>`).join('');

  productsList.innerHTML = markup;
}

