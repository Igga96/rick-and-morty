(function(){"use strict";var e={292:function(e,t,a){var n=a(3751),r=a(641);function s(e,t,a,n,s,o){const i=(0,r.g2)("vHomePage");return(0,r.uX)(),(0,r.Wv)(i)}const o={class:"main"};function i(e,t,a,n,s,i){const c=(0,r.g2)("vFilter"),u=(0,r.g2)("vCards"),l=(0,r.g2)("vPagination");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(c),(0,r.bF)(u),(0,r.bF)(l,{info:n.info,currentPage:n.currentPage,onPrev:n.prevPage,onNext:n.nextPage},null,8,["info","currentPage","onPrev","onNext"])])}var c=a(6278);const u={class:"filter"},l=(0,r.Lk)("option",{class:"select__option",value:""},"All Statuses",-1),p=(0,r.Lk)("option",{class:"select__option",value:"alive"},"Alive",-1),d=(0,r.Lk)("option",{class:"select__option",value:"dead"},"Dead",-1),f=(0,r.Lk)("option",{class:"select__option",value:"unknown"},"Unknown",-1),g=[l,p,d,f];function v(e,t,a,s,o,i){return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.bo)((0,r.Lk)("input",{class:"filter__input","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),placeholder:"Filter by name",onInput:t[1]||(t[1]=(...e)=>s.updateFilters&&s.updateFilters(...e))},null,544),[[n.Jo,s.name]]),(0,r.bo)((0,r.Lk)("select",{class:"filter__select","onUpdate:modelValue":t[2]||(t[2]=e=>s.status=e),onChange:t[3]||(t[3]=(...e)=>s.updateFilters&&s.updateFilters(...e))},g,544),[[n.u1,s.status]])])}var _=a(953),m={setup(){const e=(0,c.Pj)(),t=(0,_.KR)(""),a=(0,_.KR)(""),n=()=>{e.dispatch("setFilters",{name:t.value,status:a.value})};return{name:t,status:a,updateFilters:n}}},P=a(6262);const h=(0,P.A)(m,[["render",v]]);var E=h,k=a(33);const b={class:"card__container"},C={class:"item__image"},y=["src","alt"],S={key:0,class:"item__description"},L={class:"description__text"},w={class:"item__name"},F={class:"status__icon"},T={class:"description__text"},x=(0,r.Lk)("span",{class:"text-gray"},"Last known location: ",-1),A={class:"description__text"},O=(0,r.Lk)("span",{class:"text-gray"},"First seen in:",-1);function j(e,t,a,n,s,o){return(0,r.uX)(),(0,r.CE)("div",b,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.characters,(e=>((0,r.uX)(),(0,r.CE)("article",{class:"card__item",key:e.id},[(0,r.Lk)("div",C,[e.image?((0,r.uX)(),(0,r.CE)("img",{key:0,src:e.image,alt:`Image of ${e.name}`},null,8,y)):(0,r.Q3)("",!0)]),e?((0,r.uX)(),(0,r.CE)("div",S,[(0,r.Lk)("div",L,[(0,r.Lk)("h2",w,(0,k.v_)(e.name),1),(0,r.Lk)("span",{class:(0,k.C4)(["status",n.getStatusClass(e.status)])},[(0,r.Lk)("span",F,(0,k.v_)(e.status)+" - ",1),(0,r.eW)(" "+(0,k.v_)(e.species),1)],2)]),(0,r.Lk)("div",T,[x,(0,r.Lk)("span",null,(0,k.v_)(e.location?e.location.name:"Unknown"),1)]),(0,r.Lk)("div",A,[O,(0,r.Lk)("span",null,(0,k.v_)(n.getFirstSeenEpisodeName(e.episode[0])),1)])])):(0,r.Q3)("",!0)])))),128))])}var R={setup(){const e=(0,c.Pj)(),t=(0,r.EW)((()=>e.getters.filteredCharacters)),a=(0,r.EW)((()=>e.getters.episodes)),n=e=>{const t=a.value.find((t=>t.url===e));return t?t.name:""},s=e=>({"status-alive":"Alive"===e,"status-unknown":"unknown"===e,"status-dead":"Dead"===e});return{characters:t,getFirstSeenEpisodeName:n,getStatusClass:s}}};const N=(0,P.A)(R,[["render",j]]);var I=N;const X={class:"pagination"},U=["disabled"],W={class:"pagination__counter"},D=["disabled"];function H(e,t,a,n,s,o){return(0,r.uX)(),(0,r.CE)("div",X,[(0,r.Lk)("button",{class:"pagination__button",onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===a.currentPage}," Previous",8,U),(0,r.Lk)("span",W,(0,k.v_)(a.currentPage)+"/"+(0,k.v_)(a.info.pages),1),(0,r.Lk)("button",{class:"pagination__button",onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:a.currentPage===a.info.pages}," Next",8,D)])}var K={props:{info:Object,currentPage:Number},setup(e){const t=(0,c.Pj)(),a=()=>{e.currentPage>1&&t.dispatch("setPage",e.currentPage-1)},n=()=>{e.currentPage<e.info.pages&&t.dispatch("setPage",e.currentPage+1)};return{prevPage:a,nextPage:n}}};const V=(0,P.A)(K,[["render",H]]);var $=V,G={components:{vFilter:E,vCards:I,vPagination:$},setup(){const e=(0,c.Pj)(),t=(0,r.EW)((()=>e.getters.info)),a=(0,r.EW)((()=>e.getters.currentPage)),n=async t=>{await e.dispatch("fetchCharacters",t)},s=()=>{a.value>1&&e.dispatch("setPage",a.value-1)},o=()=>{a.value<t.value.pages&&e.dispatch("setPage",a.value+1)};return(0,r.sV)((()=>{n(a.value)})),(0,r.wB)((()=>a.value),(e=>{n(e)})),{info:t,currentPage:a,prevPage:s,nextPage:o}}};const M=(0,P.A)(G,[["render",i]]);var Q=M,B={name:"App",components:{vHomePage:Q}};const J=(0,P.A)(B,[["render",s]]);var q=J,z=(a(3375),a(9225),a(3972),a(9209),a(5714),a(7561),a(6197),a(4335)),Y=(0,c.y$)({state:{characters:[],info:{},currentPage:1,episodes:[],filters:{name:"",status:""}},mutations:{SET_CHARACTERS(e,t){e.characters=t},SET_INFO(e,t){e.info=t},SET_CURRENT_PAGE(e,t){e.currentPage=t},SET_EPISODES(e,t){e.episodes=t},SET_FILTERS(e,t){e.filters=t}},actions:{async fetchCharacters({commit:e},t){try{const a=await z.A.get(`https://rickandmortyapi.com/api/character/?page=${t}`);e("SET_CHARACTERS",a.data.results),e("SET_INFO",a.data.info);const n=await Z(a.data.results);e("SET_EPISODES",n)}catch(a){console.error("Error fetching characters:",a)}},setPage({commit:e},t){e("SET_CURRENT_PAGE",t)},setFilters({commit:e},t){e("SET_FILTERS",t)}},getters:{characters:e=>e.characters,info:e=>e.info,currentPage:e=>e.currentPage,episodes:e=>e.episodes,filters:e=>e.filters,filteredCharacters:e=>{let t=e.characters;return e.filters.name&&(t=t.filter((t=>t.name.toLowerCase().includes(e.filters.name.toLowerCase())))),e.filters.status&&(t=t.filter((t=>t.status.toLowerCase()===e.filters.status.toLowerCase()))),t}}});async function Z(e){try{let t=new Set;e.forEach((e=>{e.episode.forEach((e=>{t.add(e)}))}));const a=Array.from(t),n=await Promise.all(a.map((e=>z.A.get(e))));return n.map((e=>e.data))}catch(t){return console.error("Error fetching episodes:",t),[]}}(0,n.Ef)(q).use(Y).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],i=n[1],c=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var l=c(a)}for(t&&t(n);u<o.length;u++)s=o[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},n=self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(292)}));n=a.O(n)})();
//# sourceMappingURL=app.js.map