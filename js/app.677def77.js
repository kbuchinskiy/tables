(function(){"use strict";var a={5648:function(a,e,t){var l=t(7195),s=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[a._v("Native")]),a._v(" | "),e("router-link",{attrs:{to:"/flex"}},[a._v("Flex")]),a._v(" | "),e("router-link",{attrs:{to:"/grid"}},[a._v("Grid")])],1),e("main",[e("router-view")],1)])},n=[],o=t(1001),r={},u=(0,o.Z)(r,s,n,!1,null,null,null),i=u.exports,d=t(4340),b=t(4984),c=t(5021),m=t(2241),p=function(){var a=this,e=a._self._c;return e("div",{staticClass:"wrapper"},[e("table",{staticClass:"table"},a._l(a.tableData,(function(t,l){return e("tr",{key:"n"+l,staticClass:"table-row"},[e("td",{staticClass:"table-col-1"},[e("div",{staticClass:"table-cell"},[e("h4",{domProps:{textContent:a._s(t.countName)}}),e("p",{domProps:{textContent:a._s(t.createdAt)}})])]),e("td",{staticClass:"table-col-2"},[e("div",{staticClass:"table-cell"},[e("ui-status",{attrs:{status:t.latestStatus}})],1)]),e("td",{staticClass:"table-col-3"},[e("div",{staticClass:"table-cell",domProps:{textContent:a._s(t.advertiserName)}})]),e("td",{staticClass:"table-col-4"},[e("div",{staticClass:"table-cell",domProps:{textContent:a._s(t.id)}})]),e("td",{staticClass:"table-col-5"},[e("div",{staticClass:"table-cell",domProps:{textContent:a._s(t.authorName)}})]),e("td",{staticClass:"table-col-6"},[e("div",{staticClass:"table-cell"},[e("div",{staticClass:"buttons"},[e("font-awesome-icon",{attrs:{icon:"trash"}}),e("font-awesome-icon",{attrs:{icon:"copy"}}),e("font-awesome-icon",{attrs:{icon:"stop"}})],1)])])])})),0)])},h=[],N=JSON.parse('[{"id":98,"countName":"test-tag104","advertiserName":"111","platformName":"DISH","createdAt":"2023-01-03, 13:22:27","lastModifyDate":"2023-01-03, 13:30:41","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"PUSHED","failureReason":null,"pushedInternalStatus":"READY","pushedExternalStatus":"READY","pushedIntersectionStatus":"READY","externalAudienceId":"DISHADTGT_Dish_Addressable_Edwards_TherapyAwareness_2023_43212_20221220.txt","externalAudienceFileId":"57625","internalAudienceId":"1633715810","description":null,"usedForCampaign":true,"dataProvider":"LiveRamp","externalHouseholdsNum":2404123,"internalHouseholdsNum":512220,"overlayHouseholdsNum":185764,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-20T15:31:55Z","internalHouseholdsDate":"2021-10-08T00:00:00Z","externalTestNum":1996523,"internalTestNum":326456,"overlayTestNum":167188,"brand":"222","quarter":"1Q23"},{"id":97,"countName":"Load10","advertiserName":"MyAdv","platformName":"SLING","createdAt":"2022-12-30, 11:59:20","lastModifyDate":"2022-12-30, 12:04:40","authorName":"Name, Secondname","authorEmail":"user.secondname@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"MyBrand","quarter":"1Q99"},{"id":96,"countName":"Load 9","advertiserName":"Kyrylo","platformName":"DISH","createdAt":"2022-12-30, 11:59:08","lastModifyDate":"2022-12-30, 12:06:58","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Dish_Addressable_TOTAL_US_PRO_SWIPE_FEE_43821_20221114.txt","externalAudienceFileId":"57133","internalAudienceId":"1669906856","description":"dsad","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":224481,"internalHouseholdsNum":3384127,"overlayHouseholdsNum":126880,"deleteAllowed":false,"externalHouseholdsDate":"2022-11-15T01:31:42Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Nike","quarter":"3Q22"},{"id":95,"countName":"Load8","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:58:55","lastModifyDate":"2022-12-30, 12:02:50","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":94,"countName":"Load7","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:58:41","lastModifyDate":"2022-12-30, 12:02:34","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":93,"countName":"Load6","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:58:27","lastModifyDate":"2022-12-30, 12:02:21","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":92,"countName":"Load5","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:58:15","lastModifyDate":"2022-12-30, 12:02:11","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":91,"countName":"Load4","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:58:01","lastModifyDate":"2022-12-30, 12:00:28","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":90,"countName":"Load3","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:57:48","lastModifyDate":"2022-12-30, 12:00:06","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"},{"id":89,"countName":"Load2","advertiserName":"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","platformName":"SLING","createdAt":"2022-12-30, 11:57:36","lastModifyDate":"2022-12-30, 11:59:55","authorName":"Name, Secondname","authorEmail":"oksana.troshchynska@dish.com","latestStatus":"READY","failureReason":null,"pushedInternalStatus":null,"pushedExternalStatus":null,"pushedIntersectionStatus":null,"externalAudienceId":"DISHADTGT_Sling_Addressable_Epclusa_SwoopDBU_1Q23_40787_20221227.txt","externalAudienceFileId":"57731","internalAudienceId":"1669907690","description":"test description","usedForCampaign":false,"dataProvider":"LiveRamp","externalHouseholdsNum":377611,"internalHouseholdsNum":1465802,"overlayHouseholdsNum":232510,"deleteAllowed":false,"externalHouseholdsDate":"2022-12-27T21:25:19Z","internalHouseholdsDate":"2022-12-01T00:00:00Z","externalTestNum":null,"internalTestNum":null,"overlayTestNum":null,"brand":"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","quarter":"1Q99"}]'),f=function(){var a=this,e=a._self._c;return e("span",{staticClass:"text-xs ui-status",class:a.statusClassName},[e("strong",[a._v(a._s(a.status.toUpperCase()))])])},v=[],_={name:"UiStatus",props:{status:{type:String,required:!0}},computed:{statusClassName(){return`--${this.status.toLowerCase()}`}}},x=_,S=(0,o.Z)(x,f,v,!1,null,"54973fa2",null),A=S.exports,D={name:"TableNative",components:{UiStatus:A},data(){return{tableData:N}}},T=D,I=(0,o.Z)(T,p,h,!1,null,"74684367",null),C=I.exports,y=function(){var a=this,e=a._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"table"},a._l(a.tableData,(function(t,l){return e("div",{key:"f"+l,staticClass:"table-row"},[e("div",{staticClass:"table-cell table-col-1"},[e("h4",{domProps:{textContent:a._s(t.countName)}}),e("p",{domProps:{textContent:a._s(t.createdAt)}})]),e("div",{staticClass:"table-cell table-col-2"},[e("ui-status",{attrs:{status:t.latestStatus}})],1),e("div",{staticClass:"table-cell table-col-3",domProps:{textContent:a._s(t.advertiserName)}}),e("div",{staticClass:"table-cell table-col-4",domProps:{textContent:a._s(t.id)}}),e("div",{staticClass:"table-cell table-col-5",domProps:{textContent:a._s(t.authorName)}}),e("div",{staticClass:"table-cell table-col-6"},[e("div",{staticClass:"buttons"},[e("font-awesome-icon",{attrs:{icon:"trash"}}),e("font-awesome-icon",{attrs:{icon:"copy"}}),e("font-awesome-icon",{attrs:{icon:"stop"}})],1)])])})),0)])},H=[],w={name:"TableFlex",components:{UiStatus:A},data(){return{tableData:N}}},E=w,g=(0,o.Z)(E,y,H,!1,null,"9ca0cc56",null),P=g.exports,k=function(){var a=this,e=a._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"table"},[a._l(a.tableData,(function(t,l){return[e("div",{key:"g"+l+1,staticClass:"table-cell table-col-1"},[e("h4",{domProps:{textContent:a._s(t.countName)}}),e("p",{domProps:{textContent:a._s(t.createdAt)}})]),e("div",{key:"g"+l+2,staticClass:"table-cell table-col-2"},[e("ui-status",{attrs:{status:t.latestStatus}})],1),e("div",{key:"g"+l+3,staticClass:"table-cell table-col-3",domProps:{textContent:a._s(t.advertiserName)}}),e("div",{key:"g"+l+4,staticClass:"table-cell table-col-4",domProps:{textContent:a._s(t.id)}}),e("div",{key:"g"+l+5,staticClass:"table-cell table-col-5",domProps:{textContent:a._s(t.authorName)}}),e("div",{key:"g"+l+6,staticClass:"table-cell table-col-6"},[e("div",{staticClass:"buttons"},[e("font-awesome-icon",{attrs:{icon:"trash"}}),e("font-awesome-icon",{attrs:{icon:"copy"}}),e("font-awesome-icon",{attrs:{icon:"stop"}})],1)])]}))],2)])},R=[],Z={name:"TableGrid",components:{UiStatus:A},data(){return{tableData:N}}},L=Z,F=(0,o.Z)(L,k,R,!1,null,"4f9c7045",null),G=F.exports;l.ZP.use(m.ZP);const Q=[{path:"/",name:"native",component:C},{path:"/flex",name:"flex",component:P},{path:"/grid",name:"grid",component:G}],B=new m.ZP({mode:"history",base:"/tables/",routes:Q});var U=B;d.vI.add(c.$aW,c.kZ_,c.Bg$),l.ZP.component("font-awesome-icon",b.GN),l.ZP.config.productionTip=!1,l.ZP.config.productionTip=!1,new l.ZP({router:U,render:a=>a(i)}).$mount("#app")}},e={};function t(l){var s=e[l];if(void 0!==s)return s.exports;var n=e[l]={exports:{}};return a[l](n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,l,s,n){if(!l){var o=1/0;for(d=0;d<a.length;d++){l=a[d][0],s=a[d][1],n=a[d][2];for(var r=!0,u=0;u<l.length;u++)(!1&n||o>=n)&&Object.keys(t.O).every((function(a){return t.O[a](l[u])}))?l.splice(u--,1):(r=!1,n<o&&(o=n));if(r){a.splice(d--,1);var i=s();void 0!==i&&(e=i)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[l,s,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var l in e)t.o(e,l)&&!t.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:e[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,l){var s,n,o=l[0],r=l[1],u=l[2],i=0;if(o.some((function(e){return 0!==a[e]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(u)var d=u(t)}for(e&&e(l);i<o.length;i++)n=o[i],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(d)},l=self["webpackChunktables"]=self["webpackChunktables"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(5648)}));l=t.O(l)})();
//# sourceMappingURL=app.677def77.js.map