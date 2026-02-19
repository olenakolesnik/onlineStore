import { THEME_KEY } from "./constants";

export function getWishlist() {
    const data = localStorage.getItem('wishlist');

    return data ? JSON.parse(data) : [];
}
export function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}
export function updateWishlistCount() {
    const wishlist = getWishlist();
    const countEl = document.querySelector('[data-wishlist-count]');
    if (!countEl) return;
    countEl.textContent = wishlist.length;
}

export function getCart() {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  export function updateCartCount() {
    const cart = getCart();
  
    const countEl = document.querySelector('.nav__count');
    
    if (!countEl) return;
  
    countEl.textContent = cart.length;
  }
  export function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }
  
  export function loadTheme() {
    return localStorage.getItem(THEME_KEY);
  }