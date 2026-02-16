//Логіка сторінки Cart
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