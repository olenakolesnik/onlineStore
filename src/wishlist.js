
import { renderProductsWishlist } from "./js/render-function";
import { fetchProductById } from "./js/products-api";
import { onProductClick } from "./js/handlers";
import { refs } from "./js/refs";
import { getWishlist, updateWishlistCount } from "./js/storage";

//Логіка сторінки Wishlist


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
        const validProducts = products.filter(Boolean);

        refs.productsList.innerHTML = '';
        
       renderProductsWishlist(validProducts);
    } catch (error) {
        console.error('Error loading wishlist products:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateWishlistCount();
    loadWishlistProducts();

    refs.productsList?.addEventListener('click', onProductClick);
   
  });
  
 



  