import{z as B,H as L,Y as O,a6 as k,ad as A,l as I,s as E,U as w,F as f,M as _,ab as M,G as U,a5 as G,y as g,q as v,Q as T,R as D,N as P,ac as R}from"./index-BFQ6Tz1K.js";import{E as q,a as z}from"./tab-pane-vgo9huZi.js";import{E as Y,a as $}from"./breadcrumb-item-D3R1zAxe.js";import{t as j}from"./event-BE20p1dL.js";import{g as K}from"./scroll-B1f7JSjS.js";import{t as F}from"./throttle-BYyMLKK2.js";import"./index-bsCGN8c2.js";import"./vnode-DH5r4MUd.js";const H=e=>{let n=0,t=e;for(;t;)n+=t.offsetTop,t=t.offsetParent;return n},Q=(e,n)=>Math.abs(H(e)-H(n)),r="ElInfiniteScroll",J=50,W=200,X=0,Z={delay:{type:Number,default:W},distance:{type:Number,default:X},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},C=(e,n)=>Object.entries(Z).reduce((t,[o,l])=>{var d,s;const{type:m,default:i}=l,a=e.getAttribute(`infinite-scroll-${o}`);let c=(s=(d=n[a])!=null?d:a)!=null?s:i;return c=c==="false"?!1:c,c=m(c),t[o]=Number.isNaN(c)?i:c,t},{}),V=e=>{const{observer:n}=e[r];n&&(n.disconnect(),delete e[r].observer)},ee=(e,n)=>{const{container:t,containerEl:o,instance:l,observer:d,lastScrollTop:s}=e[r],{disabled:m,distance:i}=C(e,l),{clientHeight:a,scrollHeight:c,scrollTop:u}=o,h=u-s;if(e[r].lastScrollTop=u,d||m||h<0)return;let b=!1;if(t===e)b=c-(a+u)<=i;else{const{clientTop:y,scrollHeight:p}=e,x=Q(e,o);b=u+a>=x+y+p-i}b&&n.call(l)};function S(e,n){const{containerEl:t,instance:o}=e[r],{disabled:l}=C(e,o);l||t.clientHeight===0||(t.scrollHeight<=t.clientHeight?n.call(o):V(e))}const te={async mounted(e,n){const{instance:t,value:o}=n;B(o)||j(r,"'v-infinite-scroll' binding value must be a function"),await L();const{delay:l,immediate:d}=C(e,t),s=K(e,!0),m=s===window?document.documentElement:s,i=F(ee.bind(null,e,o),l);if(s){if(e[r]={instance:t,container:s,containerEl:m,delay:l,cb:o,onScroll:i,lastScrollTop:m.scrollTop},d){const a=new MutationObserver(F(S.bind(null,e,o),J));e[r].observer=a,a.observe(e,{childList:!0,subtree:!0}),S(e,o)}s.addEventListener("scroll",i)}},unmounted(e){if(!e[r])return;const{container:n,onScroll:t}=e[r];n==null||n.removeEventListener("scroll",t),V(e)},async updated(e){if(!e[r])await L();else{const{containerEl:n,cb:t,observer:o}=e[r];n.clientHeight&&o&&S(e,t)}}},N=te;N.install=e=>{e.directive("InfiniteScroll",N)};const oe=N,ne={class:"container"},se={class:"bread-container"},ae={class:"sub-container"},re=["infinite-scroll-disabled"],le={__name:"index",setup(e){const n=k(),t=A();t.getSubCategoryList(n.params.id);const o=I({categoryId:n.params.id,page:1,pageSize:20,sortField:"publishTime"});t.getGoodsTemporary(o);const l=()=>{o.value.page=1,t.getGoodsTemporary(o)},d=I(!1),s=async()=>{o.value.page++,d.value=await t.loadMore(o)};return(m,i)=>{const a=$,c=Y,u=z,h=q,b=R,y=oe;return v(),E("div",ne,[w("div",se,[f(c,{separator:">"},{default:_(()=>[f(a,{to:{path:"/"}},{default:_(()=>[T("首页")]),_:1}),f(a,{to:{path:`/category/${g(t).subCategoryList.parentId}`}},{default:_(()=>[T(D(g(t).subCategoryList.parentName),1)]),_:1},8,["to"]),f(a,null,{default:_(()=>[T(D(g(t).subCategoryList.name),1)]),_:1})]),_:1})]),w("div",ae,[f(h,{modelValue:o.value.sortField,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value.sortField=p),onTabChange:l},{default:_(()=>[f(u,{label:"最新商品",name:"publishTime"}),f(u,{label:"最高人气",name:"orderNum"}),f(u,{label:"评论最多",name:"evaluateNum"})]),_:1},8,["modelValue"]),M((v(),E("div",{class:"body","infinite-scroll-disabled":d.value},[(v(!0),E(U,null,G(g(t).goodsList,p=>(v(),P(b,{key:p.id,goods:p},null,8,["goods"]))),128))],8,re)),[[y,s]])])])}}},_e=O(le,[["__scopeId","data-v-0ff223f5"]]);export{_e as default};
