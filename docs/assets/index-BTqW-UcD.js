var U=Object.defineProperty;var V=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>V(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function b(){}function M(e){return e()}function S(){return Object.create(null)}function w(e){e.forEach(M)}function q(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function F(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function K(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function J(){return H(" ")}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}let L;function m(e){L=e}const g=[],j=[];let _=[];const C=[],W=Promise.resolve();let A=!1;function X(){A||(A=!0,W.then(R))}function N(e){_.push(e)}const v=new Set;let p=0;function R(){if(p!==0)return;const e=L;do{try{for(;p<g.length;){const t=g[p];p++,m(t),Y(t.$$)}}catch(t){throw g.length=0,p=0,t}for(m(null),g.length=0,p=0;j.length;)j.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];v.has(n)||(v.add(n),n())}_.length=0}while(g.length);for(;C.length;)C.pop()();A=!1,v.clear(),m(e)}function Y(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function Z(e){const t=[],n=[];_.forEach(c=>e.indexOf(c)===-1?t.push(c):n.push(c)),n.forEach(c=>c()),_=t}const ee=new Set;function te(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function $(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ne(e,t,n){const{fragment:c,after_update:o}=e.$$;c&&c.m(t,n),N(()=>{const r=e.$$.on_mount.map(M).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...r):w(r),e.$$.on_mount=[]}),o.forEach(N)}function re(e,t){const n=e.$$;n.fragment!==null&&(Z(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(g.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,c,o,r,i=null,l=[-1]){const s=L;m(e);const u=e.$$={fragment:null,ctx:[],props:r,update:b,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:S(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};i&&i(u.root);let a=!1;if(u.ctx=n?n(e,t.props||{},(f,d,...h)=>{const P=h.length?h[0]:d;return u.ctx&&o(u.ctx[f],u.ctx[f]=P)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](P),a&&oe(e,f)),d}):[],u.update(),a=!0,w(u.before_update),u.fragment=c?c(u.ctx):!1,t.target){if(t.hydrate){const f=Q(t.target);u.fragment&&u.fragment.l(f),f.forEach(x)}else u.fragment&&u.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),R()}m(s)}class ce{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){re(this,1),this.$destroy=b}$on(t,n){if(!q(n))return b;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);function I(e,t,n){const c=e.slice();return c[4]=t[n],c}function z(e,t,n){const c=e.slice();return c[7]=t[n],c}function B(e){let t,n;return{c(){t=y("td"),E(t,"class",n="p"+e[7]+" svelte-zc23d2")},m(c,o){k(c,t,o)},p(c,o){o&1&&n!==(n="p"+c[7]+" svelte-zc23d2")&&E(t,"class",n)},d(c){c&&x(t)}}}function T(e){let t,n,c=$(e[4]),o=[];for(let r=0;r<c.length;r+=1)o[r]=B(z(e,c,r));return{c(){t=y("tr");for(let r=0;r<o.length;r+=1)o[r].c();n=J()},m(r,i){k(r,t,i);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(t,null);F(t,n)},p(r,i){if(i&1){c=$(r[4]);let l;for(l=0;l<c.length;l+=1){const s=z(r,c,l);o[l]?o[l].p(s,i):(o[l]=B(s),o[l].c(),o[l].m(t,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=c.length}},d(r){r&&x(t),K(o,r)}}}function se(e){let t,n,c=$(e[0]),o=[];for(let r=0;r<c.length;r+=1)o[r]=T(I(e,c,r));return{c(){t=y("main"),n=y("table");for(let r=0;r<o.length;r+=1)o[r].c();E(n,"class","svelte-zc23d2")},m(r,i){k(r,t,i),F(t,n);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,null)},p(r,[i]){if(i&1){c=$(r[0]);let l;for(l=0;l<c.length;l+=1){const s=I(r,c,l);o[l]?o[l].p(s,i):(o[l]=T(s),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=c.length}},i:b,o:b,d(r){r&&x(t),K(o,r)}}}function ue(e,t,n){const c=l=>Array.from({length:l}),r=(l=>c(101).map(s=>c(101).fill(l)))(0),i=(l,s,u,a=1)=>{let f=0,d=-u,h=-u;for(;f<-d;)h>0?(d++,h+=2*(f+d)+1):h+=2*f+1,n(0,r[l+f][s+d]+=a,r),n(0,r[l+f][s-d]+=a,r),n(0,r[l+d][s+f]+=a,r),n(0,r[l-d][s+f]+=a,r),f>0&&(n(0,r[l-f][s+d]+=a,r),n(0,r[l+d][s-f]+=a,r),n(0,r[l-d][s-f]+=a,r),n(0,r[l-f][s-d]+=a,r)),f++};for(let l=1;l<=50;l++)i(50,50,l);return[r]}class ie extends ce{constructor(t){super(),le(this,t,ue,se,D,{})}}new ie({target:document.getElementById("app")});
