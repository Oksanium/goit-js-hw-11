import{S as l,i as u}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const d="https://pixabay.com/api/?";function f(s){const r=new URLSearchParams({key:"44040237-e4cc253c6c6f225197cba954d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return d+r}const h=document.querySelector(".gallery");function m(s){if(s.length===0){showRedToast();return}h.innerHTML=s.map(r).join("");function r(e){return console.log(e.tags),`<li class="card">
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
        </li>`}}const p="/goit-js-hw-11/assets/cross-icon-4f06a8ee.svg",g="/goit-js-hw-11/assets/cross-00850542.svg",y={captionsData:"alt",captionDelay:250},w=new l(".gallery a",y),a=document.querySelector(".loader-wrapper"),c=document.querySelector(".form");c.addEventListener("submit",b);function b(s){s.preventDefault(),a.setAttribute("style","display: flex;");const r=c.querySelector("input").value;r!==""&&fetch(f(r)).then(e=>e.json()).then(e=>{m(e.hits)}).then(()=>{w.refresh()}).catch(e=>{L()}).finally(()=>{a.setAttribute("style","display: none;")})}function L(){u.show({title:"Sorry, there are no images matching<br>your search query. Please, try again!",backgroundColor:"#EF4040",timeout:5e3,titleColor:"#fff",titleSize:"16px",iconUrl:p,buttons:[[`<button style="background: transparent; padding: 0; margin-left: 30px" width="20" height="20"><img src=${g}></button>`,function(s,r){s.hide({transitionOut:"fadeOutUp"},r,"buttonName")}]],close:!1})}
//# sourceMappingURL=commonHelpers.js.map
