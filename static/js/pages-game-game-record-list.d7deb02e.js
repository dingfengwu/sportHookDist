(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-game-record-list"],{"0be6":function(t,e,r){"use strict";r.r(e);var a=r("21b6"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"21b6":function(t,e,r){"use strict";var a=r("4ea4");r("c975"),r("e25e"),r("ac1f"),r("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("5530")),o=r("26cb"),i=r("9314"),d=a(r("1569")),c=r("0b4f"),s=r("5964"),u=r("7808"),l={props:["item","openable"],data:function(){return{MATCH_STATUS_FINISHED:c.MATCH_STATUS_FINISHED,MATCH_STATUS_MATCHING:c.MATCH_STATUS_MATCHING}},filters:{status:function(t){(0,i.getCurrentTime)();return c.MATCH_STATUS_MATCHING.indexOf(t.status)>=0?d.default.$t("game.matching"):7===t.status?d.default.$t("game.finished"):d.default.$t("game.unstart")},costTime:function(t){if(!t||!t.time)return"";var e=(0,i.getCurrentTime)(),r=new Date(t.time.replace(/\-/g,"/")),a=e.getTime()-r.getTime();return a=parseInt(a/1e3/60),"".concat(a,"'")},remainder:function(t){if(!t||!t.match_start_time)return"";var e=new Date(t.match_start_time.replace(/\-/g,"/"));return(0,i.formatDate)(e,"MM-dd HH:mm")},expectProfit:function(t){if(!t||!t.amount)return"--";var e=(0,u.getSystemConfigCache)(),r=(0,s.getHandFee)(t.amount,e.profit_fee_rules);return"rate"===r.type?t.amount*t.odds*(1-r.value):t.amount*t.odds-r.value}},computed:(0,n.default)((0,n.default)({},(0,o.mapGetters)(["config","systemConfig"])),{},{showPrize:function(){return void 0!==this.item&&c.ORDER_COMPLETED.indexOf(this.item.status)>=0}}),methods:{open:function(){if(!1!==this.openable){var t=(0,i.getCurrentTime)(),e=new Date(this.item.time.replace(/-/gim,"/")),r=t.getTime()-e.getTime();c.MATCH_STATUS_BETABLE.indexOf(this.item.status)>=0?r>864e5?console.warn("此场比赛超过一天未开始不能下注"):(this.$store.commit("setCurrentMatch",this.item),this.$push("/pages/game/bet")):uni.showToast({title:this.$t("game.stopSale"),icon:"error"}),this.$emit("open")}}}};e.default=l},"24ea":function(t,e,r){"use strict";r.r(e);var a=r("344f"),n=r("807f");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("b4e6");var i,d=r("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"bdf92530",null,!1,a["a"],i);e["default"]=c.exports},"27e3":function(t,e,r){var a=r("53c8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("4f06").default;n("5d210c19",a,!0,{sourceMap:!1,shadowMode:!1})},"292a":function(t,e,r){"use strict";r.r(e);var a=r("6c72"),n=r("3a0e");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("95c9");var i,d=r("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"2d03a01c",null,!1,a["a"],i);e["default"]=c.exports},"2d68":function(t,e,r){var a=r("ba06");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("4f06").default;n("c0f640c2",a,!0,{sourceMap:!1,shadowMode:!1})},"344f":function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"record-list track-order-record"},[r("scroll-view-infinity-load",{attrs:{"load-completed":t.loadCompleted,"show-completed":t.showCompleted},on:{refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.refreshData.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.loadData.apply(void 0,arguments)}}},[t._l(t.trackOrderList,(function(e,a){return 2!==e.status?r("track-order-item",{key:a,attrs:{item:e,openable:!1}}):t._e()})),0===t.trackOrderList.length?r("empty-list"):t._e()],2)],1)},o=[]},"3a0e":function(t,e,r){"use strict";r.r(e);var a=r("ca53"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"43ce":function(t,e,r){"use strict";var a=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("5530")),o=a(r("292a")),i=a(r("1c32")),d=r("26cb"),c={components:{trackOrderList:o.default,bottomMenu:i.default},computed:(0,n.default)({},(0,d.mapGetters)(["isLogin"])),methods:(0,n.default)({},(0,d.mapActions)(["logout"]))};e.default=c},"495f":function(t,e,r){"use strict";var a=r("2d68"),n=r.n(a);n.a},5189:function(t,e,r){var a=r("95f4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("4f06").default;n("7593311d",a,!0,{sourceMap:!1,shadowMode:!1})},"53c8":function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.track-order-record[data-v-bdf92530]{height:calc(100% - %?20?% - %?72?% - %?0?%)}.track-order-record[data-v-bdf92530] .hook-item{margin-bottom:%?20?%}.track-order-record[data-v-bdf92530] .scroll-view-infinity-load{height:100%!important}',""]),t.exports=e},6651:function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"track-order-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"header"},[r("v-uni-text",[t._v(t._s(t.item.game))]),r("v-uni-text",[t._v(t._s(t._f("remainder")(t.item)))])],1),r("v-uni-view",{staticClass:"body"},[r("v-uni-view",{staticClass:"title"},[r("v-uni-view",{staticClass:"l"},[r("v-uni-text",[t._v(t._s(t.item.match))])],1),r("v-uni-view",{staticClass:"r"},[r("v-uni-text",{staticClass:"site"},[t._v(t._s(t.item.way))]),r("v-uni-text",{staticClass:"status"},[t._v(t._s(t.item.formatted_status))])],1)],1),r("v-uni-view",{staticClass:"content"},[r("v-uni-view",[r("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("trackOrder.labelOrderNo"))+"：")]),t._v(t._s(t.item.serial_number))],1),r("v-uni-view",[r("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("trackOrder.labelTradeTime"))+"：")]),t._v(t._s(t.item.bought_at))],1),r("v-uni-view",[r("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("trackOrder.labelMarket"))+"：")]),t._v(t._s(t.item.way)+" "+t._s(t.item.bet_number)+"\n\t\t\t\t@"+t._s(t._f("formatOdds")(t.item.odds))+"%")],1),r("v-uni-view",{staticClass:"bottom"},[r("v-uni-text",[t._v(t._s(t.$t("trackOrder.labelBetAmount"))+"："+t._s(t.systemConfig.currency_symbol)+t._s(t._f("toThousandslsFilter")(t.item.amount)))]),t.showPrize?r("v-uni-text",[t._v(t._s(t.$t("trackOrder.labelPrize"))+"："+t._s(t.systemConfig.currency_symbol)+t._s(t._f("toThousandslsFilter")(t.item.prize)))]):r("v-uni-text",[t._v(t._s(t.$t("trackOrder.labelExpectProfit"))+"："+t._s(t.systemConfig.currency_symbol)+t._s(t._f("toThousandslsFilter")(t._f("expectProfit")(t.item))))])],1)],1)],1)],1)},o=[]},"68ee":function(t,e,r){"use strict";r.r(e);var a=r("ce7c"),n=r("6f2b");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("495f");var i,d=r("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"8d25bf56",null,!1,a["a"],i);e["default"]=c.exports},"6c72":function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return a}));var a={uniSegmentedControl:r("3a3c").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"game-record"},[r("uni-segmented-control",{attrs:{current:t.active,values:t.items,styleType:"button"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.selected.apply(void 0,arguments)}}}),0===t.active?r("track-order-record",{attrs:{completed:!1}}):t._e(),1===t.active?r("track-order-record",{attrs:{completed:!0}}):t._e()],1)},o=[]},"6ead":function(t,e,r){"use strict";var a=r("5189"),n=r.n(a);n.a},"6f2b":function(t,e,r){"use strict";r.r(e);var a=r("43ce"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"807f":function(t,e,r){"use strict";r.r(e);var a=r("eec3"),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"95c9":function(t,e,r){"use strict";var a=r("b184"),n=r.n(a);n.a},"95f4":function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.track-order-item[data-v-65d954a4]{margin:%?0?% %?20?% %?20?% %?20?%;background-color:#fff;border-style:solid;border-width:%?1?%;border-top-left-radius:%?15?%;border-top-right-radius:%?15?%}.theme-gre .track-order-item[data-v-65d954a4]{border-color:#00562f}.theme-blu .track-order-item[data-v-65d954a4]{border-color:#006b99}.theme-red .track-order-item[data-v-65d954a4]{border-color:#a50000}.theme-ora .track-order-item[data-v-65d954a4]{border-color:#cf600f}.theme-vio .track-order-item[data-v-65d954a4]{border-color:#613086}.theme-pin .track-order-item[data-v-65d954a4]{border-color:#dbc3d1}.track-order-item .header[data-v-65d954a4]{padding:%?10?% %?10?%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:1.2em;font-weight:700}.theme-gre .track-order-item .header[data-v-65d954a4]{background-color:#00562f!important}.theme-blu .track-order-item .header[data-v-65d954a4]{background-color:#006b99!important}.theme-red .track-order-item .header[data-v-65d954a4]{background-color:#a50000!important}.theme-ora .track-order-item .header[data-v-65d954a4]{background-color:#cf600f!important}.theme-vio .track-order-item .header[data-v-65d954a4]{background-color:#613086!important}.theme-pin .track-order-item .header[data-v-65d954a4]{background-color:#dbc3d1!important}.track-order-item .body .title[data-v-65d954a4]{display:flex;justify-content:space-between;padding:%?10?%}.track-order-item .body .title .l .vs[data-v-65d954a4]{margin:0 %?10?%}.track-order-item .body .title .r[data-v-65d954a4]{width:%?290?%;flex-shrink:0}.track-order-item .body .title .r .status[data-v-65d954a4],\r\n.track-order-item .body .title .r .site[data-v-65d954a4]{color:#a50000;border-radius:%?5?%;padding:%?5?% %?10?%;background-color:#ffc6c6;margin-left:%?10?%;min-width:%?90?%;display:inline-block;text-align:center}.track-order-item .body .title .r .site[data-v-65d954a4]{color:#613086;background-color:#dcb0ff}.track-order-item .body .content[data-v-65d954a4]{padding:%?10?%;display:flex;flex-direction:column;line-height:2;font-size:.9em}.track-order-item .body .content uni-text[data-v-65d954a4]{display:inline-block;width:%?140?%}.track-order-item .body .content .bottom[data-v-65d954a4]{display:flex;flex-direction:row;justify-content:space-between;color:#fff;padding:0 %?10?%;border-radius:%?5?%}.theme-gre .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#42c090}.theme-blu .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#65a5d1}.theme-red .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#ff4d4f}.theme-ora .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#f6903d}.theme-vio .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#b27ad8}.theme-pin .track-order-item .body .content .bottom[data-v-65d954a4]{background-color:#dbc3d1}.track-order-item .body .content .bottom uni-text[data-v-65d954a4]{display:inline-block;width:inherit}',""]),t.exports=e},aa6a:function(t,e,r){"use strict";r.r(e);var a=r("6651"),n=r("0be6");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("6ead");var i,d=r("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"65d954a4",null,!1,a["a"],i);e["default"]=c.exports},b184:function(t,e,r){var a=r("f1cf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("4f06").default;n("de2fcddc",a,!0,{sourceMap:!1,shadowMode:!1})},b4e6:function(t,e,r){"use strict";var a=r("27e3"),n=r.n(a);n.a},ba06:function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.game-record-list-container[data-v-8d25bf56]{height:100%}',""]),t.exports=e},ca53:function(t,e,r){"use strict";var a=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("24ea")),o={components:{trackOrderRecord:n.default},data:function(){return{active:0,items:[this.$t("trackOrder.labelTrackOrdering"),this.$t("trackOrder.labelTrackOrderCompleted")]}},methods:{selected:function(t){this.active=t.currentIndex}}};e.default=o},ce7c:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return a}));var a={uniNavBar:r("7267").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"game-record-list-container"},[r("uni-nav-bar",{attrs:{title:t.$t("gameRecord.title"),shadow:!1,border:!1}}),r("track-order-list"),r("bottom-menu",{attrs:{current:"1"}})],1)},o=[]},eec3:function(t,e,r){"use strict";var a=r("4ea4");r("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("5530")),o=r("26cb"),i=a(r("aa6a")),d=r("9314"),c=a(r("a021")),s=a(r("d25f")),u=r("0b4f"),l={props:["completed"],data:function(){return{filter:{page:1,beginTime:"",endTime:"",autoBet:1,status:[]},loadCompleted:!0,showCompleted:!0}},components:{trackOrderItem:i.default,scrollViewInfinityLoad:c.default,emptyList:s.default},watch:{completed:function(){this.filter.page=1,this.queryTrackOrderList()}},computed:(0,n.default)((0,n.default)({},(0,o.mapGetters)(["orderList"])),{},{trackOrderList:function(){return void 0===this.orderList||void 0===this.orderList.data?[]:this.orderList.data}}),methods:(0,n.default)((0,n.default)({},(0,o.mapActions)(["getOrderList"])),{},{queryTrackOrderList:function(){var t=this,e=(0,d.getCurrentTime)();e=(0,d.addDays)(e,1);var r=(0,d.addDays)(e,-30);r=(0,d.formatDate)(r),e=(0,d.formatDate)(e),this.completed?this.filter.status=u.ORDER_COMPLETED:this.filter.status=u.ORDER_UNCOMPLETED,this.filter.beginTime=r,this.filter.endTime=e,this.loadCompleted=!1,this.getOrderList(this.filter).then((function(e){t.loadCompleted=e.total_count===e.data.length}))},loadData:function(){this.filter.page=this.filter.page+1,this.queryTrackOrderList()},refreshData:function(){this.filter.page=1,this.queryTrackOrderList()}}),created:function(){}};e.default=l},f1cf:function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.game-record[data-v-2d03a01c]{height:calc(100% - %?200?%)}.game-record[data-v-2d03a01c] .segmented-control{margin-top:%?20?%}.game-record[data-v-2d03a01c] .record-list{padding-top:%?20?%}',""]),t.exports=e}}]);