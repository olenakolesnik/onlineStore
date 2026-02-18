import{a as p,i as l}from"./vendor-Cbhu4xvy.js";import{g as B,s as A,u as T}from"./cart-CAHfDyQn.js";function v(){const t=localStorage.getItem("wishlist");return t?JSON.parse(t):[]}function F(t){localStorage.setItem("wishlist",JSON.stringify(t)),w()}function w(){const t=v(),o=document.querySelector("[data-wishlist-count]");o&&(o.textContent=t.length)}const r={categoryList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchFormBtn:document.querySelector(".search-form__btn"),searchFormClearBtn:document.querySelector(".search-form__btn-clear"),addToCartBtn:document.querySelector(".modal-product__cart-btn")};function x(){r.modal.classList.add("modal--is-open")}function $(){r.modal.classList.remove("modal--is-open")}function H(t){t.target===r.modal&&$()}r.modal&&(r.modalCloseBtn.addEventListener("click",$),r.modal.addEventListener("click",H),document.addEventListener("keydown",t=>{t.key==="Escape"&&$()}));const I="https://dummyjson.com/",n=12,g={categories:"products/category-list",products:"products"};p.defaults.baseURL=I;async function R(){const{data:t}=await p(g.categories);return t}async function y(t){const o=(t-1)*n,e={params:{limit:n,skip:o}},{data:s}=await p(g.products,e);return s}async function P(t,o=1){const e=(o-1)*n,s={params:{limit:n,skip:e}},{data:a}=await p(`${g.products}/category/${t}`,s);return a}async function W(t){try{const{data:o}=await p.get(`${g.products}/${t}`);return o}catch(o){return console.error("Error fetching product by ID:",o),null}}async function k(t,o=1){const e=(o-1)*n;try{const{data:s}=await p.get(`${g.products}/search`,{params:{q:t,limit:n,skip:e}});return s}catch(s){console.error("Помилка запиту пошуку:",s)}}function j(t){const o=t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");r.categoryList.innerHTML=o}function S(t){const o=t.map(({id:e,thumbnail:s,title:a,brand:i,category:d,price:m})=>`
       <li class="products__item" data-id="${e}">
    <img class="products__image" src="${s}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i}</span></p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: ${m}$</p>
 </li>`).join("");r.productsList.insertAdjacentHTML("beforeend",o)}function h(){r.loadMoreBtn.classList.remove("is-hidden")}function u(){r.loadMoreBtn.classList.add("is-hidden")}function N(t){if(!t)return;const{id:o,thumbnail:e,title:s,description:a,price:i,shippingInformation:d,returnPolicy:m,tags:L}=t,M=`
        <img class="modal-product__img" src="${e}" alt="${s}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${s}</p>
    
          <ul class="modal-product__tags">
            ${L.map(E=>`<li>${E}</li>`).join("")}
          </ul>
    
          <p class="modal-product__description">${a}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${d}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${m}
      </p>
          <p class="modal-product__price">Price: $${i}</p>
    
          <button class="modal-product__buy-btn" type="button">Buy</button>
        </div>
      `;r.modalProduct.innerHTML=M,r.modal.dataset.id=o;const C=r.modal.querySelector(".modal-product__btn--cart");B().includes(o)?C.textContent="Remove from Cart":C.textContent="Add to Cart",C.onclick=U;const b=r.modal.querySelector(".modal-product__btn--wishlist");v().includes(o)?b.textContent="Remove from Wishlist":b.textContent="Add to Wishlist",b.onclick=D}function U(){const t=Number(r.modal.dataset.id);let o=B();o.includes(t)?(o=o.filter(e=>e!==t),this.textContent="Add to Cart"):(o.push(t),this.textContent="Remove from Cart"),A(o),T()}function D(){const t=Number(r.modal.dataset.id);let o=v();o.includes(t)?(o=o.filter(e=>e!==t),this.textContent="Add to Wishlist"):(o.push(t),this.textContent="Remove from Wishlist"),F(o),w()}function q(t){r.productsList.innerHTML=t.map(({id:o,thumbnail:e,title:s,brand:a,category:i,price:d})=>`
      <li class="products__item" data-id="${o}">
        <img class="products__image" src="${e}" alt="${s}"/>
        <p class="products__title">${s}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${a}</span>
        </p>
        <p class="products__category">Category: ${i}</p>
        <p class="products__price">Price: ${d}$</p>
      </li>
    `).join("")}function Y(t){const o=document.querySelector(".products");if(!o)return;const e=t.map(({id:s,thumbnail:a,title:i,brand:d,category:m,price:L})=>`
       <li class="products__item" data-id="${s}">
    <img class="products__image" src="${a}" alt="${i}"/>
    <p class="products__title">${i}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${d}</span></p>
    <p class="products__category">Category: ${m}</p>
    <p class="products__price">Price: ${L}$</p>
 </li>`).join("");o.innerHTML=e}function O(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}r.searchForm.addEventListener("submit",Q);r.searchFormClearBtn.addEventListener("click",z);let _=null,c=1,f="ALL";async function Z(){try{const t=await R();j(["All",...t]),O()}catch(t){console.log(t),l.error({message:"Error!"})}}async function tt(){try{const t=await y(c);r.productsList.innerHTML="",S(t.products),t.total>n?h():u()}catch(t){console.log(t),l.error({message:"Error!"})}}async function ot(){try{c+=1;let t;_?t=await k(_,c):f.toUpperCase()==="ALL"?t=await y(c):t=await P(f,c),S(t.products),c*n>=t.total&&u()}catch{l.error({message:"Error!"})}}function J(t){document.querySelectorAll(".categories__btn").forEach(o=>o.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")}async function et(t){const o=t.target.closest(".categories__btn");if(!o)return;const e=o.textContent.trim();f=e.toUpperCase(),c=1,_=null,J(o),u(),r.notFound.classList.remove("not-found--visible");let s;if(e.toUpperCase()==="ALL"?(s=await y(c),h()):(s=await P(e,c),u()),!s.products.length){r.notFound.classList.add("not-found--visible"),r.productsList.innerHTML="";return}r.productsList.innerHTML="",S(s.products)}async function rt(t){const o=t.target.closest(".products__item");if(!o)return;const e=o.dataset.id;if(e)try{const s=await W(e);if(!s){l.error({message:"Product not found!"});return}N(s),x()}catch(s){console.error(s),l.error({message:"Error loading product!"})}}async function Q(t){t.preventDefault();const o=r.searchInput.value.trim();if(!o){l.error({message:"Введіть назву товару!"});return}_=o,c=1,f=null;try{const e=await k(o,1);if(e.total>n?h():u(),!e||!e.products.length){r.productsList.innerHTML="",r.notFound.classList.add("not-found--visible");return}r.notFound.classList.remove("not-found--visible"),r.productsList.innerHTML="",q(e.products)}catch(e){console.error("Помилка при пошуку товарів:",e)}}async function z(){r.searchInput.value="",r.searchFormClearBtn.classList.remove("visible"),r.notFound.classList.remove("not-found--visible"),_=null,c=1,f="ALL";try{const t=await y(1);r.productsList.innerHTML="",q(t.products),t.total>n?h():u()}catch(t){console.error("Помилка при завантаженні всіх товарів:",t)}}export{Y as a,Z as b,tt as c,ot as d,et as e,W as f,v as g,rt as o,r,w as u};
//# sourceMappingURL=handlers-CijmBXxy.js.map
