import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="44774243-c5238725a8321193973133c91";function y(o){return fetch(`https://pixabay.com/api/?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function p(o){const t=document.querySelector(".gallery"),s=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:f})=>`
      <a href="${e}">
        <div class="photo-card">
          <img src="${i}" alt="${r}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes</b>${n}</p>
            <p class="info-item"><b>Views</b>${l}</p>
            <p class="info-item"><b>Comments</b>${u}</p>
            <p class="info-item"><b>Downloads</b>${f}</p>
          </div>
        </div>
      </a>
    `).join("");t.innerHTML=s,new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector(".search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",b);function b(o){o.preventDefault();const t=o.currentTarget.elements.searchQuery.value.toLowerCase();if(t===""){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",g.innerHTML="",y(t).then(s=>{s.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):p(s.hits)}).catch(s=>{a.error({title:"Error",message:"Something went wrong: ${error.message}"})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
