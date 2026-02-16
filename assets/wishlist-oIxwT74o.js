import{g as B,s as F,u as x}from"./cart-CAHfDyQn.js";import{a as p,i as l}from"./vendor-Cbhu4xvy.js";const r={categoryList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchFormBtn:document.querySelector(".search-form__btn"),searchFormClearBtn:document.querySelector(".search-form__btn-clear"),addToCartBtn:document.querySelector(".modal-product__cart-btn"),addToWishlistBtn:document.querySelector(".modal-product__btn--wishlist")};function P(){r.modal.classList.add("modal--is-open")}function v(){r.modal.classList.remove("modal--is-open")}function H(t){t.target===r.modal&&v()}r.modal&&(r.modalCloseBtn.addEventListener("click",v),r.modal.addEventListener("click",H),document.addEventListener("keydown",t=>{t.key==="Escape"&&v()}));const I="https://dummyjson.com/",a=12,y={categories:"products/category-list",products:"products"};p.defaults.baseURL=I;async function W(){const{data:t}=await p(y.categories);return t}async function h(t){const o=(t-1)*a,e={params:{limit:a,skip:o}},{data:s}=await p(y.products,e);return s}async function k(t,o=1){const e=(o-1)*a,s={params:{limit:a,skip:e}},{data:n}=await p(`${y.products}/category/${t}`,s);return n}async function M(t){try{const{data:o}=await p.get(`${y.products}/${t}`);return o}catch(o){return console.error("Error fetching product by ID:",o),null}}async function q(t,o=1){const e=(o-1)*a;try{const{data:s}=await p.get(`${y.products}/search`,{params:{q:t,limit:a,skip:e}});return s}catch(s){console.error("Помилка запиту пошуку:",s)}}function R(t){const o=t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");r.categoryList.innerHTML=o}function w(t){const o=t.map(({id:e,thumbnail:s,title:n,brand:i,category:d,price:m})=>`
       <li class="products__item" data-id="${e}">
    <img class="products__image" src="${s}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i}</span></p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: ${m}$</p>
 </li>`).join("");r.productsList.insertAdjacentHTML("beforeend",o)}function L(){r.loadMoreBtn.classList.remove("is-hidden")}function u(){r.loadMoreBtn.classList.add("is-hidden")}function j(t){if(!t)return;const{id:o,thumbnail:e,title:s,description:n,price:i,shippingInformation:d,returnPolicy:m,tags:C}=t,T=`
        <img class="modal-product__img" src="${e}" alt="${s}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${s}</p>
    
          <ul class="modal-product__tags">
            ${C.map(A=>`<li>${A}</li>`).join("")}
          </ul>
    
          <p class="modal-product__description">${n}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${d}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${m}
      </p>
          <p class="modal-product__price">Price: $${i}</p>
    
          <button class="modal-product__buy-btn" type="button">Buy</button>
        </div>
      `;r.modalProduct.innerHTML=T,r.modal.dataset.id=o;const b=r.modal.querySelector(".modal-product__btn--cart");B().includes(o)?b.textContent="Remove from Cart":b.textContent="Add to Cart",b.onclick=N;const $=r.modal.querySelector(".modal-product__btn--wishlist");g().includes(o)?$.textContent="Remove from Wishlist":$.textContent="Add to Wishlist",$.onclick=D}function N(){const t=Number(r.modal.dataset.id);let o=B();o.includes(t)?(o=o.filter(e=>e!==t),this.textContent="Add to Cart"):(o.push(t),this.textContent="Remove from Cart"),F(o),x()}function D(){const t=Number(r.modal.dataset.id);let o=g();o.includes(t)?(o=o.filter(e=>e!==t),this.textContent="Add to Wishlist"):(o.push(t),this.textContent="Remove from Wishlist"),Y(o),S()}function E(t){r.productsList.innerHTML=t.map(({id:o,thumbnail:e,title:s,brand:n,category:i,price:d})=>`
      <li class="products__item" data-id="${o}">
        <img class="products__image" src="${e}" alt="${s}"/>
        <p class="products__title">${s}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${n}</span>
        </p>
        <p class="products__category">Category: ${i}</p>
        <p class="products__price">Price: ${d}$</p>
      </li>
    `).join("")}function O(t){const o=document.querySelector(".products");if(!o)return;const e=t.map(({id:s,thumbnail:n,title:i,brand:d,category:m,price:C})=>`
       <li class="products__item" data-id="${s}">
    <img class="products__image" src="${n}" alt="${i}"/>
    <p class="products__title">${i}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${d}</span></p>
    <p class="products__category">Category: ${m}</p>
    <p class="products__price">Price: ${C}$</p>
 </li>`).join("");o.innerHTML=e}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products");t&&t.addEventListener("click",o=>{const e=o.target.closest(".products__item");e&&(Number(e.dataset.id),P())})});function U(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}r.searchForm.addEventListener("submit",z);r.searchFormClearBtn.addEventListener("click",G);let _=null,c=1,f="ALL";async function ot(){try{const t=await W();R(["All",...t]),U()}catch(t){console.log(t),l.error({message:"Error!"})}}async function et(){try{const t=await h(c);r.productsList.innerHTML="",w(t.products),t.total>a?L():u()}catch(t){console.log(t),l.error({message:"Error!"})}}async function rt(){try{c+=1;let t;_?t=await q(_,c):f.toUpperCase()==="ALL"?t=await h(c):t=await k(f,c),w(t.products),c*a>=t.total&&u()}catch{l.error({message:"Error!"})}}function J(t){document.querySelectorAll(".categories__btn").forEach(o=>o.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")}async function st(t){const o=t.target.closest(".categories__btn");if(!o)return;const e=o.textContent.trim();f=e.toUpperCase(),c=1,_=null,J(o),u(),r.notFound.classList.remove("not-found--visible");let s;if(e.toUpperCase()==="ALL"?(s=await h(c),L()):(s=await k(e,c),u()),!s.products.length){r.notFound.classList.add("not-found--visible"),r.productsList.innerHTML="";return}r.productsList.innerHTML="",w(s.products)}async function Q(t){const o=t.target.closest(".products__item");if(!o)return;const e=o.dataset.id;if(e)try{const s=await M(e);if(!s){l.error({message:"Product not found!"});return}j(s),P()}catch(s){console.error(s),l.error({message:"Error loading product!"})}}async function z(t){t.preventDefault();const o=r.searchInput.value.trim();if(!o){l.error({message:"Введіть назву товару!"});return}_=o,c=1,f=null;try{const e=await q(o,1);if(e.total>a?L():u(),!e||!e.products.length){r.productsList.innerHTML="",r.notFound.classList.add("not-found--visible");return}r.notFound.classList.remove("not-found--visible"),r.productsList.innerHTML="",E(e.products)}catch(e){console.error("Помилка при пошуку товарів:",e)}}async function G(){r.searchInput.value="",r.searchFormClearBtn.classList.remove("visible"),r.notFound.classList.remove("not-found--visible"),_=null,c=1,f="ALL";try{const t=await h(1);r.productsList.innerHTML="",E(t.products),t.total>a?L():u()}catch(t){console.error("Помилка при завантаженні всіх товарів:",t)}}function g(){const t=localStorage.getItem("wishlist");return t?JSON.parse(t):[]}function Y(t){localStorage.setItem("wishlist",JSON.stringify(t)),S()}function S(){const t=g(),o=document.querySelector("[data-wishlist-count]");o&&(o.textContent=t.length)}g();async function K(){const t=g();if(!t.length){r.productsList.innerHTML="<p>Your wishlist is empty</p>";return}try{const o=await Promise.all(t.map(e=>M(e)));O(o)}catch(o){console.error("Error loading wishlist products:",o)}}document.addEventListener("DOMContentLoaded",()=>{S(),K(),r.productsList&&r.productsList.addEventListener("click",Q)});export{et as a,st as b,Q as c,ot as g,rt as o,r,S as u};
//# sourceMappingURL=wishlist-oIxwT74o.js.map
