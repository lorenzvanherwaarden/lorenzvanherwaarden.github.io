(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="/assets/myFace-b37a300f.jpg",o=[{name:"linkedin",href:"https://www.linkedin.com/in/lorenzvanherwaarden/"},{name:" - "},{name:"resumé",href:"/resume.pdf"},{name:" - "},{name:"GitLab",href:"https://gitlab.com/lorenzvanherwaarden"},{name:" - "},{name:"github",href:"https://github.com/lorenzvanherwaarden"},{name:" - Lorenz van Herwaarden - "},{name:"Senior Frontend Engineer at GitLab - "}],c=`
  <div class="personal-details">
    <img class="personal-details__face" alt="My face" src="${l}" />
    <div class="personal-details__info js-personal-details-info">
    </div>
  </div>
`;class f extends HTMLElement{connectedCallback(){this.innerHTML=c;const t=document.querySelector(".js-personal-details-info");this.itemsWithOffset.forEach((n,s)=>{let e;n.href?(e=document.createElement("a"),e.setAttribute("href",n.href),e.setAttribute("target","_blank")):e=document.createElement("span"),n.name.split("").forEach((r,a)=>{e.appendChild(this.getSpan(r,n.offset+a))}),t.appendChild(e)})}get itemsWithOffset(){let t=0;return o.map(n=>{const s={...n,offset:t};return t+=n.name.length,s})}get nrLetters(){return o.reduce((t,n)=>t+n.name.length,0)}getSpan(t,n){const s=`
      <span class="personal-details__letter" style="transform: ${this.getTransform(n)}">
        ${t}
      </span>
    `,e=document.createElement("span");return e.innerHTML=s,e}getTransform(t){return`${this.getTurn(t)}`}getTurn(t){return`rotate(${t/this.nrLetters}turn)`}}customElements.define("personal-details",f);
