//Логіка сторінки Cart
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderProductsCartlist } from "./js/render-function";
import { fetchProductById } from "./js/products-api";
import { refs } from "./js/refs";
import { getCart, updateCartCount, updateWishlistCount } from "./js/storage";
import { onProductClick } from "./js/handlers";
import { hideLoader, showLoader } from "./js/helpers";

async function loadCartlistProducts() {
  
  const cartlistIds = getCart();

  if (!cartlistIds.length) {
      refs.productsList.innerHTML = '<p>Your wishlist is empty</p>';
      return;
  }
  showLoader();
  try {
      const products = await Promise.all(
          cartlistIds.map(id => fetchProductById(id))
      );
      const validProducts = products.filter(Boolean);

      refs.productsList.innerHTML = '';
      
    renderProductsCartlist(validProducts);
    updateCartSummary(products);
  } catch (error) {
      console.error('Error loading wishlist products:', error);
  } finally {
    hideLoader();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  updateWishlistCount();
  loadCartlistProducts();

  if (refs.productsList) {
    refs.productsList.addEventListener('click', onProductClick);
  }
 
});

function updateCartSummary(products) {
  const countEl = document.querySelector('[data-count]');
  const totalEl = document.querySelector('[data-price]');

  if (!countEl || !totalEl) return;

  const totalCount = products.length;

  const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  countEl.textContent = totalCount;
  totalEl.textContent = `$${totalPrice.toFixed(2)}`;
}
const buyBtn = document.querySelector('.cart-summary__btn');

if (buyBtn) {
  buyBtn.addEventListener('click', () => {
    const cart = getCart();

    if (!cart.length) {
      iziToast.warning({
        message: "Your cart is empty!",
        position: "topRight",
      });
      return;
    }

    // ✅ Повідомлення про успішну покупку
    iziToast.success({
      title: "Success",
      message: "Products purchased successfully!",
      position: "topRight",
      timeout: 3000,
    });

    // 🧹 Очищаємо кошик
    localStorage.removeItem('cart');

    // 🔄 Оновлюємо UI
    updateCartCount();
    loadCartlistProducts(); // твоя функція перерендеру cart
  
    const countEl = document.querySelector('[data-count]');
    const totalEl = document.querySelector('[data-price]');

    if (countEl) countEl.textContent = '0';
    if (totalEl) totalEl.textContent = '$0.00';
  });
}