import"./assets/styles-JE8YjOlG.js";import{a as l,i}from"./assets/vendor-4yCzdkXl.js";const M="https://dummyjson.com/",a=12,f={categories:"products/category-list",products:"products"};l.defaults.baseURL=M;async function S(){const{data:t}=await l(f.categories);return t}async function y(t){const o=(t-1)*a,e={params:{limit:a,skip:o}},{data:s}=await l(f.products,e);return s}async function b(t,o=1){const e=(o-1)*a,s={params:{limit:a,skip:e}},{data:n}=await l(`${f.products}/category/${t}`,s);return n}async function k(t){try{const{data:o}=await l.get(`${f.products}/${t}`);return o}catch(o){return console.error("Error fetching product by ID:",o),null}}async function $(t,o=1){const e=(o-1)*a;try{const{data:s}=await l.get(`${f.products}/search`,{params:{q:t,limit:a,skip:e}});return s}catch(s){console.error("Помилка запиту пошуку:",s)}}const r={categoryList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchFormBtn:document.querySelector(".search-form__btn"),searchFormClearBtn:document.querySelector(".search-form__btn-clear")};function E(t){const o=t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");r.categoryList.innerHTML=o}function h(t){const o=t.map(({id:e,thumbnail:s,title:n,brand:u,category:p,price:L})=>`
       <li class="products__item" data-id="${e}">
    <img class="products__image" src="${s}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${u}</span></p>
    <p class="products__category">Category: ${p}</p>
    <p class="products__price">Price: ${L}$</p>
 </li>`).join("");r.productsList.insertAdjacentHTML("beforeend",o)}function g(){r.loadMoreBtn.classList.remove("is-hidden")}function d(){r.loadMoreBtn.classList.add("is-hidden")}function w(t){if(!t)return;const{thumbnail:o,title:e,description:s,price:n,shippingInformation:u,returnPolicy:p,tags:L}=t,P=`
        <img class="modal-product__img" src="${o}" alt="${e}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${e}</p>
    
          <ul class="modal-product__tags">
            ${L.map(B=>`<li>${B}</li>`).join("")}
          </ul>
    
          <p class="modal-product__description">${s}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${u}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${p}
      </p>
          <p class="modal-product__price">Price: $${n}</p>
    
          <button class="modal-product__buy-btn" type="button">Buy</button>
        </div>
      `;r.modalProduct.innerHTML=P}function v(t){r.productsList.innerHTML=t.map(({id:o,thumbnail:e,title:s,brand:n,category:u,price:p})=>`
      <li class="products__item" data-id="${o}">
        <img class="products__image" src="${e}" alt="${s}"/>
        <p class="products__title">${s}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${n}</span>
        </p>
        <p class="products__category">Category: ${u}</p>
        <p class="products__price">Price: ${p}$</p>
      </li>
    `).join("")}function q(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function F(){r.modal.classList.add("modal--is-open")}function C(){r.modal.classList.remove("modal--is-open")}r.searchForm.addEventListener("submit",D);r.searchFormClearBtn.addEventListener("click",x);let m=null,c=1,_="ALL";async function T(){try{const t=await S();E(["All",...t]),q()}catch(t){console.log(t),i.error({message:"Error!"})}}async function A(){try{const t=await y(c);r.productsList.innerHTML="",h(t.products),t.total>a?g():d()}catch(t){console.log(t),i.error({message:"Error!"})}}async function H(){try{c+=1;let t;m?t=await $(m,c):_.toUpperCase()==="ALL"?t=await y(c):t=await b(_,c),h(t.products),c*a>=t.total&&d()}catch{i.error({message:"Error!"})}}function I(t){document.querySelectorAll(".categories__btn").forEach(o=>o.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")}async function j(t){const o=t.target.closest(".categories__btn");if(!o)return;const e=o.textContent.trim();_=e.toUpperCase(),c=1,m=null,I(o),d(),r.notFound.classList.remove("not-found--visible");let s;if(e.toUpperCase()==="ALL"?(s=await y(c),g()):(s=await b(e,c),d()),!s.products.length){r.notFound.classList.add("not-found--visible"),r.productsList.innerHTML="";return}r.productsList.innerHTML="",h(s.products)}async function R(t){const o=t.target.closest(".products__item");if(!o)return;const e=o.dataset.id;if(e)try{const s=await k(e);if(!s){i.error({message:"Product not found!"});return}w(s),F()}catch(s){console.error(s),i.error({message:"Error loading product!"})}}function U(){C()}async function D(t){t.preventDefault();const o=r.searchInput.value.trim();if(!o){i.error({message:"Введіть назву товару!"});return}m=o,c=1,_=null;try{const e=await $(o,1);if(e.total>a?g():d(),!e||!e.products.length){r.productsList.innerHTML="",r.notFound.classList.add("not-found--visible");return}r.notFound.classList.remove("not-found--visible"),r.productsList.innerHTML="",v(e.products)}catch(e){console.error("Помилка при пошуку товарів:",e)}}async function x(){r.searchInput.value="",r.searchFormClearBtn.classList.remove("visible"),r.notFound.classList.remove("not-found--visible"),m=null,c=1,_="ALL";try{const t=await y(1);r.productsList.innerHTML="",v(t.products),t.total>a?g():d()}catch(t){console.error("Помилка при завантаженні всіх товарів:",t)}}T();A();r.loadMoreBtn.addEventListener("click",H);r.categoryList.addEventListener("click",j);r.productsList.addEventListener("click",R);r.modalCloseBtn.addEventListener("click",U);r.modal.addEventListener("click",t=>{(t.target===r.modal||t.target.classList.contains("modal-close"))&&C()});
//# sourceMappingURL=index.js.map
