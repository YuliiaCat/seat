(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".header-burger"),o=document.querySelector(".menu"),s=document.querySelectorAll(".menu-link"),n=()=>{o.classList.toggle("open")},e=()=>{o.classList.remove("open")};r&&o?r.addEventListener("click",n):console.error("Button or menu not found"),document.addEventListener("click",t=>{o.classList.contains("open")&&!o.contains(t.target)&&!r.contains(t.target)&&e()}),s.forEach(t=>{t.addEventListener("click",e)})});
//# sourceMappingURL=burger-0ab9c7ac.js.map