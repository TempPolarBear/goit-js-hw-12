import{a as q,S as M,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const R="56898199-01c5f5b99e8faa07dd762a3d2";async function p(r,t){return(await q.get("https://pixabay.com/api/",{params:{key:R,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new M(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:i,comments:v,downloads:P})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${o}</span>
    </p>

    <p class="info-item">
      <b>Views</b>
      <span>${i}</span>
    </p>

    <p class="info-item">
      <b>Comments</b>
      <span>${v}</span>
    </p>

    <p class="info-item">
      <b>Downloads</b>
      <span>${P}</span>
    </p>
  </div>
</li>
`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function L(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const w=document.querySelector(".form"),E=document.querySelector(".load-more");let l="",c=1,u=0;const S=15;w.addEventListener("submit",O);E.addEventListener("click",x);async function O(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){a.error({message:"Please enter a search query!",position:"topRight"});return}c=1,B(),d(),y();try{const t=await p(l,c);if(u=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),u>S?L():(d(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error(t),a.error({message:"Something went wrong!",position:"topRight"})}finally{b()}w.reset()}async function x(){c++,d(),y();try{const r=await p(l,c);g(r.hits);const t=document.querySelector(".gallery-item");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}const s=Math.ceil(u/S);c<s?L():(d(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error(r),a.error({message:"Something went wrong!",position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map
