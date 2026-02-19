import{a as m,i as u}from"./vendor-Cbhu4xvy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(c){if(c.ep)return;c.ep=!0;const n=o(c);fetch(c.href,n)}})();const N="https://dummyjson.com/",d=12,h={categories:"products/category-list",products:"products"},E="theme",S="theme-light",x="theme-dark";function y(){const t=localStorage.getItem("wishlist");return t?JSON.parse(t):[]}function T(t){localStorage.setItem("wishlist",JSON.stringify(t)),P()}function P(){const t=y(),e=document.querySelector("[data-wishlist-count]");e&&(e.textContent=t.length)}function L(){const t=localStorage.getItem("cart");return t?JSON.parse(t):[]}function M(t){localStorage.setItem("cart",JSON.stringify(t)),B()}function B(){const t=L(),e=document.querySelector(".nav__count");e&&(e.textContent=t.length)}function O(t){localStorage.setItem(E,t)}function R(){return localStorage.getItem(E)}const s={categoryList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn"),notFound:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchFormBtn:document.querySelector(".search-form__btn"),searchFormClearBtn:document.querySelector(".search-form__btn-clear"),addToCartBtn:document.querySelector(".modal-product__cart-btn"),themeBtn:document.querySelector(".theme-toggle-btn"),body:document.body};function j(t){const e=t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");s.categoryList.innerHTML=e}function q(t){const e=t.map(({id:o,thumbnail:r,title:c,brand:n,category:a,price:l})=>`
       <li class="products__item" data-id="${o}">
    <img class="products__image" src="${r}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price: ${l}$</p>
 </li>`).join("");s.productsList.insertAdjacentHTML("beforeend",e)}function b(){s.loadMoreBtn.classList.remove("is-hidden")}function p(){s.loadMoreBtn.classList.add("is-hidden")}function W(t){if(!t)return;const{id:e,thumbnail:o,title:r,description:c,price:n,shippingInformation:a,returnPolicy:l,tags:f}=t,H=`
        <img class="modal-product__img" src="${o}" alt="${r}" />
    
        <div class="modal-product__content">
          <p class="modal-product__title">${r}</p>
    
          <ul class="modal-product__tags">
            ${f.map(F=>`<li>${F}</li>`).join("")}
          </ul>
    
          <p class="modal-product__description">${c}</p>
         <p class="modal-product__shipping-information">
        Shipping: ${a}
      </p>

      <p class="modal-product__return-policy">
        Return Policy: ${l}
      </p>
          <p class="modal-product__price">Price: $${n}</p>
    
           
        </div>
      `;s.modalProduct.innerHTML=H,s.modal.dataset.id=e;const $=s.modal.querySelector(".modal-product__btn--cart");L().includes(e)?$.textContent="Remove from Cart":$.textContent="Add to Cart",$.onclick=U;const v=s.modal.querySelector(".modal-product__btn--wishlist");y().includes(e)?v.textContent="Remove from Wishlist":v.textContent="Add to Wishlist",v.onclick=D}function U(){const t=Number(s.modal.dataset.id);let e=L(),o=y();e.includes(t)?(e=e.filter(r=>r!==t),this.textContent="Add to Cart"):(e.push(t),this.textContent="Remove from Cart",o=o.filter(r=>r!==t),T(o),P()),M(e),B()}function D(){const t=Number(s.modal.dataset.id);let e=y(),o=L();e.includes(t)?(e=e.filter(r=>r!==t),this.textContent="Add to Wishlist"):(e.push(t),this.textContent="Remove from Wishlist",o=o.filter(r=>r!==t),M(o),B()),T(e),P()}function k(t){s.productsList.innerHTML=t.map(({id:e,thumbnail:o,title:r,brand:c,category:n,price:a})=>`
      <li class="products__item" data-id="${e}">
        <img class="products__image" src="${o}" alt="${r}"/>
        <p class="products__title">${r}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand: ${c}</span>
        </p>
        <p class="products__category">Category: ${n}</p>
        <p class="products__price">Price: ${a}$</p>
      </li>
    `).join("")}function st(t){const e=document.querySelector(".products");if(!e)return;const o=t.map(({id:r,thumbnail:c,title:n,brand:a,category:l,price:f})=>`
       <li class="products__item" data-id="${r}">
    <img class="products__image" src="${c}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${a}</span></p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: ${f}$</p>
 </li>`).join("");e.innerHTML=o}function ct(t){const e=document.querySelector(".products");if(!e)return;const o=t.map(({id:r,thumbnail:c,title:n,brand:a,category:l,price:f})=>`
       <li class="products__item" data-id="${r}">
    <img class="products__image" src="${c}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${a}</span></p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: ${f}$</p>
 </li>`).join("");e.innerHTML=o}m.defaults.baseURL=N;async function J(){const{data:t}=await m(h.categories);return t}async function C(t){const e=(t-1)*d,o={params:{limit:d,skip:e}},{data:r}=await m(h.products,o);return r}async function A(t,e=1){const o=(e-1)*d,r={params:{limit:d,skip:o}},{data:c}=await m(`${h.products}/category/${t}`,r);return c}async function K(t){try{const{data:e}=await m.get(`${h.products}/${t}`);return e}catch(e){return console.error("Error fetching product by ID:",e),null}}async function I(t,e=1){const o=(e-1)*d;try{const{data:r}=await m.get(`${h.products}/search`,{params:{q:t,limit:d,skip:o}});return r}catch(r){console.error("Помилка запиту пошуку:",r)}}function G(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function Q(){var t;(t=document.querySelector(".loader"))==null||t.classList.remove("is-hidden")}function z(){var t;(t=document.querySelector(".loader"))==null||t.classList.add("is-hidden")}function nt(){const t=R();t?s.body.className=t:s.body.className=S}function at(){const e=s.body.classList.contains(S)?x:S;s.body.className=e,O(e)}function Y(){s.modal.classList.add("modal--is-open")}function w(){s.modal.classList.remove("modal--is-open")}function V(t){t.target===s.modal&&w()}s.modal&&(s.modalCloseBtn.addEventListener("click",w),s.modal.addEventListener("click",V),document.addEventListener("keydown",t=>{t.key==="Escape"&&w()}));s.searchForm.addEventListener("submit",Z);s.searchFormClearBtn.addEventListener("click",tt);let _=null,i=1,g="ALL";async function it(){try{const t=await J();j(["All",...t]),G()}catch(t){console.log(t),u.error({message:"Error!"})}}async function dt(){try{const t=await C(i);s.productsList.innerHTML="",q(t.products),t.total>d?b():p()}catch(t){console.log(t),u.error({message:"Error!"})}}async function lt(){try{i+=1;let t;_?t=await I(_,i):g.toUpperCase()==="ALL"?t=await C(i):t=await A(g,i),q(t.products),i*d>=t.total&&p()}catch{u.error({message:"Error!"})}}function X(t){document.querySelectorAll(".categories__btn").forEach(e=>e.classList.remove("categories__btn--active")),t.classList.add("categories__btn--active")}async function ut(t){const e=t.target.closest(".categories__btn");if(!e)return;const o=e.textContent.trim();g=o.toUpperCase(),i=1,_=null,X(e),p(),s.notFound.classList.remove("not-found--visible");let r;if(o.toUpperCase()==="ALL"?(r=await C(i),b()):(r=await A(o,i),p()),!r.products.length){s.notFound.classList.add("not-found--visible"),s.productsList.innerHTML="";return}s.productsList.innerHTML="",q(r.products)}async function pt(t){const e=t.target.closest(".products__item");if(!e)return;const o=e.dataset.id;if(o)try{const r=await K(o);if(!r){u.error({message:"Product not found!"});return}W(r),Y()}catch(r){console.error(r),u.error({message:"Error loading product!"})}}async function Z(t){t.preventDefault(),Q();const e=s.searchInput.value.trim();if(!e){u.error({message:"Введіть назву товару!"});return}_=e,i=1,g=null;try{const o=await I(e,1);if(o.total>d?b():p(),!o||!o.products.length){s.productsList.innerHTML="",s.notFound.classList.add("not-found--visible");return}s.notFound.classList.remove("not-found--visible"),s.productsList.innerHTML="",k(o.products)}catch(o){console.error("Помилка при пошуку товарів:",o)}finally{z()}}async function tt(){s.searchInput.value="",s.searchFormClearBtn.classList.remove("visible"),s.notFound.classList.remove("not-found--visible"),_=null,i=1,g="ALL";try{const t=await C(1);s.productsList.innerHTML="",k(t.products),t.total>d?b():p()}catch(t){console.error("Помилка при завантаженні всіх товарів:",t)}}export{B as a,st as b,it as c,dt as d,lt as e,K as f,y as g,ut as h,nt as i,L as j,ct as k,z as l,pt as o,s as r,Q as s,at as t,P as u};
//# sourceMappingURL=handlers-C2WPp3QI.js.map
