import{b2 as i,b3 as p,l as u,a6 as y}from"./index-BFQ6Tz1K.js";const d=t=>i.get(`/member/order/${t}`),f=p("payStore",()=>{const t=u({}),e=async s=>{const{data:{result:c}}=await d(s);t.value=c},a=y(),o="http://pcapi-xiaotuxian-front-devtest.itheima.net/",r=encodeURIComponent("http://127.0.0.1:5173/paycallback"),n=`${o}pay/aliPay?orderId=${a.query.id}&redirect=${r}`;return{payInfo:t,getPayInfo:e,payUrl:n}});export{f as u};