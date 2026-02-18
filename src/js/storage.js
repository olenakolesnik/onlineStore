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