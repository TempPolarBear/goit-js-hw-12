import{a as P,S as R,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const B="56898199-01c5f5b99e8faa07dd762a3d2",M="https://pixabay.com/api/";async function p(r,t=1){return(await P.get(M,{params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new R(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:s,largeImageURL:c,tags:e,likes:o,views:i,comments:v,downloads:q})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${c}">
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
      <span>${q}</span>
    </p>
  </div>
</li>
`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function b(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const w=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",a=1,d=0;const S=15;w.addEventListener("submit",x);O.addEventListener("click",A);async function x(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){n.error({message:"Please enter a search query!",position:"topRight"});return}w.reset(),a=1,d=0,E(),u(),y();try{const t=await p(l,a);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),a*S>=d?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch(t){console.error(t),n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}async function A(){u(),a++,y();try{const r=await p(l,a);g(r.hits);const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}a*S>=d?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch(r){console.error(r),n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
