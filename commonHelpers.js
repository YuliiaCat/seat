import{S as a,N as d,A as f}from"./assets/vendor-5d0fd50e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=document.querySelector(".gallery-section"),c=document.querySelector(".gallery-button-prev"),i=document.querySelector(".gallery-button-next"),u=new a(p.querySelector(".gallery-swiper"),{modules:[d,f],speed:1e3,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:30,loop:!0},1440:{slidesPerView:4,slidesPerGroup:2,spaceBetween:30,loop:!0}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".gallery-button-next",prevEl:".gallery-button-prev"}});document.addEventListener("keydown",r=>{if(r.key==="ArrowRight")u.slideNext();else if(r.key==="ArrowLeft")u.slidePrev();else if(r.key==="Tab"){const o=document.activeElement;o===c?(r.preventDefault(),i.focus()):o===i&&(r.preventDefault(),c.focus())}});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".faq-item");r.forEach(o=>{const s=o.querySelector(".faq-question"),n=o.querySelector(".faq-answer");s.addEventListener("click",()=>{const e=o.classList.contains("opened");r.forEach(t=>t.classList.remove("opened")),r.forEach(t=>t.querySelector(".faq-answer").style.height="0"),e||(o.classList.add("opened"),n.style.height=n.scrollHeight+"px")})})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".header-burger"),o=document.querySelector(".menu");r&&o?r.addEventListener("click",()=>{console.log("Button clicked"),o.classList.toggle("open")}):console.error("Button or menu not found")});
//# sourceMappingURL=commonHelpers.js.map
