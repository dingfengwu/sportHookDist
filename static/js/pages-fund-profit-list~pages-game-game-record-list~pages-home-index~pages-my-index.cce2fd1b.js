(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-profit-list~pages-game-game-record-list~pages-home-index~pages-my-index"],{"049e":function(t,n,e){"use strict";e.r(n);var a=e("65a3"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"0bd9":function(t,n,e){"use strict";var a=e("4ea4");e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("5492")),i={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},fontFamily:{type:String,default:""}},data:function(){return{icons:r.default}},methods:{_onClick:function(){this.$emit("click")}}};n.default=i},1035:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-status-bar[data-v-79edadf4]{height:20px}.theme-gre .uni-status-bar[data-v-79edadf4]{background-color:#00562f!important}.theme-blu .uni-status-bar[data-v-79edadf4]{background-color:#006b99!important}.theme-red .uni-status-bar[data-v-79edadf4]{background-color:#a50000!important}.theme-ora .uni-status-bar[data-v-79edadf4]{background-color:#cf600f!important}.theme-vio .uni-status-bar[data-v-79edadf4]{background-color:#613086!important}',""]),t.exports=n},"134b":function(t,n,e){"use strict";e.r(n);var a=e("3efa"),r=e("e391");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("5677");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"8071b06e",null,!1,a["a"],o);n["default"]=l.exports},"1c0b2":function(t,n,e){"use strict";e("a9e3"),e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{currentTabIndex:this.current}},props:{current:{type:[Number,String],default:0},backgroundColor:{type:String,default:"#3a3a3a"},color:{type:String,default:"#fff"},tintColor:{type:String,default:"#42b983"},tabList:{type:Array,default:function(){return[]}}},computed:{middleItemIndex:function(){return this.tabList.length%2===1?parseInt(this.tabList.length/2):-1}},methods:{switchTab:function(t){this.currentTabIndex=t,this.$emit("click",t);var n=this.tabList[t].url;n&&this.$push(n)}}};n.default=a},"1de5":function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"212c":function(t,n,e){"use strict";e.r(n);var a=e("7c62"),r=e("5b2f");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("408b");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"79edadf4",null,!1,a["a"],o);n["default"]=l.exports},"241a":function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("858c")),i=e("e5c4"),o={props:["current"],components:{tabbar:r.default},data:function(){return{bottomNavList:i.config.bottomMenuHook}}};n.default=o},"3efa":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-text",{staticClass:"uni-icons",class:[t.fontFamily,t.fontFamily?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.fontFamily?"":t.icons[t.type]))])},i=[]},"3f41":function(t,n,e){"use strict";e("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("c570"),r={name:"UniStatusBar",data:function(){return{statusBarHeight:20}},mounted:function(){this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight+"px",navigator.userAgent.indexOf(a.APP_USERAGENT_FLAG)>=0&&0===uni.getSystemInfoSync().statusBarHeight&&(this.statusBarHeight="20px")}};n.default=r},"408b":function(t,n,e){"use strict";var a=e("ca29"),r=e.n(a);r.a},4651:function(t,n,e){t.exports=e.p+"static/fonts/uni.75745d34.ttf"},4688:function(t,n,e){"use strict";var a=e("5336"),r=e.n(a);r.a},"4c30":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tabbar",style:{"background-color":t.backgroundColor}},[t._l(t.tabList,(function(n,a){return[e("v-uni-view",{key:a+"_0",staticClass:"navigator",class:{on:t.currentTabIndex==a,middle:t.middleItemIndex===a},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.switchTab(a)}}},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-text",{staticClass:"iconfont",class:n.icon,style:[t.currentTabIndex==a?{color:t.tintColor}:{color:t.color}]}),n.badge?e("v-uni-text",{staticClass:"uni_badge"},[t._v(t._s(n.badge))]):t._e(),n.badgeDot?e("v-uni-text",{staticClass:"uni_badge uni_badge_dot"}):t._e()],1),e("v-uni-view",{staticClass:"text",style:[t.currentTabIndex==a?{color:t.tintColor}:{color:t.color}]},[t._v(t._s(n.text))])],1)]}))],2)},i=[]},5336:function(t,n,e){var a=e("aca8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("919312c6",a,!0,{sourceMap:!1,shadowMode:!1})},5492:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};n.default=a},5677:function(t,n,e){"use strict";var a=e("e1f7"),r=e.n(a);r.a},"5b2f":function(t,n,e){"use strict";e.r(n);var a=e("3f41"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},6221:function(t,n,e){var a=e("f319");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("56c69105",a,!0,{sourceMap:!1,shadowMode:!1})},"65a3":function(t,n,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("212c")),i={name:"UniNavBar",components:{statusBar:r.default},emits:["clickLeft","clickRight","clickTitle"],props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title),""!==this.title&&window.config.title&&(document.title="".concat(window.config.title,"-").concat(this.title))},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};n.default=i},6655:function(t,n,e){"use strict";var a=e("8bc7"),r=e.n(a);r.a},"670c":function(t,n,e){var a=e("24fb"),r=e("1de5"),i=e("4651");n=a(!1);var o=r(i);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+o+') format("truetype")}.uni-icons[data-v-8071b06e]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=n},"778d":function(t,n,e){"use strict";e.r(n);var a=e("f543"),r=e("daf6");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("4688");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"088bd730",null,!1,a["a"],o);n["default"]=l.exports},"7c62":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},i=[]},"7d36":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={uniIcons:e("134b").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-navbar"},[e("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?e("status-bar"):t._e(),e("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[e("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?e("v-uni-view",{staticClass:"uni-navbar__content_view"},[e("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?e("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[e("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),e("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickTitle.apply(void 0,arguments)}}},[t.title.length?e("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[e("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),e("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?e("v-uni-view",{staticClass:"uni-navbar__content_view"},[e("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?e("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[e("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?e("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?e("status-bar"):t._e(),e("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},i=[]},"858c":function(t,n,e){"use strict";e.r(n);var a=e("4c30"),r=e("93b1");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("d3b3");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"3881326c",null,!1,a["a"],o);n["default"]=l.exports},"8bc7":function(t,n,e){var a=e("9b83");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("25c8f44b",a,!0,{sourceMap:!1,shadowMode:!1})},"93b1":function(t,n,e){"use strict";e.r(n);var a=e("1c0b2"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"9b83":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-nav-bar-text[data-v-f47240b2]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-f47240b2]{font-size:%?28?%}.uni-navbar__content[data-v-f47240b2]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-f47240b2]{display:flex;align-items:center;flex-direction:row}.uni-navbar__header[data-v-f47240b2]{display:flex;flex-direction:row;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-f47240b2]{display:flex;flex-wrap:nowrap;width:%?120?%;padding:0 6px;justify-content:center;align-items:center;cursor:pointer}.uni-navbar__header-btns-left[data-v-f47240b2]{display:flex;width:%?150?%;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-f47240b2]{display:flex;width:%?150?%;padding-right:%?30?%;justify-content:flex-end}.uni-navbar__header-container[data-v-f47240b2]{flex:1}.uni-navbar__header-container-inner[data-v-f47240b2]{display:flex;flex:1;align-items:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-f47240b2]{height:44px}.uni-navbar--fixed[data-v-f47240b2]{position:fixed;z-index:998;left:var(--window-left);right:var(--window-right)}.uni-navbar--shadow[data-v-f47240b2]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-f47240b2]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc}',""]),t.exports=n},aca8:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom-menu[data-v-088bd730] .text{white-space:nowrap}',""]),t.exports=n},c466:function(t,n,e){"use strict";e.r(n);var a=e("7d36"),r=e("049e");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("6655");var o,c=e("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"f47240b2",null,!1,a["a"],o);n["default"]=l.exports},ca29:function(t,n,e){var a=e("1035");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("2f2d9e08",a,!0,{sourceMap:!1,shadowMode:!1})},d3b3:function(t,n,e){"use strict";var a=e("6221"),r=e.n(a);r.a},daf6:function(t,n,e){"use strict";e.r(n);var a=e("241a"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},e1f7:function(t,n,e){var a=e("670c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("54eef373",a,!0,{sourceMap:!1,shadowMode:!1})},e391:function(t,n,e){"use strict";e.r(n);var a=e("0bd9"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},f319:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabbar[data-v-3881326c]{display:flex;justify-content:space-around;align-items:center;padding:%?10?% %?0?% %?10?% %?0?%;position:fixed;bottom:0;left:0;right:0;line-height:1.1;font-size:1em}.tabbar .navigator[data-v-3881326c]{text-align:center;flex-basis:20%;cursor:pointer}.tabbar .navigator.middle[data-v-3881326c]{margin-top:%?-30?%}.tabbar .navigator.middle .iconfont[data-v-3881326c]{font-size:3em;padding:%?10?%;border-radius:%?80?%;background-color:#3a3a3a;border-bottom:0;border-left:0;border-right:0}.theme-gre .tabbar .navigator.on[data-v-3881326c] uni-text, .theme-gre .tabbar .navigator.on[data-v-3881326c] uni-view{color:#42c090!important}.theme-blu .tabbar .navigator.on[data-v-3881326c] uni-text, .theme-blu .tabbar .navigator.on[data-v-3881326c] uni-view{color:#3e94d1!important}.theme-red .tabbar .navigator.on[data-v-3881326c] uni-text, .theme-red .tabbar .navigator.on[data-v-3881326c] uni-view{color:#ff7875!important}.theme-ora .tabbar .navigator.on[data-v-3881326c] uni-text, .theme-ora .tabbar .navigator.on[data-v-3881326c] uni-view{color:#ffab57!important}.theme-vio .tabbar .navigator.on[data-v-3881326c] uni-text, .theme-vio .tabbar .navigator.on[data-v-3881326c] uni-view{color:#b27ad8!important}.tabbar .iconfont[data-v-3881326c]{font-size:2em}',""]),t.exports=n},f543:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tabbar",{staticClass:"bottom-menu",attrs:{tabList:t.bottomNavList,current:t.current}})},i=[]}}]);