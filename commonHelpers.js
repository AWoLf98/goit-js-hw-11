var h=(o,e,s)=>{if(!e.has(o))throw TypeError("Cannot "+s)};var l=(o,e,s)=>(h(o,e,"read from private field"),s?s.call(o):e.get(o)),g=(o,e,s)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,s)},m=(o,e,s,r)=>(h(o,e,"write to private field"),r?r.call(o,s):e.set(o,s),s);import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(a){if(a.ep)return;a.ep=!0;const t=s(a);fetch(a.href,t)}})();var i;class y{constructor(e="loader-section"){g(this,i,void 0);m(this,i,e)}showGalery(e,s){s.innerHTML=e.hits.reduce((a,t)=>a+`<li>
            <a href="${t.largeImageURL}">
              <img src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="img-description">
            <li>
              <span data-header>
                Likes
              </span>
              <span data-count>
                ${t.likes}
              </span>
            </li>
            <li>
              <span data-header>
                Views
              </span>
              <span data-count>
                ${t.views}
              </span>
            </li>
            <li>
              <span data-header>
                Comments
              </span>
              <span data-count>
                ${t.comments}
              </span>
            </li>
            <li>
              <span data-header>
                Downloads
              </span>
              <span data-count>
                ${t.downloads}
              </span>
            </li>
          </ul>
        </li>`,"");var r=new u(".gallery a");r.show()}toggleLoadingMsg(){document.querySelector(`.${l(this,i)}`).classList.toggle("visually-hidden")}showFalseRenderMsg(){console.log("showFalseRenderMsg"),f.show({class:"error-msg",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",theme:"dark",color:"#EF4040",iconText:"Close",iconColor:"#FAFAFB",iconUrl:"../img/button-x.svg",maxWidth:"432",zindex:999,close:!0,closeOnEscape:!0,displayMode:2,position:"topRight",timeout:5e4,animateInside:!1,drag:!1,progressBarColor:"#B51B1B"})}}i=new WeakMap;var n;class L{constructor(){g(this,n,void 0);m(this,n,{key:"13766037-6b94ce31e5d6d188a57cfe399",image_type:"photo",orientation:"horizontal",safesearch:"true"})}searchImg(e){return l(this,n).q=e,fetch(`https://pixabay.com/api/?${new URLSearchParams(l(this,n))}`).then(s=>s.json()).catch(s=>s)}}n=new WeakMap;const c=new y,w=new L,p=document.querySelector(".form-search");p.addEventListener("submit",o=>{o.preventDefault();const e=document.querySelector(".gallery");c.toggleLoadingMsg(),w.searchImg(p.elements.search_string.value.trim()).then(s=>{c.showGalery(s,e),c.toggleLoadingMsg()}),c.toggleLoadingMsg()});
//# sourceMappingURL=commonHelpers.js.map
