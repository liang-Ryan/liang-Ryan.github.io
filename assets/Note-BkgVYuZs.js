import{u as v}from"./index-OzzApxG8.js";import{_ as f,d as y,e as r,f as t,c,g as l,a as u,F as N,r as h,o,h as b}from"./index-CjcRSvyS.js";const g={class:"main-body"},q={class:"main-content"},B={__name:"Note",setup(L){const n=v(),e=y(),i=r(()=>n.noteList[e.query.book]),s=r(()=>n.noteList[e.query.book][e.query.note]);return(_,x)=>{const p=t("Aside"),d=t("Nav"),m=t("Paragraph");return o(),c("div",g,[l(p,{titlelist:s.value},null,8,["titlelist"]),u("div",q,[l(d,{notelist:i.value,notekey:_.$route.query.book},null,8,["notelist","notekey"]),u("article",null,[(o(!0),c(N,null,h(s.value,(k,a)=>(o(),b(m,{key:a,title:a,content:k},null,8,["title","content"]))),128))])])])}}},P=f(B,[["__scopeId","data-v-c512a6f0"]]);export{P as default};