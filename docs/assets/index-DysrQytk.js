var V=Object.defineProperty;var z=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>z(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function m(){}function q(e){return e()}function P(){return Object.create(null)}function $(e){e.forEach(q)}function F(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function K(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function R(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function J(){return H(" ")}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}let j;function _(e){j=e}const p=[],S=[];let g=[];const C=[],W=Promise.resolve();let E=!1;function X(){E||(E=!0,W.then(U))}function A(e){g.push(e)}const O=new Set;let h=0;function U(){if(h!==0)return;const e=j;do{try{for(;h<p.length;){const t=p[h];h++,_(t),Y(t.$$)}}catch(t){throw p.length=0,h=0,t}for(_(null),p.length=0,h=0;S.length;)S.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];O.has(n)||(O.add(n),n())}g.length=0}while(p.length);for(;C.length;)C.pop()();E=!1,O.clear(),_(e)}function Y(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}function Z(e){const t=[],n=[];g.forEach(c=>e.indexOf(c)===-1?t.push(c):n.push(c)),n.forEach(c=>c()),g=t}const ee=new Set;function te(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function y(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ne(e,t,n){const{fragment:c,after_update:o}=e.$$;c&&c.m(t,n),A(()=>{const r=e.$$.on_mount.map(q).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...r):$(r),e.$$.on_mount=[]}),o.forEach(A)}function re(e,t){const n=e.$$;n.fragment!==null&&(Z(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(p.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,c,o,r,i=null,l=[-1]){const f=j;_(e);const u=e.$$={fragment:null,ctx:[],props:r,update:m,not_equal:o,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:P(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(s,a,...k)=>{const L=k.length?k[0]:a;return u.ctx&&o(u.ctx[s],u.ctx[s]=L)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](L),d&&oe(e,s)),a}):[],u.update(),d=!0,$(u.before_update),u.fragment=c?c(u.ctx):!1,t.target){if(t.hydrate){const s=Q(t.target);u.fragment&&u.fragment.l(s),s.forEach(w)}else u.fragment&&u.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),U()}_(f)}class ce{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){re(this,1),this.$destroy=m}$on(t,n){if(!F(n))return m;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);function I(e,t,n){const c=e.slice();return c[4]=t[n],c}function B(e,t,n){const c=e.slice();return c[7]=t[n],c}function T(e){let t,n;return{c(){t=b("td"),v(t,"class",n="p"+e[7]+" svelte-5x2hj2")},m(c,o){N(c,t,o)},p(c,o){o&1&&n!==(n="p"+c[7]+" svelte-5x2hj2")&&v(t,"class",n)},d(c){c&&w(t)}}}function M(e){let t,n,c=y(e[4]),o=[];for(let r=0;r<c.length;r+=1)o[r]=T(B(e,c,r));return{c(){t=b("tr");for(let r=0;r<o.length;r+=1)o[r].c();n=J()},m(r,i){N(r,t,i);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(t,null);K(t,n)},p(r,i){if(i&1){c=y(r[4]);let l;for(l=0;l<c.length;l+=1){const f=B(r,c,l);o[l]?o[l].p(f,i):(o[l]=T(f),o[l].c(),o[l].m(t,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=c.length}},d(r){r&&w(t),R(o,r)}}}function se(e){let t,n,c=y(e[0]),o=[];for(let r=0;r<c.length;r+=1)o[r]=M(I(e,c,r));return{c(){t=b("main"),n=b("table");for(let r=0;r<o.length;r+=1)o[r].c();v(n,"class","svelte-5x2hj2")},m(r,i){N(r,t,i),K(t,n);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,null)},p(r,[i]){if(i&1){c=y(r[0]);let l;for(l=0;l<c.length;l+=1){const f=I(r,c,l);o[l]?o[l].p(f,i):(o[l]=M(f),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=c.length}},i:m,o:m,d(r){r&&w(t),R(o,r)}}}function ue(e,t,n){const c=l=>Array.from({length:l}),r=(l=>c(101).map(f=>c(101).fill(l)))(0),i=(l,f,u)=>{let d=0,s=-u,a=-u;for(;d<-s;)a>0?(s++,a+=2*(d+s)+1):a+=2*d+1,n(0,r[l+d][f+s]=1,r),n(0,r[l-d][f+s]=1,r),n(0,r[l+d][f-s]=1,r),n(0,r[l-d][f-s]=1,r),n(0,r[l+s][f+d]=1,r),n(0,r[l-s][f+d]=1,r),n(0,r[l+s][f-d]=1,r),n(0,r[l-s][f-d]=1,r),d++};for(let l=1;l<5;l++)i(50,50,l*10+10);return[r]}class ie extends ce{constructor(t){super(),le(this,t,ue,se,D,{})}}new ie({target:document.getElementById("app")});
