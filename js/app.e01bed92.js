(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,x=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&x.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(x.length)x.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"162d":function(t,e,n){},"4d63":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[t._v(" 은사 테스트 ")]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},i=[],s={name:"App",components:{},data:function(){return{}}},o=s,c=n("2877"),u=n("6544"),d=n.n(u),l=n("7496"),x=n("40dc"),p=n("f6c4"),m=n("2fa4"),f=Object(c["a"])(o,r,i,!1,null,null,null),v=f.exports;d()(f,{VApp:l["a"],VAppBar:x["a"],VMain:p["a"],VSpacer:m["a"]});var h=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",t._l(t.list,(function(e,a){return n("QuestionItem",{key:"question-"+a,attrs:{qindex:e.index,qtext:e.text},model:{value:t.answers[e.index],callback:function(n){t.$set(t.answers,e.index,n)},expression:"answers[item.index]"}})})),1),n("div",[n("v-btn",{staticClass:"primary",on:{click:t.confirm}},[t._v("확인하기")])],1),t.showResultPage?n("div",[n("div",[n("table",[t._m(0),n("tbody",t._l(t.sortedAnalysedData,(function(e,a){return n("tr",{key:"result-cate-"+a},[n("td",[t._v(t._s(e.key))]),n("td",[t._v(t._s(e.category.text))]),n("td",[t._v(t._s(e.sum))])])})),0)])]),n("div",[n("table",{staticClass:"analysedDataTable"},[t._m(1),n("tbody",[t._l(t.sortedPlacements,(function(e,a){return[n("tr",{key:"result-place-"+a+"-a"},[n("td",{class:{topMaru:0===a}},[t._v(t._s(a+1))]),n("td",{class:{topMaru:0===a}},[t._v(t._s(e.sum))]),n("td",{class:{topMaru:0===a}},[t._v(t._s(e.placement.maru))]),n("td",{class:{topMaru:0===a}},[t._v(t._s(e.placement.concept))]),n("td",{class:{topMaru:0===a}},[t._v(t._s(e.placement.categories.map((function(e){return e+"("+t.analyseCategories[e].text+")"})).join(", ")))])]),n("tr",{key:"result-place-"+a+"-b"},[n("td",{class:{topMaru:0===a},attrs:{colspan:"5"}},[t._v(t._s(e.placement.ministryTeams.join(", ")))])]),n("tr",{key:"result-place-"+a+"-c"},[n("td",{staticStyle:{height:"10px"},attrs:{colspan:"5"}})])]}))],2)])]),t._m(2)]):t._e()])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("목록")]),n("td",[t._v("은사")]),n("td",[t._v("합계")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",{attrs:{width:"60px"}},[t._v("순위")]),n("td",{attrs:{width:"60px"}},[t._v("합계")]),n("td",[t._v("해당마루")]),n("td",[t._v("핵심개념")]),n("td",[t._v("목록")])]),n("tr",[n("td",{attrs:{colspan:"5"}},[t._v("사역팀")])]),n("tr",[n("td",{staticStyle:{height:"10px"},attrs:{colspan:"5"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"detailimage",attrs:{src:n("a16e")}})])}],b=(n("4de4"),n("4160"),n("a15b"),n("d81d"),n("13d5"),n("b64b"),n("159b"),n("5530")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thiscomponent"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100%"}},[n("v-card-text",[n("div",{staticClass:"text--primary"},[t._v(t._s(t.qindex)+" 번 항목")]),n("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.qtext)+" ")])]),n("v-card-actions",[n("v-radio-group",{on:{change:function(e){return t.scoreChanged(e)}},model:{value:t.scoreValue,callback:function(e){t.scoreValue=e},expression:"scoreValue"}},[n("v-radio",{attrs:{label:"매우 (5점)",value:5}}),n("v-radio",{attrs:{label:"대체로 (3점)",value:3}}),n("v-radio",{attrs:{label:"조금 (1점)",value:1}}),n("v-radio",{attrs:{label:"전혀 (0점)",value:0}})],1)],1)],1)],1)},w=[],O=(n("a9e3"),{name:"QuestionItem",props:{qindex:Number,qtext:String,value:Number},data:function(){return{scoreValue:-1}},watch:{value:function(){this.scoreValue=this.value}},methods:{scoreChanged:function(t){this.$emit("input",t)}}}),j=O,C=(n("8e0e"),n("b0af")),k=n("99d9"),P=n("67b6"),T=n("43a6"),V=Object(c["a"])(j,g,w,!1,null,"78462590",null),M=V.exports;function D(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}d()(V,{VCard:C["a"],VCardActions:k["a"],VCardText:k["b"],VRadio:P["a"],VRadioGroup:T["a"]});var E={A:{items:[1,19,37],text:"예언"},B:{items:[2,20,38],text:"찬양"},C:{items:[3,21,39],text:"가르침"},D:{items:[4,22,40],text:"지식"},E:{items:[5,23,41],text:"지혜"},F:{items:[6,24,42],text:"긍휼"},G:{items:[7,25,43],text:"권면"},H:{items:[8,26,44],text:"목사"},I:{items:[9,27,45],text:"복음전도"},J:{items:[10,28,46],text:"구제"},K:{items:[11,29,47],text:"섬김"},L:{items:[12,30,48],text:"도움"},M:{items:[13,31,49],text:"다스림"},N:{items:[14,32,50],text:"행정"},O:{items:[15,33,51],text:"예술"},P:{items:[16,34,52],text:"믿음"},Q:{items:[17,35,53],text:"중보"},R:{items:[18,36,54],text:"선교사"}},$={name:"Home",components:{QuestionItem:M},data:function(){var t={list:[{index:1,text:"죄를 깨닫게 하거나 삶의 변화를 유도하는 이야기를 다른 이들에게 조리있게 전한다."},{index:2,text:"찬양하는 시간에 앞에서 찬양팀으로 섬기고 싶은 마음이 크다"},{index:3,text:"성경 지식을 상대방이 이해하기 쉽게 가르칠 수 있다."},{index:4,text:"평소 꾸준히 성경을 읽고 공부한다."},{index:5,text:"개인적인 문제 또는 영적인 문제에 관해 종종 상담 요청을 받고 있다."},{index:6,text:"남의 고통을 자신의 고통처럼 느끼고 그들과 함께 하는 것을 즐거워한다."},{index:7,text:"다른 사람의 문제 해결에 나의 권면이 도움이 되었다는 소리를 자주 듣는다."},{index:8,text:"친구들을 인도하고 영적으로 지도해주는 일에 두려움을 느끼지 않는다."},{index:9,text:"주위 사람들에게 복음을 소개하면 잘 받아들이는 편이다."},{index:10,text:"주님과 청소년교회를 위해 물질을 사용하는데 평소 거리낌을 갖지 않는다."},{index:11,text:"조그만 일이라도 청소년교회를 위해서 일할 수 있다는 것 자체에 감사한 마음이 든다."},{index:12,text:"청소년교회를 위해서 일할 때마다 영적인 보람과 성장을 경험한다."},{index:13,text:"어떤 일을 맡아 추진해 나갈 때 진행이 잘 이루어진다는 평가를 받는다."},{index:14,text:"사람, 물질, 아이디어 등의 자원을 찾아내 편성하고 계호기하는 일에 능숙하다."},{index:15,text:"자신의 예술적인 끼와 재능으로 하나님께 영광 돌리고 싶다"},{index:16,text:"환난 중에 있더라도 하나님의 도우심을 의심해 본 적이 거의 없다."},{index:17,text:"남을 위해 기도한 후에 구체적인 결과가 나타나는 것을 자주 경험한다."},{index:18,text:"다른 나라 사람들과 접촉하고 어울리는 것에 큰 어려움이 없다."},{index:19,text:"특별한 시간과 상황에서 하나님의 뜻을 강력하게 느낄 때가 있다."},{index:20,text:"자신의 음악적 재능으로 하나님께 영광 돌리고 싶다"},{index:21,text:"사람들에게 성경을 가르친 후에 그들의 가치관과 행동이 쉽게 변화되는 것을 본다."},{index:22,text:"말씀을 읽거나 공부할 때 생활에 적용될 수 있는 진리들을 쉽게 발견한다."},{index:23,text:"문제의 해결책을 제시하여 다른 이들의 필요를 태워준다는 소리를 종종 듣는다."},{index:24,text:"다른 사람들이 무엇을 필요로 할 때 그것을 실제적으로 채워주는 것을 좋아한다."},{index:25,text:"어려움에 처한 사람들에게 소망의 말씀을 전해주면 곧 힘을 얻곤 한다."},{index:26,text:"소그룹 모임을 인도할 때마다 그 모임이 양적으로 질적으로 부흥된다."},{index:27,text:"전도 훈련 프로그램이 있으면 빠짐없이 참석하는 편이다."},{index:28,text:"구제와 지역봉사를 위한 자원봉사에 기쁘게 동참한다."},{index:29,text:"나는 생각하는 스타일이라기보다는 행동하는 스타일에 속한다."},{index:30,text:"다른 사람들이 더 일을 잘 할 수 있도록 보조하는 역할이 기쁘다."},{index:31,text:"모두가 공감하는 목표나 방법을 제시함으로 내 의견이 자주 채택된다."},{index:32,text:"어떤 일을 할 때에는 세밀한 부분까지도 철저히, 신중하게 다루는 편이다."},{index:33,text:"연극, 댄스, 드라마 등 다양한 예술 분야에 관심이 많다."},{index:34,text:"남들이 생각하지 못하는 거대한 비전을 그려볼 때가 많다."},{index:35,text:"기도 부탁을 받으면 최소한 일주일 이상 그 제목을 놓고 기도한다."},{index:36,text:"복음을 전하기 위해 다른 나라의 문화나 언어를 배우는 것이 즐겁다."},{index:37,text:"하나님으로부터 오는 직접, 간접적인 메시지를 적시에 전달한다는 평을 듣는다."},{index:38,text:"주위 사람들에게 노래나 악기로 찬양하라는 권유를 받아본 적이 있다."},{index:39,text:"평소 성경구절을 암송하고 있으며 암송한 구절을 자주 활용한다."},{index:40,text:"성경구절이나 성경적 진리에 관해 종종 나에게 물어오는 사람들이 있다."},{index:41,text:"어떤 사건에 대한 결과를 정확하게 예측하곤 한다."},{index:42,text:"사람들은 어려운 사람을 돕는 일이 생길 때마다 나를 찾는다."},{index:43,text:"사람들의 잠재력을 제대로 파악하며 필요한 사역에 참여하도록 잘 이끈다."},{index:44,text:"사람을 양육하기 위해서 오랜 기간 인내를 가지고 지켜보며 돌보는 편이다."},{index:45,text:"다른 어떤 일보다 불신자가 예수님을 영접했을 때 가장 기쁘다."},{index:46,text:"하나님의 일을 하다보면 필요한 재정을 때맞춰 공급받곤 한다."},{index:47,text:"드러나지 않는 일, 평범한 일에도 싫증을 내거나 불평하지 않는 편이다."},{index:48,text:"남모르게 다른 사람들을 돕는 것이 기쁘고 보람스럽다."},{index:49,text:"내가 어떤 일을 추진하고자 할 때 사람들은 신뢰를 보이며 따라준다."},{index:50,text:"결속력이 약한 모임이나 기관을 보다 강하게 묶어주는 일을 하고 싶다."},{index:51,text:"사람들 앞에서 자신의 재능을 보여주고 공연하는 것에 기쁨과 보람을 느낀다."},{index:52,text:"하나님께서 원하신다는 생각이 들면 어떤 반대를 무릎 쓰고서라도 추진 할 수 있다."},{index:53,text:"기도하는 것이 즐거우며 하나님이 자신의 기도를 인도하신다는 것을 경험한다."},{index:54,text:"의식주 생활에 대한 관심이 적으며 환경의 적응력이 뛰어난 편이다."}],placements:[{maru:"믿음마루",concept:"예배",categories:["P","Q","O","B"],ministryTeams:["중보기도팀","찬양팀","워십댄스팀","드라마팀"]},{maru:"사랑마루",concept:"교제",categories:["F","G","N"],ministryTeams:["이벤트팀","QT나눔팀","환영팀","심방팀"]},{maru:"섬김마루",concept:"봉사",categories:["J","K","L"],ministryTeams:["자원봉사팀","환경디자인팀","주보디자인팀"]},{maru:"소망마루",concept:"선포",categories:["H","I","R","A"],ministryTeams:["거리전도팀","관계전도팀","단기선교팀","선교사중보팀"]},{maru:"새김마루",concept:"교육",categories:["C","D","E","M"],ministryTeams:["새친구 양육팀","1:1 멘토팀","단계별 훈련팀"]}],answers:{},analyseData:{},showResultPage:!1,sortedPlacements:[]};return t.list.forEach((function(e){t.answers[e.index]=-1})),t},computed:{categoryKeys:function(){return Object.keys(E)},analyseCategories:function(){return E},sortedAnalysedData:function(){var t=this,e=Object.keys(this.analyseData).map((function(e){return Object(b["a"])(Object(b["a"])({key:e},t.analyseData[e]),{},{category:E[e]})}));return console.log("out : ",e),e.sort((function(t,e){return t.sum<e.sum?1:t.sum>e.sum?-1:0})),e}},created:function(){},watch:{answers:{deep:!0,handler:function(){console.log("answers : ",this.answers)}}},methods:{confirm:function(){var t=this,e=this.list.filter((function(e){return"undefined"===typeof t.answers[e.index]||parseInt(t.answers[e.index])<0}));e.length>0?alert(e.map((function(t){return t.index})).join(", ")+" 번 항목을 선택해 주세요"):(Object.keys(this.analyseCategories).forEach((function(e){var n=t.analyseCategories[e];t.analyseData[e]={sum:n.items.map((function(e){return t.answers[e]})).reduce((function(t,e){return t+parseInt(e)}),0)}})),this.sortedPlacements=this.placements.map((function(e){var n=Object.keys(t.analyseData).filter((function(t){return D(e.categories,t)})).map((function(e){return t.analyseData[e]}));return{placement:e,sum:n.reduce((function(t,e){return t+parseInt(e.sum)}),0)}})),this.sortedPlacements.sort((function(t,e){return t.sum<e.sum?1:t.sum>e.sum?-1:0})),this.showResultPage=!0,this.$nextTick((function(){window.scrollTo(0,window.scrollY+500)})))}}},S=$,A=(n("71d9"),n("8336")),I=Object(c["a"])(S,y,_,!1,null,"6861b7fb",null),R=I.exports;d()(I,{VBtn:A["a"]}),a["a"].use(h["a"]);var q=[{path:"/",name:"Home",component:R}],Q=new h["a"]({routes:q}),G=Q,B=n("f309");a["a"].use(B["a"]);var H=new B["a"]({}),J=(n("d5e8"),n("5363"),n("0284")),N=n.n(J);a["a"].config.productionTip=!1,a["a"].use(N.a,{id:"G-R5PTY3GZM6",router:G}),new a["a"]({router:G,vuetify:H,render:function(t){return t(v)}}).$mount("#app")},"71d9":function(t,e,n){"use strict";n("4d63")},"8e0e":function(t,e,n){"use strict";n("162d")},a16e:function(t,e,n){t.exports=n.p+"img/result-details.b36af323.png"}});
//# sourceMappingURL=app.e01bed92.js.map