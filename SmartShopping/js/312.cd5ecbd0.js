"use strict";(self["webpackChunksmart_shopping"]=self["webpackChunksmart_shopping"]||[]).push([[312],{7312:function(s,t,a){a.r(t),a.d(t,{default:function(){return v}});var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"main-content"},[t("van-nav-bar",{attrs:{fixed:"",title:"结算","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address",on:{click:function(t){return s.toAddressEdit()}}},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.defaultAddress?t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.defaultAddress.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.defaultAddress.phone))])]),t("div",{staticClass:"info-address"},[s._v(s._s(s.addressDetail))])]):t("div",{staticClass:"info"},[s._v("请选择收获地址")]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),t("div",{staticClass:"pay-list"},[t("div",{staticClass:"goods-list"},s._l(s.goodsList,(function(a){return t("div",{key:a.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:a.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis"},[s._v(s._s(a.goods_name))]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(a.total_num))]),t("span",{staticClass:"price"},[s._v("￥"+s._s(a.total_price))])])])])})),0),t("div",{staticClass:"total-box"},[t("span",[s._v("共 "+s._s(s.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.orderPayPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.orderPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.defaultAddress?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"pay-title"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("van-icon",{attrs:{name:"balance-o"}}),t("span",[s._v("余额支付（可用 ¥ "+s._s(s.balance)+" 元）")]),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)],1)]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.orderTotalPrice))])]),t("div",{staticClass:"btn",class:{disabled:!s.affordable},domProps:{innerHTML:s._s(s.affordable?"提交订单":"余额不足")},on:{click:s.submit}})])],1)},r=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],i=(a(4114),a(5720));const d=(s,t)=>i.A.get("/checkout/order",{params:{mode:s,delivery:10,shopId:0,couponId:0,isUsePoints:0,...t}}),o=(s,t,a)=>i.A.post("/checkout/submit",{delivery:10,couponId:0,isUsePoints:0,payType:10,remark:a,mode:s,...t});var l={name:"PayIndex",created(){this.getOrder()},data(){return{defaultAddress:{},addressDetail:"",goodsList:[],orderPayPrice:"",orderPrice:"",orderTotalNum:"",orderTotalPrice:"",remark:"",balance:""}},computed:{affordable(){return+this.balance>+this.orderTotalPrice},mode(){return this.$route.query.mode},obj(){return this.$route.query.obj}},methods:{async getOrder(){const{data:{order:s,personal:t}}=await d(this.mode,this.obj);this.defaultAddress=s.address,this.addressDetail=s.address.region.province+" "+s.address.region.city+" "+s.address.region.region+" "+s.address.detail,this.goodsList=s.goodsList,this.orderPayPrice=s.orderPayPrice,this.orderPrice=s.orderPrice,this.orderTotalNum=s.orderTotalNum,this.orderTotalPrice=s.orderTotalPrice,this.balance=t.balance},async submit(){const{data:{orderId:s,payType:t}}=await o(this.mode,this.obj,this.remark);this.$toast("支付成功"),this.$router.replace({path:"/mypage",query:{orderId:s,payType:t}})},toAddressEdit(){this.$router.push({path:"/address",query:{mode:this.mode,obj:this.obj}})}}},n=l,c=a(1656),p=(0,c.A)(n,e,r,!1,null,"72f34cd3",null),v=p.exports}}]);
//# sourceMappingURL=312.cd5ecbd0.js.map