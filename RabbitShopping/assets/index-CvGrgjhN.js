import{Y as f,a3 as C,a4 as $,a0 as b,q as c,s as n,U as t,F as o,M as _,Q as u,G as h,a5 as y,R as l,y as r,x,Z as S,a6 as w,a7 as I,a1 as k,a2 as g,a8 as R,$ as P}from"./index-BFQ6Tz1K.js";import{E as q}from"./popover-CPsQn01M.js";import"./popper-D1SrGZNM.js";import{E as F}from"./button-DIhkNhOz.js";import"./index-DyU6y3yo.js";import"./focus-trap-ByNPDlLm.js";const N={class:"container"},V={class:"app-header-nav"},E={class:"home"},B={class:"right"},T={__name:"LayoutFixed",setup(s){const{y:e}=C(window),p=$();return(v,i)=>{const d=b("RouterLink");return c(),n("div",{class:x(["app-header-sticky",{show:r(e)>78}])},[t("div",N,[o(d,{class:"logo",to:"/"}),t("ul",V,[t("li",E,[o(d,{to:"/"},{default:_(()=>[u("首页")]),_:1})]),(c(!0),n(h,null,y(r(p).categoryList,a=>(c(),n("li",{key:a.id},[o(d,{to:`/category/${a.id}`},{default:_(()=>[u(l(a.name),1)]),_:2},1032,["to"])]))),128))]),t("div",B,[o(d,{to:"/"},{default:_(()=>[u("品牌")]),_:1}),o(d,{to:"/"},{default:_(()=>[u("专题")]),_:1})])])],2)}}},G=f(T,[["__scopeId","data-v-e4ddb193"]]),m=s=>(k("data-v-6db1c085"),s=s(),g(),s),U={class:"app-topnav"},z={class:"container"},A=m(()=>t("i",{class:"iconfont icon-user"},null,-1)),H=m(()=>t("a",{href:"javascript:;"},"退出登录",-1)),Z=m(()=>t("li",null,[t("a",{href:"javascript:;"},"帮助中心")],-1)),D=m(()=>t("li",null,[t("a",{href:"javascript:;"},"关于我们")],-1)),K={__name:"LayoutNav",setup(s){const e=S(),p=w(),v=I(),i=()=>{v.push({path:"/login",query:{backUrl:p.fullPath}})};return(d,a)=>{const L=q;return c(),n("nav",U,[t("div",z,[t("ul",null,[r(e).userInfo.token?(c(),n(h,{key:0},[t("li",null,[t("a",{href:"javascript:;",onClick:a[0]||(a[0]=j=>d.$router.push("/user"))},[A,u(l(r(e).userInfo.account),1)])]),t("li",null,[o(L,{title:"确认退出吗?","confirm-button-text":"确认",onConfirm:r(e).logout,"cancel-button-text":"取消"},{reference:_(()=>[H]),_:1},8,["onConfirm"])]),t("li",null,[t("a",{href:"javascript:;",onClick:a[1]||(a[1]=j=>d.$router.push("/user/userOrder"))},"我的订单")]),t("li",null,[t("a",{href:"javascript:;",onClick:a[2]||(a[2]=j=>d.$router.push("/user"))},"会员中心")])],64)):(c(),n(h,{key:1},[t("li",null,[t("a",{href:"javascript:;",onClick:i},"请先登录")]),Z,D],64))])])])}}},M=f(K,[["__scopeId","data-v-6db1c085"]]),O=s=>(k("data-v-e1681cba"),s=s(),g(),s),Q={class:"cart"},Y={class:"curr",href:"javascript:;"},J=O(()=>t("i",{class:"iconfont icon-cart"},null,-1)),W={class:"layer"},X={class:"list"},tt=["src"],at={class:"center"},st={class:"name ellipsis-2"},ot={class:"attr ellipsis"},et={class:"right"},dt={class:"price"},ct={class:"count"},nt=["onClick"],rt={class:"foot"},it={class:"total"},lt={__name:"headerCart",setup(s){const e=R();return(p,v)=>{const i=b("RouterLink"),d=F;return c(),n("div",Q,[t("a",Y,[J,t("em",null,l(r(e).cartList.length),1)]),t("div",W,[t("div",X,[(c(!0),n(h,null,y(r(e).cartList,a=>(c(),n("div",{class:"item",key:a},[o(i,{to:""},{default:_(()=>[t("img",{src:a.picture,alt:""},null,8,tt),t("div",at,[t("p",st,l(a.name),1),t("p",ot,l(a.attrsText),1)]),t("div",et,[t("p",dt,"¥"+l(a.price),1),t("p",ct,"x"+l(a.count),1)])]),_:2},1024),t("i",{class:"iconfont icon-close-new",onClick:L=>r(e).delCart(a.skuId)},null,8,nt)]))),128))]),t("div",rt,[t("div",it,[t("p",null,"共 "+l(r(e).cartGoodsTotalCount)+" 件商品",1),t("p",null,"¥ "+l(r(e).cartGoodsTotalPrice.toFixed(2)),1)]),o(d,{size:"large",type:"primary",onClick:v[0]||(v[0]=a=>p.$router.push("/cart"))},{default:_(()=>[u("去购物车结算")]),_:1})])])])}}},_t=f(lt,[["__scopeId","data-v-e1681cba"]]),ut=s=>(k("data-v-57534d67"),s=s(),g(),s),pt={class:"app-header"},vt={class:"container"},ht={class:"logo"},ft={class:"app-header-nav"},bt={class:"home"},mt=ut(()=>t("div",{class:"search"},[t("i",{class:"iconfont icon-search"}),t("input",{type:"text",placeholder:"搜一搜"})],-1)),$t={__name:"LayoutHeader",setup(s){const e=$();return(p,v)=>{const i=b("RouterLink");return c(),n("header",pt,[t("div",vt,[t("h1",ht,[o(i,{to:"/"},{default:_(()=>[u("小兔鲜")]),_:1})]),t("ul",ft,[t("li",bt,[o(i,{to:"/"},{default:_(()=>[u("首页")]),_:1})]),(c(!0),n(h,null,y(r(e).categoryList,d=>(c(),n("li",{key:d.id},[o(i,{"active-class":"active",to:`/category/${d.id}`},{default:_(()=>[u(l(d.name),1)]),_:2},1032,["to"])]))),128))]),mt,o(_t)])])}}},yt=f($t,[["__scopeId","data-v-57534d67"]]),kt="/assets/qrcode-orqZiaKR.jpg",gt={},Lt={class:"app_footer"},jt=P('<div class="contact" data-v-8d09089b><div class="container" data-v-8d09089b><dl data-v-8d09089b><dt data-v-8d09089b>客户服务</dt><dd data-v-8d09089b><i class="iconfont icon-kefu" data-v-8d09089b></i> 在线客服</dd><dd data-v-8d09089b><i class="iconfont icon-question" data-v-8d09089b></i> 问题反馈</dd></dl><dl data-v-8d09089b><dt data-v-8d09089b>关注我们</dt><dd data-v-8d09089b><i class="iconfont icon-weixin" data-v-8d09089b></i> 公众号</dd><dd data-v-8d09089b><i class="iconfont icon-weibo" data-v-8d09089b></i> 微博</dd></dl><dl data-v-8d09089b><dt data-v-8d09089b>下载APP</dt><dd class="qrcode" data-v-8d09089b><img src="'+kt+'" data-v-8d09089b></dd><dd class="download" data-v-8d09089b><span data-v-8d09089b>扫描二维码</span><span data-v-8d09089b>立马下载APP</span><a href="javascript:;" data-v-8d09089b>下载页面</a></dd></dl><dl data-v-8d09089b><dt data-v-8d09089b>服务热线</dt><dd class="hotline" data-v-8d09089b> 400-0000-000 <small data-v-8d09089b>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-8d09089b><div class="container" data-v-8d09089b><div class="slogan" data-v-8d09089b><a href="javascript:;" data-v-8d09089b><i class="iconfont icon-footer01" data-v-8d09089b></i><span data-v-8d09089b>价格亲民</span></a><a href="javascript:;" data-v-8d09089b><i class="iconfont icon-footer02" data-v-8d09089b></i><span data-v-8d09089b>物流快捷</span></a><a href="javascript:;" data-v-8d09089b><i class="iconfont icon-footer03" data-v-8d09089b></i><span data-v-8d09089b>品质新鲜</span></a></div><div class="copyright" data-v-8d09089b><p data-v-8d09089b><a href="javascript:;" data-v-8d09089b>关于我们</a><a href="javascript:;" data-v-8d09089b>帮助中心</a><a href="javascript:;" data-v-8d09089b>售后服务</a><a href="javascript:;" data-v-8d09089b>配送与验收</a><a href="javascript:;" data-v-8d09089b>商务合作</a><a href="javascript:;" data-v-8d09089b>搜索推荐</a><a href="javascript:;" data-v-8d09089b>友情链接</a></p><p data-v-8d09089b>CopyRight © 小兔鲜儿</p></div></div></div>',2),Ct=[jt];function xt(s,e){return c(),n("footer",Lt,Ct)}const St=f(gt,[["render",xt],["__scopeId","data-v-8d09089b"]]),Nt={__name:"index",setup(s){return $().getCategoryList(),(p,v)=>{const i=b("RouterView");return c(),n(h,null,[o(G),o(M),o(yt),o(i),o(St)],64)}}};export{Nt as default};
