(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const o=[{name:"linkedin",href:"https://www.linkedin.com/in/lorenzvanherwaarden/"},{name:" - "},{name:"resumé",href:"/resume.pdf"},{name:" - "},{name:"GitLab",href:"https://gitlab.com/lorenzvanherwaarden"},{name:" - "},{name:"github",href:"https://github.com/lorenzvanherwaarden"},{name:" - Lorenz van Herwaarden - "},{name:"Senior Frontend Engineer at GitLab - "}],l=`
  <div class="personal-details">
    <img class="personal-details__face" alt="Profile picture" src="/profile-picture.webp" />
    <div class="personal-details__info js-personal-details-info">
    </div>
  </div>
`;class c extends HTMLElement{connectedCallback(){this.innerHTML=l;const t=document.querySelector(".js-personal-details-info");this.itemsWithOffset.forEach((r,s)=>{let e;r.href?(e=document.createElement("a"),e.setAttribute("href",r.href),e.setAttribute("target","_blank")):e=document.createElement("span"),r.name.split("").forEach((n,a)=>{e.appendChild(this.getSpan(n,r.offset+a))}),t.appendChild(e)})}get itemsWithOffset(){let t=0;return o.map(r=>{const s={...r,offset:t};return t+=r.name.length,s})}get nrLetters(){return o.reduce((t,r)=>t+r.name.length,0)}getSpan(t,r){const s=`
      <span class="personal-details__letter" style="transform: ${this.getTransform(r)}">
        ${t}
      </span>
    `,e=document.createElement("span");return e.innerHTML=s,e}getTransform(t){return`${this.getTurn(t)}`}getTurn(t){return`rotate(${t/this.nrLetters}turn)`}}customElements.define("personal-details",c);
