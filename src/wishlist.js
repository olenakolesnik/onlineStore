
import { renderProductsWishlist } from "./js/render-function";
import { fetchProductById } from "./js/products-api";
import { onProductClick } from "./js/handlers";
import { refs } from "./js/refs";

//Логіка сторінки Wishlist
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
const wishlistIds = getWishlist();


async function loadWishlistProducts() {
    const wishlistIds = getWishlist();
    if (!wishlistIds.length) {
        refs.productsList.innerHTML = '<p>Your wishlist is empty</p>';
        return;
    }
    try {
        const products = await Promise.all(
            wishlistIds.map(id => fetchProductById(id))
        );
        
       renderProductsWishlist(products);
    } catch (error) {
        console.error('Error loading wishlist products:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateWishlistCount();
    loadWishlistProducts();
    if (refs.productsList) {
        refs.productsList.addEventListener('click', onProductClick);
    }
  });
  
 



  