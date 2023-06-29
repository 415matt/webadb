(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{90:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chrome-devtools",function(){return s(7674)}])},7674:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});var o=s(8584),a=s(7557),r=s(6201),n=s(4071),c=s(9509),i=s(9529),l=s(7614),d=s(536),h=s(1827),p=s.n(h),m=s(882),u=s.n(m),b=s(4120),w=s(3399),f=s(9823);class g extends i.I{async _read(e){try{let e=await this._reader.read();e.done?this.emit("end"):this.push(e.value)}catch(e){}}async _write(e,t,s){let o=new c.Consumable(e);try{await this._writer.write(o),s()}catch(e){s(e)}}async _destroy(e,t){await this._socket.close(),t(e)}constructor(e){super(),this._socket=e,this._reader=this._socket.readable.getReader(),this._writer=this._socket.writable.getWriter(),this._reader.closed.then(()=>this.emit("end"))}}let v=new i.A({factory(e,t){let s=new i.P(e,{...t,factory(e,t){let s=new i.C(e,t);return s[i.S.kHostHeader]="Host: localhost\r\n",s}});return s},async connect(e,t){try{let s=await w.d.adb.createSocket("localabstract:"+e.hostname);t(null,new g(s))}catch(e){t(e,null)}}});async function x(e){let t=await (0,i.x)("http://".concat(e,"/json"),{dispatcher:v}),s=await t.body.json();return s}async function y(e){let t=await (0,i.x)("http://".concat(e,"/json/version"),{dispatcher:v}),s=await t.body.json();return s}async function _(e,t){await (0,i.x)("http://".concat(e,"/json/activate/").concat(t.id),{dispatcher:v})}async function j(e,t){await (0,i.x)("http://".concat(e,"/json/close/").concat(t.id),{dispatcher:v})}let{publicRuntimeConfig:{basePath:k}}=p()(),C=(0,l.ky)({browsers:[],intervalId:null,visible:!1},{browsers:l.LO.deep}),E=["cat /proc/net/unix",'grep -E "'.concat("@(.*)_devtools_remote(_\\d+)?|@com\\.opera\\.browser(\\.beta)?\\.devtools",'"'),"awk '{print substr($8, 2)}'"];async function N(){let e=w.d.adb,t=await e.subprocess.spawnAndWaitLegacy(E.join(" | ")),s=[];for(let e of t.split("\n").filter(Boolean))if(!s.some(t=>t.socket==e))try{let t=await y(e),o=await x(e);console.log(e,t,o),s.push({socket:e,version:t,pages:o})}catch(t){console.error(e,t)}(0,l.z)(()=>{C.browsers=s})}(0,l.U5)(()=>[w.d.adb,C.visible],e=>{let[t,s]=e;if(!t||!s){C.browsers=[],C.intervalId&&(clearInterval(C.intervalId),C.intervalId=null);return}C.intervalId=setInterval(()=>{N()},5e3),N()});let I={"com.android.chrome":"Google Chrome","com.chrome.beta":"Google Chrome Beta","com.chrome.dev":"Google Chrome Dev","com.chrome.canary":"Google Chrome Canary","com.microsoft.emmx":"Microsoft Edge","com.microsoft.emmx.beta":"Microsoft Edge Beta","com.microsoft.emmx.dev":"Microsoft Edge Dev","com.microsoft.emmx.canary":"Microsoft Edge Canary","com.opera.browser":"Opera","com.opera.browser.beta":"Opera Beta","com.vivaldi.browser":"Vivaldi"},L=(0,n.Z)({header:{marginTop:"4px",marginBottom:"4px"},url:{marginLeft:"8px",color:"#999"},link:{marginRight:"12px"}}),M=(0,d.Pi)(function(){let e=L();(0,b.useEffect)(()=>((0,l.z)(()=>{C.visible=!0}),(0,l.aD)(()=>{C.visible=!1})),[]);let t=(0,b.useCallback)((e,t)=>{let{script:s,params:o}=function(e){let t=e.devtoolsFrontendUrl,[,s]=t.split("?");return{script:"https://chrome-devtools-frontend.appspot.com/serve_internal_file/@3c3641f7c28cf564edd441cc4ca2838b32c4e52a/front_end/entrypoints/inspector/inspector.js",params:s}}(t),a=window.open("".concat(k,"/chrome-devtools-frame?script=").concat(s,"&").concat(o),"_blank","popup");a.addEventListener("message",t=>{if("object"!=typeof t.data||"AdbWebSocket"!==t.data.type)return;let s=new URL(t.data.url);s.host=e;let o=t.ports[0],r=new i.W(s,{dispatcher:v});r.binaryType="arraybuffer",r.onopen=()=>{o.postMessage({type:"open"})},r.onclose=()=>{o.postMessage({type:"close"}),o.close()},r.onmessage=e=>{let{data:t}=e;o.postMessage({type:"message",message:t})},o.onmessage=e=>{switch(e.data.type){case"message":r.send(e.data.message);break;case"close":r.close()}},a.addEventListener("close",()=>{r.close()}),globalThis.addEventListener("beforeunload",()=>{o.postMessage({type:"close"}),o.close()})})},[]),s=(0,b.useCallback)((e,t)=>{_(e,t)},[]),n=(0,b.useCallback)((e,t)=>{j(e,t),N()},[]);return(0,o.jsxs)(a.K,{...f.LE,children:[(0,o.jsx)(u(),{children:(0,o.jsx)("title",{children:"Chrome Remote Debugging - Tango"})}),0===C.browsers.length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Supported browsers:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Google Chrome (stable/beta/dev/canary)"}),(0,o.jsx)("li",{children:"Microsoft Edge (stable/beta/dev/canary)"}),(0,o.jsx)("li",{children:"Opera (stable/beta)"}),(0,o.jsx)("li",{children:"Vivaldi"}),(0,o.jsx)("li",{children:"Any WebView with remote debugging on"})]})]}):C.browsers.map(a=>(0,o.jsxs)(o.Fragment,{children:[a.version&&(0,o.jsx)("h3",{className:e.header,children:function(e){let[,t]=e.Browser.split("/"),s=I[e["Android-Package"]]||e["Android-Package"];return"".concat(s," (").concat(t,")")}(a.version)}),a.pages.map(c=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[c.title?(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:c.title}}):(0,o.jsx)("i",{children:"No Title"}),(0,o.jsx)("span",{className:e.url,children:c.url||(0,o.jsx)("i",{children:"No URL"})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.r,{className:e.link,onClick:()=>t(a.socket,c),children:"Inspect"}),(0,o.jsx)(r.r,{className:e.link,onClick:()=>s(a.socket,c),children:"Focus"}),(0,o.jsx)(r.r,{className:e.link,onClick:()=>n(a.socket,c),children:"Close"})]})]},c.id))]}))]})});var T=M},8833:function(e,t,s){"use strict";e.exports=s.p+"static/media/llhttp.a92ee3b9.wasm"},4824:function(e,t,s){"use strict";e.exports=s.p+"static/media/llhttp_simd.920bfad7.wasm"}},function(e){e.O(0,[867,774,888,179],function(){return e(e.s=90)}),_N_E=e.O()}]);
//# sourceMappingURL=chrome-devtools-bd476aee8e3eb9c8.js.map