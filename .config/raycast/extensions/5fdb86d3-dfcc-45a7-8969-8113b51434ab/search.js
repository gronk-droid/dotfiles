var Bn=Object.create;var D=Object.defineProperty;var Ln=Object.getOwnPropertyDescriptor;var qn=Object.getOwnPropertyNames;var _n=Object.getPrototypeOf,Fn=Object.prototype.hasOwnProperty;var Ne=e=>D(e,"__esModule",{value:!0});var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),$n=(e,t)=>{for(var n in t)D(e,n,{get:t[n],enumerable:!0})},Be=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qn(t))!Fn.call(e,s)&&(n||s!=="default")&&D(e,s,{get:()=>t[s],enumerable:!(r=Ln(t,s))||r.enumerable});return e},oe=(e,t)=>Be(Ne(D(e!=null?Bn(_n(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Mn=(e=>(t,n)=>e&&e.get(t)||(n=Be(Ne({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var qe=d((ie,Le)=>{(function(e,t){typeof ie=="object"?Le.exports=t():typeof define=="function"&&define.amd?define(t):e.treeify=t()})(ie,function(){function e(s,o){var i=o?"\u2514":"\u251C";return s?i+="\u2500 ":i+="\u2500\u2500\u2510",i}function t(s,o){var i=[];for(var a in s)!s.hasOwnProperty(a)||o&&typeof s[a]=="function"||i.push(a);return i}function n(s,o,i,a,l,u,f){var m="",h=0,x,y,b=a.slice(0);if(b.push([o,i])&&a.length>0&&(a.forEach(function(S,T){T>0&&(m+=(S[1]?" ":"\u2502")+"  "),!y&&S[0]===o&&(y=!0)}),m+=e(s,i)+s,l&&(typeof o!="object"||o instanceof Date)&&(m+=": "+o),y&&(m+=" (circular ref.)"),f(m)),!y&&typeof o=="object"){var v=t(o,u);v.forEach(function(S){x=++h===v.length,n(S,o[S],x,b,l,u,f)})}}var r={};return r.asLines=function(s,o,i,a){var l=typeof i!="function"?i:!1;n(".",s,!1,[],o,l,a||i)},r.asTree=function(s,o,i){var a="";return n(".",s,!1,[],o,i,function(l){a+=l+`
`}),a},r})});var We=d((Ws,Ve)=>{Ve.exports=Ke;Ke.sync=Dn;var Xe=require("fs");function Un(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function He(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Un(t,n)}function Ke(e,t,n){Xe.stat(e,function(r,s){n(r,r?!1:He(s,e,t))})}function Dn(e,t){return He(Xe.statSync(e),e,t)}});var Ze=d((zs,Qe)=>{Qe.exports=Ye;Ye.sync=Xn;var ze=require("fs");function Ye(e,t,n){ze.stat(e,function(r,s){n(r,r?!1:Je(s,t))})}function Xn(e,t){return Je(ze.statSync(e),t)}function Je(e,t){return e.isFile()&&Hn(e,t)}function Hn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),u=parseInt("001",8),f=a|l,m=n&u||n&l&&s===i||n&a&&r===o||n&f&&o===0;return m}});var tt=d((Js,et)=>{var Ys=require("fs"),K;process.platform==="win32"||global.TESTING_WINDOWS?K=We():K=Ze();et.exports=ce;ce.sync=Kn;function ce(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){ce(e,t||{},function(o,i){o?s(o):r(i)})})}K(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Kn(e,t){try{return K.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ct=d((Qs,at)=>{var k=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",nt=require("path"),Vn=k?";":":",rt=tt(),st=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),ot=(e,t)=>{let n=t.colon||Vn,r=e.match(/\//)||k&&e.match(/\\/)?[""]:[...k?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=k?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=k?s.split(n):[""];return k&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},it=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=ot(e,t),i=[],a=u=>new Promise((f,m)=>{if(u===r.length)return t.all&&i.length?f(i):m(st(e));let h=r[u],x=/^".*"$/.test(h)?h.slice(1,-1):h,y=nt.join(x,e),b=!x&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(l(b,u,0))}),l=(u,f,m)=>new Promise((h,x)=>{if(m===s.length)return h(a(f+1));let y=s[m];rt(u+y,{pathExt:o},(b,v)=>{if(!b&&v)if(t.all)i.push(u+y);else return h(u+y);return h(l(u,f,m+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Wn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=ot(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,u=nt.join(l,e),f=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let m=0;m<r.length;m++){let h=f+r[m];try{if(rt.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw st(e)};at.exports=it;it.sync=Wn});var le=d((Zs,ue)=>{"use strict";var ut=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ue.exports=ut;ue.exports.default=ut});var mt=d((eo,ft)=>{"use strict";var lt=require("path"),zn=ct(),Yn=le();function dt(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=zn.sync(e.command,{path:n[Yn({env:n})],pathExt:t?lt.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=lt.resolve(s?e.options.cwd:"",i)),i}function Jn(e){return dt(e)||dt(e,!0)}ft.exports=Jn});var pt=d((to,fe)=>{"use strict";var de=/([()\][%!^"`<>&|;, *?])/g;function Qn(e){return e=e.replace(de,"^$1"),e}function Zn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(de,"^$1"),t&&(e=e.replace(de,"^$1")),e}fe.exports.command=Qn;fe.exports.argument=Zn});var gt=d((no,ht)=>{"use strict";ht.exports=/^#!(.*)/});var St=d((ro,yt)=>{"use strict";var er=gt();yt.exports=(e="")=>{let t=e.match(er);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var xt=d((so,wt)=>{"use strict";var me=require("fs"),tr=St();function nr(e){let t=150,n=Buffer.alloc(t),r;try{r=me.openSync(e,"r"),me.readSync(r,n,0,t,0),me.closeSync(r)}catch{}return tr(n.toString())}wt.exports=nr});var Tt=d((oo,It)=>{"use strict";var rr=require("path"),bt=mt(),vt=pt(),sr=xt(),or=process.platform==="win32",ir=/\.(?:com|exe)$/i,ar=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function cr(e){e.file=bt(e);let t=e.file&&sr(e.file);return t?(e.args.unshift(e.file),e.command=t,bt(e)):e.file}function ur(e){if(!or)return e;let t=cr(e),n=!ir.test(t);if(e.options.forceShell||n){let r=ar.test(t);e.command=rr.normalize(e.command),e.command=vt.command(e.command),e.args=e.args.map(o=>vt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function lr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:ur(r)}It.exports=lr});var Ct=d((io,Et)=>{"use strict";var pe=process.platform==="win32";function he(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function dr(e,t){if(!pe)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=Pt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function Pt(e,t){return pe&&e===1&&!t.file?he(t.original,"spawn"):null}function fr(e,t){return pe&&e===1&&!t.file?he(t.original,"spawnSync"):null}Et.exports={hookChildProcess:dr,verifyENOENT:Pt,verifyENOENTSync:fr,notFoundError:he}});var Gt=d((ao,A)=>{"use strict";var kt=require("child_process"),ge=Tt(),ye=Ct();function At(e,t,n){let r=ge(e,t,n),s=kt.spawn(r.command,r.args,r.options);return ye.hookChildProcess(s,r),s}function mr(e,t,n){let r=ge(e,t,n),s=kt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ye.verifyENOENTSync(s.status,r),s}A.exports=At;A.exports.spawn=At;A.exports.sync=mr;A.exports._parse=ge;A.exports._enoent=ye});var Rt=d((co,Ot)=>{"use strict";Ot.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Lt=d((uo,$)=>{"use strict";var F=require("path"),Nt=le(),Bt=e=>{e={cwd:process.cwd(),path:process.env[Nt()],execPath:process.execPath,...e};let t,n=F.resolve(e.cwd),r=[];for(;t!==n;)r.push(F.join(n,"node_modules/.bin")),t=n,n=F.resolve(n,"..");let s=F.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(F.delimiter)};$.exports=Bt;$.exports.default=Bt;$.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Nt({env:t});return e.path=t[n],t[n]=$.exports(e),t}});var _t=d((lo,Se)=>{"use strict";var qt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};Se.exports=qt;Se.exports.default=qt});var $t=d((fo,W)=>{"use strict";var pr=_t(),V=new WeakMap,Ft=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(V.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return pr(o,e),V.set(o,r),o};W.exports=Ft;W.exports.default=Ft;W.exports.callCount=e=>{if(!V.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return V.get(e)}});var Mt=d(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.SIGNALS=void 0;var hr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];z.SIGNALS=hr});var we=d(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var gr=function(){let e=Ut-jt+1;return Array.from({length:e},yr)};G.getRealtimeSignals=gr;var yr=function(e,t){return{name:`SIGRT${t+1}`,number:jt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},jt=34,Ut=64;G.SIGRTMAX=Ut});var Dt=d(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.getSignals=void 0;var Sr=require("os"),wr=Mt(),xr=we(),br=function(){let e=(0,xr.getRealtimeSignals)();return[...wr.SIGNALS,...e].map(vr)};Y.getSignals=br;var vr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Sr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Ht=d(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.signalsByNumber=O.signalsByName=void 0;var Ir=require("os"),Xt=Dt(),Tr=we(),Pr=function(){return(0,Xt.getSignals)().reduce(Er,{})},Er=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}}},Cr=Pr();O.signalsByName=Cr;var kr=function(){let e=(0,Xt.getSignals)(),t=Tr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>Ar(s,e));return Object.assign({},...n)},Ar=function(e,t){let n=Gr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Gr=function(e,t){let n=t.find(({name:r})=>Ir.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Or=kr();O.signalsByNumber=Or});var Vt=d((yo,Kt)=>{"use strict";var{signalsByName:Rr}=Ht(),Nr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",Br=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:u,killed:f,parsed:{options:{timeout:m}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:Rr[s].description,x=r&&r.code,b=`Command ${Nr({timedOut:l,timeout:m,errorCode:x,signal:s,signalDescription:h,exitCode:o,isCanceled:u})}: ${i}`,v=Object.prototype.toString.call(r)==="[object Error]",S=v?`${b}
${r.message}`:b,T=[S,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=T):r=new Error(T),r.shortMessage=S,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=u,r.killed=f&&!l,r};Kt.exports=Br});var zt=d((So,xe)=>{"use strict";var J=["stdin","stdout","stderr"],Lr=e=>J.some(t=>e[t]!==void 0),Wt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return J.map(r=>e[r]);if(Lr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${J.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,J.length);return Array.from({length:n},(r,s)=>t[s])};xe.exports=Wt;xe.exports.node=e=>{let t=Wt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Yt=d((wo,Q)=>{Q.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Q.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Q.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var tn=d((xo,B)=>{var p=global.process,E=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};E(p)?(Jt=require("assert"),R=Yt(),Qt=/^win/i.test(p.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),p.__signal_exit_emitter__?w=p.__signal_exit_emitter__:(w=p.__signal_exit_emitter__=new M,w.count=0,w.emitted={}),w.infinite||(w.setMaxListeners(1/0),w.infinite=!0),B.exports=function(e,t){if(!!E(global.process)){Jt.equal(typeof e,"function","a callback must be provided for exit handler"),N===!1&&be();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){w.removeListener(n,e),w.listeners("exit").length===0&&w.listeners("afterexit").length===0&&Z()};return w.on(n,e),r}},Z=function(){!N||!E(global.process)||(N=!1,R.forEach(function(t){try{p.removeListener(t,ee[t])}catch{}}),p.emit=te,p.reallyExit=ve,w.count-=1)},B.exports.unload=Z,C=function(t,n,r){w.emitted[t]||(w.emitted[t]=!0,w.emit(t,n,r))},ee={},R.forEach(function(e){ee[e]=function(){if(!!E(global.process)){var n=p.listeners(e);n.length===w.count&&(Z(),C("exit",null,e),C("afterexit",null,e),Qt&&e==="SIGHUP"&&(e="SIGINT"),p.kill(p.pid,e))}}}),B.exports.signals=function(){return R},N=!1,be=function(){N||!E(global.process)||(N=!0,w.count+=1,R=R.filter(function(t){try{return p.on(t,ee[t]),!0}catch{return!1}}),p.emit=en,p.reallyExit=Zt)},B.exports.load=be,ve=p.reallyExit,Zt=function(t){!E(global.process)||(p.exitCode=t||0,C("exit",p.exitCode,null),C("afterexit",p.exitCode,null),ve.call(p,p.exitCode))},te=p.emit,en=function(t,n){if(t==="exit"&&E(global.process)){n!==void 0&&(p.exitCode=n);var r=te.apply(this,arguments);return C("exit",p.exitCode,null),C("afterexit",p.exitCode,null),r}else return te.apply(this,arguments)}):B.exports=function(){};var Jt,R,Qt,M,w,Z,C,ee,N,be,ve,Zt,te,en});var rn=d((bo,nn)=>{"use strict";var qr=require("os"),_r=tn(),Fr=1e3*5,$r=(e,t="SIGTERM",n={})=>{let r=e(t);return Mr(e,t,n,r),r},Mr=(e,t,n,r)=>{if(!jr(t,n,r))return;let s=Dr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},jr=(e,{forceKillAfterTimeout:t},n)=>Ur(e)&&t!==!1&&n,Ur=e=>e===qr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Dr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Fr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Xr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Hr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Kr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Hr(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Vr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Wr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=_r(()=>{e.kill()});return r.finally(()=>{s()})};nn.exports={spawnedKill:$r,spawnedCancel:Xr,setupTimeout:Kr,validateTimeout:Vr,setExitHandler:Wr}});var on=d((vo,sn)=>{"use strict";var P=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";P.writable=e=>P(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";P.readable=e=>P(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";P.duplex=e=>P.writable(e)&&P.readable(e);P.transform=e=>P.duplex(e)&&typeof e._transform=="function";sn.exports=P});var cn=d((Io,an)=>{"use strict";var{PassThrough:zr}=require("stream");an.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new zr({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var un=d((To,j)=>{"use strict";var{constants:Yr}=require("buffer"),Jr=require("stream"),{promisify:Qr}=require("util"),Zr=cn(),es=Qr(Jr.pipeline),Ie=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Te(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Zr(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Yr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await es(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Ie)})}),r.getBufferedValue()}j.exports=Te;j.exports.buffer=(e,t)=>Te(e,{...t,encoding:"buffer"});j.exports.array=(e,t)=>Te(e,{...t,array:!0});j.exports.MaxBufferError=Ie});var dn=d((Po,ln)=>{"use strict";var{PassThrough:ts}=require("stream");ln.exports=function(){var e=[],t=new ts({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var hn=d((Eo,pn)=>{"use strict";var fn=on(),mn=un(),ns=dn(),rs=(e,t)=>{t===void 0||e.stdin===void 0||(fn(t)?t.pipe(e.stdin):e.stdin.end(t))},ss=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=ns();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Pe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Ee=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?mn(e,{encoding:t,maxBuffer:r}):mn.buffer(e,{maxBuffer:r})},os=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Ee(e,{encoding:r,buffer:s,maxBuffer:o}),l=Ee(t,{encoding:r,buffer:s,maxBuffer:o}),u=Ee(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,u])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},Pe(e,a),Pe(t,l),Pe(n,u)])}},is=({input:e})=>{if(fn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};pn.exports={handleInput:rs,makeAllStream:ss,getSpawnedResult:os,validateInputSync:is}});var yn=d((Co,gn)=>{"use strict";var as=(async()=>{})().constructor.prototype,cs=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(as,e)]),us=(e,t)=>{for(let[n,r]of cs){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:s})}return e},ls=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});gn.exports={mergePromise:us,getSpawnedPromise:ls}});var xn=d((ko,wn)=>{"use strict";var Sn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ds=/^[\w.-]+$/,fs=/"/g,ms=e=>typeof e!="string"||ds.test(e)?e:`"${e.replace(fs,'\\"')}"`,ps=(e,t)=>Sn(e,t).join(" "),hs=(e,t)=>Sn(e,t).map(n=>ms(n)).join(" "),gs=/ +/g,ys=e=>{let t=[];for(let n of e.trim().split(gs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};wn.exports={joinCommand:ps,getEscapedCommand:hs,parseCommand:ys}});var Cn=d((Ao,L)=>{"use strict";var Ss=require("path"),Ce=require("child_process"),ws=Gt(),xs=Rt(),bs=Lt(),vs=$t(),ne=Vt(),bn=zt(),{spawnedKill:Is,spawnedCancel:Ts,setupTimeout:Ps,validateTimeout:Es,setExitHandler:Cs}=rn(),{handleInput:ks,getSpawnedResult:As,makeAllStream:Gs,validateInputSync:Os}=hn(),{mergePromise:vn,getSpawnedPromise:Rs}=yn(),{joinCommand:In,parseCommand:Tn,getEscapedCommand:Pn}=xn(),Ns=1e3*1e3*100,Bs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?{...process.env,...e}:e;return n?bs.env({env:o,cwd:r,execPath:s}):o},En=(e,t,n={})=>{let r=ws._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Ns,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Bs(n),n.stdio=bn(n),process.platform==="win32"&&Ss.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},U=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?xs(t):t,re=(e,t,n)=>{let r=En(e,t,n),s=In(e,t),o=Pn(e,t);Es(r.options);let i;try{i=Ce.spawn(r.file,r.args,r.options)}catch(x){let y=new Ce.ChildProcess,b=Promise.reject(ne({error:x,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return vn(y,b)}let a=Rs(i),l=Ps(i,r.options,a),u=Cs(i,r.options,l),f={isCanceled:!1};i.kill=Is.bind(null,i.kill.bind(i)),i.cancel=Ts.bind(null,i,f);let h=vs(async()=>{let[{error:x,exitCode:y,signal:b,timedOut:v},S,T,se]=await As(i,r.options,u),Ae=U(r.options,S),Ge=U(r.options,T),Oe=U(r.options,se);if(x||y!==0||b!==null){let Re=ne({error:x,exitCode:y,signal:b,stdout:Ae,stderr:Ge,all:Oe,command:s,escapedCommand:o,parsed:r,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!r.options.reject)return Re;throw Re}return{command:s,escapedCommand:o,exitCode:0,stdout:Ae,stderr:Ge,all:Oe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ks(i,r.options.input),i.all=Gs(i,r.options),vn(i,h)};L.exports=re;L.exports.sync=(e,t,n)=>{let r=En(e,t,n),s=In(e,t),o=Pn(e,t);Os(r.options);let i;try{i=Ce.spawnSync(r.file,r.args,r.options)}catch(u){throw ne({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=U(r.options,i.stdout,i.error),l=U(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=ne({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};L.exports.command=(e,t)=>{let[n,...r]=Tn(e);return re(n,r,t)};L.exports.commandSync=(e,t)=>{let[n,...r]=Tn(e);return re.sync(n,r,t)};L.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=bn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return re(o,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var js={};$n(js,{default:()=>Nn});var c=require("@raycast/api"),q=oe(require("react")),Rn=oe(qe());var _e=require("@raycast/api"),Fe=require("url");function ae(e){return"```\n"+e+"\n```"}function _(e){if(!e)return e;let t={};for(let n in e)Object.hasOwnProperty.call(e,n)&&(e[n]??!1)&&(t[n]=e[n]);return t}function $e(e,t){try{let n=new Fe.URL(t).hostname;return`https://www.google.com/s2/favicons?sz=${e}&domain=${n}`}catch{return _e.Icon.Globe}}function Me(e){return e.charAt(0).toUpperCase()+e.slice(1)}var I=require("@raycast/api"),H=require("react");var X="sessionToken";async function jn(e){try{let t=await(0,I.showToast)(I.ToastStyle.Animated,"Logging in...","It may take some time");await e.login(),t.hide()}catch{(0,I.showToast)(I.ToastStyle.Failure,"An error occurred during login!","Please check your credentials")}}function je(e){let[t,n]=(0,H.useState)({});return(0,H.useEffect)(()=>{async function r(){let s=await(0,I.getLocalStorageItem)(X);switch(await e.status(s)){case"unlocked":n({sessionToken:s,vaultStatus:"unlocked"});break;case"locked":n({vaultStatus:"locked"});break;case"unauthenticated":await jn(e),n({vaultStatus:"locked"})}}r()},[]),[t,async r=>{r?((0,I.setLocalStorageItem)(X,r),n({sessionToken:r,vaultStatus:"unlocked"})):((0,I.removeLocalStorageItem)(X),n({vaultStatus:"locked"}))}]}var g=require("@raycast/api");function Ue(){return(0,g.showToast)(g.ToastStyle.Failure,"Bitwarden CLI not found"),_jsx(g.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:_jsx(g.ActionPanel,null,_jsx(g.CopyToClipboardAction,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}))})}function De(e){async function t(n){try{let r=await(0,g.showToast)(g.ToastStyle.Animated,"Unlocking Vault...","Please wait"),s=await e.bitwardenApi.unlock(n.password);r.hide(),e.setSessionToken(s)}catch{(0,g.showToast)(g.ToastStyle.Failure,"Failed to unlock vault","Invalid credentials")}}return _jsx(g.Form,{actions:_jsx(g.ActionPanel,null,_jsx(g.SubmitFormAction,{title:"Unlock",onSubmit:t}))},_jsx(g.Form.PasswordField,{id:"password",title:"Master Password"}))}var kn=require("@raycast/api"),An=oe(Cn()),Gn=require("fs"),On=require("path/posix"),ke=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r}=(0,kn.getPreferenceValues)();if(t?this.cliPath=t:this.cliPath=process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw",!(0,Gn.existsSync)(this.cliPath))throw Error(`Invalid Cli Path: ${this.cliPath}`);this.env={BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,On.dirname)(process.execPath)}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async listItems(t,n){let{stdout:r}=await this.exec(["list",t,"--session",n]);return JSON.parse(r)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(t){let{stdout:n}=await this.exec(t?["status","--session",t]:["status"]);return JSON.parse(n).status}async exec(t){return(0,An.default)(this.cliPath,t,{env:this.env})}};var{fetchFavicons:Ls,primaryAction:qs}=(0,c.getPreferenceValues)();function Nn(){try{let e=new ke,[t,n]=je(e);return t.vaultStatus==="locked"?_jsx(De,{setSessionToken:n,bitwardenApi:e}):_jsx(_s,{bitwardenApi:e,sessionToken:t.sessionToken,vaultStatus:t.vaultStatus})}catch{return _jsx(Ue,null)}}function _s(e){let{bitwardenApi:t,sessionToken:n,vaultStatus:r}=e,[s,o]=(0,q.useState)();async function i(u){try{let f=await t.listItems("items",u);o(f)}catch{(0,c.showToast)(c.ToastStyle.Failure,"Failed to search vault")}}async function a(u,f){if(u){let m=await t.getTotp(f,u);(0,c.copyTextToClipboard)(m),(0,c.closeMainWindow)({clearRootSearch:!0})}else(0,c.showToast)(c.ToastStyle.Failure,"Failed to fetch TOTP.")}(0,q.useEffect)(()=>{r==="unlocked"&&n&&i(n)},[n]);async function l(){if(n){let u=await(0,c.showToast)(c.ToastStyle.Animated,"Syncing Items...");await t.sync(n),await i(n),await u.hide()}}return _jsx(c.List,{isLoading:typeof s=="undefined"},s?s.sort((u,f)=>u.favorite&&f.favorite?0:u.favorite?-1:1).map(u=>_jsx($s,{key:u.id,item:u,refreshItems:l,sessionToken:n,copyTotp:a})):null)}function Fs(e){let t=e.login?.uris?.[0]?.uri;return Ls&&t?$e(64,t):{1:c.Icon.Globe,2:c.Icon.TextDocument,3:c.Icon.List,4:c.Icon.Person}[e.type]}function $s(e){let{item:t,refreshItems:n,sessionToken:r,copyTotp:s}=e,{name:o,notes:i,identity:a,login:l,secureNote:u,fields:f,passwordHistory:m,card:h}=t,x=Object.fromEntries(f?.map(S=>[S.name,S.value])||[]),y=Object.fromEntries(l?.uris?.filter(S=>S.uri).map((S,T)=>[`uri${T+1}`,S.uri])||[]),b=_({name:o,notes:i,identity:_(a),login:_(l),card:_(h),secureNote:u,fields:f,passwordHistory:m}),v=Rn.default.asTree(b,!0,!1);return _jsx(c.List.Item,{id:t.id,title:t.name,keywords:t.name.split(/\W/),accessoryIcon:t.favorite?{source:c.Icon.Star,tintColor:c.Color.Yellow}:void 0,icon:Fs(t),subtitle:t.login?.username||void 0,actions:_jsx(c.ActionPanel,null,t.login?.password?_jsx(Ms,{password:t.login.password}):null,t.login?.totp?_jsx(c.ActionPanel.Item,{title:"Copy TOTP",icon:c.Icon.Clipboard,onAction:()=>s(r,t.id)}):null,t.notes?_jsx(c.PushAction,{title:"Show Secure Note",icon:c.Icon.TextDocument,target:_jsx(c.Detail,{markdown:ae(t.notes),actions:_jsx(c.ActionPanel,null,_jsx(c.CopyToClipboardAction,{title:"Copy Secure Notes",content:t.notes}))})}):null,_jsx(c.ActionPanel.Submenu,{shortcut:{modifiers:["cmd","shift"],key:"c"},icon:c.Icon.Clipboard,title:"Copy Property"},Object.entries({username:l?.username,notes:i,...h,...a,...x,...y}).map(([S,T],se)=>T?_jsx(c.CopyToClipboardAction,{key:se,title:Me(S),content:T}):null)),_jsx(c.PushAction,{title:"Show Details",icon:c.Icon.Text,shortcut:{modifiers:["cmd"],key:"i"},target:_jsx(c.Detail,{markdown:ae(v),actions:_jsx(c.ActionPanel,null,_jsx(c.CopyToClipboardAction,{content:v}))})}),_jsx(c.ActionPanel.Item,{title:"Refresh Items",shortcut:{modifiers:["cmd"],key:"r"},icon:c.Icon.ArrowClockwise,onAction:n}))})}function Ms(e){let t=_jsx(c.CopyToClipboardAction,{key:"copy",title:"Copy Password",content:e.password}),n=_jsx(c.PasteAction,{key:"paste",title:"Paste Password",content:e.password});return _jsx(q.default.Fragment,null,qs=="copy"?[t,n]:[n,t])}module.exports=Mn(js);0&&(module.exports={});
