(function(){"use strict";var e={42:function(e,n,t){var s=t(963),i=t(252),o=t(577),r=t.p+"img/microphone.2fef1b0f.png";const a={id:"app"},c=(0,i._)("div",{class:"chat_header"},[(0,i._)("h4",null,"bot")],-1),u={id:"azz",class:"chat_body"},l={key:0,class:"user messageRow"},f={class:"message user"},d={key:1,class:"bot messageRow"},p={class:"message bot"},v={class:"chat_footer"},g=(0,i._)("img",{id:"micro",src:r,style:{"max-height":"40px","margin-bottom":"10px"},alt:"",srcset:""},null,-1),m=(0,i._)("input",{type:"submit"},null,-1);function h(e,n,t,r,h,w){return(0,i.wg)(),(0,i.iD)("div",a,[c,(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.messages,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"messages",key:e.id},[e.sender?((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",f,(0,o.zw)(e.message),1)])):((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",p,(0,o.zw)(e.message),1)]))])))),128))]),(0,i._)("div",v,[(0,i._)("form",{onSubmit:n[1]||(n[1]=(0,s.iM)((e=>r.sendMessage()),["prevent"])),id:"createMessage"},[g,(0,i.wy)((0,i._)("input",{type:"text",class:"messageform","onUpdate:modelValue":n[0]||(n[0]=e=>r.messagecontent=e)},null,512),[[s.nr,r.messagecontent]]),m],32)])])}var w=t(669),b=t.n(w),y=t(262),_={name:"App",setup(){window.onload=()=>{let e=document.querySelector("#micro");e.addEventListener("click",(function(){const e=window.SpeechRecognition||window.webkitSpeechRecognition,s=new e;s.start(),s.addEventListener("result",(function(e){n.value=e.results[0][0].transcript,t()}))}))};const e=(0,y.iH)([]);let n=(0,y.iH)("");function t(){""!=n.value?(s(n.value),i(n.value),n.value=""):alert("type something please sir")}function s(n,t=!0){e.value.unshift({sender:t,message:n})}async function i(e){const n={message:e},{data:t}=await b().post("http://localhost:8000/chat",n),{response:i}=t;s(i,!1)}return{messages:e,messagecontent:n,sendMessage:t}}},O=t(744);const k=(0,O.Z)(_,[["render",h]]);var x=k;(0,s.ri)(x).mount("#app")}},n={};function t(s){var i=n[s];if(void 0!==i)return i.exports;var o=n[s]={exports:{}};return e[s](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,s,i,o){if(!s){var r=1/0;for(l=0;l<e.length;l++){s=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](s[c])}))?s.splice(c--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/client/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var i,o,r=s[0],a=s[1],c=s[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var l=c(t)}for(n&&n(s);u<r.length;u++)o=r[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},s=self["webpackChunkclient"]=self["webpackChunkclient"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(42)}));s=t.O(s)})();
//# sourceMappingURL=app.405ecac7.js.map