import{S as u,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function f(n){const r="https://pixabay.com/api/?",e=new URLSearchParams({key:"44040237-e4cc253c6c6f225197cba954d",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=r+e;return fetch(s).then(t=>{if(!t.ok)throw console.log("!res.ok"),new Error(t.status);return t})}function h(n){if(n.length===0)throw new Error("");return n.map(r).join("");function r(e){return`<li class="card">
                <a href="${e.largeImageURL}">
                <div class="img-wrapper">
                <img src="${e.webformatURL}" alt="${e.tags}">
                </div>
                </a>
            <table>
                <tr>
                    <th>Likes</th>
                    <th>Views</th>
                    <th>Comments</th>
                    <th>Downloads</th>
                </tr>
                <tr>
                    <td>"${e.likes}"</td>
                    <td>"${e.views}"</td>
                    <td>"${e.comments}"</td>
                    <td>"${e.downloads}"</td>
                </tr>
            </table>
        </li>`}}const m="/goit-js-hw-11/assets/cross-icon-4f06a8ee.svg",p="/goit-js-hw-11/assets/cross-00850542.svg",g={captionsData:"alt",captionDelay:250},y=new u(".gallery a",g),a=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),l=document.querySelector(".form");l.addEventListener("submit",w);function w(n){n.preventDefault(),a.innerHTML="";const r=l.querySelector("input").value;r!==""&&(c.setAttribute("style","display: flex;"),f(r).then(e=>e.json()).then(e=>{a.innerHTML=h(e.hits),y.refresh()}).catch(e=>b()).finally(()=>{c.setAttribute("style","display: none;")}))}function b(){d.show({title:"Sorry, there are no images matching<br>your search query. Please, try again!",backgroundColor:"#EF4040",timeout:5e3,titleColor:"#fff",titleSize:"16px",iconUrl:m,buttons:[[`<button style="background: transparent; padding: 0; margin-left: 30px" width="20" height="20"><img src=${p}></button>`,function(n,r){n.hide({transitionOut:"fadeOutUp"},r,"buttonName")}]],close:!1})}
//# sourceMappingURL=commonHelpers.js.map
