(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-964b904c"],{4802:function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["pushScopeId"])("data-v-b252986c");var o={class:"recommend"},a={class:"bg-big"},l=Object(c["createElementVNode"])("span",{class:"iconfont icon-gengduo"},null,-1),s={class:"recommendDay"},i=Object(c["createElementVNode"])("p",null,"今日推荐",-1),r={class:"recommendList"};function d(e,t,n,d,m,b){var p=Object(c["resolveComponent"])("recommend-list");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",{class:"bg",style:Object(c["normalizeStyle"])({backgroundImage:"url(".concat(m.dailySongs[0].al.picUrl,")")})},null,4)]),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(m.isColor?"recommendTop color":"recommendTop")},[Object(c["createElementVNode"])("span",{class:"iconfont icon-zuo",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})}),Object(c["withDirectives"])(Object(c["createElementVNode"])("span",null,"今日推荐",512),[[c["vShow"],m.isColor]]),l],2),Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(b.num(m.today)),1),Object(c["createElementVNode"])("span",null,"/ "+Object(c["toDisplayString"])(m.month),1),i]),Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(p,{dailySongs:m.dailySongs},null,8,["dailySongs"])])])}Object(c["popScopeId"])();var m=n("1da1");n("96cf"),n("b0c0");Object(c["pushScopeId"])("data-v-7a7ad61f");var b={class:"playListView"},p={class:"playListTop",ref:"playListTop"},u=Object(c["createElementVNode"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["createElementVNode"])("use",{"xlink:href":"#icon-bofang"})],-1),j=Object(c["createElementVNode"])("p",null,"播放全部",-1),O={key:0},h=Object(c["createElementVNode"])("div",{class:"right"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("span",{class:"iconfont icon-icon_xinyong_xianxing_jijin-221"})]),Object(c["createElementVNode"])("span",{class:"iconfont icon-xuanzhong"})],-1),f={class:"playList"},g=["onClick"],y={class:"demo-image__lazy"},v={class:"detail"},E={class:"author"},V={key:0},N={class:"rightIcon"},k={key:0,class:"iconfont icon-a-shipinti1beifen3"},S=Object(c["createElementVNode"])("span",{class:"iconfont icon-gengduo"},null,-1);function w(e,t,n,o,a,l){var s=Object(c["resolveComponent"])("van-sticky"),i=Object(c["resolveComponent"])("el-image");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[Object(c["createVNode"])(s,{"offset-top":50},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",{class:"left",onClick:t[0]||(t[0]=function(t){return e.setAllPlay(),l.handleGetUrlOne()})},[u,j,n.dailySongs?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",O,"("+Object(c["toDisplayString"])(n.dailySongs.length)+")",1)):Object(c["createCommentVNode"])("",!0)]),h],512)]})),_:1}),Object(c["createElementVNode"])("div",f,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.dailySongs,(function(t,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"playListItem",key:n,onClick:function(c){e.setPlayIndex({item:t,index:n}),l.handleGetUrl(t.id)}},[Object(c["createElementVNode"])("div",y,[Object(c["createVNode"])(i,{src:t.al.picUrl,lazy:""},null,8,["src"])]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("p",{class:Object(c["normalizeClass"])(e.nowPlay.id==t.id?"name isActive":"name")},Object(c["toDisplayString"])(t.name),3),Object(c["createElementVNode"])("p",E,[t.name?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",V,Object(c["toDisplayString"])(t.ar[0].name),1)):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" - "+Object(c["toDisplayString"])(t.al.name),1)])]),Object(c["createElementVNode"])("div",N,[0!=t.mv?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",k)):Object(c["createCommentVNode"])("",!0),S])],8,g)})),128))])])}Object(c["popScopeId"])();var C=n("5530"),L=n("5502"),x={name:"recommendList",props:["dailySongs"],computed:Object(C["a"])({},Object(L["c"])(["nowPlay","showList"])),mounted:function(){window.addEventListener("scroll",this.handleScrollx,!0)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScrollx,!0)},methods:Object(C["a"])(Object(C["a"])({},Object(L["b"])(["setPlayIndex","setMusicPlayFalse","setAllPlay"])),{},{handleScrollx:function(){this.$refs.playListTop.getBoundingClientRect().top<51?this.$parent.changeColor(!0):this.$parent.changeColor(!1)},handleGetUrl:function(e){this.$store.dispatch("reqLyric",e),this.$store.dispatch("reqSongUrl",e)},handleGetUrlOne:function(){this.$store.dispatch("reqLyric",this.showList[0].id),this.$store.dispatch("reqSongUrl",this.showList[0].id)}})},B=(n("9ceb"),n("d959")),$=n.n(B);const I=$()(x,[["render",w],["__scopeId","data-v-7a7ad61f"]]);var _=I,D=n("f46b"),U=n("c1df"),P=n.n(U),z={name:"recommend",components:{recommendList:_},data:function(){return{dailySongs:[{al:""}],month:"",today:"",isColor:!1}},mounted:function(){var e=this;this.$nextTick((function(){e.reqRecommend(),e.getMonth()}))},methods:{num:function(e){return e<10?"0"+e:e},reqRecommend:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(D["o"])();case 2:n=t.sent,e.dailySongs=n.data.data.dailySongs,e.$store.state.playlist=e.dailySongs,e.$store.commit("setPlaylist",e.$store.state.playlist);case 6:case"end":return t.stop()}}),t)})))()},getMonth:function(){this.month=P()().format("M"),this.today=P()().format("D")},changeColor:function(e){this.isColor=e}}};n("aebc");const T=$()(z,[["render",d],["__scopeId","data-v-b252986c"]]);t["default"]=T},"9ceb":function(e,t,n){"use strict";n("f869")},aab7:function(e,t,n){},aebc:function(e,t,n){"use strict";n("aab7")},f869:function(e,t,n){}}]);
//# sourceMappingURL=chunk-964b904c.a96e4b89.js.map