(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();async function l(e){const r=await(await fetch("https://api.github.com/users/"+e)).json();f(r)}function u(e){return!!(e&&typeof e=="object"&&"login"in e&&"name"in e&&"location"in e&&"bio"in e&&"followers"in e&&"following"in e&&"public_repos"in e&&"avatar_url"in e)}function f(e){const o=document.getElementById("content");u(e)&&o&&(o.innerHTML+=`
    <div class="imgAvatar">
      <img src="${e.avatar_url}" alt="Foto de Perfil">
    </div>
    <div class="contentPersonal">
      <p>Login: ${e.login}</p>
      <p>Nome: ${e.name}</p>
      <p>Localidade: ${e.location}</p>
      <p>Seguidores: ${e.followers}</p>
      <p>Seguindo: ${e.following}</p>
      <p>Repositórios: ${e.public_repos}</p>
      <p>Biografia: ${e.bio}</p>
    </div>
    `)}const p=document.getElementById("searchInput"),c=document.querySelector("#searchButton"),a=document.getElementById("content");function m(e){e.preventDefault(),(a.innerHTML=" ")&&l(p.value)}c==null||c.addEventListener("click",m);
