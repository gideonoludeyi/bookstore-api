function Sn(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function We(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Ie(r)?ed(r):We(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ie(e))return e;if(be(e))return e}}const Zu=/;(?![^(]*\))/g,Xu=/:([^]+)/,Qu=/\/\*.*?\*\//gs;function ed(e){const t={};return e.replace(Qu,"").split(Zu).forEach(n=>{if(n){const r=n.split(Xu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Le(e){let t="";if(Ie(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=Le(e[n]);r&&(t+=r+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function it(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=Le(t)),n&&(e.style=We(n)),e}const td="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",nd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",rd=Sn(td),od=Sn(nd),sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=Sn(sd);function Ma(e){return!!e||e===""}function ld(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Go(e[r],t[r]);return n}function Go(e,t){if(e===t)return!0;let n=Qi(e),r=Qi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=qr(e),r=qr(t),n||r)return e===t;if(n=X(e),r=X(t),n||r)return n&&r?ld(e,t):!1;if(n=be(e),r=be(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(l&&!a||!l&&a||!Go(e[i],t[i]))return!1}}return String(e)===String(t)}function ad(e,t){return e.findIndex(n=>Go(n,t))}const en=e=>Ie(e)?e:e==null?"":X(e)||be(e)&&(e.toString===Da||!ne(e.toString))?JSON.stringify(e,Na,2):String(e),Na=(e,t)=>t&&t.__v_isRef?Na(e,t.value):Dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Yo(t)?{[`Set(${t.size})`]:[...t.values()]}:be(t)&&!X(t)&&!Fa(t)?String(t):t,$e=Object.freeze({}),ur=Object.freeze([]),at=()=>{},La=()=>!1,cd=/^on[^a-z]/,so=e=>cd.test(e),Oo=e=>e.startsWith("onUpdate:"),Fe=Object.assign,fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ud=Object.prototype.hasOwnProperty,pe=(e,t)=>ud.call(e,t),X=Array.isArray,Dn=e=>io(e)==="[object Map]",Yo=e=>io(e)==="[object Set]",Qi=e=>io(e)==="[object Date]",ne=e=>typeof e=="function",Ie=e=>typeof e=="string",qr=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",pi=e=>be(e)&&ne(e.then)&&ne(e.catch),Da=Object.prototype.toString,io=e=>Da.call(e),hi=e=>io(e).slice(8,-1),Fa=e=>io(e)==="[object Object]",mi=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xo=Sn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dd=Sn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Jo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fd=/-(\w)/g,Bt=Jo(e=>e.replace(fd,(t,n)=>n?n.toUpperCase():"")),pd=/\B([A-Z])/g,tn=Jo(e=>e.replace(pd,"-$1").toLowerCase()),Kn=Jo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cn=Jo(e=>e?`on${Kn(e)}`:""),Vr=(e,t)=>!Object.is(e,t),hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Io=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ur=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let el;const Ha=()=>el||(el=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let ft;class ja{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!t&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ft;try{return ft=this,t()}finally{ft=n}}else Ao("cannot run an inactive effect scope.")}on(){ft=this}off(){ft=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Hx(e){return new ja(e)}function hd(e,t=ft){t&&t.active&&t.effects.push(e)}function md(){return ft}function gd(e){ft?ft.cleanups.push(e):Ao("onScopeDispose() is called when there is no active effect scope to be associated with.")}const gi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ba=e=>(e.w&wn)>0,za=e=>(e.n&wn)>0,vd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=wn},_d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Ba(o)&&!za(o)?o.delete(e):t[n++]=o,o.w&=~wn,o.n&=~wn}t.length=n}},Os=new WeakMap;let Ir=0,wn=1;const Is=30;let rt;const Fn=Symbol("iterate"),As=Symbol("Map key iterate");class vi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hd(this,r)}run(){if(!this.active)return this.fn();let t=rt,n=gn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=rt,rt=this,gn=!0,wn=1<<++Ir,Ir<=Is?vd(this):tl(this),this.fn()}finally{Ir<=Is&&_d(this),wn=1<<--Ir,rt=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(tl(this),this.onStop&&this.onStop(),this.active=!1)}}function tl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gn=!0;const qa=[];function Zn(){qa.push(gn),gn=!1}function Xn(){const e=qa.pop();gn=e===void 0?!0:e}function gt(e,t,n){if(gn&&rt){let r=Os.get(e);r||Os.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=gi()),Va(o,{effect:rt,target:e,type:t,key:n})}}function Va(e,t){let n=!1;Ir<=Is?za(e)||(e.n|=wn,n=!Ba(e)):n=!e.has(rt),n&&(e.add(rt),rt.deps.push(e),rt.onTrack&&rt.onTrack(Object.assign({effect:rt},t)))}function nn(e,t,n,r,o,s){const i=Os.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&X(e)){const c=Ur(r);i.forEach((d,u)=>{(u==="length"||u>=c)&&l.push(d)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":X(e)?mi(n)&&l.push(i.get("length")):(l.push(i.get(Fn)),Dn(e)&&l.push(i.get(As)));break;case"delete":X(e)||(l.push(i.get(Fn)),Dn(e)&&l.push(i.get(As)));break;case"set":Dn(e)&&l.push(i.get(Fn));break}const a={target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:s};if(l.length===1)l[0]&&Rs(l[0],a);else{const c=[];for(const d of l)d&&c.push(...d);Rs(gi(c),a)}}function Rs(e,t){const n=X(e)?e:[...e];for(const r of n)r.computed&&nl(r,t);for(const r of n)r.computed||nl(r,t)}function nl(e,t){(e!==rt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Fe({effect:e},t)),e.scheduler?e.scheduler():e.run())}const yd=Sn("__proto__,__v_isRef,__isVue"),Ua=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qr)),bd=Zo(),wd=Zo(!1,!0),xd=Zo(!0),kd=Zo(!0,!0),rl=Sd();function Sd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=le(this);for(let s=0,i=this.length;s<i;s++)gt(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(le)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zn();const r=le(this)[t].apply(this,n);return Xn(),r}}),e}function Zo(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Qa:Xa:t?Za:Ja).get(r))return r;const i=X(r);if(!e&&i&&pe(rl,o))return Reflect.get(rl,o,s);const l=Reflect.get(r,o,s);return(qr(o)?Ua.has(o):yd(o))||(e||gt(r,"get",o),t)?l:ye(l)?i&&mi(o)?l:l.value:be(l)?e?Mn(l):Ge(l):l}}const Ed=Ka(),Td=Ka(!0);function Ka(e=!1){return function(n,r,o,s){let i=n[r];if(xn(i)&&ye(i)&&!ye(o))return!1;if(!e&&(!Ro(o)&&!xn(o)&&(i=le(i),o=le(o)),!X(n)&&ye(i)&&!ye(o)))return i.value=o,!0;const l=X(n)&&mi(r)?Number(r)<n.length:pe(n,r),a=Reflect.set(n,r,o,s);return n===le(s)&&(l?Vr(o,i)&&nn(n,"set",r,o,i):nn(n,"add",r,o)),a}}function Pd(e,t){const n=pe(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&nn(e,"delete",t,void 0,r),o}function $d(e,t){const n=Reflect.has(e,t);return(!qr(t)||!Ua.has(t))&&gt(e,"has",t),n}function Cd(e){return gt(e,"iterate",X(e)?"length":Fn),Reflect.ownKeys(e)}const Wa={get:bd,set:Ed,deleteProperty:Pd,has:$d,ownKeys:Cd},Ga={get:xd,set(e,t){return Ao(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ao(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Od=Fe({},Wa,{get:wd,set:Td}),Id=Fe({},Ga,{get:kd}),_i=e=>e,Xo=e=>Reflect.getPrototypeOf(e);function po(e,t,n=!1,r=!1){e=e.__v_raw;const o=le(e),s=le(t);n||(t!==s&&gt(o,"get",t),gt(o,"get",s));const{has:i}=Xo(o),l=r?_i:n?bi:Kr;if(i.call(o,t))return l(e.get(t));if(i.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function ho(e,t=!1){const n=this.__v_raw,r=le(n),o=le(e);return t||(e!==o&&gt(r,"has",e),gt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function mo(e,t=!1){return e=e.__v_raw,!t&&gt(le(e),"iterate",Fn),Reflect.get(e,"size",e)}function ol(e){e=le(e);const t=le(this);return Xo(t).has.call(t,e)||(t.add(e),nn(t,"add",e,e)),this}function sl(e,t){t=le(t);const n=le(this),{has:r,get:o}=Xo(n);let s=r.call(n,e);s?Ya(n,r,e):(e=le(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Vr(t,i)&&nn(n,"set",e,t,i):nn(n,"add",e,t),this}function il(e){const t=le(this),{has:n,get:r}=Xo(t);let o=n.call(t,e);o?Ya(t,n,e):(e=le(e),o=n.call(t,e));const s=r?r.call(t,e):void 0,i=t.delete(e);return o&&nn(t,"delete",e,void 0,s),i}function ll(){const e=le(this),t=e.size!==0,n=Dn(e)?new Map(e):new Set(e),r=e.clear();return t&&nn(e,"clear",void 0,void 0,n),r}function go(e,t){return function(r,o){const s=this,i=s.__v_raw,l=le(i),a=t?_i:e?bi:Kr;return!e&&gt(l,"iterate",Fn),i.forEach((c,d)=>r.call(o,a(c),a(d),s))}}function vo(e,t,n){return function(...r){const o=this.__v_raw,s=le(o),i=Dn(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...r),d=n?_i:t?bi:Kr;return!t&&gt(s,"iterate",a?As:Fn),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function cn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Kn(e)} operation ${n}failed: target is readonly.`,le(this))}return e==="delete"?!1:this}}function Ad(){const e={get(s){return po(this,s)},get size(){return mo(this)},has:ho,add:ol,set:sl,delete:il,clear:ll,forEach:go(!1,!1)},t={get(s){return po(this,s,!1,!0)},get size(){return mo(this)},has:ho,add:ol,set:sl,delete:il,clear:ll,forEach:go(!1,!0)},n={get(s){return po(this,s,!0)},get size(){return mo(this,!0)},has(s){return ho.call(this,s,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:go(!0,!1)},r={get(s){return po(this,s,!0,!0)},get size(){return mo(this,!0)},has(s){return ho.call(this,s,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=vo(s,!1,!1),n[s]=vo(s,!0,!1),t[s]=vo(s,!1,!0),r[s]=vo(s,!0,!0)}),[e,n,t,r]}const[Rd,Md,Nd,Ld]=Ad();function Qo(e,t){const n=t?e?Ld:Nd:e?Md:Rd;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(pe(n,o)&&o in r?n:r,o,s)}const Dd={get:Qo(!1,!1)},Fd={get:Qo(!1,!0)},Hd={get:Qo(!0,!1)},jd={get:Qo(!0,!0)};function Ya(e,t,n){const r=le(n);if(r!==n&&t.call(e,r)){const o=hi(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ja=new WeakMap,Za=new WeakMap,Xa=new WeakMap,Qa=new WeakMap;function Bd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(e){return e.__v_skip||!Object.isExtensible(e)?0:Bd(hi(e))}function Ge(e){return xn(e)?e:es(e,!1,Wa,Dd,Ja)}function qd(e){return es(e,!1,Od,Fd,Za)}function Mn(e){return es(e,!0,Ga,Hd,Xa)}function ar(e){return es(e,!0,Id,jd,Qa)}function es(e,t,n,r,o){if(!be(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=zd(e);if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function Hn(e){return xn(e)?Hn(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Ro(e){return!!(e&&e.__v_isShallow)}function Mo(e){return Hn(e)||xn(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function yi(e){return Io(e,"__v_skip",!0),e}const Kr=e=>be(e)?Ge(e):e,bi=e=>be(e)?Mn(e):e;function wi(e){gn&&rt&&(e=le(e),Va(e.dep||(e.dep=gi()),{target:e,type:"get",key:"value"}))}function xi(e,t){e=le(e),e.dep&&Rs(e.dep,{target:e,type:"set",key:"value",newValue:t})}function ye(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return ec(e,!1)}function zt(e){return ec(e,!0)}function ec(e,t){return ye(e)?e:new Vd(e,t)}class Vd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:Kr(t)}get value(){return wi(this),this._value}set value(t){const n=this.__v_isShallow||Ro(t)||xn(t);t=n?t:le(t),Vr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Kr(t),xi(this,t))}}function b(e){return ye(e)?e.value:e}const Ud={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ye(o)&&!ye(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function tc(e){return Hn(e)?e:new Proxy(e,Ud)}class Kd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>wi(this),()=>xi(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function nc(e){return new Kd(e)}function Wd(e){Mo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=X(e)?new Array(e.length):{};for(const n in e)t[n]=Yd(e,n);return t}class Gd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Yd(e,t,n){const r=e[t];return ye(r)?r:new Gd(e,t,n)}var rc;class Jd{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rc]=!1,this._dirty=!0,this.effect=new vi(t,()=>{this._dirty||(this._dirty=!0,xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=le(this);return wi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}rc="__v_isReadonly";function Zd(e,t,n=!1){let r,o;const s=ne(e);s?(r=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,o=e.set);const i=new Jd(r,o,s||!o,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const jn=[];function ko(e){jn.push(e)}function So(){jn.pop()}function A(e,...t){Zn();const n=jn.length?jn[jn.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=Xd();if(r)Qt(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:s})=>`at <${us(n,s.type)}>`).join(`
`),o]);else{const s=[`[Vue warn]: ${e}`,...t];o.length&&s.push(`
`,...Qd(o)),console.warn(...s)}Xn()}function Xd(){let e=jn[jn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function Qd(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...ef(n))}),t}function ef({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${us(e.component,e.type,r)}`,s=">"+n;return e.props?[o,...tf(e.props),s]:[o+s]}function tf(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...oc(r,e[r]))}),n.length>3&&t.push(" ..."),t}function oc(e,t,n){return Ie(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ye(t)?(t=oc(e,le(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ne(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=le(t),n?t:[`${e}=`,t])}const ki={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Qt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){ts(s,t,n)}return o}function Ct(e,t,n,r){if(ne(e)){const s=Qt(e,t,n,r);return s&&pi(s)&&s.catch(i=>{ts(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Ct(e[s],t,n,r));return o}function ts(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,l=ki[n];for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){Qt(a,null,10,[e,i,l]);return}}nf(e,n,o,r)}function nf(e,t,n,r=!0){{const o=ki[t];if(n&&ko(n),A(`Unhandled error${o?` during execution of ${o}`:""}`),n&&So(),r)throw e;console.error(e)}}let Wr=!1,Ms=!1;const Je=[];let Lt=0;const dr=[];let Nt=null,dn=0;const sc=Promise.resolve();let Si=null;const rf=100;function Ot(e){const t=Si||sc;return e?t.then(this?e.bind(this):e):t}function of(e){let t=Lt+1,n=Je.length;for(;t<n;){const r=t+n>>>1;Gr(Je[r])<e?t=r+1:n=r}return t}function ns(e){(!Je.length||!Je.includes(e,Wr&&e.allowRecurse?Lt+1:Lt))&&(e.id==null?Je.push(e):Je.splice(of(e.id),0,e),ic())}function ic(){!Wr&&!Ms&&(Ms=!0,Si=sc.then(cc))}function sf(e){const t=Je.indexOf(e);t>Lt&&Je.splice(t,1)}function lc(e){X(e)?dr.push(...e):(!Nt||!Nt.includes(e,e.allowRecurse?dn+1:dn))&&dr.push(e),ic()}function al(e,t=Wr?Lt+1:0){for(e=e||new Map;t<Je.length;t++){const n=Je[t];if(n&&n.pre){if(Ei(e,n))continue;Je.splice(t,1),t--,n()}}}function ac(e){if(dr.length){const t=[...new Set(dr)];if(dr.length=0,Nt){Nt.push(...t);return}for(Nt=t,e=e||new Map,Nt.sort((n,r)=>Gr(n)-Gr(r)),dn=0;dn<Nt.length;dn++)Ei(e,Nt[dn])||Nt[dn]();Nt=null,dn=0}}const Gr=e=>e.id==null?1/0:e.id,lf=(e,t)=>{const n=Gr(e)-Gr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function cc(e){Ms=!1,Wr=!0,e=e||new Map,Je.sort(lf);const t=n=>Ei(e,n);try{for(Lt=0;Lt<Je.length;Lt++){const n=Je[Lt];if(n&&n.active!==!1){if(t(n))continue;Qt(n,null,14)}}}finally{Lt=0,Je.length=0,ac(e),Wr=!1,Si=null,(Je.length||dr.length)&&cc(e)}}function Ei(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>rf){const r=t.ownerInstance,o=r&&Xr(r.type);return A(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let vn=!1;const ir=new Set;Ha().__VUE_HMR_RUNTIME__={createRecord:hs(uc),rerender:hs(uf),reload:hs(df)};const Wn=new Map;function af(e){const t=e.type.__hmrId;let n=Wn.get(t);n||(uc(t,e.type),n=Wn.get(t)),n.instances.add(e)}function cf(e){Wn.get(e.type.__hmrId).instances.delete(e)}function uc(e,t){return Wn.has(e)?!1:(Wn.set(e,{initialDef:Nr(t),instances:new Set}),!0)}function Nr(e){return Bc(e)?e.__vccOpts:e}function uf(e,t){const n=Wn.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,Nr(r.type).render=t),r.renderCache=[],vn=!0,r.update(),vn=!1}))}function df(e,t){const n=Wn.get(e);if(!n)return;t=Nr(t),cl(n.initialDef,t);const r=[...n.instances];for(const o of r){const s=Nr(o.type);ir.has(s)||(s!==n.initialDef&&cl(s,t),ir.add(s)),o.appContext.optionsCache.delete(o.type),o.ceReload?(ir.add(s),o.ceReload(t.styles),ir.delete(s)):o.parent?ns(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}lc(()=>{for(const o of r)ir.delete(Nr(o.type))})}function cl(e,t){Fe(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function hs(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Dt,Ar=[],Ns=!1;function lo(e,...t){Dt?Dt.emit(e,...t):Ns||Ar.push({event:e,args:t})}function dc(e,t){var n,r;Dt=e,Dt?(Dt.enabled=!0,Ar.forEach(({event:o,args:s})=>Dt.emit(o,...s)),Ar=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{dc(s,t)}),setTimeout(()=>{Dt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ns=!0,Ar=[])},3e3)):(Ns=!0,Ar=[])}function ff(e,t){lo("app:init",e,t,{Fragment:xe,Text:co,Comment:ct,Static:Dr})}function pf(e){lo("app:unmount",e)}const Ls=Ti("component:added"),fc=Ti("component:updated"),hf=Ti("component:removed"),mf=e=>{Dt&&typeof Dt.cleanupBuffer=="function"&&!Dt.cleanupBuffer(e)&&hf(e)};function Ti(e){return t=>{lo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const gf=pc("perf:start"),vf=pc("perf:end");function pc(e){return(t,n,r)=>{lo(e,t.appContext.app,t.uid,t,n,r)}}function _f(e,t,n){lo("component:emit",e.appContext.app,e,t,n)}function yf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||$e;{const{emitsOptions:d,propsOptions:[u]}=e;if(d)if(!(t in d))(!u||!(Cn(t)in u))&&A(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Cn(t)}" prop.`);else{const f=d[t];ne(f)&&(f(...n)||A(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:f}=r[d]||$e;f&&(o=n.map(m=>Ie(m)?m.trim():m)),u&&(o=n.map(Ur))}_f(e,t,o);{const d=t.toLowerCase();d!==t&&r[Cn(d)]&&A(`Event "${d}" is emitted in component ${us(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tn(t)}" instead of "${t}".`)}let l,a=r[l=Cn(t)]||r[l=Cn(Bt(t))];!a&&s&&(a=r[l=Cn(tn(t))]),a&&Ct(a,e,6,o);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ct(c,e,6,o)}}function hc(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},l=!1;if(!ne(e)){const a=c=>{const d=hc(c,t,!0);d&&(l=!0,Fe(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(be(e)&&r.set(e,null),null):(X(s)?s.forEach(a=>i[a]=null):Fe(i,s),be(e)&&r.set(e,i),i)}function rs(e,t){return!e||!so(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,tn(t))||pe(e,t))}let ze=null,os=null;function No(e){const t=ze;return ze=e,os=e&&e.type.__scopeId||null,t}function _t(e){os=e}function yt(){os=null}function Se(e,t=ze,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&wl(-1);const s=No(t);let i;try{i=e(...o)}finally{No(s),r._d&&wl(1)}return fc(t),i};return r._n=!0,r._c=!0,r._d=!0,r}let Ds=!1;function Lo(){Ds=!0}function ms(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:u,data:f,setupState:m,ctx:g,inheritAttrs:_}=e;let y,S;const x=No(e);Ds=!1;try{if(n.shapeFlag&4){const B=o||r;y=Tt(d.call(B,B,u,s,m,f,g)),S=a}else{const B=t;a===s&&Lo(),y=Tt(B.length>1?B(s,{get attrs(){return Lo(),a},slots:l,emit:c}):B(s,null)),S=t.props?a:wf(a)}}catch(B){Fr.length=0,ts(B,e,1),y=G(ct)}let E=y,C;if(y.patchFlag>0&&y.patchFlag&2048&&([E,C]=bf(y)),S&&_!==!1){const B=Object.keys(S),{shapeFlag:F}=E;if(B.length){if(F&7)i&&B.some(Oo)&&(S=xf(S,i)),E=on(E,S);else if(!Ds&&E.type!==ct){const D=Object.keys(a),J=[],re=[];for(let de=0,ge=D.length;de<ge;de++){const Me=D[de];so(Me)?Oo(Me)||J.push(Me[2].toLowerCase()+Me.slice(3)):re.push(Me)}re.length&&A(`Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),J.length&&A(`Extraneous non-emits event listeners (${J.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(ul(E)||A("Runtime directive used on component with non-element root node. The directives will not function as intended."),E=on(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(ul(E)||A("Component inside <Transition> renders non-element root node that cannot be animated."),E.transition=n.transition),C?C(E):y=E,No(x),y}const bf=e=>{const t=e.children,n=e.dynamicChildren,r=mc(t);if(!r)return[e,void 0];const o=t.indexOf(r),s=n?n.indexOf(r):-1,i=l=>{t[o]=l,n&&(s>-1?n[s]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Tt(r),i]};function mc(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(Gn(r)){if(r.type!==ct||r.children==="v-if"){if(t)return;t=r}}else return}return t}const wf=e=>{let t;for(const n in e)(n==="class"||n==="style"||so(n))&&((t||(t={}))[n]=e[n]);return t},xf=(e,t)=>{const n={};for(const r in e)(!Oo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n},ul=e=>e.shapeFlag&7||e.type===ct;function kf(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:l,patchFlag:a}=t,c=s.emitsOptions;if((o||l)&&vn||t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?dl(r,i,c):!!i;if(a&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(i[f]!==r[f]&&!rs(c,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?dl(r,i,c):!0:!!i;return!1}function dl(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!rs(n,s))return!0}return!1}function Sf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gc=e=>e.__isSuspense;function Ef(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):lc(e)}function ht(e,t){if(!je)A("provide() can only be used inside setup().");else{let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[e]=t}}function ee(e,t,n=!1){const r=je||ze;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ne(t)?t.call(r.proxy):t;A(`injection "${String(e)}" not found.`)}else A("inject() can only be used inside setup() or functional components.")}function yr(e,t){return Pi(e,null,t)}const _o={};function Ne(e,t,n){return ne(t)||A("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Pi(e,t,n)}function Pi(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=$e){t||(n!==void 0&&A('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&A('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=C=>{A("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},a=je;let c,d=!1,u=!1;if(ye(e)?(c=()=>e.value,d=Ro(e)):Hn(e)?(c=()=>e,r=!0):X(e)?(u=!0,d=e.some(C=>Hn(C)||Ro(C)),c=()=>e.map(C=>{if(ye(C))return C.value;if(Hn(C))return Nn(C);if(ne(C))return Qt(C,a,2);l(C)})):ne(e)?t?c=()=>Qt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ct(e,a,3,[m])}:(c=at,l(e)),t&&r){const C=c;c=()=>Nn(C())}let f,m=C=>{f=x.onStop=()=>{Qt(C,a,4)}},g;if(Zr)if(m=at,t?n&&Ct(t,a,3,[c(),u?[]:void 0,m]):c(),o==="sync"){const C=Ip();g=C.__watcherHandles||(C.__watcherHandles=[])}else return at;let _=u?new Array(e.length).fill(_o):_o;const y=()=>{if(x.active)if(t){const C=x.run();(r||d||(u?C.some((B,F)=>Vr(B,_[F])):Vr(C,_)))&&(f&&f(),Ct(t,a,3,[C,_===_o?void 0:u&&_[0]===_o?[]:_,m]),_=C)}else x.run()};y.allowRecurse=!!t;let S;o==="sync"?S=y:o==="post"?S=()=>Ke(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),S=()=>ns(y));const x=new vi(c,S);x.onTrack=s,x.onTrigger=i,t?n?y():_=x.run():o==="post"?Ke(x.run.bind(x),a&&a.suspense):x.run();const E=()=>{x.stop(),a&&a.scope&&fi(a.scope.effects,x)};return g&&g.push(E),E}function Tf(e,t,n){const r=this.proxy,o=Ie(e)?e.includes(".")?vc(r,e):()=>r[e]:e.bind(r,r);let s;ne(t)?s=t:(s=t.handler,n=t);const i=je;gr(this);const l=Pi(o,s.bind(r),n);return i?gr(i):zn(),l}function vc(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Nn(e,t){if(!be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Nn(e.value,t);else if(X(e))for(let n=0;n<e.length;n++)Nn(e[n],t);else if(Yo(e)||Dn(e))e.forEach(n=>{Nn(n,t)});else if(Fa(e))for(const n in e)Nn(e[n],t);return e}function _c(e,t){e.shapeFlag&6&&e.component?_c(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Re(e){return ne(e)?{setup:e,name:e.name}:e}const fr=e=>!!e.type.__asyncLoader,$i=e=>e.type.__isKeepAlive,Pf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=En(),r=n.ctx;if(!r.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const o=new Map,s=new Set;let i=null;n.__v_cache=o;const l=n.suspense,{renderer:{p:a,m:c,um:d,o:{createElement:u}}}=r,f=u("div");r.activate=(x,E,C,B,F)=>{const D=x.component;c(x,E,C,0,l),a(D.vnode,x,E,C,D,l,B,x.slotScopeIds,F),Ke(()=>{D.isDeactivated=!1,D.a&&hn(D.a);const J=x.props&&x.props.onVnodeMounted;J&&bt(J,D.parent,x)},l),Ls(D)},r.deactivate=x=>{const E=x.component;c(x,f,null,1,l),Ke(()=>{E.da&&hn(E.da);const C=x.props&&x.props.onVnodeUnmounted;C&&bt(C,E.parent,x),E.isDeactivated=!0},l),Ls(E)};function m(x){gs(x),d(x,n,l,!0)}function g(x){o.forEach((E,C)=>{const B=Xr(E.type);B&&(!x||!x(B))&&_(C)})}function _(x){const E=o.get(x);!i||E.type!==i.type?m(E):i&&gs(i),o.delete(x),s.delete(x)}Ne(()=>[e.include,e.exclude],([x,E])=>{x&&g(C=>Rr(x,C)),E&&g(C=>!Rr(E,C))},{flush:"post",deep:!0});let y=null;const S=()=>{y!=null&&o.set(y,vs(n.subTree))};return is(S),wc(S),xc(()=>{o.forEach(x=>{const{subTree:E,suspense:C}=n,B=vs(E);if(x.type===B.type){gs(B);const F=B.component.da;F&&Ke(F,C);return}m(x)})}),()=>{if(y=null,!t.default)return null;const x=t.default(),E=x[0];if(x.length>1)return A("KeepAlive should contain exactly one component child."),i=null,x;if(!Gn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return i=null,E;let C=vs(E);const B=C.type,F=Xr(fr(C)?C.type.__asyncResolved||{}:B),{include:D,exclude:J,max:re}=e;if(D&&(!F||!Rr(D,F))||J&&F&&Rr(J,F))return i=C,E;const de=C.key==null?B:C.key,ge=o.get(de);return C.el&&(C=on(C),E.shapeFlag&128&&(E.ssContent=C)),y=de,ge?(C.el=ge.el,C.component=ge.component,C.transition&&_c(C,C.transition),C.shapeFlag|=512,s.delete(de),s.add(de)):(s.add(de),re&&s.size>parseInt(re,10)&&_(s.values().next().value)),C.shapeFlag|=256,i=C,gc(E.type)?E:C}}},yc=Pf;function Rr(e,t){return X(e)?e.some(n=>Rr(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function $f(e,t){bc(e,"a",t)}function Cf(e,t){bc(e,"da",t)}function bc(e,t,n=je){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ss(t,r,n),n){let o=n.parent;for(;o&&o.parent;)$i(o.parent.vnode)&&Of(r,t,n,o),o=o.parent}}function Of(e,t,n,r){const o=ss(t,e,r,!0);ls(()=>{fi(r[t],o)},n)}function gs(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function vs(e){return e.shapeFlag&128?e.ssContent:e}function ss(e,t,n=je,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Zn(),gr(n);const l=Ct(t,n,e,i);return zn(),Xn(),l});return r?o.unshift(s):o.push(s),s}else{const o=Cn(ki[e].replace(/ hook$/,""));A(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const sn=e=>(t,n=je)=>(!Zr||e==="sp")&&ss(e,(...r)=>t(...r),n),If=sn("bm"),is=sn("m"),Af=sn("bu"),wc=sn("u"),xc=sn("bum"),ls=sn("um"),Rf=sn("sp"),Mf=sn("rtg"),Nf=sn("rtc");function Lf(e,t=je){ss("ec",e,t)}function kc(e){dd(e)&&A("Do not use built-in directive ids as custom directive id: "+e)}function pr(e,t){const n=ze;if(n===null)return A("withDirectives can only be used inside render functions."),e;const r=cs(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,l,a,c=$e]=t[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(l),o.push({dir:i,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Pn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&(Zn(),Ct(a,n,8,[e.el,l,e,t]),Xn())}}const Fs="components";function Df(e,t){return Hf(Fs,e,!0,t)||e}const Ff=Symbol();function Hf(e,t,n=!0,r=!1){const o=ze||je;if(o){const s=o.type;if(e===Fs){const l=Xr(s,!1);if(l&&(l===t||l===Bt(t)||l===Kn(Bt(t))))return s}const i=fl(o[e]||s[e],t)||fl(o.appContext[e],t);if(!i&&r)return s;if(n&&!i){const l=e===Fs?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";A(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return i}else A(`resolve${Kn(e.slice(0,-1))} can only be used in render() or setup().`)}function fl(e,t){return e&&(e[t]||e[Bt(t)]||e[Kn(Bt(t))])}function ao(e,t,n,r){let o;const s=n&&n[r];if(X(e)||Ie(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){Number.isInteger(e)||A(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(be(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,s&&s[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=t(e[c],c,l,s&&s[l])}}else o=[];return n&&(n[r]=o),o}function rn(e,t,n={},r,o){if(ze.isCE||ze.parent&&fr(ze.parent)&&ze.parent.isCE)return t!=="default"&&(n.name=t),G("slot",n,r&&r());let s=e[t];s&&s.length>1&&(A("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),s=()=>[]),s&&s._c&&(s._d=!1),T();const i=s&&Sc(s(n)),l=ie(xe,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Sc(e){return e.some(t=>Gn(t)?!(t.type===ct||t.type===xe&&!Sc(t.children)):!0)?e:null}const Hs=e=>e?Fc(e)?cs(e)||e.proxy:Hs(e.parent):null,Bn=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ar(e.props),$attrs:e=>ar(e.attrs),$slots:e=>ar(e.slots),$refs:e=>ar(e.refs),$parent:e=>Hs(e.parent),$root:e=>Hs(e.root),$emit:e=>e.emit,$options:e=>Oi(e),$forceUpdate:e=>e.f||(e.f=()=>ns(e.update)),$nextTick:e=>e.n||(e.n=Ot.bind(e.proxy)),$watch:e=>Tf.bind(e)}),Ci=e=>e==="_"||e==="$",_s=(e,t)=>e!==$e&&!e.__isScriptSetup&&pe(e,t),Ec={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:a}=e;if(t==="__isVue")return!0;let c;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(_s(r,t))return i[t]=1,r[t];if(o!==$e&&pe(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&pe(c,t))return i[t]=3,s[t];if(n!==$e&&pe(n,t))return i[t]=4,n[t];js&&(i[t]=0)}}const d=Bn[t];let u,f;if(d)return t==="$attrs"&&(gt(e,"get",t),Lo()),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==$e&&pe(n,t))return i[t]=4,n[t];if(f=a.config.globalProperties,pe(f,t))return f[t];ze&&(!Ie(t)||t.indexOf("__v")!==0)&&(o!==$e&&Ci(t[0])&&pe(o,t)?A(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===ze&&A(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return _s(o,t)?(o[t]=n,!0):o.__isScriptSetup&&pe(o,t)?(A(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):r!==$e&&pe(r,t)?(r[t]=n,!0):pe(e.props,t)?(A(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(A(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let l;return!!n[i]||e!==$e&&pe(e,i)||_s(t,i)||(l=s[0])&&pe(l,i)||pe(r,i)||pe(Bn,i)||pe(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Ec.ownKeys=e=>(A("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function jf(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Bn).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>Bn[n](e),set:at})}),t}function Bf(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(r=>{Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:at})})}function zf(e){const{ctx:t,setupState:n}=e;Object.keys(le(n)).forEach(r=>{if(!n.__isScriptSetup){if(Ci(r[0])){A(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:at})}})}function qf(){const e=Object.create(null);return(t,n)=>{e[n]?A(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let js=!0;function Vf(e){const t=Oi(e),n=e.proxy,r=e.ctx;js=!1,t.beforeCreate&&pl(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:l,provide:a,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:m,updated:g,activated:_,deactivated:y,beforeDestroy:S,beforeUnmount:x,destroyed:E,unmounted:C,render:B,renderTracked:F,renderTriggered:D,errorCaptured:J,serverPrefetch:re,expose:de,inheritAttrs:ge,components:Me,directives:Ve,filters:Ue}=t,Ee=qf();{const[z]=e.propsOptions;if(z)for(const Q in z)Ee("Props",Q)}if(c&&Uf(c,r,Ee,e.appContext.config.unwrapInjectedRef),i)for(const z in i){const Q=i[z];ne(Q)?(Object.defineProperty(r,z,{value:Q.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ee("Methods",z)):A(`Method "${z}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`)}if(o){ne(o)||A("The data option must be a function. Plain object usage is no longer supported.");const z=o.call(n,n);if(pi(z)&&A("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!be(z))A("data() should return an object.");else{e.data=Ge(z);for(const Q in z)Ee("Data",Q),Ci(Q[0])||Object.defineProperty(r,Q,{configurable:!0,enumerable:!0,get:()=>z[Q],set:at})}}if(js=!0,s)for(const z in s){const Q=s[z],ae=ne(Q)?Q.bind(n,n):ne(Q.get)?Q.get.bind(n,n):at;ae===at&&A(`Computed property "${z}" has no getter.`);const Te=!ne(Q)&&ne(Q.set)?Q.set.bind(n):()=>{A(`Write operation failed: computed property "${z}" is readonly.`)},ut=O({get:ae,set:Te});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Ye=>ut.value=Ye}),Ee("Computed",z)}if(l)for(const z in l)Tc(l[z],r,n,z);if(a){const z=ne(a)?a.call(n):a;Reflect.ownKeys(z).forEach(Q=>{ht(Q,z[Q])})}d&&pl(d,e,"c");function Ae(z,Q){X(Q)?Q.forEach(ae=>z(ae.bind(n))):Q&&z(Q.bind(n))}if(Ae(If,u),Ae(is,f),Ae(Af,m),Ae(wc,g),Ae($f,_),Ae(Cf,y),Ae(Lf,J),Ae(Nf,F),Ae(Mf,D),Ae(xc,x),Ae(ls,C),Ae(Rf,re),X(de))if(de.length){const z=e.exposed||(e.exposed={});de.forEach(Q=>{Object.defineProperty(z,Q,{get:()=>n[Q],set:ae=>n[Q]=ae})})}else e.exposed||(e.exposed={});B&&e.render===at&&(e.render=B),ge!=null&&(e.inheritAttrs=ge),Me&&(e.components=Me),Ve&&(e.directives=Ve)}function Uf(e,t,n=at,r=!1){X(e)&&(e=Bs(e));for(const o in e){const s=e[o];let i;be(s)?"default"in s?i=ee(s.from||o,s.default,!0):i=ee(s.from||o):i=ee(s),ye(i)?r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):(A(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[o]=i):t[o]=i,n("Inject",o)}}function pl(e,t,n){Ct(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tc(e,t,n,r){const o=r.includes(".")?vc(n,r):()=>n[r];if(Ie(e)){const s=t[e];ne(s)?Ne(o,s):A(`Invalid watch handler specified by key "${e}"`,s)}else if(ne(e))Ne(o,e.bind(n));else if(be(e))if(X(e))e.forEach(s=>Tc(s,t,n,r));else{const s=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(s)?Ne(o,s,e):A(`Invalid watch handler specified by key "${e.handler}"`,s)}else A(`Invalid watch option: "${r}"`,e)}function Oi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(c=>Do(a,c,i,!0)),Do(a,t,i)),be(t)&&s.set(t,a),a}function Do(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Do(e,s,n,!0),o&&o.forEach(i=>Do(e,i,n,!0));for(const i in t)if(r&&i==="expose")A('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=Kf[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Kf={data:hl,props:On,emits:On,methods:On,computed:On,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:On,directives:On,watch:Gf,provide:hl,inject:Wf};function hl(e,t){return t?e?function(){return Fe(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function Wf(e,t){return On(Bs(e),Bs(t))}function Bs(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function On(e,t){return e?Fe(Fe(Object.create(null),e),t):t}function Gf(e,t){if(!e)return t;if(!t)return e;const n=Fe(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Yf(e,t,n,r=!1){const o={},s={};Io(s,as,1),e.propsDefaults=Object.create(null),Pc(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);Cc(t||{},o,e),n?e.props=r?o:qd(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Jf(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Zf(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,l=le(o),[a]=e.propsOptions;let c=!1;if(!Jf(e)&&(r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(rs(e.emitsOptions,f))continue;const m=t[f];if(a)if(pe(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const g=Bt(f);o[g]=zs(a,l,g,m,e,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Pc(e,t,o,s)&&(c=!0);let d;for(const u in l)(!t||!pe(t,u)&&((d=tn(u))===u||!pe(t,d)))&&(a?n&&(n[u]!==void 0||n[d]!==void 0)&&(o[u]=zs(a,l,u,void 0,e,!0)):delete o[u]);if(s!==l)for(const u in s)(!t||!pe(t,u))&&(delete s[u],c=!0)}c&&nn(e,"set","$attrs"),Cc(t||{},o,e)}function Pc(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(xo(a))continue;const c=t[a];let d;o&&pe(o,d=Bt(a))?!s||!s.includes(d)?n[d]=c:(l||(l={}))[d]=c:rs(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,i=!0)}if(s){const a=le(n),c=l||$e;for(let d=0;d<s.length;d++){const u=s[d];n[u]=zs(o,a,u,c[u],e,!pe(c,u))}}return i}function zs(e,t,n,r,o,s){const i=e[n];if(i!=null){const l=pe(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&ne(a)){const{propsDefaults:c}=o;n in c?r=c[n]:(gr(o),r=c[n]=a.call(null,t),zn())}else r=a}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function $c(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},l=[];let a=!1;if(!ne(e)){const d=u=>{a=!0;const[f,m]=$c(u,t,!0);Fe(i,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!a)return be(e)&&r.set(e,ur),ur;if(X(s))for(let d=0;d<s.length;d++){Ie(s[d])||A("props must be strings when using array syntax.",s[d]);const u=Bt(s[d]);ml(u)&&(i[u]=$e)}else if(s){be(s)||A("invalid props options",s);for(const d in s){const u=Bt(d);if(ml(u)){const f=s[d],m=i[u]=X(f)||ne(f)?{type:f}:Object.assign({},f);if(m){const g=vl(Boolean,m.type),_=vl(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||pe(m,"default"))&&l.push(u)}}}}const c=[i,l];return be(e)&&r.set(e,c),c}function ml(e){return e[0]!=="$"?!0:(A(`Invalid prop name: "${e}" is a reserved property.`),!1)}function qs(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function gl(e,t){return qs(e)===qs(t)}function vl(e,t){return X(t)?t.findIndex(n=>gl(n,e)):ne(t)&&gl(t,e)?0:-1}function Cc(e,t,n){const r=le(t),o=n.propsOptions[0];for(const s in o){let i=o[s];i!=null&&Xf(s,r[s],i,!pe(e,s)&&!pe(e,tn(s)))}}function Xf(e,t,n,r){const{type:o,required:s,validator:i}=n;if(s&&r){A('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(o!=null&&o!==!0){let l=!1;const a=X(o)?o:[o],c=[];for(let d=0;d<a.length&&!l;d++){const{valid:u,expectedType:f}=ep(t,a[d]);c.push(f||""),l=u}if(!l){A(tp(e,t,c));return}}i&&!i(t)&&A('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Qf=Sn("String,Number,Boolean,Function,Symbol,BigInt");function ep(e,t){let n;const r=qs(t);if(Qf(r)){const o=typeof e;n=o===r.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else r==="Object"?n=be(e):r==="Array"?n=X(e):r==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:r}}function tp(e,t,n){let r=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Kn).join(" | ")}`;const o=n[0],s=hi(t),i=_l(t,o),l=_l(t,s);return n.length===1&&yl(o)&&!np(o,s)&&(r+=` with value ${i}`),r+=`, got ${s} `,yl(s)&&(r+=`with value ${l}.`),r}function _l(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function yl(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function np(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Oc=e=>e[0]==="_"||e==="$stable",Ii=e=>X(e)?e.map(Tt):[Tt(e)],rp=(e,t,n)=>{if(t._n)return t;const r=Se((...o)=>(je&&A(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ii(t(...o))),n);return r._c=!1,r},Ic=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Oc(o))continue;const s=e[o];if(ne(s))t[o]=rp(o,s,r);else if(s!=null){A(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const i=Ii(s);t[o]=()=>i}}},Ac=(e,t)=>{$i(e.vnode)||A("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ii(t);e.slots.default=()=>n},op=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),Io(t,"_",n)):Ic(t,e.slots={})}else e.slots={},t&&Ac(e,t);Io(e.slots,as,1)},sp=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=$e;if(r.shapeFlag&32){const l=t._;l?vn?Fe(o,t):n&&l===1?s=!1:(Fe(o,t),!n&&l===1&&delete o._):(s=!t.$stable,Ic(t,o)),i=t}else t&&(Ac(e,t),i={default:1});if(s)for(const l in o)!Oc(l)&&!(l in i)&&delete o[l]};function Rc(){return{app:null,config:{isNativeTag:La,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ip=0;function lp(e,t){return function(r,o=null){ne(r)||(r=Object.assign({},r)),o!=null&&!be(o)&&(A("root props passed to app.mount() must be an object."),o=null);const s=Rc(),i=new Set;let l=!1;const a=s.app={_uid:ip++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:kl,get config(){return s.config},set config(c){A("app.config cannot be replaced. Modify individual options instead.")},use(c,...d){return i.has(c)?A("Plugin has already been applied to target app."):c&&ne(c.install)?(i.add(c),c.install(a,...d)):ne(c)?(i.add(c),c(a,...d)):A('A plugin must either be a function or an object with an "install" function.'),a},mixin(c){return s.mixins.includes(c)?A("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):s.mixins.push(c),a},component(c,d){return Ks(c,s.config),d?(s.components[c]&&A(`Component "${c}" has already been registered in target app.`),s.components[c]=d,a):s.components[c]},directive(c,d){return kc(c),d?(s.directives[c]&&A(`Directive "${c}" has already been registered in target app.`),s.directives[c]=d,a):s.directives[c]},mount(c,d,u){if(l)A("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&A("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=G(r,o);return f.appContext=s,s.reload=()=>{e(on(f),c,u)},d&&t?t(f,c):e(f,c,u),l=!0,a._container=c,c.__vue_app__=a,a._instance=f.component,ff(a,kl),cs(f.component)||f.component.proxy}},unmount(){l?(e(null,a._container),a._instance=null,pf(a),delete a._container.__vue_app__):A("Cannot unmount an app that is not mounted.")},provide(c,d){return c in s.provides&&A(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),s.provides[c]=d,a}};return a}}function Vs(e,t,n,r,o=!1){if(X(e)){e.forEach((f,m)=>Vs(f,t&&(X(t)?t[m]:t),n,r,o));return}if(fr(r)&&!o)return;const s=r.shapeFlag&4?cs(r.component)||r.component.proxy:r.el,i=o?null:s,{i:l,r:a}=e;if(!l){A("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=t&&t.r,d=l.refs===$e?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(Ie(c)?(d[c]=null,pe(u,c)&&(u[c]=null)):ye(c)&&(c.value=null)),ne(a))Qt(a,l,12,[i,d]);else{const f=Ie(a),m=ye(a);if(f||m){const g=()=>{if(e.f){const _=f?pe(u,a)?u[a]:d[a]:a.value;o?X(_)&&fi(_,s):X(_)?_.includes(s)||_.push(s):f?(d[a]=[s],pe(u,a)&&(u[a]=d[a])):(a.value=[s],e.k&&(d[e.k]=a.value))}else f?(d[a]=i,pe(u,a)&&(u[a]=i)):m?(a.value=i,e.k&&(d[e.k]=i)):A("Invalid template ref type:",a,`(${typeof a})`)};i?(g.id=-1,Ke(g,n)):g()}else A("Invalid template ref type:",a,`(${typeof a})`)}}let xr,mn;function Wt(e,t){e.appContext.config.performance&&Fo()&&mn.mark(`vue-${t}-${e.uid}`),gf(e,t,Fo()?mn.now():Date.now())}function Gt(e,t){if(e.appContext.config.performance&&Fo()){const n=`vue-${t}-${e.uid}`,r=n+":end";mn.mark(r),mn.measure(`<${us(e,e.type)}> ${t}`,n,r),mn.clearMarks(n),mn.clearMarks(r)}vf(e,t,Fo()?mn.now():Date.now())}function Fo(){return xr!==void 0||(typeof window<"u"&&window.performance?(xr=!0,mn=window.performance):xr=!1),xr}function ap(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Ke=Ef;function cp(e){return up(e)}function up(e,t){ap();const n=Ha();n.__VUE__=!0,dc(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:o,patchProp:s,createElement:i,createText:l,createComment:a,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:m=at,insertStaticContent:g}=e,_=(h,v,w,$=null,P=null,M=null,H=!1,R=null,N=vn?!1:!!v.dynamicChildren)=>{if(h===v)return;h&&!kr(h,v)&&($=U(h),lt(h,P,M,!0),h=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:I,ref:W,shapeFlag:K}=v;switch(I){case co:y(h,v,w,$);break;case ct:S(h,v,w,$);break;case Dr:h==null?x(v,w,$,H):E(h,v,w,H);break;case xe:Ve(h,v,w,$,P,M,H,R,N);break;default:K&1?F(h,v,w,$,P,M,H,R,N):K&6?Ue(h,v,w,$,P,M,H,R,N):K&64||K&128?I.process(h,v,w,$,P,M,H,R,N,ve):A("Invalid VNode type:",I,`(${typeof I})`)}W!=null&&P&&Vs(W,h&&h.ref,M,v||h,!v)},y=(h,v,w,$)=>{if(h==null)r(v.el=l(v.children),w,$);else{const P=v.el=h.el;v.children!==h.children&&c(P,v.children)}},S=(h,v,w,$)=>{h==null?r(v.el=a(v.children||""),w,$):v.el=h.el},x=(h,v,w,$)=>{[h.el,h.anchor]=g(h.children,v,w,$,h.el,h.anchor)},E=(h,v,w,$)=>{if(v.children!==h.children){const P=f(h.anchor);B(h),[v.el,v.anchor]=g(v.children,w,P,$)}else v.el=h.el,v.anchor=h.anchor},C=({el:h,anchor:v},w,$)=>{let P;for(;h&&h!==v;)P=f(h),r(h,w,$),h=P;r(v,w,$)},B=({el:h,anchor:v})=>{let w;for(;h&&h!==v;)w=f(h),o(h),h=w;o(v)},F=(h,v,w,$,P,M,H,R,N)=>{H=H||v.type==="svg",h==null?D(v,w,$,P,M,H,R,N):de(h,v,P,M,H,R,N)},D=(h,v,w,$,P,M,H,R)=>{let N,I;const{type:W,props:K,shapeFlag:Z,transition:se,dirs:he}=h;if(N=h.el=i(h.type,M,K&&K.is,K),Z&8?d(N,h.children):Z&16&&re(h.children,N,null,$,P,M&&W!=="foreignObject",H,R),he&&Pn(h,null,$,"created"),K){for(const Pe in K)Pe!=="value"&&!xo(Pe)&&s(N,Pe,null,K[Pe],M,h.children,$,P,L);"value"in K&&s(N,"value",null,K.value),(I=K.onVnodeBeforeMount)&&bt(I,$,h)}J(N,h,h.scopeId,H,$),Object.defineProperty(N,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:$,enumerable:!1}),he&&Pn(h,null,$,"beforeMount");const Oe=(!P||P&&!P.pendingBranch)&&se&&!se.persisted;Oe&&se.beforeEnter(N),r(N,v,w),((I=K&&K.onVnodeMounted)||Oe||he)&&Ke(()=>{I&&bt(I,$,h),Oe&&se.enter(N),he&&Pn(h,null,$,"mounted")},P)},J=(h,v,w,$,P)=>{if(w&&m(h,w),$)for(let M=0;M<$.length;M++)m(h,$[M]);if(P){let M=P.subTree;if(M.patchFlag>0&&M.patchFlag&2048&&(M=mc(M.children)||M),v===M){const H=P.vnode;J(h,H,H.scopeId,H.slotScopeIds,P.parent)}}},re=(h,v,w,$,P,M,H,R,N=0)=>{for(let I=N;I<h.length;I++){const W=h[I]=R?fn(h[I]):Tt(h[I]);_(null,W,v,w,$,P,M,H,R)}},de=(h,v,w,$,P,M,H)=>{const R=v.el=h.el;let{patchFlag:N,dynamicChildren:I,dirs:W}=v;N|=h.patchFlag&16;const K=h.props||$e,Z=v.props||$e;let se;w&&$n(w,!1),(se=Z.onVnodeBeforeUpdate)&&bt(se,w,v,h),W&&Pn(v,h,w,"beforeUpdate"),w&&$n(w,!0),vn&&(N=0,H=!1,I=null);const he=P&&v.type!=="foreignObject";if(I?(ge(h.dynamicChildren,I,R,w,$,he,M),w&&w.type.__hmrId&&Lr(h,v)):H||ae(h,v,R,null,w,$,he,M,!1),N>0){if(N&16)Me(R,v,K,Z,w,$,P);else if(N&2&&K.class!==Z.class&&s(R,"class",null,Z.class,P),N&4&&s(R,"style",K.style,Z.style,P),N&8){const Oe=v.dynamicProps;for(let Pe=0;Pe<Oe.length;Pe++){const De=Oe[Pe],kt=K[De],tr=Z[De];(tr!==kt||De==="value")&&s(R,De,kt,tr,P,h.children,w,$,L)}}N&1&&h.children!==v.children&&d(R,v.children)}else!H&&I==null&&Me(R,v,K,Z,w,$,P);((se=Z.onVnodeUpdated)||W)&&Ke(()=>{se&&bt(se,w,v,h),W&&Pn(v,h,w,"updated")},$)},ge=(h,v,w,$,P,M,H)=>{for(let R=0;R<v.length;R++){const N=h[R],I=v[R],W=N.el&&(N.type===xe||!kr(N,I)||N.shapeFlag&70)?u(N.el):w;_(N,I,W,null,$,P,M,H,!0)}},Me=(h,v,w,$,P,M,H)=>{if(w!==$){if(w!==$e)for(const R in w)!xo(R)&&!(R in $)&&s(h,R,w[R],null,H,v.children,P,M,L);for(const R in $){if(xo(R))continue;const N=$[R],I=w[R];N!==I&&R!=="value"&&s(h,R,I,N,H,v.children,P,M,L)}"value"in $&&s(h,"value",w.value,$.value)}},Ve=(h,v,w,$,P,M,H,R,N)=>{const I=v.el=h?h.el:l(""),W=v.anchor=h?h.anchor:l("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:se}=v;(vn||K&2048)&&(K=0,N=!1,Z=null),se&&(R=R?R.concat(se):se),h==null?(r(I,w,$),r(W,w,$),re(v.children,w,W,P,M,H,R,N)):K>0&&K&64&&Z&&h.dynamicChildren?(ge(h.dynamicChildren,Z,w,P,M,H,R),P&&P.type.__hmrId?Lr(h,v):(v.key!=null||P&&v===P.subTree)&&Lr(h,v,!0)):ae(h,v,w,W,P,M,H,R,N)},Ue=(h,v,w,$,P,M,H,R,N)=>{v.slotScopeIds=R,h==null?v.shapeFlag&512?P.ctx.activate(v,w,$,H,N):Ee(v,w,$,P,M,H,N):Ae(h,v,N)},Ee=(h,v,w,$,P,M,H)=>{const R=h.component=wp(h,$,P);if(R.type.__hmrId&&af(R),ko(h),Wt(R,"mount"),$i(h)&&(R.ctx.renderer=ve),Wt(R,"init"),kp(R),Gt(R,"init"),R.asyncDep){if(P&&P.registerDep(R,z),!h.el){const N=R.subTree=G(ct);S(null,N,v,w)}return}z(R,h,v,w,P,M,H),So(),Gt(R,"mount")},Ae=(h,v,w)=>{const $=v.component=h.component;if(kf(h,v,w))if($.asyncDep&&!$.asyncResolved){ko(v),Q($,v,w),So();return}else $.next=v,sf($.update),$.update();else v.el=h.el,$.vnode=v},z=(h,v,w,$,P,M,H)=>{const R=()=>{if(h.isMounted){let{next:W,bu:K,u:Z,parent:se,vnode:he}=h,Oe=W,Pe;ko(W||h.vnode),$n(h,!1),W?(W.el=he.el,Q(h,W,H)):W=he,K&&hn(K),(Pe=W.props&&W.props.onVnodeBeforeUpdate)&&bt(Pe,se,W,he),$n(h,!0),Wt(h,"render");const De=ms(h);Gt(h,"render");const kt=h.subTree;h.subTree=De,Wt(h,"patch"),_(kt,De,u(kt.el),U(kt),h,P,M),Gt(h,"patch"),W.el=De.el,Oe===null&&Sf(h,De.el),Z&&Ke(Z,P),(Pe=W.props&&W.props.onVnodeUpdated)&&Ke(()=>bt(Pe,se,W,he),P),fc(h),So()}else{let W;const{el:K,props:Z}=v,{bm:se,m:he,parent:Oe}=h,Pe=fr(v);if($n(h,!1),se&&hn(se),!Pe&&(W=Z&&Z.onVnodeBeforeMount)&&bt(W,Oe,v),$n(h,!0),K&&te){const De=()=>{Wt(h,"render"),h.subTree=ms(h),Gt(h,"render"),Wt(h,"hydrate"),te(K,h.subTree,h,P,null),Gt(h,"hydrate")};Pe?v.type.__asyncLoader().then(()=>!h.isUnmounted&&De()):De()}else{Wt(h,"render");const De=h.subTree=ms(h);Gt(h,"render"),Wt(h,"patch"),_(null,De,w,$,h,P,M),Gt(h,"patch"),v.el=De.el}if(he&&Ke(he,P),!Pe&&(W=Z&&Z.onVnodeMounted)){const De=v;Ke(()=>bt(W,Oe,De),P)}(v.shapeFlag&256||Oe&&fr(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&h.a&&Ke(h.a,P),h.isMounted=!0,Ls(h),v=w=$=null}},N=h.effect=new vi(R,()=>ns(I),h.scope),I=h.update=()=>N.run();I.id=h.uid,$n(h,!0),N.onTrack=h.rtc?W=>hn(h.rtc,W):void 0,N.onTrigger=h.rtg?W=>hn(h.rtg,W):void 0,I.ownerInstance=h,I()},Q=(h,v,w)=>{v.component=h;const $=h.vnode.props;h.vnode=v,h.next=null,Zf(h,v.props,$,w),sp(h,v.children,w),Zn(),al(),Xn()},ae=(h,v,w,$,P,M,H,R,N=!1)=>{const I=h&&h.children,W=h?h.shapeFlag:0,K=v.children,{patchFlag:Z,shapeFlag:se}=v;if(Z>0){if(Z&128){ut(I,K,w,$,P,M,H,R,N);return}else if(Z&256){Te(I,K,w,$,P,M,H,R,N);return}}se&8?(W&16&&L(I,P,M),K!==I&&d(w,K)):W&16?se&16?ut(I,K,w,$,P,M,H,R,N):L(I,P,M,!0):(W&8&&d(w,""),se&16&&re(K,w,$,P,M,H,R,N))},Te=(h,v,w,$,P,M,H,R,N)=>{h=h||ur,v=v||ur;const I=h.length,W=v.length,K=Math.min(I,W);let Z;for(Z=0;Z<K;Z++){const se=v[Z]=N?fn(v[Z]):Tt(v[Z]);_(h[Z],se,w,null,P,M,H,R,N)}I>W?L(h,P,M,!0,!1,K):re(v,w,$,P,M,H,R,N,K)},ut=(h,v,w,$,P,M,H,R,N)=>{let I=0;const W=v.length;let K=h.length-1,Z=W-1;for(;I<=K&&I<=Z;){const se=h[I],he=v[I]=N?fn(v[I]):Tt(v[I]);if(kr(se,he))_(se,he,w,null,P,M,H,R,N);else break;I++}for(;I<=K&&I<=Z;){const se=h[K],he=v[Z]=N?fn(v[Z]):Tt(v[Z]);if(kr(se,he))_(se,he,w,null,P,M,H,R,N);else break;K--,Z--}if(I>K){if(I<=Z){const se=Z+1,he=se<W?v[se].el:$;for(;I<=Z;)_(null,v[I]=N?fn(v[I]):Tt(v[I]),w,he,P,M,H,R,N),I++}}else if(I>Z)for(;I<=K;)lt(h[I],P,M,!0),I++;else{const se=I,he=I,Oe=new Map;for(I=he;I<=Z;I++){const et=v[I]=N?fn(v[I]):Tt(v[I]);et.key!=null&&(Oe.has(et.key)&&A("Duplicate keys found during update:",JSON.stringify(et.key),"Make sure keys are unique."),Oe.set(et.key,I))}let Pe,De=0;const kt=Z-he+1;let tr=!1,Ji=0;const wr=new Array(kt);for(I=0;I<kt;I++)wr[I]=0;for(I=se;I<=K;I++){const et=h[I];if(De>=kt){lt(et,P,M,!0);continue}let Mt;if(et.key!=null)Mt=Oe.get(et.key);else for(Pe=he;Pe<=Z;Pe++)if(wr[Pe-he]===0&&kr(et,v[Pe])){Mt=Pe;break}Mt===void 0?lt(et,P,M,!0):(wr[Mt-he]=I+1,Mt>=Ji?Ji=Mt:tr=!0,_(et,v[Mt],w,null,P,M,H,R,N),De++)}const Zi=tr?dp(wr):ur;for(Pe=Zi.length-1,I=kt-1;I>=0;I--){const et=he+I,Mt=v[et],Xi=et+1<W?v[et+1].el:$;wr[I]===0?_(null,Mt,w,Xi,P,M,H,R,N):tr&&(Pe<0||I!==Zi[Pe]?Ye(Mt,w,Xi,2):Pe--)}}},Ye=(h,v,w,$,P=null)=>{const{el:M,type:H,transition:R,children:N,shapeFlag:I}=h;if(I&6){Ye(h.component.subTree,v,w,$);return}if(I&128){h.suspense.move(v,w,$);return}if(I&64){H.move(h,v,w,ve);return}if(H===xe){r(M,v,w);for(let K=0;K<N.length;K++)Ye(N[K],v,w,$);r(h.anchor,v,w);return}if(H===Dr){C(h,v,w);return}if($!==2&&I&1&&R)if($===0)R.beforeEnter(M),r(M,v,w),Ke(()=>R.enter(M),P);else{const{leave:K,delayLeave:Z,afterLeave:se}=R,he=()=>r(M,v,w),Oe=()=>{K(M,()=>{he(),se&&se()})};Z?Z(M,he,Oe):Oe()}else r(M,v,w)},lt=(h,v,w,$=!1,P=!1)=>{const{type:M,props:H,ref:R,children:N,dynamicChildren:I,shapeFlag:W,patchFlag:K,dirs:Z}=h;if(R!=null&&Vs(R,null,w,h,!0),W&256){v.ctx.deactivate(h);return}const se=W&1&&Z,he=!fr(h);let Oe;if(he&&(Oe=H&&H.onVnodeBeforeUnmount)&&bt(Oe,v,h),W&6)q(h.component,w,$);else{if(W&128){h.suspense.unmount(w,$);return}se&&Pn(h,null,v,"beforeUnmount"),W&64?h.type.remove(h,v,w,P,ve,$):I&&(M!==xe||K>0&&K&64)?L(I,v,w,!1,!0):(M===xe&&K&384||!P&&W&16)&&L(N,v,w),$&&an(h)}(he&&(Oe=H&&H.onVnodeUnmounted)||se)&&Ke(()=>{Oe&&bt(Oe,v,h),se&&Pn(h,null,v,"unmounted")},w)},an=h=>{const{type:v,el:w,anchor:$,transition:P}=h;if(v===xe){h.patchFlag>0&&h.patchFlag&2048&&P&&!P.persisted?h.children.forEach(H=>{H.type===ct?o(H.el):an(H)}):k(w,$);return}if(v===Dr){B(h);return}const M=()=>{o(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(h.shapeFlag&1&&P&&!P.persisted){const{leave:H,delayLeave:R}=P,N=()=>H(w,M);R?R(h.el,M,N):N()}else M()},k=(h,v)=>{let w;for(;h!==v;)w=f(h),o(h),h=w;o(v)},q=(h,v,w)=>{h.type.__hmrId&&cf(h);const{bum:$,scope:P,update:M,subTree:H,um:R}=h;$&&hn($),P.stop(),M&&(M.active=!1,lt(H,h,v,w)),R&&Ke(R,v),Ke(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),mf(h)},L=(h,v,w,$=!1,P=!1,M=0)=>{for(let H=M;H<h.length;H++)lt(h[H],v,w,$,P)},U=h=>h.shapeFlag&6?U(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),fe=(h,v,w)=>{h==null?v._vnode&&lt(v._vnode,null,null,!0):_(v._vnode||null,h,v,null,null,null,w),al(),ac(),v._vnode=h},ve={p:_,um:lt,m:Ye,r:an,mt:Ee,mc:re,pc:ae,pbc:ge,n:U,o:e};let oe,te;return t&&([oe,te]=t(ve)),{render:fe,hydrate:oe,createApp:lp(fe,oe)}}function $n({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lr(e,t,n=!1){const r=e.children,o=t.children;if(X(r)&&X(o))for(let s=0;s<r.length;s++){const i=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=fn(o[s]),l.el=i.el),n||Lr(i,l)),l.type===co&&(l.el=i.el),l.type===ct&&!l.el&&(l.el=i.el)}}function dp(e){const t=e.slice(),n=[0];let r,o,s,i,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const fp=e=>e.__isTeleport,hr=e=>e&&(e.disabled||e.disabled===""),bl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Us=(e,t)=>{const n=e&&e.to;if(Ie(n))if(t){const r=t(n);return r||A(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return A("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!hr(e)&&A(`Invalid Teleport target: ${n}`),n},pp={__isTeleport:!0,process(e,t,n,r,o,s,i,l,a,c){const{mc:d,pc:u,pbc:f,o:{insert:m,querySelector:g,createText:_,createComment:y}}=c,S=hr(t.props);let{shapeFlag:x,children:E,dynamicChildren:C}=t;if(vn&&(a=!1,C=null),e==null){const B=t.el=y("teleport start"),F=t.anchor=y("teleport end");m(B,n,r),m(F,n,r);const D=t.target=Us(t.props,g),J=t.targetAnchor=_("");D?(m(J,D),i=i||bl(D)):S||A("Invalid Teleport target on mount:",D,`(${typeof D})`);const re=(de,ge)=>{x&16&&d(E,de,ge,o,s,i,l,a)};S?re(n,F):D&&re(D,J)}else{t.el=e.el;const B=t.anchor=e.anchor,F=t.target=e.target,D=t.targetAnchor=e.targetAnchor,J=hr(e.props),re=J?n:F,de=J?B:D;if(i=i||bl(F),C?(f(e.dynamicChildren,C,re,o,s,i,l),Lr(e,t,!0)):a||u(e,t,re,de,o,s,i,l,!1),S)J||yo(t,n,B,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=Us(t.props,g);ge?yo(t,ge,null,c,0):A("Invalid Teleport target on update:",F,`(${typeof F})`)}else J&&yo(t,F,D,c,1)}Mc(t)},remove(e,t,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:l,children:a,anchor:c,targetAnchor:d,target:u,props:f}=e;if(u&&s(d),(i||!hr(f))&&(s(c),l&16))for(let m=0;m<a.length;m++){const g=a[m];o(g,t,n,!0,!!g.dynamicChildren)}},move:yo,hydrate:hp};function yo(e,t,n,{o:{insert:r},m:o},s=2){s===0&&r(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:c,props:d}=e,u=s===2;if(u&&r(i,t,n),(!u||hr(d))&&a&16)for(let f=0;f<c.length;f++)o(c[f],t,n,2);u&&r(l,t,n)}function hp(e,t,n,r,o,s,{o:{nextSibling:i,parentNode:l,querySelector:a}},c){const d=t.target=Us(t.props,a);if(d){const u=d._lpa||d.firstChild;if(t.shapeFlag&16)if(hr(t.props))t.anchor=c(i(e),t,l(e),n,r,o,s),t.targetAnchor=u;else{t.anchor=i(e);let f=u;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}c(u,t,d,n,r,o,s)}Mc(t)}return t.anchor&&i(t.anchor)}const jx=pp;function Mc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const xe=Symbol("Fragment"),co=Symbol("Text"),ct=Symbol("Comment"),Dr=Symbol("Static"),Fr=[];let $t=null;function T(e=!1){Fr.push($t=e?null:[])}function mp(){Fr.pop(),$t=Fr[Fr.length-1]||null}let Yr=1;function wl(e){Yr+=e}function Nc(e){return e.dynamicChildren=Yr>0?$t||ur:null,mp(),Yr>0&&$t&&$t.push(e),e}function V(e,t,n,r,o,s){return Nc(p(e,t,n,r,o,s,!0))}function ie(e,t,n,r,o){return Nc(G(e,t,n,r,o,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function kr(e,t){return t.shapeFlag&6&&ir.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const gp=(...e)=>vp(...e),as="__vInternal",Lc=({key:e})=>e??null,Eo=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||ye(e)||ne(e)?{i:ze,r:e,k:t,f:!!n}:e:null;function p(e,t=null,n=null,r=0,o=null,s=e===xe?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lc(t),ref:t&&Eo(t),scopeId:os,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ze};return l?(Ai(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=Ie(n)?8:16),a.key!==a.key&&A("VNode created with invalid key (NaN). VNode type:",a.type),Yr>0&&!i&&$t&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&$t.push(a),a}const G=gp;function vp(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Ff)&&(e||A(`Invalid vnode type when creating vnode: ${e}.`),e=ct),Gn(e)){const l=on(e,t,!0);return n&&Ai(l,n),Yr>0&&!s&&$t&&(l.shapeFlag&6?$t[$t.indexOf(e)]=l:$t.push(l)),l.patchFlag|=-2,l}if(Bc(e)&&(e=e.__vccOpts),t){t=Qe(t);let{class:l,style:a}=t;l&&!Ie(l)&&(t.class=Le(l)),be(a)&&(Mo(a)&&!X(a)&&(a=Fe({},a)),t.style=We(a))}const i=Ie(e)?1:gc(e)?128:fp(e)?64:be(e)?4:ne(e)?2:0;return i&4&&Mo(e)&&(e=le(e),A("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),p(e,t,n,r,o,i,s,!0)}function Qe(e){return e?Mo(e)||as in e?Fe({},e):e:null}function on(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,l=t?Jr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Lc(l),ref:t&&t.ref?n&&o?X(o)?o.concat(Eo(t)):[o,Eo(t)]:Eo(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s===-1&&X(i)?i.map(Dc):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Dc(e){const t=on(e);return X(e.children)&&(t.children=e.children.map(Dc)),t}function j(e=" ",t=0){return G(co,null,e,t)}function _p(e,t){const n=G(Dr,null,e);return n.staticCount=t,n}function me(e="",t=!1){return t?(T(),ie(ct,null,e)):G(ct,null,e)}function Tt(e){return e==null||typeof e=="boolean"?G(ct):X(e)?G(xe,null,e.slice()):typeof e=="object"?fn(e):G(co,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function Ai(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ai(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(as in t)?t._ctx=ze:o===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),r&64?(n=16,t=[j(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Le([t.class,r.class]));else if(o==="style")t.style=We([t.style,r.style]);else if(so(o)){const s=t[o],i=r[o];i&&s!==i&&!(X(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function bt(e,t,n,r=null){Ct(e,t,7,[n,r])}const yp=Rc();let bp=0;function wp(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||yp,s={uid:bp++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ja(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(r,o),emitsOptions:hc(r,o),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx=jf(s),s.root=t?t.root:s,s.emit=yf.bind(null,s),e.ce&&e.ce(s),s}let je=null;const En=()=>je||ze,gr=e=>{je=e,e.scope.on()},zn=()=>{je&&je.scope.off(),je=null},xp=Sn("slot,component");function Ks(e,t){const n=t.isNativeTag||La;(xp(e)||n(e))&&A("Do not use built-in or reserved HTML elements as component id: "+e)}function Fc(e){return e.vnode.shapeFlag&4}let Zr=!1;function kp(e,t=!1){Zr=t;const{props:n,children:r}=e.vnode,o=Fc(e);Yf(e,n,o,t),op(e,r);const s=o?Sp(e,t):void 0;return Zr=!1,s}function Sp(e,t){var n;const r=e.type;{if(r.name&&Ks(r.name,e.appContext.config),r.components){const s=Object.keys(r.components);for(let i=0;i<s.length;i++)Ks(s[i],e.appContext.config)}if(r.directives){const s=Object.keys(r.directives);for(let i=0;i<s.length;i++)kc(s[i])}r.compilerOptions&&Ep()&&A('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=yi(new Proxy(e.ctx,Ec)),Bf(e);const{setup:o}=r;if(o){const s=e.setupContext=o.length>1?jc(e):null;gr(e),Zn();const i=Qt(o,e,0,[ar(e.props),s]);if(Xn(),zn(),pi(i)){if(i.then(zn,zn),t)return i.then(l=>{xl(e,l,t)}).catch(l=>{ts(l,e,0)});if(e.asyncDep=i,!e.suspense){const l=(n=r.name)!==null&&n!==void 0?n:"Anonymous";A(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xl(e,i,t)}else Hc(e,t)}function xl(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)?(Gn(t)&&A("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=tc(t),zf(e)):t!==void 0&&A(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Hc(e,n)}let Ws;const Ep=()=>!Ws;function Hc(e,t,n){const r=e.type;if(!e.render){if(!t&&Ws&&!r.render){const o=r.template||Oi(e).template;if(o){Wt(e,"compile");const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,c=Fe(Fe({isCustomElement:s,delimiters:l},i),a);r.render=Ws(o,c),Gt(e,"compile")}}e.render=r.render||at}gr(e),Zn(),Vf(e),Xn(),zn(),!r.render&&e.render===at&&!t&&(r.template?A('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):A("Component is missing template or render function."))}function Tp(e){return new Proxy(e.attrs,{get(t,n){return Lo(),gt(e,"get","$attrs"),t[n]},set(){return A("setupContext.attrs is readonly."),!1},deleteProperty(){return A("setupContext.attrs is readonly."),!1}})}function jc(e){const t=r=>{e.exposed&&A("expose() should be called only once per setup()."),e.exposed=r||{}};let n;return Object.freeze({get attrs(){return n||(n=Tp(e))},get slots(){return ar(e.slots)},get emit(){return(r,...o)=>e.emit(r,...o)},expose:t})}function cs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tc(yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}}))}const Pp=/(?:^|[-_])(\w)/g,$p=e=>e.replace(Pp,t=>t.toUpperCase()).replace(/[-_]/g,"");function Xr(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function us(e,t,n=!1){let r=Xr(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=s=>{for(const i in s)if(s[i]===t)return i};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?$p(r):n?"App":"Anonymous"}function Bc(e){return ne(e)&&"__vccOpts"in e}const O=(e,t)=>Zd(e,t,Zr);function Bx(){return Cp().slots}function Cp(){const e=En();return e||A("useContext() called without active instance."),e.setupContext||(e.setupContext=jc(e))}function ds(e,t,n){const r=arguments.length;return r===2?be(t)&&!X(t)?Gn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gn(n)&&(n=[n]),G(e,t,n))}const Op=Symbol("ssrContext"),Ip=()=>{{const e=ee(Op);return e||A("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function ys(e){return!!(e&&e.__v_isShallow)}function Ap(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(u){return be(u)?u.__isVue?["div",e,"VueInstance"]:ye(u)?["div",{},["span",e,d(u)],"<",l(u.value),">"]:Hn(u)?["div",{},["span",e,ys(u)?"ShallowReactive":"Reactive"],"<",l(u),`>${xn(u)?" (readonly)":""}`]:xn(u)?["div",{},["span",e,ys(u)?"ShallowReadonly":"Readonly"],"<",l(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...s(u.$)]}};function s(u){const f=[];u.type.props&&u.props&&f.push(i("props",le(u.props))),u.setupState!==$e&&f.push(i("setup",u.setupState)),u.data!==$e&&f.push(i("data",le(u.data)));const m=a(u,"computed");m&&f.push(i("computed",m));const g=a(u,"inject");return g&&f.push(i("injected",g)),f.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),f}function i(u,f){return f=Fe({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",r,m+": "],l(f[m],!1)])]]:["span",{}]}function l(u,f=!0){return typeof u=="number"?["span",t,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",r,u]:be(u)?["object",{object:f?le(u):u}]:["span",n,String(u)]}function a(u,f){const m=u.type;if(ne(m))return;const g={};for(const _ in u.ctx)c(m,_,f)&&(g[_]=u.ctx[_]);return g}function c(u,f,m){const g=u[m];if(X(g)&&g.includes(f)||be(g)&&f in g||u.extends&&c(u.extends,f,m)||u.mixins&&u.mixins.some(_=>c(_,f,m)))return!0}function d(u){return ys(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const kl="3.2.45",Rp="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,Sl=In&&In.createElement("template"),Mp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?In.createElementNS(Rp,e):In.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>In.createTextNode(e),createComment:e=>In.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>In.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Sl.innerHTML=r?`<svg>${e}</svg>`:e;const l=Sl.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Np(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lp(e,t,n){const r=e.style,o=Ie(n);if(n&&!o){for(const s in n)Gs(r,s,n[s]);if(t&&!Ie(t))for(const s in t)n[s]==null&&Gs(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Dp=/[^\\];\s*$/,El=/\s*!important$/;function Gs(e,t,n){if(X(n))n.forEach(r=>Gs(e,t,r));else if(n==null&&(n=""),Dp.test(n)&&A(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const r=Fp(e,t);El.test(n)?e.setProperty(tn(r),n.replace(El,""),"important"):e[r]=n}}const Tl=["Webkit","Moz","ms"],bs={};function Fp(e,t){const n=bs[t];if(n)return n;let r=Bt(t);if(r!=="filter"&&r in e)return bs[t]=r;r=Kn(r);for(let o=0;o<Tl.length;o++){const s=Tl[o]+r;if(s in e)return bs[t]=s}return t}const Pl="http://www.w3.org/1999/xlink";function Hp(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pl,t.slice(6,t.length)):e.setAttributeNS(Pl,t,n);else{const s=id(t);n==null||s&&!Ma(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function jp(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n??"";(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ma(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch(a){l||A(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,a)}l&&e.removeAttribute(t)}function An(e,t,n,r){e.addEventListener(t,n,r)}function Bp(e,t,n,r){e.removeEventListener(t,n,r)}function zp(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[l,a]=qp(t);if(r){const c=s[t]=Kp(r,o);An(e,l,c,a)}else i&&(Bp(e,l,i,a),s[t]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function qp(e){let t;if($l.test(e)){t={};let r;for(;r=e.match($l);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let ws=0;const Vp=Promise.resolve(),Up=()=>ws||(Vp.then(()=>ws=0),ws=Date.now());function Kp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(Wp(r,n.value),t,5,[r])};return n.value=e,n.attached=Up(),n}function Wp(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Cl=/^on[a-z]/,Gp=(e,t,n,r,o=!1,s,i,l,a)=>{t==="class"?Np(e,r,o):t==="style"?Lp(e,n,r):so(t)?Oo(t)||zp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yp(e,t,r,o))?jp(e,t,r,s,i,l,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hp(e,t,r,o))};function Yp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Cl.test(t)&&ne(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Cl.test(t)&&Ie(n)?!1:t in e}const Ho=e=>{const t=e.props["onUpdate:modelValue"]||!1;return X(t)?n=>hn(t,n):t};function Jp(e){e.target.composing=!0}function Ol(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ys={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=Ho(o);const s=r||o.props&&o.props.type==="number";An(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=Ur(l)),e._assign(l)}),n&&An(e,"change",()=>{e.value=e.value.trim()}),t||(An(e,"compositionstart",Jp),An(e,"compositionend",Ol),An(e,"change",Ol))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e._assign=Ho(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&Ur(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},Zp={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const o=Yo(t);An(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?Ur(jo(i)):jo(i));e._assign(e.multiple?o?new Set(s):s:s[0])}),e._assign=Ho(r)},mounted(e,{value:t}){Il(e,t)},beforeUpdate(e,t,n){e._assign=Ho(n)},updated(e,{value:t}){Il(e,t)}};function Il(e,t){const n=e.multiple;if(n&&!X(t)&&!Yo(t)){A(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8,-1)}.`);return}for(let r=0,o=e.options.length;r<o;r++){const s=e.options[r],i=jo(s);if(n)X(t)?s.selected=ad(t,i)>-1:s.selected=t.has(i);else if(Go(jo(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}function jo(e){return"_value"in e?e._value:e.value}const Xp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Al=(e,t)=>n=>{if(!("key"in n))return;const r=tn(n.key);if(t.some(o=>o===r||Xp[o]===r))return e(n)},zc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Sr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Sr(e,!0),r.enter(e)):r.leave(e,()=>{Sr(e,!1)}):Sr(e,t))},beforeUnmount(e,{value:t}){Sr(e,t)}};function Sr(e,t){e.style.display=t?e._vod:"none"}const Qp=Fe({patchProp:Gp},Mp);let Rl;function eh(){return Rl||(Rl=cp(Qp))}const zx=(...e)=>{const t=eh().createApp(...e);th(t),nh(t);const{mount:n}=t;return t.mount=r=>{const o=rh(r);if(!o)return;const s=t._component;!ne(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function th(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>rd(t)||od(t),writable:!1})}function nh(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){A("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return A(r),n},set(){A(r)}})}}function rh(e){if(Ie(e)){const t=document.querySelector(e);return t||A(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&A('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function oh(){Ap()}oh();const qc=Symbol("v-click-clicks"),Vc=Symbol("v-click-clicks-elements"),sh=Symbol("v-click-clicks-order-map"),Uc=Symbol("v-click-clicks-disabled"),Kc=Symbol("slidev-slide-scale"),ce=Symbol("slidev-slidev-context"),ih=Symbol("slidev-route"),lh=Symbol("slidev-slide-context"),ah="slidev-vclick-target",qx="slidev-vclick-hidden",Vx="slidev-vclick-fade",Ux="slidev-vclick-hidden-explicitly",Kx="slidev-vclick-current",Wx="slidev-vclick-prior";function ch(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function uh(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;const o=[];let s=t;for(;s<n;)o.push(s),s+=r||1;return o}function dh(e){return e!=null}function fh(e,t){return Object.fromEntries(Object.entries(e).map(([n,r])=>t(n,r)).filter(dh))}const Mr={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0},Ce=Mr,_n=Ce.aspectRatio??16/9,yn=Ce.canvasWidth??980,Ri=Math.ceil(yn/_n),Mi=O(()=>fh(Ce.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function xt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Qn=Ge({page:0,clicks:0});let ph=[],hh=[];xt(Qn,"$syncUp",!0);xt(Qn,"$syncDown",!0);xt(Qn,"$paused",!1);xt(Qn,"$onSet",e=>ph.push(e));xt(Qn,"$onPatch",e=>hh.push(e));xt(Qn,"$patch",async()=>!1);function Wc(e,t,n=!1){const r=[];let o=!1,s=!1,i,l;const a=Ge(t);function c(m){r.push(m)}function d(m,g){clearTimeout(i),o=!0,a[m]=g,i=setTimeout(()=>o=!1,0)}function u(m){o||(clearTimeout(l),s=!0,Object.entries(m).forEach(([g,_])=>{a[g]=_}),l=setTimeout(()=>s=!1,0))}function f(m){let g;n?n&&window.addEventListener("storage",y=>{y&&y.key===m&&y.newValue&&u(JSON.parse(y.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",y=>u(y.data)));function _(){!n&&g&&!s?g.postMessage(le(a)):n&&!s&&window.localStorage.setItem(m,JSON.stringify(a)),o||r.forEach(y=>y(a))}if(Ne(a,_,{deep:!0}),n){const y=window.localStorage.getItem(m);y&&u(JSON.parse(y))}}return{init:f,onPatch:c,patch:d,state:a}}const{init:Gx,onPatch:Yx,patch:Jx,state:xs}=Wc(Qn,{page:1,clicks:0}),er=Ge({});let mh=[],gh=[];xt(er,"$syncUp",!0);xt(er,"$syncDown",!0);xt(er,"$paused",!1);xt(er,"$onSet",e=>mh.push(e));xt(er,"$onPatch",e=>gh.push(e));xt(er,"$patch",async()=>!1);const{init:Zx,onPatch:vh,patch:Gc,state:Bo}=Wc(er,{},!1),_h="modulepreload",yh=function(e){return"/bookstore-api/"+e},Ml={},Yn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=yh(s),s in Ml)return;Ml[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const u=o[d];if(u.href===s&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":_h,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};var Nl;const It=typeof window<"u",bh=e=>typeof e<"u",wh=Object.prototype.toString,Qr=e=>typeof e=="function",Xx=e=>typeof e=="number",Yc=e=>typeof e=="string",Qx=e=>wh.call(e)==="[object Object]",Js=()=>+Date.now(),Hr=()=>{};It&&((Nl=window==null?void 0:window.navigator)!=null&&Nl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ot(e){return typeof e=="function"?e():b(e)}function xh(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}const Jc=e=>e();function kh(e=Jc){const t=Y(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...s)=>{t.value&&e(...s)}}}function Sh(e){return e}function Eh(e,t){var n;if(typeof e=="number")return e+t;const r=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(r.length),s=parseFloat(r)+t;return Number.isNaN(s)?e:s+o}function Th(e,t){let n,r,o;const s=Y(!0),i=()=>{s.value=!0,o()};Ne(e,i,{flush:"sync"});const l=Qr(t)?t:t.get,a=Qr(t)?void 0:t.set,c=nc((d,u)=>(r=d,o=u,{get(){return s.value&&(n=l(),s.value=!1),r(),n},set(f){a==null||a(f)}}));return Object.isExtensible(c)&&(c.trigger=i),c}function qt(e){return md()?(gd(e),!0):!1}function Ph(e){if(!ye(e))return Ge(e);const t=new Proxy({},{get(n,r,o){return b(Reflect.get(e.value,r,o))},set(n,r,o){return ye(e.value[r])&&!ye(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(n,r){return Reflect.deleteProperty(e.value,r)},has(n,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ge(t)}function Zc(e){return typeof e=="function"?O(e):Y(e)}var $h=Object.defineProperty,Ch=Object.defineProperties,Oh=Object.getOwnPropertyDescriptors,Ll=Object.getOwnPropertySymbols,Ih=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable,Dl=(e,t,n)=>t in e?$h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rh=(e,t)=>{for(var n in t||(t={}))Ih.call(t,n)&&Dl(e,n,t[n]);if(Ll)for(var n of Ll(t))Ah.call(t,n)&&Dl(e,n,t[n]);return e},Mh=(e,t)=>Ch(e,Oh(t));function Nh(e){if(!ye(e))return Wd(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=nc(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[n]=r,e.value=o}else{const o=Mh(Rh({},e.value),{[n]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Ni(e,t=!0){En()?is(e):t?e():Ot(e)}function ek(e){En()&&ls(e)}function Lh(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let s=null;const i=Y(!1);function l(){s&&(clearInterval(s),s=null)}function a(){i.value=!1,l()}function c(){b(t)<=0||(i.value=!0,o&&e(),l(),s=setInterval(e,ot(t)))}if(r&&It&&c(),ye(t)||Qr(t)){const d=Ne(t,()=>{i.value&&It&&c()});qt(d)}return qt(a),{isActive:i,pause:a,resume:c}}function Dh(e,t,n={}){const{immediate:r=!0}=n,o=Y(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function l(){o.value=!1,i()}function a(...c){i(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...c)},ot(t))}return r&&(o.value=!0,It&&a()),qt(l),{isPending:o,start:a,stop:l}}function Xc(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=ye(e),s=Y(e);function i(l){if(arguments.length)return s.value=l,s.value;{const a=ot(n);return s.value=s.value===a?ot(r):a,s.value}}return o?i:[s,i]}var Fl=Object.getOwnPropertySymbols,Fh=Object.prototype.hasOwnProperty,Hh=Object.prototype.propertyIsEnumerable,jh=(e,t)=>{var n={};for(var r in e)Fh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Fl)for(var r of Fl(e))t.indexOf(r)<0&&Hh.call(e,r)&&(n[r]=e[r]);return n};function Bh(e,t,n={}){const r=n,{eventFilter:o=Jc}=r,s=jh(r,["eventFilter"]);return Ne(e,xh(o,t),s)}var zh=Object.defineProperty,qh=Object.defineProperties,Vh=Object.getOwnPropertyDescriptors,zo=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,Hl=(e,t,n)=>t in e?zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uh=(e,t)=>{for(var n in t||(t={}))Qc.call(t,n)&&Hl(e,n,t[n]);if(zo)for(var n of zo(t))eu.call(t,n)&&Hl(e,n,t[n]);return e},Kh=(e,t)=>qh(e,Vh(t)),Wh=(e,t)=>{var n={};for(var r in e)Qc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&zo)for(var r of zo(e))t.indexOf(r)<0&&eu.call(e,r)&&(n[r]=e[r]);return n};function Gh(e,t,n={}){const r=n,{eventFilter:o}=r,s=Wh(r,["eventFilter"]),{eventFilter:i,pause:l,resume:a,isActive:c}=kh(o);return{stop:Bh(e,t,Kh(Uh({},s),{eventFilter:i})),pause:l,resume:a,isActive:c}}function Ft(e){var t;const n=ot(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=It?window:void 0,tu=It?window.document:void 0,Yh=It?window.navigator:void 0;function ke(...e){let t,n,r,o;if(Yc(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=Xe):[t,n,r,o]=e,!t)return Hr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(d=>d()),s.length=0},l=(d,u,f)=>(d.addEventListener(u,f,o),()=>d.removeEventListener(u,f,o)),a=Ne(()=>Ft(t),d=>{i(),d&&s.push(...n.flatMap(u=>r.map(f=>l(d,u,f))))},{immediate:!0,flush:"post"}),c=()=>{a(),i()};return qt(c),c}function Jh(e,t,n={}){const{window:r=Xe,ignore:o=[],capture:s=!0,detectIframe:i=!1}=n;if(!r)return;let l=!0,a;const c=m=>o.some(g=>{if(typeof g=="string")return Array.from(r.document.querySelectorAll(g)).some(_=>_===m.target||m.composedPath().includes(_));{const _=Ft(g);return _&&(m.target===_||m.composedPath().includes(_))}}),d=m=>{r.clearTimeout(a);const g=Ft(e);if(!(!g||g===m.target||m.composedPath().includes(g))){if(m.detail===0&&(l=!c(m)),!l){l=!0;return}t(m)}},u=[ke(r,"click",d,{passive:!0,capture:s}),ke(r,"pointerdown",m=>{const g=Ft(e);g&&(l=!m.composedPath().includes(g)&&!c(m))},{passive:!0}),ke(r,"pointerup",m=>{if(m.button===0){const g=m.composedPath();m.composedPath=()=>g,a=r.setTimeout(()=>d(m),50)}},{passive:!0}),i&&ke(r,"blur",m=>{var g;const _=Ft(e);((g=r.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(_!=null&&_.contains(r.document.activeElement))&&t(m)})].filter(Boolean);return()=>u.forEach(m=>m())}const Zh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function Xh(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=Xe,eventName:s="keydown",passive:i=!1}=r,l=Zh(t);return ke(o,s,c=>{l(c)&&n(c)},i)}function Qh(e={}){var t;const{window:n=Xe}=e,r=(t=e.document)!=null?t:n==null?void 0:n.document,o=Th(()=>null,()=>r==null?void 0:r.activeElement);return n&&(ke(n,"blur",s=>{s.relatedTarget===null&&o.trigger()},!0),ke(n,"focus",o.trigger,!0)),o}function uo(e,t=!1){const n=Y(),r=()=>n.value=Boolean(e());return r(),Ni(r,t),n}function lr(e,t={}){const{window:n=Xe}=t,r=uo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=Y(!1),i=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{r.value&&(i(),o=n.matchMedia(Zc(e).value),s.value=o.matches,"addEventListener"in o?o.addEventListener("change",l):o.addListener(l))};return yr(l),qt(()=>i()),s}const em={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var tm=Object.defineProperty,jl=Object.getOwnPropertySymbols,nm=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,Bl=(e,t,n)=>t in e?tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,om=(e,t)=>{for(var n in t||(t={}))nm.call(t,n)&&Bl(e,n,t[n]);if(jl)for(var n of jl(t))rm.call(t,n)&&Bl(e,n,t[n]);return e};function sm(e,t={}){function n(l,a){let c=e[l];return a!=null&&(c=Eh(c,a)),typeof c=="number"&&(c=`${c}px`),c}const{window:r=Xe}=t;function o(l){return r?r.matchMedia(l).matches:!1}const s=l=>lr(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,a)=>(Object.defineProperty(l,a,{get:()=>s(a),enumerable:!0,configurable:!0}),l),{});return om({greater(l){return lr(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:s,smaller(l){return lr(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return lr(`(max-width: ${n(l)})`,t)},between(l,a){return lr(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,a){return o(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`)}},i)}function im(e={}){const{navigator:t=Yh,read:n=!1,source:r,copiedDuring:o=1500,legacy:s=!1}=e,i=["copy","cut"],l=uo(()=>t&&"clipboard"in t),a=O(()=>l.value||s),c=Y(""),d=Y(!1),u=Dh(()=>d.value=!1,o);function f(){l.value?t.clipboard.readText().then(y=>{c.value=y}):c.value=_()}if(a.value&&n)for(const y of i)ke(y,f);async function m(y=ot(r)){a.value&&y!=null&&(l.value?await t.clipboard.writeText(y):g(y),c.value=y,d.value=!0,u.start())}function g(y){const S=document.createElement("textarea");S.value=y??"",S.style.position="absolute",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),S.remove()}function _(){var y,S,x;return(x=(S=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:S.toString())!=null?x:""}return{isSupported:a,text:c,copied:d,copy:m}}function lm(e){return JSON.parse(JSON.stringify(e))}const Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xs="__vueuse_ssr_handlers__";Zs[Xs]=Zs[Xs]||{};const am=Zs[Xs];function cm(e,t){return am[e]||t}function um(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var dm=Object.defineProperty,zl=Object.getOwnPropertySymbols,fm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable,ql=(e,t,n)=>t in e?dm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vl=(e,t)=>{for(var n in t||(t={}))fm.call(t,n)&&ql(e,n,t[n]);if(zl)for(var n of zl(t))pm.call(t,n)&&ql(e,n,t[n]);return e};const hm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function At(e,t,n,r={}){var o;const{flush:s="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:a=!0,mergeDefaults:c=!1,shallow:d,window:u=Xe,eventFilter:f,onError:m=D=>{console.error(D)}}=r,g=(d?zt:Y)(t);if(!n)try{n=cm("getDefaultStorage",()=>{var D;return(D=Xe)==null?void 0:D.localStorage})()}catch(D){m(D)}if(!n)return g;const _=ot(t),y=um(_),S=(o=r.serializer)!=null?o:hm[y],{pause:x,resume:E}=Gh(g,()=>C(g.value),{flush:s,deep:i,eventFilter:f});return u&&l&&ke(u,"storage",F),F(),g;function C(D){try{if(D==null)n.removeItem(e);else{const J=S.write(D),re=n.getItem(e);re!==J&&(n.setItem(e,J),u&&(u==null||u.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:re,newValue:J,storageArea:n}))))}}catch(J){m(J)}}function B(D){const J=D?D.newValue:n.getItem(e);if(J==null)return a&&_!==null&&n.setItem(e,S.write(_)),_;if(!D&&c){const re=S.read(J);return Qr(c)?c(re,_):y==="object"&&!Array.isArray(re)?Vl(Vl({},_),re):re}else return typeof J!="string"?J:S.read(J)}function F(D){if(!(D&&D.storageArea!==n)){if(D&&D.key==null){g.value=_;return}if(!(D&&D.key!==e)){x();try{g.value=B(D)}catch(J){m(J)}finally{D?Ot(E):E()}}}}}function mm(e){return lr("(prefers-color-scheme: dark)",e)}var gm=Object.defineProperty,vm=Object.defineProperties,_m=Object.getOwnPropertyDescriptors,Ul=Object.getOwnPropertySymbols,ym=Object.prototype.hasOwnProperty,bm=Object.prototype.propertyIsEnumerable,Kl=(e,t,n)=>t in e?gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wm=(e,t)=>{for(var n in t||(t={}))ym.call(t,n)&&Kl(e,n,t[n]);if(Ul)for(var n of Ul(t))bm.call(t,n)&&Kl(e,n,t[n]);return e},xm=(e,t)=>vm(e,_m(t));function tk(e,t={}){var n,r,o;const s=(n=t.draggingElement)!=null?n:Xe,i=(r=t.handle)!=null?r:e,l=Y((o=ot(t.initialValue))!=null?o:{x:0,y:0}),a=Y(),c=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{ot(t.preventDefault)&&g.preventDefault(),ot(t.stopPropagation)&&g.stopPropagation()},u=g=>{var _;if(!c(g)||ot(t.exact)&&g.target!==ot(e))return;const y=ot(e).getBoundingClientRect(),S={x:g.clientX-y.left,y:g.clientY-y.top};((_=t.onStart)==null?void 0:_.call(t,S,g))!==!1&&(a.value=S,d(g))},f=g=>{var _;c(g)&&a.value&&(l.value={x:g.clientX-a.value.x,y:g.clientY-a.value.y},(_=t.onMove)==null||_.call(t,l.value,g),d(g))},m=g=>{var _;c(g)&&a.value&&(a.value=void 0,(_=t.onEnd)==null||_.call(t,l.value,g),d(g))};return It&&(ke(i,"pointerdown",u,!0),ke(s,"pointermove",f,!0),ke(s,"pointerup",m,!0)),xm(wm({},Nh(l)),{position:l,isDragging:O(()=>!!a.value),style:O(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var Wl=Object.getOwnPropertySymbols,km=Object.prototype.hasOwnProperty,Sm=Object.prototype.propertyIsEnumerable,Em=(e,t)=>{var n={};for(var r in e)km.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Wl)for(var r of Wl(e))t.indexOf(r)<0&&Sm.call(e,r)&&(n[r]=e[r]);return n};function Tm(e,t,n={}){const r=n,{window:o=Xe}=r,s=Em(r,["window"]);let i;const l=uo(()=>o&&"ResizeObserver"in o),a=()=>{i&&(i.disconnect(),i=void 0)},c=Ne(()=>Ft(e),u=>{a(),l.value&&o&&u&&(i=new ResizeObserver(t),i.observe(u,s))},{immediate:!0,flush:"post"}),d=()=>{a(),c()};return qt(d),{isSupported:l,stop:d}}function Pm(e,t={}){const{immediate:n=!0,window:r=Xe}=t,o=Y(!1);let s=0,i=null;function l(d){if(!o.value||!r)return;const u=d-s;e({delta:u,timestamp:d}),s=d,i=r.requestAnimationFrame(l)}function a(){!o.value&&r&&(o.value=!0,i=r.requestAnimationFrame(l))}function c(){o.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return n&&a(),qt(c),{isActive:o,pause:c,resume:a}}function $m(e,t={width:0,height:0},n={}){const{box:r="content-box"}=n,o=Y(t.width),s=Y(t.height);return Tm(e,([i])=>{const l=r==="border-box"?i.borderBoxSize:r==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;l?(o.value=l.reduce((a,{inlineSize:c})=>a+c,0),s.value=l.reduce((a,{blockSize:c})=>a+c,0)):(o.value=i.contentRect.width,s.value=i.contentRect.height)},n),Ne(()=>Ft(e),i=>{o.value=i?t.width:0,s.value=i?t.height:0}),{width:o,height:s}}const Gl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Cm(e,t={}){const{document:n=tu,autoExit:r=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),s=Y(!1);let i=Gl[0];const l=uo(()=>{if(n){for(const _ of Gl)if(_[1]in n)return i=_,!0}else return!1;return!1}),[a,c,d,,u]=i;async function f(){l.value&&(n!=null&&n[d]&&await n[c](),s.value=!1)}async function m(){if(!l.value)return;await f();const _=Ft(o);_&&(await _[a](),s.value=!0)}async function g(){s.value?await f():await m()}return n&&ke(n,u,()=>{s.value=!!(n!=null&&n[d])},!1),r&&qt(f),{isSupported:l,isFullscreen:s,enter:m,exit:f,toggle:g}}function nk(e,t,n={}){const{root:r,rootMargin:o="0px",threshold:s=.1,window:i=Xe}=n,l=uo(()=>i&&"IntersectionObserver"in i);let a=Hr;const c=l.value?Ne(()=>({el:Ft(e),root:Ft(r)}),({el:u,root:f})=>{if(a(),!u)return;const m=new IntersectionObserver(t,{root:f,rootMargin:o,threshold:s});m.observe(u),a=()=>{m.disconnect(),a=Hr}},{immediate:!0,flush:"post"}):Hr,d=()=>{a(),c()};return qt(d),{isSupported:l,stop:d}}const Om={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Im(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:r=Om,passive:o=!0,onEventFired:s=Hr}=e,i=Ge(new Set),l={toJSON(){return{}},current:i},a=t?Ge(l):l,c=new Set,d=new Set;function u(_,y){_ in a&&(t?a[_]=y:a[_].value=y)}function f(){i.clear();for(const _ of d)u(_,!1)}function m(_,y){var S,x;const E=(S=_.key)==null?void 0:S.toLowerCase(),B=[(x=_.code)==null?void 0:x.toLowerCase(),E].filter(Boolean);E&&(y?i.add(E):i.delete(E));for(const F of B)d.add(F),u(F,y);E==="meta"&&!y?(c.forEach(F=>{i.delete(F),u(F,!1)}),c.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&y&&[...i,...B].forEach(F=>c.add(F))}ke(n,"keydown",_=>(m(_,!0),s(_)),{passive:o}),ke(n,"keyup",_=>(m(_,!1),s(_)),{passive:o}),ke("blur",f,{passive:!0}),ke("focus",f,{passive:!0});const g=new Proxy(a,{get(_,y,S){if(typeof y!="string")return Reflect.get(_,y,S);if(y=y.toLowerCase(),y in r&&(y=r[y]),!(y in a))if(/[+_-]/.test(y)){const E=y.split(/[+_-]/g).map(C=>C.trim());a[y]=O(()=>E.every(C=>b(g[C])))}else a[y]=Y(!1);const x=Reflect.get(_,y,S);return t?b(x):x}});return g}function rk(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:s=Xe,eventFilter:i}=e,l=Y(o.x),a=Y(o.y),c=Y(null),d=_=>{t==="page"?(l.value=_.pageX,a.value=_.pageY):t==="client"?(l.value=_.clientX,a.value=_.clientY):t==="movement"&&(l.value=_.movementX,a.value=_.movementY),c.value="mouse"},u=()=>{l.value=o.x,a.value=o.y},f=_=>{if(_.touches.length>0){const y=_.touches[0];t==="page"?(l.value=y.pageX,a.value=y.pageY):t==="client"&&(l.value=y.clientX,a.value=y.clientY),c.value="touch"}},m=_=>i===void 0?d(_):i(()=>d(_),{}),g=_=>i===void 0?f(_):i(()=>f(_),{});return s&&(ke(s,"mousemove",m,{passive:!0}),ke(s,"dragover",m,{passive:!0}),n&&t!=="movement"&&(ke(s,"touchstart",g,{passive:!0}),ke(s,"touchmove",g,{passive:!0}),r&&ke(s,"touchend",u,{passive:!0}))),{x:l,y:a,sourceType:c}}var Xt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xt||(Xt={}));function Am(e,t={}){const n=Zc(e),{threshold:r=50,onSwipe:o,onSwipeEnd:s,onSwipeStart:i}=t,l=Ge({x:0,y:0}),a=(F,D)=>{l.x=F,l.y=D},c=Ge({x:0,y:0}),d=(F,D)=>{c.x=F,c.y=D},u=O(()=>l.x-c.x),f=O(()=>l.y-c.y),{max:m,abs:g}=Math,_=O(()=>m(g(u.value),g(f.value))>=r),y=Y(!1),S=Y(!1),x=O(()=>_.value?g(u.value)>g(f.value)?u.value>0?Xt.LEFT:Xt.RIGHT:f.value>0?Xt.UP:Xt.DOWN:Xt.NONE),E=F=>{var D,J,re;const de=F.buttons===0,ge=F.buttons===1;return(re=(J=(D=t.pointerTypes)==null?void 0:D.includes(F.pointerType))!=null?J:de||ge)!=null?re:!0},C=[ke(e,"pointerdown",F=>{var D,J;if(!E(F))return;S.value=!0,(J=(D=n.value)==null?void 0:D.style)==null||J.setProperty("touch-action","none");const re=F.target;re==null||re.setPointerCapture(F.pointerId);const{clientX:de,clientY:ge}=F;a(de,ge),d(de,ge),i==null||i(F)}),ke(e,"pointermove",F=>{if(!E(F)||!S.value)return;const{clientX:D,clientY:J}=F;d(D,J),!y.value&&_.value&&(y.value=!0),y.value&&(o==null||o(F))}),ke(e,"pointerup",F=>{var D,J;E(F)&&(y.value&&(s==null||s(F,x.value)),S.value=!1,y.value=!1,(J=(D=n.value)==null?void 0:D.style)==null||J.setProperty("touch-action","initial"))})],B=()=>C.forEach(F=>F());return{isSwiping:Mn(y),direction:Mn(x),posStart:Mn(l),posEnd:Mn(c),distanceX:u,distanceY:f,stop:B}}let Rm=0;function ok(e,t={}){const n=Y(!1),{document:r=tu,immediate:o=!0,manual:s=!1,id:i=`vueuse_styletag_${++Rm}`}=t,l=Y(e);let a=()=>{};const c=()=>{if(!r)return;const u=r.getElementById(i)||r.createElement("style");u.isConnected||(u.type="text/css",u.id=i,t.media&&(u.media=t.media),r.head.appendChild(u)),!n.value&&(a=Ne(l,f=>{u.textContent=f},{immediate:!0}),n.value=!0)},d=()=>{!r||!n.value||(a(),r.head.removeChild(r.getElementById(i)),n.value=!1)};return o&&!s&&Ni(c),s||qt(d),{id:i,css:l,unload:d,load:c,isLoaded:Mn(n)}}var Mm=Object.defineProperty,Yl=Object.getOwnPropertySymbols,Nm=Object.prototype.hasOwnProperty,Lm=Object.prototype.propertyIsEnumerable,Jl=(e,t,n)=>t in e?Mm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dm=(e,t)=>{for(var n in t||(t={}))Nm.call(t,n)&&Jl(e,n,t[n]);if(Yl)for(var n of Yl(t))Lm.call(t,n)&&Jl(e,n,t[n]);return e};function sk(e={}){const{controls:t=!1,offset:n=0,immediate:r=!0,interval:o="requestAnimationFrame",callback:s}=e,i=Y(Js()+n),l=()=>i.value=Js()+n,a=s?()=>{l(),s(i.value)}:l,c=o==="requestAnimationFrame"?Pm(a,{immediate:r}):Lh(a,o,{immediate:r});return t?Dm({timestamp:i},c):i}var Fm=Object.defineProperty,Zl=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,jm=Object.prototype.propertyIsEnumerable,Xl=(e,t,n)=>t in e?Fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bm=(e,t)=>{for(var n in t||(t={}))Hm.call(t,n)&&Xl(e,n,t[n]);if(Zl)for(var n of Zl(t))jm.call(t,n)&&Xl(e,n,t[n]);return e};const zm={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Bm({linear:Sh},zm);function Ht(e,t,n,r={}){var o,s,i;const{clone:l=!1,passive:a=!1,eventName:c,deep:d=!1,defaultValue:u}=r,f=En(),m=n||(f==null?void 0:f.emit)||((o=f==null?void 0:f.$emit)==null?void 0:o.bind(f))||((i=(s=f==null?void 0:f.proxy)==null?void 0:s.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let g=c;t||(t="modelValue"),g=c||g||`update:${t.toString()}`;const _=S=>l?Qr(l)?l(S):lm(S):S,y=()=>bh(e[t])?_(e[t]):u;if(a){const S=y(),x=Y(S);return Ne(()=>e[t],E=>x.value=_(E)),Ne(x,E=>{(E!==e[t]||d)&&m(g,E)},{deep:d}),x}else return O({get(){return y()},set(S){m(g,S)}})}function ik({window:e=Xe}={}){if(!e)return Y(!1);const t=Y(e.document.hasFocus());return ke(e,"blur",()=>{t.value=!1}),ke(e,"focus",()=>{t.value=!0}),t}function qm(e={}){const{window:t=Xe,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=e,i=Y(n),l=Y(r),a=()=>{t&&(s?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return a(),Ni(a),ke("resize",a,{passive:!0}),o&&ke("orientationchange",a,{passive:!0}),{width:i,height:l}}function Vm(){return nu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Um=typeof Proxy=="function",Km="devtools-plugin:setup",Wm="plugin:settings:set";let nr,Qs;function Gm(){var e;return nr!==void 0||(typeof window<"u"&&window.performance?(nr=!0,Qs=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(nr=!0,Qs=global.perf_hooks.performance):nr=!1),nr}function Ym(){return Gm()?Qs.now():Date.now()}class Jm{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const i in t.settings){const l=t.settings[i];r[i]=l.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const i=localStorage.getItem(o),l=JSON.parse(i);Object.assign(s,l)}catch{}this.fallbacks={getSettings(){return s},setSettings(i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}s=i},now(){return Ym()}},n&&n.on(Wm,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Zm(e,t){const n=e,r=nu(),o=Vm(),s=Um&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))o.emit(Km,e,t);else{const i=s?new Jm(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof window<"u";function Xm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const we=Object.assign;function ks(e,t){const n={};for(const r in t){const o=t[r];n[r]=vt(o)?o.map(e):e(o)}return n}const jr=()=>{},vt=Array.isArray;function _e(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const Qm=/\/$/,eg=e=>e.replace(Qm,"");function Ss(e,t,n="/"){let r,o={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=rg(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function tg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ql(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ea(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&kn(t.matched[r],n.matched[o])&&ru(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ru(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ng(e[n],t[n]))return!1;return!0}function ng(e,t){return vt(e)?ta(e,t):vt(t)?ta(t,e):e===t}function ta(e,t){return vt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function rg(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return _e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var eo;(function(e){e.pop="pop",e.push="push"})(eo||(eo={}));var Br;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Br||(Br={}));function og(e){if(!e)if(Jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),eg(e)}const sg=/^[^#]+#/;function ig(e,t){return e.replace(sg,"#")+t}function lg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ag(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const s=document.querySelector(e.el);if(r&&s){_e(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{_e(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){_e(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=lg(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function na(e,t){return(history.state?history.state.position-t:-1)+e}const ei=new Map;function cg(e,t){ei.set(e,t)}function ug(e){const t=ei.get(e);return ei.delete(e),t}let dg=()=>location.protocol+"//"+location.host;function ou(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),Ql(a,"")}return Ql(n,e)+r+o}function fg(e,t,n,r){let o=[],s=[],i=null;const l=({state:f})=>{const m=ou(e,location),g=n.value,_=t.value;let y=0;if(f){if(n.value=m,t.value=f,i&&i===g){i=null;return}y=_?f.position-_.position:0}else r(m);o.forEach(S=>{S(n.value,g,{delta:y,type:eo.pop,direction:y?y>0?Br.forward:Br.back:Br.unknown})})};function a(){i=n.value}function c(f){o.push(f);const m=()=>{const g=o.indexOf(f);g>-1&&o.splice(g,1)};return s.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:fs()}),"")}function u(){for(const f of s)f();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:a,listen:c,destroy:u}}function ra(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?fs():null}}function pg(e){const{history:t,location:n}=window,r={value:ou(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,c,d){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+a:dg()+e+a;try{t[d?"replaceState":"pushState"](c,"",f),o.value=c}catch(m){_e("Error with push/replace State",m),n[d?"replace":"assign"](f)}}function i(a,c){const d=we({},t.state,ra(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});s(a,d,!0),r.value=a}function l(a,c){const d=we({},o.value,t.state,{forward:a,scroll:fs()});t.state||_e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),s(d.current,d,!0);const u=we({},ra(r.value,a,null),{position:d.position+1},c);s(a,u,!1),r.value=a}return{location:r,state:o,push:l,replace:i}}function hg(e){e=og(e);const t=pg(e),n=fg(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=we({location:"",base:e,go:r,createHref:ig.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function mg(e){return typeof e=="string"||e&&typeof e=="object"}function su(e){return typeof e=="string"||typeof e=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iu=Symbol("navigation failure");var oa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(oa||(oa={}));const gg={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${_g(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function vr(e,t){return we(new Error(gg[e](t)),{type:e,[iu]:!0},t)}function Kt(e,t){return e instanceof Error&&iu in e&&(t==null||!!(e.type&t))}const vg=["params","query","hash"];function _g(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of vg)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const sa="[^/]+?",yg={sensitive:!1,strict:!1,start:!0,end:!0},bg=/[.+*?^${}()[\]/\\]/g;function wg(e,t){const n=we({},yg,t),r=[];let o=n.start?"^":"";const s=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let u=0;u<c.length;u++){const f=c[u];let m=40+(n.sensitive?.25:0);if(f.type===0)u||(o+="/"),o+=f.value.replace(bg,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:_,optional:y,regexp:S}=f;s.push({name:g,repeatable:_,optional:y});const x=S||sa;if(x!==sa){m+=10;try{new RegExp(`(${x})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+C.message)}}let E=_?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),o+=E,m+=20,y&&(m+=-8),_&&(m+=-20),x===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(c){const d=c.match(i),u={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",g=s[f-1];u[g.name]=m&&g.repeatable?m.split("/"):m}return u}function a(c){let d="",u=!1;for(const f of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:_,optional:y}=m,S=g in c?c[g]:"";if(vt(S)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=vt(S)?S.join("/"):S;if(!x)if(y)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=x}}return d||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function xg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function kg(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=xg(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ia(r))return 1;if(ia(o))return-1}return o.length-r.length}function ia(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sg={type:0,value:""},Eg=/[a-zA-Z0-9_]/;function Tg(e){if(!e)return[[]];if(e==="/")return[[Sg]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let l=0,a,c="",d="";function u(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&u(),i()):a===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:Eg.test(a)?f():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),i(),o}function Pg(e,t,n){const r=wg(Tg(e.path),n);{const s=new Set;for(const i of r.keys)s.has(i.name)&&_e(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),s.add(i.name)}const o=we(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $g(e,t){const n=[],r=new Map;t=ca({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function s(d,u,f){const m=!f,g=Cg(d);Rg(g,u),g.aliasOf=f&&f.record;const _=ca(t,d),y=[g];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of E)y.push(we({},g,{components:f?f.record.components:g.components,path:C,aliasOf:f?f.record:g}))}let S,x;for(const E of y){const{path:C}=E;if(u&&C[0]!=="/"){const B=u.record.path,F=B[B.length-1]==="/"?"":"/";E.path=u.record.path+(C&&F+C)}if(E.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(S=Pg(E,u,_),u&&C[0]==="/"&&Mg(S,u),f?(f.alias.push(S),Ag(f,S)):(x=x||S,x!==S&&x.alias.push(S),m&&d.name&&!aa(S)&&i(d.name)),g.children){const B=g.children;for(let F=0;F<B.length;F++)s(B[F],S,f&&f.children[F])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&a(S)}return x?()=>{i(x)}:jr}function i(d){if(su(d)){const u=r.get(d);u&&(r.delete(d),n.splice(n.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=n.indexOf(d);u>-1&&(n.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function a(d){let u=0;for(;u<n.length&&kg(d,n[u])>=0&&(d.record.path!==n[u].record.path||!lu(d,n[u]));)u++;n.splice(u,0,d),d.record.name&&!aa(d)&&r.set(d.record.name,d)}function c(d,u){let f,m={},g,_;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw vr(1,{location:d});{const x=Object.keys(d.params||{}).filter(E=>!f.keys.find(C=>C.name===E));x.length&&_e(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,m=we(la(u.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&la(d.params,f.keys.map(x=>x.name))),g=f.stringify(m)}else if("path"in d)g=d.path,g.startsWith("/")||_e(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(x=>x.re.test(g)),f&&(m=f.parse(g),_=f.record.name);else{if(f=u.name?r.get(u.name):n.find(x=>x.re.test(u.path)),!f)throw vr(1,{location:d,currentLocation:u});_=f.record.name,m=we({},u.params,d.params),g=f.stringify(m)}const y=[];let S=f;for(;S;)y.unshift(S.record),S=S.parent;return{name:_,path:g,params:m,matched:y,meta:Ig(y)}}return e.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function la(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Cg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Og(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Og(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function aa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ig(e){return e.reduce((t,n)=>we(t,n.meta),{})}function ca(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ti(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Ag(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ti.bind(null,n)))return _e(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ti.bind(null,n)))return _e(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function Rg(e,t){t&&t.record.name&&!e.name&&!e.path&&_e(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Mg(e,t){for(const n of t.keys)if(!e.keys.find(ti.bind(null,n)))return _e(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function lu(e,t){return t.children.some(n=>n===e||lu(e,n))}const au=/#/g,Ng=/&/g,Lg=/\//g,Dg=/=/g,Fg=/\?/g,cu=/\+/g,Hg=/%5B/g,jg=/%5D/g,uu=/%5E/g,Bg=/%60/g,du=/%7B/g,zg=/%7C/g,fu=/%7D/g,qg=/%20/g;function Li(e){return encodeURI(""+e).replace(zg,"|").replace(Hg,"[").replace(jg,"]")}function Vg(e){return Li(e).replace(du,"{").replace(fu,"}").replace(uu,"^")}function ni(e){return Li(e).replace(cu,"%2B").replace(qg,"+").replace(au,"%23").replace(Ng,"%26").replace(Bg,"`").replace(du,"{").replace(fu,"}").replace(uu,"^")}function Ug(e){return ni(e).replace(Dg,"%3D")}function Kg(e){return Li(e).replace(au,"%23").replace(Fg,"%3F")}function Wg(e){return e==null?"":Kg(e).replace(Lg,"%2F")}function to(e){try{return decodeURIComponent(""+e)}catch{_e(`Error decoding "${e}". Using original value`)}return""+e}function Gg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(cu," "),i=s.indexOf("="),l=to(i<0?s:s.slice(0,i)),a=i<0?null:to(s.slice(i+1));if(l in t){let c=t[l];vt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function ua(e){let t="";for(let n in e){const r=e[n];if(n=Ug(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(vt(r)?r.map(s=>s&&ni(s)):[r&&ni(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Yg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=vt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Jg=Symbol("router view location matched"),da=Symbol("router view depth"),Di=Symbol("router"),pu=Symbol("route location"),ri=Symbol("router view location");function Er(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function pn(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const a=u=>{u===!1?l(vr(4,{from:n,to:t})):u instanceof Error?l(u):mg(u)?l(vr(2,{from:t,to:u})):(s&&r.enterCallbacks[o]===s&&typeof u=="function"&&s.push(u),i())},c=e.call(r&&r.instances[o],t,n,Zg(a,t,n));let d=Promise.resolve(c);if(e.length<3&&(d=d.then(a)),e.length>2){const u=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)d=d.then(f=>a._called?f:(_e(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!a._called){_e(u),l(new Error("Invalid navigation guard"));return}}d.catch(u=>l(u))})}function Zg(e,t,n){let r=0;return function(){r++===1&&_e(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function Es(e,t,n,r){const o=[];for(const s of e){!s.components&&!s.children.length&&_e(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);for(const i in s.components){let l=s.components[i];{if(!l||typeof l!="object"&&typeof l!="function")throw _e(`Component "${i}" in record with path "${s.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){_e(`Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const a=l;l=()=>a}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,_e(`Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(Xg(l)){const c=(l.__vccOpts||l)[t];c&&o.push(pn(c,n,r,s,i))}else{let a=l();"catch"in a||(_e(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),a=Promise.resolve(a)),o.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const d=Xm(c)?c.default:c;s.components[i]=d;const f=(d.__vccOpts||d)[t];return f&&pn(f,n,r,s,i)()}))}}}return o}function Xg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fa(e){const t=ee(Di),n=ee(pu),r=O(()=>t.resolve(b(e.to))),o=O(()=>{const{matched:a}=r.value,{length:c}=a,d=a[c-1],u=n.matched;if(!d||!u.length)return-1;const f=u.findIndex(kn.bind(null,d));if(f>-1)return f;const m=pa(a[c-2]);return c>1&&pa(d)===m&&u[u.length-1].path!==m?u.findIndex(kn.bind(null,a[c-2])):f}),s=O(()=>o.value>-1&&nv(n.params,r.value.params)),i=O(()=>o.value>-1&&o.value===n.matched.length-1&&ru(n.params,r.value.params));function l(a={}){return tv(a)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(jr):Promise.resolve()}if(Jt){const a=En();if(a){const c={route:r.value,isActive:s.value,isExactActive:i.value};a.__vrl_devtools=a.__vrl_devtools||[],a.__vrl_devtools.push(c),yr(()=>{c.route=r.value,c.isActive=s.value,c.isExactActive=i.value},{flush:"post"})}}return{route:r,href:O(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const Qg=Re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fa,setup(e,{slots:t}){const n=Ge(fa(e)),{options:r}=ee(Di),o=O(()=>({[ha(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ha(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ds("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),ev=Qg;function tv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nv(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!vt(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function pa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ha=(e,t,n)=>e??t??n,rv=Re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){sv();const r=ee(ri),o=O(()=>e.route||r.value),s=ee(da,0),i=O(()=>{let c=b(s);const{matched:d}=o.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),l=O(()=>o.value.matched[i.value]);ht(da,O(()=>i.value+1)),ht(Jg,l),ht(ri,o);const a=Y();return Ne(()=>[a.value,l.value,e.name],([c,d,u],[f,m,g])=>{d&&(d.instances[u]=c,m&&m!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),c&&d&&(!m||!kn(d,m)||!f)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=o.value,d=e.name,u=l.value,f=u&&u.components[d];if(!f)return ma(n.default,{Component:f,route:c});const m=u.props[d],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,y=ds(f,we({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[d]=null)},ref:a}));if(Jt&&y.ref){const S={depth:i.value,name:u.name,path:u.path,meta:u.meta};(vt(y.ref)?y.ref.map(E=>E.i):[y.ref.i]).forEach(E=>{E.__vrv_devtools=S})}return ma(n.default,{Component:y,route:c})||y}}});function ma(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ov=rv;function sv(){const e=En(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";_e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Tr(e,t){const n=we({},e,{matched:e.matched.map(r=>hv(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function bo(e){return{_custom:{display:e}}}let iv=0;function lv(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=iv++;Zm({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((d,u)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Tr(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:d,componentInstance:u})=>{if(u.__vrv_devtools){const f=u.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hu})}vt(u.__vrl_devtools)&&(u.__devtoolsApi=o,u.__vrl_devtools.forEach(f=>{let m=vu,g="";f.isExactActive?(m=gu,g="This is exactly active"):f.isActive&&(m=mu,g="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),Ne(t.currentRoute,()=>{a(),o.notifyComponentUpdate(),o.sendInspectorTree(l),o.sendInspectorState(l)});const s="router:navigations:"+r;o.addTimelineLayer({id:s,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((d,u)=>{o.addTimelineEvent({layerId:s,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:o.now(),data:{error:d},groupId:u.meta.__navigationId}})});let i=0;t.beforeEach((d,u)=>{const f={guard:bo("beforeEach"),from:Tr(u,"Current Location during this navigation"),to:Tr(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:i++}),o.addTimelineEvent({layerId:s,event:{time:o.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,u,f)=>{const m={guard:bo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=bo("❌")):m.status=bo("✅"),m.from=Tr(u,"Current Location during this navigation"),m.to=Tr(d,"Target location"),o.addTimelineEvent({layerId:s,event:{title:"End of navigation",subtitle:d.fullPath,time:o.now(),data:m,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const l="router-inspector:"+r;o.addInspector({id:l,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function a(){if(!c)return;const d=c;let u=n.getRoutes().filter(f=>!f.parent);u.forEach(bu),d.filter&&(u=u.filter(f=>oi(f,d.filter.toLowerCase()))),u.forEach(f=>yu(f,t.currentRoute.value)),d.rootNodes=u.map(_u)}let c;o.on.getInspectorTree(d=>{c=d,d.app===e&&d.inspectorId===l&&a()}),o.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===l){const f=n.getRoutes().find(m=>m.record.__vd_id===d.nodeId);f&&(d.state={options:cv(f)})}}),o.sendInspectorTree(l),o.sendInspectorState(l)})}function av(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function cv(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${av(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const hu=15485081,mu=2450411,gu=8702998,uv=2282478,vu=16486972,dv=6710886;function _u(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:uv}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:vu}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:hu}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:gu}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:mu}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:dv});let r=n.__vd_id;return r==null&&(r=String(fv++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(_u)}}let fv=0;const pv=/^\/(.*)\/([a-z]*)$/;function yu(e,t){const n=t.matched.length&&kn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>kn(r,e.record))),e.children.forEach(r=>yu(r,t))}function bu(e){e.__vd_match=!1,e.children.forEach(bu)}function oi(e,t){const n=String(e.re).match(pv);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>oi(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),s=to(o);return!t.startsWith("/")&&(s.includes(t)||o.includes(t))||s.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>oi(i,t))}function hv(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function mv(e){const t=$g(e.routes,e),n=e.parseQuery||Gg,r=e.stringifyQuery||ua,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const s=Er(),i=Er(),l=Er(),a=zt(un);let c=un;Jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ks.bind(null,k=>""+k),u=ks.bind(null,Wg),f=ks.bind(null,to);function m(k,q){let L,U;return su(k)?(L=t.getRecordMatcher(k),U=q):U=k,t.addRoute(U,L)}function g(k){const q=t.getRecordMatcher(k);q?t.removeRoute(q):_e(`Cannot remove non-existent route "${String(k)}"`)}function _(){return t.getRoutes().map(k=>k.record)}function y(k){return!!t.getRecordMatcher(k)}function S(k,q){if(q=we({},q||a.value),typeof k=="string"){const te=Ss(n,k,q.path),h=t.resolve({path:te.path},q),v=o.createHref(te.fullPath);return v.startsWith("//")?_e(`Location "${k}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):h.matched.length||_e(`No match found for location with path "${k}"`),we(te,h,{params:f(h.params),hash:to(te.hash),redirectedFrom:void 0,href:v})}let L;if("path"in k)"params"in k&&!("name"in k)&&Object.keys(k.params).length&&_e(`Path "${k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),L=we({},k,{path:Ss(n,k.path,q.path).path});else{const te=we({},k.params);for(const h in te)te[h]==null&&delete te[h];L=we({},k,{params:u(k.params)}),q.params=u(q.params)}const U=t.resolve(L,q),fe=k.hash||"";fe&&!fe.startsWith("#")&&_e(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`),U.params=d(f(U.params));const ve=tg(r,we({},k,{hash:Vg(fe),path:U.path})),oe=o.createHref(ve);return oe.startsWith("//")?_e(`Location "${k}" resolved to "${oe}". A resolved location cannot start with multiple slashes.`):U.matched.length||_e(`No match found for location with path "${"path"in k?k.path:k}"`),we({fullPath:ve,hash:fe,query:r===ua?Yg(k.query):k.query||{}},U,{redirectedFrom:void 0,href:oe})}function x(k){return typeof k=="string"?Ss(n,k,a.value.path):we({},k)}function E(k,q){if(c!==k)return vr(8,{from:q,to:k})}function C(k){return D(k)}function B(k){return C(we(x(k),{replace:!0}))}function F(k){const q=k.matched[k.matched.length-1];if(q&&q.redirect){const{redirect:L}=q;let U=typeof L=="function"?L(k):L;if(typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),!("path"in U)&&!("name"in U))throw _e(`Invalid redirect found:
${JSON.stringify(U,null,2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return we({query:k.query,hash:k.hash,params:"path"in U?{}:k.params},U)}}function D(k,q){const L=c=S(k),U=a.value,fe=k.state,ve=k.force,oe=k.replace===!0,te=F(L);if(te)return D(we(x(te),{state:typeof te=="object"?we({},fe,te.state):fe,force:ve,replace:oe}),q||L);const h=L;h.redirectedFrom=q;let v;return!ve&&ea(r,U,L)&&(v=vr(16,{to:h,from:U}),Te(U,U,!0,!1)),(v?Promise.resolve(v):re(h,U)).catch(w=>Kt(w)?Kt(w,2)?w:ae(w):z(w,h,U)).then(w=>{if(w){if(Kt(w,2))return ea(r,S(w.to),h)&&q&&(q._count=q._count?q._count+1:1)>10?(_e(`Detected an infinite redirection in a navigation guard when going from "${U.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):D(we({replace:oe},x(w.to),{state:typeof w.to=="object"?we({},fe,w.to.state):fe,force:ve}),q||h)}else w=ge(h,U,!0,oe,fe);return de(h,U,w),w})}function J(k,q){const L=E(k,q);return L?Promise.reject(L):Promise.resolve()}function re(k,q){let L;const[U,fe,ve]=gv(k,q);L=Es(U.reverse(),"beforeRouteLeave",k,q);for(const te of U)te.leaveGuards.forEach(h=>{L.push(pn(h,k,q))});const oe=J.bind(null,k,q);return L.push(oe),rr(L).then(()=>{L=[];for(const te of s.list())L.push(pn(te,k,q));return L.push(oe),rr(L)}).then(()=>{L=Es(fe,"beforeRouteUpdate",k,q);for(const te of fe)te.updateGuards.forEach(h=>{L.push(pn(h,k,q))});return L.push(oe),rr(L)}).then(()=>{L=[];for(const te of k.matched)if(te.beforeEnter&&!q.matched.includes(te))if(vt(te.beforeEnter))for(const h of te.beforeEnter)L.push(pn(h,k,q));else L.push(pn(te.beforeEnter,k,q));return L.push(oe),rr(L)}).then(()=>(k.matched.forEach(te=>te.enterCallbacks={}),L=Es(ve,"beforeRouteEnter",k,q),L.push(oe),rr(L))).then(()=>{L=[];for(const te of i.list())L.push(pn(te,k,q));return L.push(oe),rr(L)}).catch(te=>Kt(te,8)?te:Promise.reject(te))}function de(k,q,L){for(const U of l.list())U(k,q,L)}function ge(k,q,L,U,fe){const ve=E(k,q);if(ve)return ve;const oe=q===un,te=Jt?history.state:{};L&&(U||oe?o.replace(k.fullPath,we({scroll:oe&&te&&te.scroll},fe)):o.push(k.fullPath,fe)),a.value=k,Te(k,q,L,oe),ae()}let Me;function Ve(){Me||(Me=o.listen((k,q,L)=>{if(!an.listening)return;const U=S(k),fe=F(U);if(fe){D(we(fe,{replace:!0}),U).catch(jr);return}c=U;const ve=a.value;Jt&&cg(na(ve.fullPath,L.delta),fs()),re(U,ve).catch(oe=>Kt(oe,12)?oe:Kt(oe,2)?(D(oe.to,U).then(te=>{Kt(te,20)&&!L.delta&&L.type===eo.pop&&o.go(-1,!1)}).catch(jr),Promise.reject()):(L.delta&&o.go(-L.delta,!1),z(oe,U,ve))).then(oe=>{oe=oe||ge(U,ve,!1),oe&&(L.delta&&!Kt(oe,8)?o.go(-L.delta,!1):L.type===eo.pop&&Kt(oe,20)&&o.go(-1,!1)),de(U,ve,oe)}).catch(jr)}))}let Ue=Er(),Ee=Er(),Ae;function z(k,q,L){ae(k);const U=Ee.list();return U.length?U.forEach(fe=>fe(k,q,L)):(_e("uncaught error during route navigation:"),console.error(k)),Promise.reject(k)}function Q(){return Ae&&a.value!==un?Promise.resolve():new Promise((k,q)=>{Ue.add([k,q])})}function ae(k){return Ae||(Ae=!k,Ve(),Ue.list().forEach(([q,L])=>k?L(k):q()),Ue.reset()),k}function Te(k,q,L,U){const{scrollBehavior:fe}=e;if(!Jt||!fe)return Promise.resolve();const ve=!L&&ug(na(k.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Ot().then(()=>fe(k,q,ve)).then(oe=>oe&&ag(oe)).catch(oe=>z(oe,k,q))}const ut=k=>o.go(k);let Ye;const lt=new Set,an={currentRoute:a,listening:!0,addRoute:m,removeRoute:g,hasRoute:y,getRoutes:_,resolve:S,options:e,push:C,replace:B,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:Ee.add,isReady:Q,install(k){const q=this;k.component("RouterLink",ev),k.component("RouterView",ov),k.config.globalProperties.$router=q,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>b(a)}),Jt&&!Ye&&a.value===un&&(Ye=!0,C(o.location).catch(fe=>{_e("Unexpected error when starting the router:",fe)}));const L={};for(const fe in un)L[fe]=O(()=>a.value[fe]);k.provide(Di,q),k.provide(pu,Ge(L)),k.provide(ri,a);const U=k.unmount;lt.add(k),k.unmount=function(){lt.delete(k),lt.size<1&&(c=un,Me&&Me(),Me=null,a.value=un,Ye=!1,Ae=!1),U()},Jt&&lv(k,q,t)}};return an}function rr(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function gv(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(c=>kn(c,l))?r.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(c=>kn(c,a))||o.push(a))}return[n,r,o]}const Ts=Y(!1),zr=Y(!1),cr=Y(!1),vv=Y(!0),si=sm({xs:460,...em}),qn=qm(),wu=Im(),_v=O(()=>qn.height.value-qn.width.value/_n>180),xu=Cm(It?document.body:null),mr=Qh(),yv=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=mr.value)==null?void 0:e.tagName)||"")||((t=mr.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),bv=O(()=>{var e;return["BUTTON","A"].includes(((e=mr.value)==null?void 0:e.tagName)||"")});At("slidev-camera","default");At("slidev-mic","default");const To=At("slidev-scale",0),nt=At("slidev-show-overview",!1),Ps=At("slidev-presenter-cursor",!0),ga=At("slidev-show-editor",!1);At("slidev-editor-width",It?window.innerWidth*.4:100);const ku=Xc(nt);function va(e,t,n,r=o=>o){return e*r(.5-t*(.5-n))}function wv(e){return[-e[0],-e[1]]}function Et(e,t){return[e[0]+t[0],e[1]+t[1]]}function wt(e,t){return[e[0]-t[0],e[1]-t[1]]}function St(e,t){return[e[0]*t,e[1]*t]}function xv(e,t){return[e[0]/t,e[1]/t]}function Pr(e){return[e[1],-e[0]]}function _a(e,t){return e[0]*t[0]+e[1]*t[1]}function kv(e,t){return e[0]===t[0]&&e[1]===t[1]}function Sv(e){return Math.hypot(e[0],e[1])}function Ev(e){return e[0]*e[0]+e[1]*e[1]}function ya(e,t){return Ev(wt(e,t))}function Su(e){return xv(e,Sv(e))}function Tv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function $r(e,t,n){let r=Math.sin(n),o=Math.cos(n),s=e[0]-t[0],i=e[1]-t[1],l=s*o-i*r,a=s*r+i*o;return[l+t[0],a+t[1]]}function ii(e,t,n){return Et(e,St(wt(t,e),n))}function ba(e,t,n){return Et(e,St(t,n))}var{min:or,PI:Pv}=Math,wa=.275,Cr=Pv+1e-4;function $v(e,t={}){let{size:n=16,smoothing:r=.5,thinning:o=.5,simulatePressure:s=!0,easing:i=z=>z,start:l={},end:a={},last:c=!1}=t,{cap:d=!0,easing:u=z=>z*(2-z)}=l,{cap:f=!0,easing:m=z=>--z*z*z+1}=a;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,_=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,y=a.taper===!1?0:a.taper===!0?Math.max(n,g):a.taper,S=Math.pow(n*r,2),x=[],E=[],C=e.slice(0,10).reduce((z,Q)=>{let ae=Q.pressure;if(s){let Te=or(1,Q.distance/n),ut=or(1,1-Te);ae=or(1,z+(ut-z)*(Te*wa))}return(z+ae)/2},e[0].pressure),B=va(n,o,e[e.length-1].pressure,i),F,D=e[0].vector,J=e[0].point,re=J,de=J,ge=re,Me=!1;for(let z=0;z<e.length;z++){let{pressure:Q}=e[z],{point:ae,vector:Te,distance:ut,runningLength:Ye}=e[z];if(z<e.length-1&&g-Ye<3)continue;if(o){if(s){let ve=or(1,ut/n),oe=or(1,1-ve);Q=or(1,C+(oe-C)*(ve*wa))}B=va(n,o,Q,i)}else B=n/2;F===void 0&&(F=B);let lt=Ye<_?u(Ye/_):1,an=g-Ye<y?m((g-Ye)/y):1;B=Math.max(.01,B*Math.min(lt,an));let k=(z<e.length-1?e[z+1]:e[z]).vector,q=z<e.length-1?_a(Te,k):1,L=_a(Te,D)<0&&!Me,U=q!==null&&q<0;if(L||U){let ve=St(Pr(D),B);for(let oe=1/13,te=0;te<=1;te+=oe)de=$r(wt(ae,ve),ae,Cr*te),x.push(de),ge=$r(Et(ae,ve),ae,Cr*-te),E.push(ge);J=de,re=ge,U&&(Me=!0);continue}if(Me=!1,z===e.length-1){let ve=St(Pr(Te),B);x.push(wt(ae,ve)),E.push(Et(ae,ve));continue}let fe=St(Pr(ii(k,Te,q)),B);de=wt(ae,fe),(z<=1||ya(J,de)>S)&&(x.push(de),J=de),ge=Et(ae,fe),(z<=1||ya(re,ge)>S)&&(E.push(ge),re=ge),C=Q,D=Te}let Ve=e[0].point.slice(0,2),Ue=e.length>1?e[e.length-1].point.slice(0,2):Et(e[0].point,[1,1]),Ee=[],Ae=[];if(e.length===1){if(!(_||y)||c){let z=ba(Ve,Su(Pr(wt(Ve,Ue))),-(F||B)),Q=[];for(let ae=1/13,Te=ae;Te<=1;Te+=ae)Q.push($r(z,Ve,Cr*2*Te));return Q}}else{if(!(_||y&&e.length===1))if(d)for(let Q=1/13,ae=Q;ae<=1;ae+=Q){let Te=$r(E[0],Ve,Cr*ae);Ee.push(Te)}else{let Q=wt(x[0],E[0]),ae=St(Q,.5),Te=St(Q,.51);Ee.push(wt(Ve,ae),wt(Ve,Te),Et(Ve,Te),Et(Ve,ae))}let z=Pr(wv(e[e.length-1].vector));if(y||_&&e.length===1)Ae.push(Ue);else if(f){let Q=ba(Ue,z,B);for(let ae=1/29,Te=ae;Te<1;Te+=ae)Ae.push($r(Q,Ue,Cr*3*Te))}else Ae.push(Et(Ue,St(z,B)),Et(Ue,St(z,B*.99)),wt(Ue,St(z,B*.99)),wt(Ue,St(z,B)))}return x.concat(Ae,E.reverse(),Ee)}function Cv(e,t={}){var n;let{streamline:r=.5,size:o=16,last:s=!1}=t;if(e.length===0)return[];let i=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:_=.5})=>[m,g,_]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(ii(l[0],m,g/4))}l.length===1&&(l=[...l,[...Et(l[0],[1,1]),...l[0].slice(2)]]);let a=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,d=0,u=a[0],f=l.length-1;for(let m=1;m<l.length;m++){let g=s&&m===f?l[m].slice(0,2):ii(u.point,l[m],i);if(kv(u.point,g))continue;let _=Tv(g,u.point);if(d+=_,m<f&&!c){if(d<o)continue;c=!0}u={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:Su(wt(u.point,g)),distance:_,runningLength:d},a.push(u)}return a[0].vector=((n=a[1])==null?void 0:n.vector)||[0,0],a}function Ov(e,t={}){return $v(Cv(e,t),t)}var Iv=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let r=0,o=n.length;r<o;r++)n[r](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(o=>t!==o)}}});function qo(e,t){return e-t}function Av(e){return e<0?-1:1}function Vo(e){return[Math.abs(e),Av(e)]}function Eu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Rv=2,Zt=Rv,br=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,r=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const s=o.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:s.x*r,y:s.y*r,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",r.fill??"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Mv=class extends br{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Ov(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((r,[o,s],i,l)=>{const[a,c]=l[(i+1)%l.length];return r.push(o,s,(o+a)/2,(s+c)/2),r},["M",...t[0],"Q"]);return n.push("Z"),n.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Nv=class extends br{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vo(e.x-this.start.x),[r,o]=Vo(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,r);t=s,r=s}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[s,i]=[this.start.x,this.start.x+t*n].sort(qo),[l,a]=[this.start.y,this.start.y+r*o].sort(qo);this.attr("cx",(s+i)/2),this.attr("cy",(l+a)/2),this.attr("rx",(i-s)/2),this.attr("ry",(a-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Tu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),n.appendChild(r),n}var Lv=class extends br{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Eu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Tu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let s=r/o;s=Math.round(s),Math.abs(s)<=1?(t=this.start.x+o*s,n=this.start.y+o):(t=this.start.x+r,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Dv=class extends br{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vo(e.x-this.start.x),[r,o]=Vo(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,r);t=s,r=s}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[s,i]=[this.start.x,this.start.x+t*n].sort(qo),[l,a]=[this.start.y,this.start.y+r*o].sort(qo);this.attr("x",s),this.attr("y",l),this.attr("width",i-s),this.attr("height",a-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Fv(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function Hv(e,t,n){let r=t.x,o=t.y,s=n.x-r,i=n.y-o;if(s!==0||i!==0){const l=((e.x-r)*s+(e.y-o)*i)/(s*s+i*i);l>1?(r=n.x,o=n.y):l>0&&(r+=s*l,o+=i*l)}return s=e.x-r,i=e.y-o,s*s+i*i}function jv(e,t){let n=e[0];const r=[n];let o;for(let s=1,i=e.length;s<i;s++)o=e[s],Fv(o,n)>t&&(r.push(o),n=o);return n!==o&&o&&r.push(o),r}function li(e,t,n,r,o){let s=r,i=0;for(let l=t+1;l<n;l++){const a=Hv(e[l],e[t],e[n]);a>s&&(i=l,s=a)}s>r&&(i-t>1&&li(e,t,i,r,o),o.push(e[i]),n-i>1&&li(e,i,n,r,o))}function Bv(e,t){const n=e.length-1,r=[e[0]];return li(e,0,n,t,r),r.push(e[n]),r}function xa(e,t,n=!1){if(e.length<=2)return e;const r=t!==void 0?t*t:1;return e=n?e:jv(e,r),e=Bv(e,r),e}var zv=class extends br{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Eu();const t=Tu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=xa(this.points,1,!0),this.count=0),this.attr("d",Sa(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Sa(xa(this.points,1,!0))),!e.getTotalLength()))}};function qv(e,t){const n=t.x-e.x,r=t.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}function ka(e,t,n,r){const o=t||e,s=n||e,i=.2,l=qv(o,s),a=l.angle+(r?Math.PI:0),c=l.length*i,d=e.x+Math.cos(a)*c,u=e.y+Math.sin(a)*c;return{x:d,y:u}}function Vv(e,t,n){const r=ka(n[t-1],n[t-2],e),o=ka(e,n[t-1],n[t+1],!0);return`C ${r.x.toFixed(Zt)},${r.y.toFixed(Zt)} ${o.x.toFixed(Zt)},${o.y.toFixed(Zt)} ${e.x.toFixed(Zt)},${e.y.toFixed(Zt)}`}function Sa(e){return e.reduce((t,n,r,o)=>r===0?`M ${n.x.toFixed(Zt)},${n.y.toFixed(Zt)}`:`${t} ${Vv(n,r,o)}`,"")}var Uv=class extends br{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,r)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const s=n[o];if(s.getTotalLength){const i=s.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const a=s.getPointAtLength(i*l/this.pathSubFactor),c=s.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:a.x,x2:c.x,y1:a.y,y2:c.y,segment:l,element:r||s})}}else s.children&&t(s.children,s)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,r)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,r=e.x2,o=t.x1,s=t.x2,i=e.y1,l=e.y2,a=t.y1,c=t.y2,d=(n-r)*(a-c)-(i-l)*(o-s),u=(n*l-i*r)*(o-s)-(n-r)*(o*c-a*s),f=(n*l-i*r)*(a-c)-(i-l)*(o*c-a*s),m=(g,_,y)=>g>=_&&g<=y?!0:g>=y&&g<=_;if(d===0)return!1;{const g={x:u/d,y:f/d};return m(g.x,n,r)&&m(g.y,i,l)&&m(g.x,o,s)&&m(g.y,a,c)}}};function Kv(e){return{draw:new zv(e),stylus:new Mv(e),line:new Lv(e),rectangle:new Dv(e),ellipse:new Nv(e),eraseLine:new Uv(e)}}var Wv=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Iv(),this._models=Kv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),s=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",s,{passive:!1}),window.addEventListener("pointercancel",s,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Gv(e){return new Wv(e)}const ai=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],jt=At("slidev-drawing-enabled",!1),lk=At("slidev-drawing-pinned",!1),Yv=Y(!1),Jv=Y(!1),Zv=Y(!1),no=Y(!1),Ln=Ph(At("slidev-drawing-brush",{color:ai[0],size:4,mode:"stylus"})),Ea=Y("stylus"),Pu=O(()=>Ce.drawings.syncAll||Pt.value);let ro=!1;const Or=O({get(){return Ea.value},set(e){Ea.value=e,e==="arrow"?(Ln.mode="line",Ln.arrowEnd=!0):(Ln.mode=e,Ln.arrowEnd=!1)}}),Xv=Ge({brush:Ln,acceptsInputTypes:O(()=>jt.value&&(!Ce.drawings.presenterOnly||Pt.value)?void 0:["pen"]),coordinateTransform:!1}),st=yi(Gv(Xv));function Qv(){st.clear(),Pu.value&&Gc(qe.value,"")}function $u(){var e;Jv.value=st.canRedo(),Yv.value=st.canUndo(),Zv.value=!!((e=st.el)!=null&&e.children.length)}function e_(e){ro=!0;const t=Bo[e||qe.value];t!=null?st.load(t):st.clear(),ro=!1}st.on("changed",()=>{if($u(),!ro){const e=st.dump(),t=qe.value;(Bo[t]||"")!==e&&Pu.value&&Gc(t,st.dump())}});vh(e=>{ro=!0,e[qe.value]!=null&&st.load(e[qe.value]||""),ro=!1,$u()});Ot(()=>{Ne(qe,()=>{st.mounted&&e_()},{immediate:!0})});st.on("start",()=>no.value=!0);st.on("end",()=>no.value=!1);window.addEventListener("keydown",e=>{if(!jt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?st.redo():st.undo():e.code==="Escape"?jt.value=!1:e.code==="KeyL"&&t?Or.value="line":e.code==="KeyA"&&t?Or.value="arrow":e.code==="KeyS"&&t?Or.value="stylus":e.code==="KeyR"&&t?Or.value="rectangle":e.code==="KeyE"&&t?Or.value="ellipse":e.code==="KeyC"&&t?Qv():e.code.startsWith("Digit")&&t&&+e.code[5]<=ai.length?Ln.color=ai[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function He(...e){return O(()=>e.every(t=>ot(t)))}function dt(e){return O(()=>!ot(e))}const Ta=mm(),$s=At("slidev-color-schema","auto"),ci=O(()=>Ce.colorSchema!=="auto"),Fi=O({get(){return ci.value?Ce.colorSchema==="dark":$s.value==="auto"?Ta.value:$s.value==="dark"},set(e){ci.value||($s.value=e===Ta.value?"auto":e?"dark":"light")}}),Cu=Xc(Fi);It&&Ne(Fi,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Po=Y(1),$o=O(()=>Be.length-1),mt=Y(0),Hi=Y(0);function t_(){mt.value>Po.value&&(mt.value-=1)}function n_(){mt.value<$o.value&&(mt.value+=1)}function r_(){if(mt.value>Po.value){let e=mt.value-Hi.value;e<Po.value&&(e=Po.value),mt.value=e}}function o_(){if(mt.value<$o.value){let e=mt.value+Hi.value;e>$o.value&&(e=$o.value),mt.value=e}}function s_(){const{escape:e,space:t,shift:n,left:r,right:o,up:s,down:i,enter:l,d:a,g:c,o:d}=wu;let u=[{name:"next_space",key:He(t,dt(n)),fn:Vn,autoRepeat:!0},{name:"prev_space",key:He(t,n),fn:Un,autoRepeat:!0},{name:"next_right",key:He(o,dt(n),dt(nt)),fn:Vn,autoRepeat:!0},{name:"prev_left",key:He(r,dt(n),dt(nt)),fn:Un,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Vn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Un,autoRepeat:!0},{name:"next_down",key:He(i,dt(nt)),fn:Ko,autoRepeat:!0},{name:"prev_up",key:He(s,dt(nt)),fn:()=>Wo(!1),autoRepeat:!0},{name:"next_shift",key:He(o,n),fn:Ko,autoRepeat:!0},{name:"prev_shift",key:He(r,n),fn:()=>Wo(!1),autoRepeat:!0},{name:"toggle_dark",key:He(a,dt(jt)),fn:Cu},{name:"toggle_overview",key:He(d,dt(jt)),fn:ku},{name:"hide_overview",key:He(e,dt(jt)),fn:()=>nt.value=!1},{name:"goto",key:He(c,dt(jt)),fn:()=>cr.value=!cr.value},{name:"next_overview",key:He(o,nt),fn:n_},{name:"prev_overview",key:He(r,nt),fn:t_},{name:"up_overview",key:He(s,nt),fn:r_},{name:"down_overview",key:He(i,nt),fn:o_},{name:"goto_from_overview",key:He(l,nt),fn:()=>{_r(mt.value),nt.value=!1}}];const f=new Set(u.map(g=>g.name));if(u.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return u}const Ou=He(dt(yv),dt(bv),vv);function i_(e,t,n=!1){typeof e=="string"&&(e=wu[e]);const r=He(e,Ou);let o=0,s;const i=()=>{if(clearTimeout(s),!r.value){o=0;return}n&&(s=setTimeout(i,Math.max(1e3-o*250,150)),o++),t()};return Ne(r,i,{flush:"sync"})}function l_(e,t){return Xh(e,n=>{Ou.value&&(n.repeat||t())})}function a_(){const e=s_();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&i_(n.key,n.fn,n.autoRepeat)}),l_("f",()=>xu.toggle())}const c_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u_=p("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),d_=[u_];function f_(e,t){return T(),V("svg",c_,d_)}const p_={name:"carbon-close",render:f_};function ji(e){var n,r;const t=(r=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:r.no;return t!=null?`slidev-page-${t}`:""}const h_=Re({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;ee(ce);const n=Y(),r=$m(n),o=O(()=>t.width?t.width:r.width.value),s=O(()=>t.width?t.width/_n:r.height.value);t.width&&yr(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${s.value}px`)});const i=O(()=>o.value/s.value),l=O(()=>t.scale?t.scale:i.value<_n?o.value/yn:s.value*_n/yn),a=O(()=>({height:`${Ri}px`,width:`${yn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),c=O(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return ht(Kc,l),(d,u)=>(T(),V("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(b(c))},[p("div",{id:"slide-content",style:We(b(a))},[rn(d.$slots,"default")],4),rn(d.$slots,"controls")],2))}});const ue=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Iu=ue(h_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Bi=Re({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),r=Ht(e,"clicksElements",t),o=Ht(e,"clicksDisabled",t),s=Ht(e,"clicksOrderMap",t);r.value.length=0,ht(ih,e.route),ht(lh,e.context),ht(qc,n),ht(Uc,o),ht(Vc,r),ht(sh,s)},render(){var e,t;return this.$props.is?ds(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),m_=["innerHTML"],g_=Re({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return ee(ce),(t,n)=>b(Bo)[e.page]?(T(),V("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Bo)[e.page]},null,8,m_)):me("v-if",!0)}}),Au=ue(g_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),v_=Object.freeze(Object.defineProperty({__proto__:null,default:Au},Symbol.toStringTag,{value:"Module"})),__={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},y_=["onClick"],b_=Re({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;ee(ce);const r=Ht(n,"modelValue",t);function o(){r.value=!1}function s(m){_r(m),o()}function i(m){return m===mt.value}const l=si.smaller("xs"),a=si.smaller("sm"),c=4*16*2,d=2*16,u=O(()=>l.value?qn.width.value-c:a.value?(qn.width.value-c-d)/2:300),f=O(()=>Math.floor((qn.width.value-c)/(u.value+d)));return yr(()=>{mt.value=qe.value,Hi.value=f.value}),(m,g)=>{const _=p_;return T(),V(xe,null,[pr(p("div",__,[p("div",{class:"grid gap-y-4 gap-x-8 w-full",style:We(`grid-template-columns: repeat(auto-fit,minmax(${b(u)}px,1fr))`)},[(T(!0),V(xe,null,ao(b(Be).slice(0,-1),(y,S)=>(T(),V("div",{key:y.path,class:"relative"},[p("div",{class:Le(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(S+1),"border-gray-400":!i(S+1)}]),style:We(b(Mi)),onClick:x=>s(+y.path)},[(T(),ie(Iu,{key:y.path,width:b(u),"clicks-disabled":!0,class:"pointer-events-none"},{default:Se(()=>[G(b(Bi),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:Le(b(ji)(y)),route:y,context:"overview"},null,8,["is","class","route"]),G(Au,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,y_),p("div",{class:"absolute top-0 opacity-50",style:We(`left: ${b(u)+5}px`)},en(S+1),5)]))),128))],4)],512),[[zc,b(r)]]),b(r)?(T(),V("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[G(_)])):me("v-if",!0)],64)}}});const w_=ue(b_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),x_="/bookstore-api/assets/logo-b72bde5d.png",k_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},S_=Re({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;ee(ce);const r=Ht(n,"modelValue",t);function o(){r.value=!1}return(s,i)=>(T(),ie(yc,null,[b(r)?(T(),V("div",k_,[p("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>o())}),p("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[rn(s.$slots,"default")],2)])):me("v-if",!0)],1024))}}),E_=ue(S_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Modal.vue"]]),T_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},P_=["innerHTML"],$_=p("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[p("div",{class:"flex gap-1 children:my-auto"},[p("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),p("img",{class:"w-5 h-5",src:x_,alt:"Slidev"}),p("div",{style:{color:"#2082A6"}},[p("b",null,"Sli"),j("dev ")])])],-1),C_=Re({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;ee(ce);const r=Ht(n,"modelValue",t),o=O(()=>typeof Ce.info=="string");return(s,i)=>(T(),ie(E_,{modelValue:b(r),"onUpdate:modelValue":i[0]||(i[0]=l=>ye(r)?r.value=l:null),class:"px-6 py-4"},{default:Se(()=>[p("div",T_,[b(o)?(T(),V("div",{key:0,class:"mb-4",innerHTML:b(Ce).info},null,8,P_)):me("v-if",!0),$_])]),_:1},8,["modelValue"]))}});const O_=ue(C_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/InfoDialog.vue"]]),I_=["disabled","onKeydown"],A_=Re({__name:"Goto",setup(e){ee(ce);const t=Y(),n=Y(""),r=O(()=>{if(n.value.startsWith("/"))return!!Be.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Ju.value}});function o(){r.value&&(n.value.startsWith("/")?_r(n.value.substring(1)):_r(+n.value)),s()}function s(){cr.value=!1}return Ne(cr,async i=>{var l,a;i?(await Ot(),n.value="",(l=t.value)==null||l.focus()):(a=t.value)==null||a.blur()}),Ne(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,l)=>(T(),V("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",b(cr)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[pr(p("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),type:"text",disabled:!b(cr),class:Le(["outline-none bg-transparent",{"text-red-400":!b(r)&&n.value}]),placeholder:"Goto...",onKeydown:[Al(o,["enter"]),Al(s,["escape"])],onBlur:s},null,42,I_),[[Ys,n.value]])],2))}}),R_=ue(A_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Goto.vue"]]),M_=Re({__name:"Controls",setup(e){ee(ce);const t=zt(),n=zt();return(r,o)=>(T(),V(xe,null,[G(w_,{modelValue:b(nt),"onUpdate:modelValue":o[0]||(o[0]=s=>ye(nt)?nt.value=s:null)},null,8,["modelValue"]),G(R_),b(t)?(T(),ie(b(t),{key:0})):me("v-if",!0),b(n)?(T(),ie(b(n),{key:1,modelValue:b(Ts),"onUpdate:modelValue":o[1]||(o[1]=s=>ye(Ts)?Ts.value=s:null)},null,8,["modelValue"])):me("v-if",!0),b(Ce).info?(T(),ie(O_,{key:2,modelValue:b(zr),"onUpdate:modelValue":o[2]||(o[2]=s=>ye(zr)?zr.value=s:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),N_=ue(M_,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Controls.vue"]]),L_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D_=p("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),F_=[D_];function H_(e,t){return T(),V("svg",L_,F_)}const j_={name:"carbon-settings-adjust",render:H_},B_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z_=p("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),q_=p("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),V_=[z_,q_];function U_(e,t){return T(),V("svg",B_,V_)}const K_={name:"carbon-information",render:U_},W_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G_=p("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Y_=[G_];function J_(e,t){return T(),V("svg",W_,Y_)}const Z_={name:"carbon-download",render:J_},X_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q_=p("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),e0=p("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),t0=[Q_,e0];function n0(e,t){return T(),V("svg",X_,t0)}const r0={name:"carbon-user-speaker",render:n0},o0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s0=p("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),i0=p("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),l0=[s0,i0];function a0(e,t){return T(),V("svg",o0,l0)}const c0={name:"carbon-presentation-file",render:a0},u0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d0=p("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),f0=[d0];function p0(e,t){return T(),V("svg",u0,f0)}const h0={name:"carbon-pen",render:p0},m0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},g0=p("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),v0=p("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),_0=[g0,v0];function y0(e,t){return T(),V("svg",m0,_0)}const b0={name:"ph-cursor-duotone",render:y0},w0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},x0=p("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),k0=[x0];function S0(e,t){return T(),V("svg",w0,k0)}const Ru={name:"ph-cursor-fill",render:S0},E0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T0=p("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),P0=[T0];function $0(e,t){return T(),V("svg",E0,P0)}const C0={name:"carbon-sun",render:$0},O0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I0=p("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),A0=[I0];function R0(e,t){return T(),V("svg",O0,A0)}const M0={name:"carbon-moon",render:R0},N0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L0=p("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),D0=[L0];function F0(e,t){return T(),V("svg",N0,D0)}const H0={name:"carbon-apps",render:F0},j0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B0=p("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),z0=[B0];function q0(e,t){return T(),V("svg",j0,z0)}const Mu={name:"carbon-arrow-right",render:q0},V0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U0=p("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),K0=[U0];function W0(e,t){return T(),V("svg",V0,K0)}const G0={name:"carbon-arrow-left",render:W0},Y0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J0=p("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Z0=[J0];function X0(e,t){return T(),V("svg",Y0,Z0)}const Q0={name:"carbon-maximize",render:X0},e1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=p("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),n1=[t1];function r1(e,t){return T(),V("svg",e1,n1)}const o1={name:"carbon-minimize",render:r1},s1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i1=p("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),l1=[i1];function a1(e,t){return T(),V("svg",s1,l1)}const c1={name:"carbon-checkmark",render:a1},u1={class:"select-list"},d1={class:"title"},f1={class:"items"},p1=["onClick"],h1=Re({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;ee(ce);const r=Ht(n,"modelValue",t,{passive:!0});return(o,s)=>{const i=c1;return T(),V("div",u1,[p("div",d1,en(e.title),1),p("div",f1,[(T(!0),V(xe,null,ao(e.items,l=>(T(),V("div",{key:l.value,class:Le(["item",{active:b(r)===l.value}]),onClick:()=>{var a;r.value=l.value,(a=l.onClick)==null||a.call(l)}},[G(i,{class:Le(["text-green-500",{"opacity-0":b(r)!==l.value}])},null,8,["class"]),j(" "+en(l.display||l.value),1)],10,p1))),128))])])}}});const m1=ue(h1,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/SelectList.vue"]]),g1={class:"text-sm"},v1=Re({__name:"Settings",setup(e){ee(ce);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,r)=>(T(),V("div",g1,[G(m1,{modelValue:b(To),"onUpdate:modelValue":r[0]||(r[0]=o=>ye(To)?To.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),_1=ue(v1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Settings.vue"]]),y1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},b1=Re({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;ee(ce);const r=Ht(n,"modelValue",t,{passive:!0}),o=Y();return Jh(o,()=>{r.value=!1}),(s,i)=>(T(),V("div",{ref_key:"el",ref:o,class:"flex relative"},[p("button",{class:Le({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>r.value=!b(r))},[rn(s.$slots,"button",{class:Le({disabled:e.disabled})})],2),(T(),ie(yc,null,[b(r)?(T(),V("div",y1,[rn(s.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),w1=ue(b1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/MenuButton.vue"]]),x1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},k1={__name:"VerticalDivider",setup(e){return ee(ce),(t,n)=>(T(),V("div",x1))}},wo=ue(k1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),S1={render(){return[]}},E1={class:"icon-btn"},T1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},P1={class:"my-auto"},$1={class:"opacity-50"},C1=Re({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;ee(ce);const n=si.smaller("md"),{isFullscreen:r,toggle:o}=xu,s=O(()=>di.value?`?password=${di.value}`:""),i=O(()=>`/presenter/${qe.value}${s.value}`),l=O(()=>`/${qe.value}${s.value}`),a=Y(),c=()=>{a.value&&mr.value&&a.value.contains(mr.value)&&mr.value.blur()},d=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),u=zt(),f=zt();return Yn(()=>import("./DrawingControls-29430821.js"),[]).then(m=>f.value=m.default),(m,g)=>{const _=o1,y=Q0,S=G0,x=Mu,E=H0,C=M0,B=C0,F=Ru,D=b0,J=h0,re=c0,de=Df("RouterLink"),ge=r0,Me=Z_,Ve=K_,Ue=j_;return T(),V("nav",{ref_key:"root",ref:a,class:"flex flex-col"},[p("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:c},[b(Yt)?me("v-if",!0):(T(),V("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Ee)=>b(o)&&b(o)(...Ee))},[b(r)?(T(),ie(_,{key:0})):(T(),ie(y,{key:1}))])),p("button",{class:Le(["icon-btn",{disabled:!b(Nx)}]),onClick:g[1]||(g[1]=(...Ee)=>b(Un)&&b(Un)(...Ee))},[G(S)],2),p("button",{class:Le(["icon-btn",{disabled:!b(Mx)}]),title:"Next",onClick:g[2]||(g[2]=(...Ee)=>b(Vn)&&b(Vn)(...Ee))},[G(x)],2),b(Yt)?me("v-if",!0):(T(),V("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Ee=>b(ku)())},[G(E)])),b(ci)?me("v-if",!0):(T(),V("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Ee=>b(Cu)())},[b(Fi)?(T(),ie(C,{key:0})):(T(),ie(B,{key:1}))])),G(wo),b(Yt)?me("v-if",!0):(T(),V(xe,{key:3},[!b(Pt)&&!b(n)&&b(u)?(T(),V(xe,{key:0},[G(b(u)),G(wo)],64)):me("v-if",!0),b(Pt)?(T(),V("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Ee=>Ps.value=!b(Ps))},[b(Ps)?(T(),ie(F,{key:0})):(T(),ie(D,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),(!b(Ce).drawings.presenterOnly||b(Pt))&&!b(Yt)?(T(),V(xe,{key:4},[p("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Ee=>jt.value=!b(jt))},[G(J),b(jt)?(T(),V("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:We({background:b(Ln).color})},null,4)):me("v-if",!0)]),G(wo)],64)):me("v-if",!0),b(Yt)?me("v-if",!0):(T(),V(xe,{key:5},[b(Pt)?(T(),ie(de,{key:0,to:b(l),class:"icon-btn",title:"Play Mode"},{default:Se(()=>[G(re)]),_:1},8,["to"])):me("v-if",!0),b(Ix)?(T(),ie(de,{key:1,to:b(i),class:"icon-btn",title:"Presenter Mode"},{default:Se(()=>[G(ge)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(T(),V(xe,{key:6},[b(Ce).download?(T(),V("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Ee)=>b(Ra)&&b(Ra)(...Ee))},[G(Me)])):me("v-if",!0)],64)),!b(Pt)&&b(Ce).info&&!b(Yt)?(T(),V("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Ee=>zr.value=!b(zr))},[G(Ve)])):me("v-if",!0),!b(Pt)&&!b(Yt)?(T(),ie(w1,{key:8},{button:Se(()=>[p("button",E1,[G(Ue)])]),menu:Se(()=>[G(_1)]),_:1})):me("v-if",!0),b(Yt)?me("v-if",!0):(T(),ie(wo,{key:9})),p("div",T1,[p("div",P1,[j(en(b(qe))+" ",1),p("span",$1,"/ "+en(b(Ju)),1)])]),G(b(S1))],34)],512)}}}),O1=ue(C1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/NavControls.vue"]]),Nu={render(){return[]}},Lu={render(){return[]}},I1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},A1=Re({__name:"PresenterMouse",setup(e){return ee(ce),(t,n)=>{const r=Ru;return b(xs).cursor?(T(),V("div",I1,[G(r,{class:"absolute",style:We({left:`${b(xs).cursor.x}%`,top:`${b(xs).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),R1=ue(A1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),M1=Re({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){ee(ce),Ne(pt,()=>{var n,r;(n=pt.value)!=null&&n.meta&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),(r=Cs.value)!=null&&r.meta&&Cs.value.meta.preload!==!1&&(Cs.value.meta.__preloaded=!0)},{immediate:!0});const t=zt();return Yn(()=>import("./DrawingLayer-a5af9836.js"),[]).then(n=>t.value=n.default),(n,r)=>(T(),V(xe,null,[me(" Global Bottom "),G(b(Lu)),me(" Slides "),(T(!0),V(xe,null,ao(b(Be),o=>{var s,i;return T(),V(xe,{key:o.path},[(s=o.meta)!=null&&s.__preloaded||o===b(pt)?pr((T(),ie(b(Bi),{key:0,is:o==null?void 0:o.component,clicks:o===b(pt)?b(Jn):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Le(b(ji)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[zc,o===b(pt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),G(b(Nu)),b(t)?(T(),ie(b(t),{key:0})):me("v-if",!0),b(Pt)?me("v-if",!0):(T(),ie(R1,{key:1}))],64))}}),N1=ue(M1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/SlidesShow.vue"]]),L1=Re({__name:"Play",setup(e){ee(ce),a_();const t=Y();function n(s){var i;ga.value||((i=s.target)==null?void 0:i.id)==="slide-container"&&(s.screenX/window.innerWidth>.6?Vn():Un())}Fx(t);const r=O(()=>_v.value||ga.value);zt();const o=zt();return Yn(()=>import("./DrawingControls-29430821.js"),[]).then(s=>o.value=s.default),(s,i)=>(T(),V(xe,null,[p("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:We(b(Mi))},[G(Iu,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:b(Ui)?b(qn).width.value:void 0,scale:b(To),onPointerdown:n},{default:Se(()=>[G(N1,{context:"slide"})]),controls:Se(()=>[p("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(r)?"opacity-100 right-0":"opacity-0 p-2",b(no)?"pointer-events-none":""]])},[G(O1,{class:"m-auto",persist:b(r)},null,8,["persist"])],2),!b(Ce).drawings.presenterOnly&&!b(Yt)&&b(o)?(T(),ie(b(o),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),G(N_)],64))}}),D1=ue(L1,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Du(e){return typeof e>"u"||e===null}function F1(e){return typeof e=="object"&&e!==null}function H1(e){return Array.isArray(e)?e:Du(e)?[]:[e]}function j1(e,t){var n,r,o,s;if(t)for(s=Object.keys(t),n=0,r=s.length;n<r;n+=1)o=s[n],e[o]=t[o];return e}function B1(e,t){var n="",r;for(r=0;r<t;r+=1)n+=e;return n}function z1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var q1=Du,V1=F1,U1=H1,K1=B1,W1=z1,G1=j1,zi={isNothing:q1,isObject:V1,toArray:U1,repeat:K1,isNegativeZero:W1,extend:G1};function Fu(e,t){var n="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),r+" "+n):r}function oo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Fu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}oo.prototype=Object.create(Error.prototype);oo.prototype.constructor=oo;oo.prototype.toString=function(t){return this.name+": "+Fu(this,t)};var Rn=oo,Y1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],J1=["scalar","sequence","mapping"];function Z1(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(r){t[String(r)]=n})}),t}function X1(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Y1.indexOf(n)===-1)throw new Rn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Z1(t.styleAliases||null),J1.indexOf(this.kind)===-1)throw new Rn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ze=X1;function Pa(e,t){var n=[];return e[t].forEach(function(r){var o=n.length;n.forEach(function(s,i){s.tag===r.tag&&s.kind===r.kind&&s.multi===r.multi&&(o=i)}),n[o]=r}),n}function Q1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(r);return e}function ui(e){return this.extend(e)}ui.prototype.extend=function(t){var n=[],r=[];if(t instanceof Ze)r.push(t);else if(Array.isArray(t))r=r.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(r=r.concat(t.explicit));else throw new Rn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(s){if(!(s instanceof Ze))throw new Rn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(s.loadKind&&s.loadKind!=="scalar")throw new Rn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(s.multi)throw new Rn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(s){if(!(s instanceof Ze))throw new Rn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ui.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Pa(o,"implicit"),o.compiledExplicit=Pa(o,"explicit"),o.compiledTypeMap=Q1(o.compiledImplicit,o.compiledExplicit),o};var ey=ui,ty=new Ze("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ny=new Ze("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ry=new Ze("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),oy=new ey({explicit:[ty,ny,ry]});function sy(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function iy(){return null}function ly(e){return e===null}var ay=new Ze("tag:yaml.org,2002:null",{kind:"scalar",resolve:sy,construct:iy,predicate:ly,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function cy(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function uy(e){return e==="true"||e==="True"||e==="TRUE"}function dy(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var fy=new Ze("tag:yaml.org,2002:bool",{kind:"scalar",resolve:cy,construct:uy,predicate:dy,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function py(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function hy(e){return 48<=e&&e<=55}function my(e){return 48<=e&&e<=57}function gy(e){if(e===null)return!1;var t=e.length,n=0,r=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!py(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!hy(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!my(e.charCodeAt(n)))return!1;r=!0}return!(!r||o==="_")}function vy(e){var t=e,n=1,r;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),r=t[0],(r==="-"||r==="+")&&(r==="-"&&(n=-1),t=t.slice(1),r=t[0]),t==="0")return 0;if(r==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function _y(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!zi.isNegativeZero(e)}var yy=new Ze("tag:yaml.org,2002:int",{kind:"scalar",resolve:gy,construct:vy,predicate:_y,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),by=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function wy(e){return!(e===null||!by.test(e)||e[e.length-1]==="_")}function xy(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var ky=/^[-+]?[0-9]+e/;function Sy(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(zi.isNegativeZero(e))return"-0.0";return n=e.toString(10),ky.test(n)?n.replace("e",".e"):n}function Ey(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||zi.isNegativeZero(e))}var Ty=new Ze("tag:yaml.org,2002:float",{kind:"scalar",resolve:wy,construct:xy,predicate:Ey,represent:Sy,defaultStyle:"lowercase"}),Py=oy.extend({implicit:[ay,fy,yy,Ty]}),$y=Py,Hu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ju=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Cy(e){return e===null?!1:Hu.exec(e)!==null||ju.exec(e)!==null}function Oy(e){var t,n,r,o,s,i,l,a=0,c=null,d,u,f;if(t=Hu.exec(e),t===null&&(t=ju.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],r=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,r,o));if(s=+t[4],i=+t[5],l=+t[6],t[7]){for(a=t[7].slice(0,3);a.length<3;)a+="0";a=+a}return t[9]&&(d=+t[10],u=+(t[11]||0),c=(d*60+u)*6e4,t[9]==="-"&&(c=-c)),f=new Date(Date.UTC(n,r,o,s,i,l,a)),c&&f.setTime(f.getTime()-c),f}function Iy(e){return e.toISOString()}var Ay=new Ze("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Cy,construct:Oy,instanceOf:Date,represent:Iy});function Ry(e){return e==="<<"||e===null}var My=new Ze("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ry}),qi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ny(e){if(e===null)return!1;var t,n,r=0,o=e.length,s=qi;for(n=0;n<o;n++)if(t=s.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;r+=6}return r%8===0}function Ly(e){var t,n,r=e.replace(/[\r\n=]/g,""),o=r.length,s=qi,i=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|s.indexOf(r.charAt(t));return n=o%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function Dy(e){var t="",n=0,r,o,s=e.length,i=qi;for(r=0;r<s;r++)r%3===0&&r&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[r];return o=s%3,o===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):o===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):o===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Fy(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Hy=new Ze("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ny,construct:Ly,predicate:Fy,represent:Dy}),jy=Object.prototype.hasOwnProperty,By=Object.prototype.toString;function zy(e){if(e===null)return!0;var t=[],n,r,o,s,i,l=e;for(n=0,r=l.length;n<r;n+=1){if(o=l[n],i=!1,By.call(o)!=="[object Object]")return!1;for(s in o)if(jy.call(o,s))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(s)===-1)t.push(s);else return!1}return!0}function qy(e){return e!==null?e:[]}var Vy=new Ze("tag:yaml.org,2002:omap",{kind:"sequence",resolve:zy,construct:qy}),Uy=Object.prototype.toString;function Ky(e){if(e===null)return!0;var t,n,r,o,s,i=e;for(s=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(r=i[t],Uy.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;s[t]=[o[0],r[o[0]]]}return!0}function Wy(e){if(e===null)return[];var t,n,r,o,s,i=e;for(s=new Array(i.length),t=0,n=i.length;t<n;t+=1)r=i[t],o=Object.keys(r),s[t]=[o[0],r[o[0]]];return s}var Gy=new Ze("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ky,construct:Wy}),Yy=Object.prototype.hasOwnProperty;function Jy(e){if(e===null)return!0;var t,n=e;for(t in n)if(Yy.call(n,t)&&n[t]!==null)return!1;return!0}function Zy(e){return e!==null?e:{}}var Xy=new Ze("tag:yaml.org,2002:set",{kind:"mapping",resolve:Jy,construct:Zy});$y.extend({implicit:[Ay,My],explicit:[Hy,Vy,Gy,Xy]});function $a(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Qy=new Array(256),eb=new Array(256);for(var sr=0;sr<256;sr++)Qy[sr]=$a(sr)?1:0,eb[sr]=$a(sr);function tb(e){return Array.from(new Set(e))}function Ca(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;const o=[];let s=t;for(;s<n;)o.push(s),s+=r||1;return o}function Bu(e,t){if(!t||t==="all"||t==="*")return Ca(1,e+1);const n=[];for(const r of t.split(/[,;]/g))if(!r.includes("-"))n.push(+r);else{const[o,s]=r.split("-",2);n.push(...Ca(+o,s?+s+1:e+1))}return tb(n).filter(r=>r<=e).sort((r,o)=>r-o)}function nb(e){const t=O(()=>e.value.path),n=O(()=>Be.length-1),r=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=O(()=>Ki(r.value)),s=O(()=>Be.find(f=>f.path===`${r.value}`)),i=O(()=>{var f,m,g;return(g=(m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=O(()=>{var f,m;return((m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.layout)||(r.value===1?"cover":"default")}),a=O(()=>Be.find(f=>f.path===`${Math.min(Be.length,r.value+1)}`)),c=O(()=>Be.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(Wi(f,m),f),[])),d=O(()=>Gi(c.value,s.value)),u=O(()=>Yi(d.value));return{route:e,path:t,total:n,currentPage:r,currentPath:o,currentRoute:s,currentSlideId:i,currentLayout:l,nextRoute:a,rawTree:c,treeWithActiveStatuses:d,tree:u}}function rb(e,t,n){const r=Y(0);Ot(()=>{bn.afterEach(async()=>{await Ot(),r.value+=1})});const o=O(()=>{var a,c;return r.value,((c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.__clicksElements)||[]}),s=O(()=>{var a,c;return+(((c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.clicks)??o.value.length)}),i=O(()=>n.value<Be.length-1||e.value<s.value),l=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:s,hasNext:i,hasPrev:l}}const ob=["id"],sb=Re({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,r=Ht(n,"clicksElements",t),o=O(()=>({height:`${Ri}px`,width:`${yn}px`})),s=zt();Yn(()=>Promise.resolve().then(()=>v_),void 0).then(c=>s.value=c.default);const i=O(()=>n.clicks),l=rb(i,n.nav.currentRoute,n.nav.currentPage),a=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return ht(ce,Ge({nav:{...n.nav,...l},configs:Ce,themeConfigs:O(()=>Ce.themeConfig)})),(c,d)=>{var u;return T(),V("div",{id:b(a),class:"slide-container",style:We(b(o))},[G(b(Lu)),G(b(Bi),{is:(u=e.route)==null?void 0:u.component,"clicks-elements":b(r),"onUpdate:clicks-elements":d[0]||(d[0]=f=>ye(r)?r.value=f:null),clicks:b(i),"clicks-disabled":!1,class:Le(b(ji)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(s)?(T(),ie(b(s),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),G(b(Nu))],12,ob)}}}),Oa=ue(sb,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),ib=Re({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var s;const t=e;ee(ce);const n=Ge(((s=t.route.meta)==null?void 0:s.__clicksElements)||[]),r=O(()=>t.route),o=nb(r);return(i,l)=>(T(),V(xe,null,[G(Oa,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=a=>n=a),clicks:0,nav:b(o),route:b(r)},null,8,["clicks-elements","nav","route"]),b(Yu)?me("v-if",!0):(T(!0),V(xe,{key:0},ao(n.length,a=>(T(),ie(Oa,{key:a,clicks:a,nav:b(o),route:b(r)},null,8,["clicks","nav","route"]))),128))],64))}}),lb=ue(ib,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ab={id:"print-content"},cb=Re({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;ee(ce);const n=O(()=>t.width),r=O(()=>t.width/_n),o=O(()=>n.value/r.value),s=O(()=>o.value<_n?n.value/yn:r.value*_n/yn);let i=Be.slice(0,-1);Vt.value.query.range&&(i=Bu(i.length,Vt.value.query.range).map(c=>i[c-1]));const l=O(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return ht(Kc,s),(a,c)=>(T(),V("div",{id:"print-container",class:Le(b(l))},[p("div",ab,[(T(!0),V(xe,null,ao(b(i),d=>(T(),ie(lb,{key:d.path,route:d},null,8,["route"]))),128))]),rn(a.$slots,"controls")],2))}});const ub=ue(cb,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/PrintContainer.vue"]]),db=Re({__name:"Print",setup(e){ee(ce);function t(n,{slots:r}){if(r.default)return ds("style",r.default())}return yr(()=>{Ui?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,r)=>(T(),V(xe,null,[G(t,null,{default:Se(()=>[j(" @page { size: "+en(b(yn))+"px "+en(b(Ri))+"px; margin: 0px; } ",1)]),_:1}),p("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:We(b(Mi))},[G(ub,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:b(qn).width.value},null,8,["style","width"])],4)],64))}});const fb=ue(db,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/internals/Print.vue"]]);const pb={class:"slidev-layout end"},hb={__name:"end",setup(e){return ee(ce),(t,n)=>(T(),V("div",pb," END "))}},mb=ue(hb,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/layouts/end.vue"]]),gb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vb=p("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),_b=[vb];function yb(e,t){return T(),V("svg",gb,_b)}const zu={name:"carbon-logo-github",render:yb};function Ia(e){return e.startsWith("/")?"/bookstore-api/"+e.slice(1):e}function bb(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Ia(e)})`:`url("${Ia(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const wb={class:"my-auto w-full"},xb=Re({__name:"cover",props:{background:{default:""}},setup(e){const t=e;ee(ce);const n=O(()=>bb(t.background,!0));return(r,o)=>(T(),V("div",{class:"slidev-layout cover",style:We(b(n))},[p("div",wb,[rn(r.$slots,"default")])],4))}}),fo=ue(xb,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/theme-default/layouts/cover.vue"]]),kb=p("h1",null,"Designing RESTful APIs",-1),Sb=p("p",null,"BrockCSC Workshop",-1),Eb={class:"pt-12"},Tb={class:"abs-br m-6 flex gap-2"},Pb={href:"https://github.com/BrockCSC/",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},$b={__name:"1",setup(e){const t={theme:"seriph",layout:"cover",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./pages/cover.md"},n=ee(ce);return(r,o)=>{const s=Mu,i=zu;return T(),ie(fo,it(Qe(t)),{default:Se(()=>[kb,Sb,p("div",Eb,[p("span",{onClick:o[0]||(o[0]=(...l)=>b(n).nav.next&&b(n).nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[j(" Press Space for next page "),G(s,{class:"inline"})])]),p("div",Tb,[p("a",Pb,[G(i)])])]),_:1},16)}}},Cb=ue($b,[["__file","/@slidev/slides/1.md"]]),Ob={class:"slidev-layout default"},Ib={__name:"default",setup(e){return ee(ce),(t,n)=>(T(),V("div",Ob,[rn(t.$slots,"default")]))}},Ut=ue(Ib,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/layouts/default.vue"]]);const qu=e=>(_t("data-v-ae5e7f61"),e=e(),yt(),e),Ab=qu(()=>p("h1",null,"Overview",-1)),Rb=qu(()=>p("ul",null,[p("li",null,"What is a RESTful API?"),p("li",null,"How does HTTP work?"),p("li",null,"Examples of RESTful APIs"),p("li",null,"Designing our custom API"),p("li",null,"Conclusion")],-1)),Mb={__name:"2",setup(e){const t={};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[Ab,Rb]),_:1},16))}},Nb=ue(Mb,[["__scopeId","data-v-ae5e7f61"],["__file","/@slidev/slides/2.md"]]);const Lb=e=>(_t("data-v-1475a574"),e=e(),yt(),e),Db=Lb(()=>p("h1",null,"RESTful API",-1)),Fb={__name:"3",setup(e){const t={theme:"seriph",layout:"cover",srcSequence:"./pages/restful-api.md"};return ee(ce),(n,r)=>(T(),ie(fo,it(Qe(t)),{default:Se(()=>[Db]),_:1},16))}},Hb=ue(Fb,[["__scopeId","data-v-1475a574"],["__file","/@slidev/slides/3.md"]]);const Vu=e=>(_t("data-v-7c118cf2"),e=e(),yt(),e),jb=Vu(()=>p("h1",null,"API",-1)),Bb=Vu(()=>p("p",null,"Application Programming Interface",-1)),zb={__name:"4",setup(e){const t={theme:"seriph",srcSequence:"./pages/restful-api.md"};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[jb,Bb]),_:1},16))}},qb=ue(zb,[["__scopeId","data-v-7c118cf2"],["__file","/@slidev/slides/4.md"]]);const Rt=e=>(_t("data-v-90fd6163"),e=e(),yt(),e),Vb=Rt(()=>p("h1",null,"REST",-1)),Ub=Rt(()=>p("p",null,[j("Representational State Transfer"),p("sup",{class:"footnote-ref"},[p("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1)),Kb=Rt(()=>p("ol",null,[p("li",null,"Client-Server communication"),p("li",null,"Stateless"),p("li",null,"Cacheable"),p("li",null,"Uniform Interface"),p("li",null,"Layered System"),p("li",null,"Code-On-Demand (Optional)")],-1)),Wb=Rt(()=>p("br",null,null,-1)),Gb=Rt(()=>p("br",null,null,-1)),Yb=Rt(()=>p("br",null,null,-1)),Jb=Rt(()=>p("br",null,null,-1)),Zb=Rt(()=>p("br",null,null,-1)),Xb=Rt(()=>p("br",null,null,-1)),Qb=Rt(()=>p("hr",{class:"footnotes-sep"},null,-1)),ew=Rt(()=>p("section",{class:"footnotes"},[p("ol",{class:"footnotes-list"},[p("li",{id:"fn1",class:"footnote-item"},[p("p",null,[p("a",{href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",target:"_blank",rel:"noopener"},'Fielding, Roy Thomas (2000). "Chapter 5: Representational State Transfer (REST)". Architectural Styles and the Design of Network-based Software Architectures (Ph.D.). University of California, Irvine.'),j(),p("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1)),tw={__name:"5",setup(e){const t={theme:"seriph",srcSequence:"./pages/restful-api.md"};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[Vb,Ub,Kb,Wb,Gb,Yb,Jb,Zb,Xb,Qb,ew]),_:1},16))}},nw=ue(tw,[["__scopeId","data-v-90fd6163"],["__file","/@slidev/slides/5.md"]]);const rw=e=>(_t("data-v-2abe3208"),e=e(),yt(),e),ow=rw(()=>p("h1",null,"HTTP",-1)),sw={__name:"6",setup(e){const t={theme:"seriph",layout:"cover",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>(T(),ie(fo,it(Qe(t)),{default:Se(()=>[ow]),_:1},16))}},iw=ue(sw,[["__scopeId","data-v-2abe3208"],["__file","/@slidev/slides/6.md"]]);const lw=e=>(_t("data-v-0feb3694"),e=e(),yt(),e),aw=lw(()=>p("div",{style:{display:"flex"}},[p("div",{style:{display:"inline-block"}},[p("p",{class:"scheme"},"https://"),p("p",{class:"scheme"},"scheme")]),p("div",{style:{display:"inline-block"}},[p("p",{class:"domain"},"api.books.com"),p("p",{class:"domain"},"domain")]),p("div",{style:{display:"inline-block"}},[p("p",{class:"path"},"/books/trending"),p("p",{class:"path"},"path")]),p("div",{style:{display:"inline-block"}},[p("p",{class:"query-params"},"?max_books=5&sort=ascending"),p("p",{class:"query-params"},"query parameters")])],-1)),cw={__name:"7",setup(e){const t={theme:"seriph",layout:"cover",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>(T(),ie(fo,it(Qe(t)),{default:Se(()=>[aw]),_:1},16))}},uw=ue(cw,[["__scopeId","data-v-0feb3694"],["__file","/@slidev/slides/7.md"]]);const Tn=e=>(_t("data-v-1361642a"),e=e(),yt(),e),dw=Tn(()=>p("h1",null,"HTTP Request Methods",-1)),fw=Tn(()=>p("ol",null,[p("li",null,"GET"),p("li",null,"POST"),p("li",null,"PUT"),p("li",null,"PATCH"),p("li",null,"DELETE")],-1)),pw=Tn(()=>p("br",null,null,-1)),hw=Tn(()=>p("hr",null,null,-1)),mw=Tn(()=>p("br",null,null,-1)),gw=Tn(()=>p("h1",null,"HTTP Request Body",-1)),vw=Tn(()=>p("p",null,"can be any textual data",-1)),_w=Tn(()=>p("ul",null,[p("li",null,"JSON"),p("li",null,"XML")],-1)),yw={__name:"8",setup(e){const t={theme:"seriph",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[dw,fw,pw,hw,mw,gw,vw,_w]),_:1},16))}},bw=ue(yw,[["__scopeId","data-v-1361642a"],["__file","/@slidev/slides/8.md"]]),ww={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},xw=p("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),kw=[xw];function Sw(e,t){return T(),V("svg",ww,kw)}const Ew={name:"ph-clipboard",render:Sw},Tw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Pw=p("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),$w=[Pw];function Cw(e,t){return T(),V("svg",Tw,$w)}const Ow={name:"ph-check-circle",render:Cw},Iw=["title"],Aw=Re({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;ee(ce);const n=ee(qc),r=ee(Vc),o=ee(Uc);function s(u=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let _=0;_<u;_++)f.push(m.charAt(Math.floor(Math.random()*g)));return f.join("")}const i=Y(),l=En();is(()=>{const u=t.at==null?r==null?void 0:r.value.length:t.at,f=O(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(u||0)),t.ranges.length-1)),m=O(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const g=s(),_=uh(t.ranges.length-1).map(y=>g+y);r!=null&&r.value&&(r.value.push(..._),ls(()=>_.forEach(y=>ch(r.value,y)),l))}yr(()=>{if(!i.value)return;const _=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const y of _){const S=Array.from(y.querySelectorAll(".line")),x=Bu(S.length,m.value);if(S.forEach((E,C)=>{const B=x.includes(C+1);E.classList.toggle(ah,!0),E.classList.toggle("highlighted",B),E.classList.toggle("dishonored",!B)}),t.maxHeight){const E=y.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:a,copy:c}=im();function d(){var f,m;const u=(m=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;u&&c(u)}return(u,f)=>{const m=Ow,g=Ew;return T(),V("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:We({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[rn(u.$slots,"default"),b(Ce).codeCopy?(T(),V("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(a)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>d())},[b(a)?(T(),ie(m,{key:0,class:"p-2 w-8 h-8"})):(T(),ie(g,{key:1,class:"p-2 w-8 h-8"}))],8,Iw)):me("v-if",!0)],4)}}}),Vi=ue(Aw,[["__file","/home/runner/work/bookstore-api/bookstore-api/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);const ps=e=>(_t("data-v-96ebd1d8"),e=e(),yt(),e),Rw=ps(()=>p("h1",null,"Example",-1)),Mw=ps(()=>p("pre",{class:"slidev-code language-http"},[p("code",null,[p("span",{class:"line"},"# Get Request"),j(`
`),p("span",{class:"line"},[p("span",{class:"token request-line"},[p("span",{class:"token method property"},"GET"),j(),p("span",{class:"token request-target url"},"https://jsonplaceholder.typicode.com/todos/18"),j(),p("span",{class:"token http-version property"},"HTTP/1.1")])])])],-1)),Nw=ps(()=>p("br",null,null,-1)),Lw=ps(()=>p("pre",{class:"slidev-code language-http"},[p("code",null,[p("span",{class:"line"},"# Post Request"),j(`
`),p("span",{class:"line"},[p("span",{class:"token request-line"},[p("span",{class:"token method property"},"POST"),j(),p("span",{class:"token request-target url"},"https://jsonplaceholder.typicode.com/todos"),j(),p("span",{class:"token http-version property"},"HTTP/1.1")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Content-Type"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"application/json")])]),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"{"),j(`
`),p("span",{class:"line"},'  "userId": 1,'),j(`
`),p("span",{class:"line"},'  "title": "lorem ipsum",'),j(`
`),p("span",{class:"line"},'  "completed": false'),j(`
`),p("span",{class:"line"},"}")])],-1)),Dw={__name:"9",setup(e){const t={theme:"seriph",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>{const o=Vi;return T(),ie(Ut,it(Qe(t)),{default:Se(()=>[Rw,G(o,Jr({},{ranges:[""]}),{default:Se(()=>[Mw]),_:1},16),Nw,G(o,Jr({},{ranges:[""]}),{default:Se(()=>[Lw]),_:1},16)]),_:1},16)}}},Fw=ue(Dw,[["__scopeId","data-v-96ebd1d8"],["__file","/@slidev/slides/9.md"]]);const ln=e=>(_t("data-v-e0c37f54"),e=e(),yt(),e),Hw=ln(()=>p("h1",null,"HTTP Response Status Code",-1)),jw=ln(()=>p("p",null,[p("a",{href:"https://http.cat/",target:"_blank",rel:"noopener"},"https://http.cat/")],-1)),Bw=ln(()=>p("ul",null,[p("li",null,"200 - OK"),p("li",null,"201 - Created"),p("li",null,"404 - Not Found"),p("li",null,"500 - Internal Server Error")],-1)),zw=ln(()=>p("br",null,null,-1)),qw=ln(()=>p("hr",null,null,-1)),Vw=ln(()=>p("br",null,null,-1)),Uw=ln(()=>p("h1",null,"HTTP Response Body",-1)),Kw=ln(()=>p("p",null,"can be any textual data",-1)),Ww=ln(()=>p("ul",null,[p("li",null,"JSON"),p("li",null,"XML")],-1)),Gw={__name:"10",setup(e){const t={theme:"seriph",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[Hw,jw,Bw,zw,qw,Vw,Uw,Kw,Ww]),_:1},16))}},Yw=ue(Gw,[["__scopeId","data-v-e0c37f54"],["__file","/@slidev/slides/10.md"]]);const Uu=e=>(_t("data-v-71d1590b"),e=e(),yt(),e),Jw=Uu(()=>p("h1",null,"Get todo with id=18",-1)),Zw=Uu(()=>p("pre",{class:"slidev-code language-http"},[p("code",null,[p("span",{class:"line"},"# HTTP Request"),j(`
`),p("span",{class:"line"},[p("span",{class:"token request-line"},[p("span",{class:"token method property"},"GET"),j(),p("span",{class:"token request-target url"},"https://jsonplaceholder.typicode.com/todos/18"),j(),p("span",{class:"token http-version property"},"HTTP/1.1")])]),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"# HTTP Response"),j(`
`),p("span",{class:"line"},[p("span",{class:"token response-status"},[p("span",{class:"token http-version property"},"HTTP/1.1"),j(),p("span",{class:"token status-code number"},"200"),j(),p("span",{class:"token reason-phrase string"},"OK")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Date"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"Fri, 20 Jan 2023 23:55:26 GMT")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Content-Type"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"application/json; charset=utf-8")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Transfer-Encoding"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"chunked")])]),j(`
`),p("span",{class:"line"},"# ... (other headers) ..."),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"{"),j(`
`),p("span",{class:"line"},'  "userId": 1,'),j(`
`),p("span",{class:"line"},'  "id": 18,'),j(`
`),p("span",{class:"line"},'  "title": "dolorum est consequatur ea mollitia in culpa",'),j(`
`),p("span",{class:"line"},'  "completed": false'),j(`
`),p("span",{class:"line"},"}")])],-1)),Xw={__name:"11",setup(e){const t={theme:"seriph",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>{const o=Vi;return T(),ie(Ut,it(Qe(t)),{default:Se(()=>[Jw,G(o,Jr({},{ranges:[""]}),{default:Se(()=>[Zw]),_:1},16)]),_:1},16)}}},Qw=ue(Xw,[["__scopeId","data-v-71d1590b"],["__file","/@slidev/slides/11.md"]]);const Ku=e=>(_t("data-v-fe9fdad2"),e=e(),yt(),e),ex=Ku(()=>p("h1",null,"Create new todo",-1)),tx=Ku(()=>p("pre",{class:"slidev-code language-http"},[p("code",null,[p("span",{class:"line"},"# HTTP Request"),j(`
`),p("span",{class:"line"},[p("span",{class:"token request-line"},[p("span",{class:"token method property"},"POST"),j(),p("span",{class:"token request-target url"},"https://jsonplaceholder.typicode.com/todos"),j(),p("span",{class:"token http-version property"},"HTTP/1.1")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Content-Type"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"application/json")])]),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"{"),j(`
`),p("span",{class:"line"},'  "userId": 1,'),j(`
`),p("span",{class:"line"},'  "title": "lorem ipsum",'),j(`
`),p("span",{class:"line"},'  "completed": false'),j(`
`),p("span",{class:"line"},"}"),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"# HTTP Response"),j(`
`),p("span",{class:"line"},[p("span",{class:"token response-status"},[p("span",{class:"token http-version property"},"HTTP/1.1"),j(),p("span",{class:"token status-code number"},"201"),j(),p("span",{class:"token reason-phrase string"},"Created")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Date"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"Fri, 20 Jan 2023 23:57:51 GMT")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Content-Type"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"application/json; charset=utf-8")])]),j(`
`),p("span",{class:"line"},[p("span",{class:"token header"},[p("span",{class:"token header-name keyword"},"Content-Length"),p("span",{class:"token punctuation"},":"),j(),p("span",{class:"token header-value"},"78")])]),j(`
`),p("span",{class:"line"},"# ... (other headers) ..."),j(`
`),p("span",{class:"line"}),j(`
`),p("span",{class:"line"},"{"),j(`
`),p("span",{class:"line"},'  "userId": 1,'),j(`
`),p("span",{class:"line"},'  "title": "lorem ipsum",'),j(`
`),p("span",{class:"line"},'  "completed": false,'),j(`
`),p("span",{class:"line"},'  "id": 201'),j(`
`),p("span",{class:"line"},"}")])],-1)),nx={__name:"12",setup(e){const t={theme:"seriph",srcSequence:"./pages/http.md"};return ee(ce),(n,r)=>{const o=Vi;return T(),ie(Ut,it(Qe(t)),{default:Se(()=>[ex,G(o,Jr({},{ranges:[""]}),{default:Se(()=>[tx]),_:1},16)]),_:1},16)}}},rx=ue(nx,[["__scopeId","data-v-fe9fdad2"],["__file","/@slidev/slides/12.md"]]);const Wu=e=>(_t("data-v-213e2124"),e=e(),yt(),e),ox=Wu(()=>p("h1",null,"API Examples",-1)),sx=Wu(()=>p("ol",null,[p("li",null,[p("a",{href:"https://discord.com/developers/docs/reference",target:"_blank",rel:"noopener"},"Discord API")]),p("li",null,[p("a",{href:"https://developers.google.com/docs/api/reference/rest/",target:"_blank",rel:"noopener"},"Google Docs API")]),p("li",null,[p("a",{href:"https://ygoprodeck.com/api-guide/",target:"_blank",rel:"noopener"},"YuGiOh Card Game API")]),p("li",null,[p("a",{href:"https://www.goodreads.com/api",target:"_blank",rel:"noopener"},"Goodreads API")]),p("li",null,[p("a",{href:"https://developer.twitter.com/en/docs/twitter-api",target:"_blank",rel:"noopener"},"Twitter API")])],-1)),ix={__name:"13",setup(e){const t={theme:"seriph",srcSequence:"./pages/api-examples.md"};return ee(ce),(n,r)=>(T(),ie(Ut,it(Qe(t)),{default:Se(()=>[ox,sx]),_:1},16))}},lx=ue(ix,[["__scopeId","data-v-213e2124"],["__file","/@slidev/slides/13.md"]]);const ax=e=>(_t("data-v-092d4977"),e=e(),yt(),e),cx=ax(()=>p("h1",null,[p("a",{href:"https://github.com/gideonoludeyi/bookstore-api",target:"_blank",rel:"noopener"},"Let’s Code")],-1)),ux={href:"https://github.com/gideonoludeyi/bookstore-api",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},dx={__name:"14",setup(e){const t={theme:"seriph",layout:"cover",srcSequence:"./pages/development.md"};return ee(ce),(n,r)=>{const o=zu;return T(),ie(fo,it(Qe(t)),{default:Se(()=>[cx,p("div",null,[p("a",ux,[G(o)])])]),_:1},16)}}},fx=ue(dx,[["__scopeId","data-v-092d4977"],["__file","/@slidev/slides/14.md"]]),px={style:{display:"flex","flex-direction":"column"}},hx=_p('<option value="GET">GET</option><option value="POST">POST</option><option value="PATCH">PATCH</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option>',5),mx=[hx],gx=p("br",null,null,-1),vx=p("br",null,null,-1),_x=p("br",null,null,-1),yx=p("br",null,null,-1),bx=p("br",null,null,-1),wx={style:{"background-color":"rgba(200, 200, 200, 0.5)",padding:"8px"}},xx={style:{margin:"0"}},kx=p("h4",null,"Response Body:",-1),Sx=Re({__name:"HttpPlayground",props:{url:{default:"https://jsonplaceholder.typicode.com/todos/1"},method:{default:"GET"},body:{default:void 0},result:{default:{status:200,body:null}}},setup(e){const t=e;ee(ce);const n=Y(t.url),r=Y(t.method),o=Y(t.body),s=Y(t.result);async function i(){let l,a;try{const c=await fetch(n.value,{method:r.value,headers:{"Content-Type":"application/json"},body:o.value?void 0:JSON.stringify(o.value)});l=c.status,a=await c.json()}catch{l=500,a=null}s.value={status:l,body:a}}return(l,a)=>(T(),V(xe,null,[p("div",px,[pr(p("select",{name:"cars",id:"cars","onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c)},mx,512),[[Zp,r.value]]),gx,pr(p("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[Ys,n.value]]),vx,pr(p("textarea",{"onUpdate:modelValue":a[2]||(a[2]=c=>o.value=c),rows:"6"},null,512),[[Ys,o.value]]),_x,p("button",{border:"r gray-400 opacity-50","hover:bg":"gray-400 opacity-20",onClick:a[3]||(a[3]=c=>i())}," Execute ")]),yx,bx,p("div",wx,[p("h4",xx,"Response Status: "+en(s.value.status),1),kx,p("pre",null,en(JSON.stringify(s.value.body,null,2)),1)])],64))}}),Ex=ue(Sx,[["__file","/home/runner/work/bookstore-api/bookstore-api/components/HttpPlayground.vue"]]),Tx={__name:"15",setup(e){const t={srcSequence:"./pages/http-playground.md"};return ee(ce),(n,r)=>{const o=Ex;return T(),ie(Ut,it(Qe(t)),{default:Se(()=>[G(o)]),_:1},16)}}},Px=ue(Tx,[["__file","/@slidev/slides/15.md"]]),$x=[{path:"1",name:"page-1",component:Cb,meta:{theme:"seriph",layout:"cover",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./pages/cover.md",slide:{raw:null,title:"Designing RESTful APIs",level:1,content:`# Designing RESTful APIs

BrockCSC Workshop

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/BrockCSC/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",layout:"cover",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",srcSequence:"./pages/cover.md"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:47,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/cover.md",raw:`---
# try also 'default' to start simple
theme: seriph
layout: cover
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Designing RESTful APIs

BrockCSC Workshop

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/BrockCSC/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"Designing RESTful APIs",level:1,content:`# Designing RESTful APIs

BrockCSC Workshop

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/BrockCSC/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",layout:"cover",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"Designing RESTful APIs"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:47},inline:{raw:`---
src: ./pages/cover.md
---
`,content:"",frontmatter:{},index:0,start:0,end:4},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/cover.md",notesHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Nb,meta:{slide:{raw:`
# Overview

- What is a RESTful API?
- How does HTTP work?
- Examples of RESTful APIs
- Designing our custom API
- Conclusion

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Overview",level:1,content:`# Overview

- What is a RESTful API?
- How does HTTP work?
- Examples of RESTful APIs
- Designing our custom API
- Conclusion

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:1,start:5,end:26,notesHTML:"",filepath:"/home/runner/work/bookstore-api/bookstore-api/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Hb,meta:{theme:"seriph",layout:"cover",title:"RESTful API",srcSequence:"./pages/restful-api.md",slide:{raw:null,title:"RESTful API",level:1,content:`# RESTful API

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"RESTful API",srcSequence:"./pages/restful-api.md"},index:2,start:0,end:19,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",raw:`---
theme: seriph
layout: cover
---

# RESTful API

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"RESTful API",level:1,content:`# RESTful API

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"RESTful API"},index:0,start:0,end:19},inline:{raw:`---
src: ./pages/restful-api.md
---
`,content:"",frontmatter:{},index:2,start:26,end:30},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:qb,meta:{theme:"seriph",srcSequence:"./pages/restful-api.md",slide:{raw:`---
theme: seriph
---

# API

Application Programming Interface

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"API",level:1,content:`# API

Application Programming Interface

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/restful-api.md"},index:3,start:19,end:39,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",raw:`---
theme: seriph
---

# API

Application Programming Interface

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"API",level:1,content:`# API

Application Programming Interface

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:1,start:19,end:39},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:nw,meta:{theme:"seriph",srcSequence:"./pages/restful-api.md",slide:{raw:`---
theme: seriph
---

# REST

Representational State Transfer[^1]

1. Client-Server communication
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System
6. Code-On-Demand (Optional)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

[^1]: [Fielding, Roy Thomas (2000). "Chapter 5: Representational State Transfer (REST)". Architectural Styles and the Design of Network-based Software Architectures (Ph.D.). University of California, Irvine.](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)`,title:"REST",level:1,content:`# REST

Representational State Transfer[^1]

1. Client-Server communication
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System
6. Code-On-Demand (Optional)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

[^1]: [Fielding, Roy Thomas (2000). "Chapter 5: Representational State Transfer (REST)". Architectural Styles and the Design of Network-based Software Architectures (Ph.D.). University of California, Irvine.](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)`,frontmatter:{theme:"seriph",srcSequence:"./pages/restful-api.md"},index:4,start:39,end:74,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",raw:`---
theme: seriph
---

# REST

Representational State Transfer[^1]

1. Client-Server communication
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System
6. Code-On-Demand (Optional)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

[^1]: [Fielding, Roy Thomas (2000). "Chapter 5: Representational State Transfer (REST)". Architectural Styles and the Design of Network-based Software Architectures (Ph.D.). University of California, Irvine.](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)`,title:"REST",level:1,content:`# REST

Representational State Transfer[^1]

1. Client-Server communication
2. Stateless
3. Cacheable
4. Uniform Interface
5. Layered System
6. Code-On-Demand (Optional)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

[^1]: [Fielding, Roy Thomas (2000). "Chapter 5: Representational State Transfer (REST)". Architectural Styles and the Design of Network-based Software Architectures (Ph.D.). University of California, Irvine.](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)`,frontmatter:{theme:"seriph"},index:2,start:39,end:74},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/restful-api.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:iw,meta:{theme:"seriph",layout:"cover",title:"HTTP",srcSequence:"./pages/http.md",slide:{raw:null,title:"HTTP",level:1,content:`# HTTP

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"HTTP",srcSequence:"./pages/http.md"},index:5,start:0,end:19,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
layout: cover
---

# HTTP

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"HTTP",level:1,content:`# HTTP

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"HTTP"},index:0,start:0,end:19},inline:{raw:`---
src: ./pages/http.md
---
`,content:"",frontmatter:{},index:3,start:30,end:34},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:uw,meta:{theme:"seriph",layout:"cover",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
layout: cover
---

<div style="display: flex">
  <div style="display: inline-block">
    <p class="scheme">https://</p>
    <p class="scheme">scheme</p>
  </div>
  <div style="display: inline-block">
    <p class="domain">api.books.com</p>
    <p class="domain">domain</p>
  </div>
  <div style="display: inline-block">
    <p class="path">/books/trending</p>
    <p class="path">path</p>
  </div>
  <div style="display: inline-block">
    <p class="query-params">?max_books=5&sort=ascending</p>
    <p class="query-params">query parameters</p>
  </div>
</div>


<style>
.scheme {
  color: magenta;
  text-align: center;
  margin: 0;
}
.domain {
  color: orange;
  text-align: center;
  margin: 0;
}
.path {
  color: cyan;
  text-align: center;
  margin: 0;
}
.query-params {
  color: coral;
  text-align: center;
  margin: 0;
}
</style>
`,content:`<div style="display: flex">
  <div style="display: inline-block">
    <p class="scheme">https://</p>
    <p class="scheme">scheme</p>
  </div>
  <div style="display: inline-block">
    <p class="domain">api.books.com</p>
    <p class="domain">domain</p>
  </div>
  <div style="display: inline-block">
    <p class="path">/books/trending</p>
    <p class="path">path</p>
  </div>
  <div style="display: inline-block">
    <p class="query-params">?max_books=5&sort=ascending</p>
    <p class="query-params">query parameters</p>
  </div>
</div>


<style>
.scheme {
  color: magenta;
  text-align: center;
  margin: 0;
}
.domain {
  color: orange;
  text-align: center;
  margin: 0;
}
.path {
  color: cyan;
  text-align: center;
  margin: 0;
}
.query-params {
  color: coral;
  text-align: center;
  margin: 0;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",srcSequence:"./pages/http.md"},index:6,start:19,end:67,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
layout: cover
---

<div style="display: flex">
  <div style="display: inline-block">
    <p class="scheme">https://</p>
    <p class="scheme">scheme</p>
  </div>
  <div style="display: inline-block">
    <p class="domain">api.books.com</p>
    <p class="domain">domain</p>
  </div>
  <div style="display: inline-block">
    <p class="path">/books/trending</p>
    <p class="path">path</p>
  </div>
  <div style="display: inline-block">
    <p class="query-params">?max_books=5&sort=ascending</p>
    <p class="query-params">query parameters</p>
  </div>
</div>


<style>
.scheme {
  color: magenta;
  text-align: center;
  margin: 0;
}
.domain {
  color: orange;
  text-align: center;
  margin: 0;
}
.path {
  color: cyan;
  text-align: center;
  margin: 0;
}
.query-params {
  color: coral;
  text-align: center;
  margin: 0;
}
</style>
`,content:`<div style="display: flex">
  <div style="display: inline-block">
    <p class="scheme">https://</p>
    <p class="scheme">scheme</p>
  </div>
  <div style="display: inline-block">
    <p class="domain">api.books.com</p>
    <p class="domain">domain</p>
  </div>
  <div style="display: inline-block">
    <p class="path">/books/trending</p>
    <p class="path">path</p>
  </div>
  <div style="display: inline-block">
    <p class="query-params">?max_books=5&sort=ascending</p>
    <p class="query-params">query parameters</p>
  </div>
</div>


<style>
.scheme {
  color: magenta;
  text-align: center;
  margin: 0;
}
.domain {
  color: orange;
  text-align: center;
  margin: 0;
}
.path {
  color: cyan;
  text-align: center;
  margin: 0;
}
.query-params {
  color: coral;
  text-align: center;
  margin: 0;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover"},index:1,start:19,end:67},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:bw,meta:{theme:"seriph",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
---

# HTTP Request Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

<br />
<hr />
<br />

# HTTP Request Body

can be any textual data
- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

`,title:"HTTP Request Methods",level:1,content:`# HTTP Request Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

<br />
<hr />
<br />

# HTTP Request Body

can be any textual data
- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/http.md"},index:7,start:67,end:101,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
---

# HTTP Request Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

<br />
<hr />
<br />

# HTTP Request Body

can be any textual data
- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

`,title:"HTTP Request Methods",level:1,content:`# HTTP Request Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

<br />
<hr />
<br />

# HTTP Request Body

can be any textual data
- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:2,start:67,end:101},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Fw,meta:{theme:"seriph",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
---

# Example

\`\`\`http
# Get Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1
\`\`\`

<br/>

\`\`\`http
# Post Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Example",level:1,content:`# Example

\`\`\`http
# Get Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1
\`\`\`

<br/>

\`\`\`http
# Post Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/http.md"},index:8,start:101,end:138,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
---

# Example

\`\`\`http
# Get Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1
\`\`\`

<br/>

\`\`\`http
# Post Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Example",level:1,content:`# Example

\`\`\`http
# Get Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1
\`\`\`

<br/>

\`\`\`http
# Post Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:3,start:101,end:138},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Yw,meta:{theme:"seriph",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
---

# HTTP Response Status Code
https://http.cat/

- 200 - OK
- 201 - Created
- 404 - Not Found
- 500 - Internal Server Error


<br />
<hr />
<br />

# HTTP Response Body
can be any textual data 

- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"HTTP Response Status Code",level:1,content:`# HTTP Response Status Code
https://http.cat/

- 200 - OK
- 201 - Created
- 404 - Not Found
- 500 - Internal Server Error


<br />
<hr />
<br />

# HTTP Response Body
can be any textual data 

- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/http.md"},index:9,start:138,end:173,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
---

# HTTP Response Status Code
https://http.cat/

- 200 - OK
- 201 - Created
- 404 - Not Found
- 500 - Internal Server Error


<br />
<hr />
<br />

# HTTP Response Body
can be any textual data 

- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"HTTP Response Status Code",level:1,content:`# HTTP Response Status Code
https://http.cat/

- 200 - OK
- 201 - Created
- 404 - Not Found
- 500 - Internal Server Error


<br />
<hr />
<br />

# HTTP Response Body
can be any textual data 

- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:4,start:138,end:173},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Qw,meta:{theme:"seriph",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
---

# Get todo with id=18

\`\`\`http
# HTTP Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1

# HTTP Response
HTTP/1.1 200 OK
Date: Fri, 20 Jan 2023 23:55:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
# ... (other headers) ...

{
  "userId": 1,
  "id": 18,
  "title": "dolorum est consequatur ea mollitia in culpa",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Get todo with id=18",level:1,content:`# Get todo with id=18

\`\`\`http
# HTTP Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1

# HTTP Response
HTTP/1.1 200 OK
Date: Fri, 20 Jan 2023 23:55:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
# ... (other headers) ...

{
  "userId": 1,
  "id": 18,
  "title": "dolorum est consequatur ea mollitia in culpa",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/http.md"},index:10,start:173,end:210,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
---

# Get todo with id=18

\`\`\`http
# HTTP Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1

# HTTP Response
HTTP/1.1 200 OK
Date: Fri, 20 Jan 2023 23:55:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
# ... (other headers) ...

{
  "userId": 1,
  "id": 18,
  "title": "dolorum est consequatur ea mollitia in culpa",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Get todo with id=18",level:1,content:`# Get todo with id=18

\`\`\`http
# HTTP Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1

# HTTP Response
HTTP/1.1 200 OK
Date: Fri, 20 Jan 2023 23:55:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
# ... (other headers) ...

{
  "userId": 1,
  "id": 18,
  "title": "dolorum est consequatur ea mollitia in culpa",
  "completed": false
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:5,start:173,end:210},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:rx,meta:{theme:"seriph",srcSequence:"./pages/http.md",slide:{raw:`---
theme: seriph
---

# Create new todo

\`\`\`http
# HTTP Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}

# HTTP Response
HTTP/1.1 201 Created
Date: Fri, 20 Jan 2023 23:57:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 78
# ... (other headers) ...

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false,
  "id": 201
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Create new todo",level:1,content:`# Create new todo

\`\`\`http
# HTTP Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}

# HTTP Response
HTTP/1.1 201 Created
Date: Fri, 20 Jan 2023 23:57:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 78
# ... (other headers) ...

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false,
  "id": 201
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",srcSequence:"./pages/http.md"},index:11,start:210,end:254,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",raw:`---
theme: seriph
---

# Create new todo

\`\`\`http
# HTTP Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}

# HTTP Response
HTTP/1.1 201 Created
Date: Fri, 20 Jan 2023 23:57:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 78
# ... (other headers) ...

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false,
  "id": 201
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"Create new todo",level:1,content:`# Create new todo

\`\`\`http
# HTTP Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}

# HTTP Response
HTTP/1.1 201 Created
Date: Fri, 20 Jan 2023 23:57:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 78
# ... (other headers) ...

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false,
  "id": 201
}
\`\`\`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph"},index:6,start:210,end:254},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:lx,meta:{theme:"seriph",title:"API Examples",srcSequence:"./pages/api-examples.md",slide:{raw:null,title:"API Examples",level:1,content:`# API Examples
1. [Discord API](https://discord.com/developers/docs/reference)
2. [Google Docs API](https://developers.google.com/docs/api/reference/rest/)
3. [YuGiOh Card Game API](https://ygoprodeck.com/api-guide/)
4. [Goodreads API](https://www.goodreads.com/api)
5. [Twitter API](https://developer.twitter.com/en/docs/twitter-api)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",title:"API Examples",srcSequence:"./pages/api-examples.md"},index:12,start:0,end:22,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/api-examples.md",raw:`---
theme: seriph
---

# API Examples
1. [Discord API](https://discord.com/developers/docs/reference)
2. [Google Docs API](https://developers.google.com/docs/api/reference/rest/)
3. [YuGiOh Card Game API](https://ygoprodeck.com/api-guide/)
4. [Goodreads API](https://www.goodreads.com/api)
5. [Twitter API](https://developer.twitter.com/en/docs/twitter-api)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,title:"API Examples",level:1,content:`# API Examples
1. [Discord API](https://discord.com/developers/docs/reference)
2. [Google Docs API](https://developers.google.com/docs/api/reference/rest/)
3. [YuGiOh Card Game API](https://ygoprodeck.com/api-guide/)
4. [Goodreads API](https://www.goodreads.com/api)
5. [Twitter API](https://developer.twitter.com/en/docs/twitter-api)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",title:"API Examples"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/api-examples.md
---
`,content:"",frontmatter:{},index:4,start:34,end:38},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/api-examples.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:fx,meta:{theme:"seriph",layout:"cover",title:"[Let's Code](https://github.com/gideonoludeyi/bookstore-api)",srcSequence:"./pages/development.md",slide:{raw:null,title:"[Let's Code](https://github.com/gideonoludeyi/bookstore-api)",level:1,content:`# [Let's Code](https://github.com/gideonoludeyi/bookstore-api)

<div>
  <a href="https://github.com/gideonoludeyi/bookstore-api" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"[Let's Code](https://github.com/gideonoludeyi/bookstore-api)",srcSequence:"./pages/development.md"},index:13,start:0,end:27,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/development.md",raw:`---
theme: seriph
layout: cover
---

# [Let's Code](https://github.com/gideonoludeyi/bookstore-api)

<div>
  <a href="https://github.com/gideonoludeyi/bookstore-api" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"[Let's Code](https://github.com/gideonoludeyi/bookstore-api)",level:1,content:`# [Let's Code](https://github.com/gideonoludeyi/bookstore-api)

<div>
  <a href="https://github.com/gideonoludeyi/bookstore-api" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{theme:"seriph",layout:"cover",title:"[Let's Code](https://github.com/gideonoludeyi/bookstore-api)"},index:0,start:0,end:27},inline:{raw:`---
src: ./pages/development.md
---
`,content:"",frontmatter:{},index:5,start:38,end:42},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/development.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Px,meta:{srcSequence:"./pages/http-playground.md",slide:{raw:null,content:"<HttpPlayground />",frontmatter:{srcSequence:"./pages/http-playground.md"},index:14,start:0,end:2,source:{filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http-playground.md",raw:`<HttpPlayground />
`,content:"<HttpPlayground />",frontmatter:{},index:0,start:0,end:2},inline:{raw:`---
src: ./pages/http-playground.md
---`,content:"",frontmatter:{},index:6,start:42,end:45},filepath:"/home/runner/work/bookstore-api/bookstore-api/pages/http-playground.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",component:mb,meta:{layout:"end"}}],Be=$x,Co=[{name:"play",path:"/",component:D1,children:[...Be]},{name:"print",path:"/print",component:fb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];Co.push({path:"/presenter/print",component:()=>Yn(()=>import("./PresenterPrint-2c34f867.js"),["assets/PresenterPrint-2c34f867.js","assets/NoteViewer-7a81dc0c.js","assets/index-c31756f8.js"])}),Co.push({name:"presenter",path:"/presenter/:no",component:()=>Yn(()=>import("./Presenter-5f36600b.js"),["assets/Presenter-5f36600b.js","assets/NoteViewer-7a81dc0c.js","assets/DrawingControls-29430821.js","assets/index-c31756f8.js","assets/Presenter-907537bb.css"]),beforeEnter:e=>{if(!Mr.remote||Mr.remote===e.query.password)return!0;if(Mr.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Mr.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}}),Co.push({path:"/presenter",redirect:{path:"/presenter/1"}});const bn=mv({history:hg("/bookstore-api/"),routes:Co});function Cx(e,t,{mode:n="replace"}={}){return O({get(){const r=bn.currentRoute.value.query[e];return r==null?t??null:Array.isArray(r)?r.filter(Boolean):r},set(r){Ot(()=>{bn[b(n)]({query:{...bn.currentRoute.value.query,[e]:r}})})}})}const Gu=Y(0);Ot(()=>{bn.afterEach(async()=>{await Ot(),Gu.value+=1})});const Vt=O(()=>bn.currentRoute.value),Ui=O(()=>Vt.value.query.print!==void 0),Ox=O(()=>Vt.value.query.print==="clicks"),Yt=O(()=>Vt.value.query.embedded!==void 0),Pt=O(()=>Vt.value.path.startsWith("/presenter")),Yu=O(()=>Ui.value&&!Ox.value),di=O(()=>Vt.value.query.password),Ix=O(()=>!Pt.value&&(!Ce.remote||di.value===Ce.remote)),Aa=Cx("clicks","0"),Ju=O(()=>Be.length-1),Ax=O(()=>Vt.value.path),qe=O(()=>parseInt(Ax.value.split(/\//g).slice(-1)[0])||1);O(()=>Ki(qe.value));const pt=O(()=>Be.find(e=>e.path===`${qe.value}`));O(()=>{var e,t,n;return(n=(t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});O(()=>{var e,t;return((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(qe.value===1?"cover":"default")});const Cs=O(()=>Be.find(e=>e.path===`${Math.min(Be.length,qe.value+1)}`)),Rx=O(()=>{var e,t;return Gu.value,((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Jn=O({get(){if(Yu.value)return 99999;let e=+(Aa.value||0);return isNaN(e)&&(e=0),e},set(e){Aa.value=e.toString()}}),Uo=O(()=>{var e,t;return+(((t=(e=pt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??Rx.value.length)}),Mx=O(()=>qe.value<Be.length-1||Jn.value<Uo.value),Nx=O(()=>qe.value>1||Jn.value>0),Lx=O(()=>Be.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Wi(e,t),e),[])),Dx=O(()=>Gi(Lx.value,pt.value));O(()=>Yi(Dx.value));function Vn(){Uo.value<=Jn.value?Ko():Jn.value+=1}async function Un(){Jn.value<=0?await Wo():Jn.value-=1}function Ki(e){return Pt.value?`/presenter/${e}`:`/${e}`}function Ko(){const e=Math.min(Be.length,qe.value+1);return _r(e)}async function Wo(e=!0){const t=Math.max(1,qe.value-1);await _r(t),e&&Uo.value&&bn.replace({query:{...Vt.value.query,clicks:Uo.value}})}function _r(e,t){return bn.push({path:Ki(e),query:{...Vt.value.query,clicks:t}})}function Fx(e){const t=Y(0),{direction:n,distanceX:r,distanceY:o}=Am(e,{onSwipeStart(s){s.pointerType==="touch"&&(no.value||(t.value=Js()))},onSwipeEnd(s){if(s.pointerType!=="touch"||!t.value||no.value)return;const i=Math.abs(r.value),l=Math.abs(o.value);i/window.innerWidth>.3||i>100?n.value===Xt.LEFT?Vn():Un():(l/window.innerHeight>.4||l>200)&&(n.value===Xt.DOWN?Wo():Ko())}})}async function Ra(){const{saveAs:e}=await Yn(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(Yc(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/bookstore-api/slidev-exported.pdf",`${Ce.title}.pdf`)}async function ak(e){var t,n;if(e==null){const r=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Wi(e,t,n=1){var o,s,i,l,a;const r=(s=(o=t.meta)==null?void 0:o.slide)==null?void 0:s.level;r&&r>n&&e.length>0?Wi(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(a=(l=t.meta)==null?void 0:l.slide)==null?void 0:a.title})}function Gi(e,t,n=!1,r){return e.map(o=>{const s={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return s.children.length>0&&(s.children=Gi(s.children,t,s.active||s.hasActiveParent,s)),r&&(s.active||s.activeParent)&&(r.activeParent=!0),s})}function Yi(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Yi(n.children,t+1)}))}export{Ux as $,Y as A,Qx as B,Xx as C,ke as D,nk as E,xe as F,Ft as G,ek as H,md as I,gd as J,is as K,Ot as L,xc as M,Jr as N,Gn as O,yi as P,En as Q,Hx as R,Yu as S,jx as T,ah as U,ch as V,Uc as W,Vc as X,qc as Y,sh as Z,ue as _,Zx as a,pr as a$,Kx as a0,Wx as a1,qx as a2,Vx as a3,nb as a4,rb as a5,Ra as a6,Vn as a7,Ko as a8,ak as a9,Iu as aA,nt as aB,w_ as aC,Uo as aD,Mx as aE,Cs as aF,xs as aG,no as aH,Ps as aI,N1 as aJ,ji as aK,Bi as aL,_t as aM,yt as aN,O1 as aO,R_ as aP,At as aQ,tk as aR,rn as aS,Or as aT,Ln as aU,jt as aV,ai as aW,Yv as aX,Jv as aY,Zv as aZ,Qv as a_,Un as aa,Wo as ab,Vt as ac,zx as ad,yr as ae,ye as af,ok as ag,Zd as ah,p as ai,en as aj,ao as ak,We as al,Be as am,Ju as an,j as ao,me as ap,Mi as aq,Le as ar,sk as as,pt as at,ie as au,a_ as av,Fx as aw,rk as ax,ik as ay,Se as az,qe as b,zc as b0,lk as b1,st as b2,wo as b3,h0 as b4,Kc as b5,e_ as b6,Ce as c,Jn as d,Pt as e,Re as f,Ki as g,ee as h,Gx as i,ce as j,Df as k,V as l,G as m,T as n,Yx as o,Jx as p,Ge as q,bn as r,ds as s,O as t,Bx as u,kl as v,Ne as w,wc as x,b as y,rd as z};
