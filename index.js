import"./assets/styles-JE8YjOlG.js";import{a as d,i}from"./assets/vendor-4yCzdkXl.js";const P="https://dummyjson.com/",n=12,u={categories:"products/category-list",products:"products"};d.defaults.baseURL=P;async function v(){const{data:t}=await d(u.categories);return t}async function f(t){const o=(t-1)*n,e={params:{limit:n,skip:o}},{data:c}=await d(u.products,e);return c}async function L(t,o=1){const e=(o-1)*n,c={params:{limit:n,skip:e}},{data:a}=await d(`${u.products}/category/${t}`,c);return a}async function M(t){try{const{data:o}=await d.get(`${u.products}/${t}`);return o}catch(o){return console.error("Error fetching product by ID:",o),null}}const r={categoryList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function B(t){const o=t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");r.categoryList.innerHTML=o}function y(t){const o=t.map(({id:e,thumbnail:c,title:a,brand:p,category:m,price:_})=>`
       <li class="products__item" data-id="${e}">
    <img class="products__image" src="${c}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${p}</span></p>
    <p class="products__category">Category: ${m}</p>
    <p class="products__price">Price: ${_}$</p>
 </li>`).join("");r.productsList.insertAdjacentHTML("beforeend",o)}function b(){r.loadMoreBtn.classList.remove("is-hidden")}function l(){r.loadMoreBtn.classList.add("is-hidden")}function E(t){if(!t)return;const{thumbnail:o,title:e,description:c,price:a,shippingInformation:p,returnPolicy:m,tags:_}=t,h=`
        <img class="modal-product__img" src="${o}" alt="${e}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${e}</p>
    
          <ul class="modal-product__tags">
            ${_.map(C=>`<li>${C}</li>`).join("")}
          </ul>
    
          <p class="modal-product__description">${c}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${p}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${m}
      </p>
          <p class="modal-product__price">Price: $${a}</p>
    
          <button class="modal-product__buy-btn" type="button">Buy</button>
        </div>
      `;r.modalProduct.innerHTML=h}function k(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function S(){r.modal.classList.add("modal--is-open")}function $(){r.modal.classList.remove("modal--is-open")}let s=1,g="ALL";async function w(){try{const t=await v();B(["All",...t]),k()}catch(t){console.log(t),i.error({message:"Error!"})}}async function A(){try{const t=await f(s);r.productsList.innerHTML="",y(t.products),t.total>n?b():l()}catch(t){console.log(t),i.error({message:"Error!"})}}async function q(){try{s+=1;let t;g.toUpperCase()==="ALL"?t=await f(s):t=await L(g,s),y(t.products),s*n>=t.total&&l()}catch{i.error({message:"Error!"})}}function T(t){document.querySelectorAll(".categories__btn").forEach(o=>o.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")}async function H(t){const o=t.target.closest(".categories__btn");if(!o)return;const e=o.textContent.trim();g=e.toUpperCase(),s=1,T(o),l(),r.notFound.classList.remove("not-found--visible");let c;if(e.toUpperCase()==="ALL"?(c=await f(s),b()):(c=await L(e,s),l()),!c.products.length){r.notFound.classList.add("not-found--visible"),r.productsList.innerHTML="";return}r.productsList.innerHTML="",y(c.products)}async function U(t){const o=t.target.closest(".products__item");if(!o)return;const e=o.dataset.id;if(e)try{const c=await M(e);if(!c){i.error({message:"Product not found!"});return}E(c),S()}catch(c){console.error(c),i.error({message:"Error loading product!"})}}function j(){$()}w();A();r.loadMoreBtn.addEventListener("click",q);r.categoryList.addEventListener("click",H);r.productsList.addEventListener("click",U);r.modalCloseBtn.addEventListener("click",j);r.modal.addEventListener("click",t=>{(t.target===r.modal||t.target.classList.contains("modal-close"))&&$()});
//# sourceMappingURL=index.js.map
