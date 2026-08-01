import{a as P,S as q,i}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M="56898199-01c5f5b99e8faa07dd762a3d2";async function u(r,t){return(await P.get("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const t=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:a,comments:S,downloads:v})=>`
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
      <span>${a}</span>
    </p>

    <p class="info-item">
      <b>Comments</b>
      <span>${S}</span>
    </p>

    <p class="info-item">
      <b>Downloads</b>
      <span>${v}</span>
    </p>
  </div>
</li>
`).join("");p.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){p.innerHTML=""}function g(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function R(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const b=document.querySelector(".form"),E=document.querySelector(".load-more");let l="",c=1,d=0;const w=15;b.addEventListener("submit",O);E.addEventListener("click",x);async function O(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){i.error({message:"Please enter a search query!",position:"topRight"});return}c=1,B(),L(),g();try{const t=await u(l,c);if(d=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),d>w&&R()}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{y()}b.reset()}async function x(){c++,g();try{const r=await u(l,c);h(r.hits);const t=document.querySelector(".gallery-item");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}const s=Math.ceil(d/w);c>=s&&(L(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
