var gn=Object.create;var M=Object.defineProperty;var Sn=Object.getOwnPropertyDescriptor;var yn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,wn=Object.prototype.hasOwnProperty;var Ie=e=>M(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bn=(e,t)=>{for(var n in t)M(e,n,{get:t[n],enumerable:!0})},Pe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of yn(t))!wn.call(e,s)&&(n||s!=="default")&&M(e,s,{get:()=>t[s],enumerable:!(r=Sn(t,s))||r.enumerable});return e},vn=(e,t)=>Pe(Ie(M(e!=null?gn(xn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),En=(e=>(t,n)=>e&&e.get(t)||(n=Pe(Ie({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Oe=c((xs,Ae)=>{Ae.exports=Ge;Ge.sync=Pn;var Te=require("fs");function In(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ce(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:In(t,n)}function Ge(e,t,n){Te.stat(e,function(r,s){n(r,r?!1:Ce(s,e,t))})}function Pn(e,t){return Ce(Te.statSync(e),e,t)}});var _e=c((ws,qe)=>{qe.exports=ke;ke.sync=Tn;var Re=require("fs");function ke(e,t,n){Re.stat(e,function(r,s){n(r,r?!1:Ne(s,t))})}function Tn(e,t){return Ne(Re.statSync(e),t)}function Ne(e,t){return e.isFile()&&Cn(e,t)}function Cn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=n&l||n&u&&s===i||n&a&&r===o||n&f&&o===0;return h}});var Be=c((vs,Le)=>{var bs=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Oe():j=_e();Le.exports=Z;Z.sync=Gn;function Z(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){Z(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Gn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var He=c((Es,De)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",$e=require("path"),An=I?";":":",Me=Be(),je=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Fe=(e,t)=>{let n=t.colon||An,r=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(n):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Ue=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Fe(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===r.length)return t.all&&i.length?f(i):h(je(e));let p=r[l],S=/^".*"$/.test(p)?p.slice(1,-1):p,y=$e.join(S,e),x=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(u(x,l,0))}),u=(l,f,h)=>new Promise((p,S)=>{if(h===s.length)return p(a(f+1));let y=s[h];Me(l+y,{pathExt:o},(x,E)=>{if(!x&&E)if(t.all)i.push(l+y);else return p(l+y);return p(u(l,f,h+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},On=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Fe(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=$e.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<r.length;h++){let p=f+r[h];try{if(Me.sync(p,{pathExt:s}))if(t.all)o.push(p);else return p}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw je(e)};De.exports=Ue;Ue.sync=On});var ee=c((Is,J)=>{"use strict";var Xe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};J.exports=Xe;J.exports.default=Xe});var ze=c((Ps,We)=>{"use strict";var Ke=require("path"),Rn=He(),kn=ee();function Ve(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Rn.sync(e.command,{path:n[kn({env:n})],pathExt:t?Ke.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ke.resolve(s?e.options.cwd:"",i)),i}function Nn(e){return Ve(e)||Ve(e,!0)}We.exports=Nn});var Ye=c((Ts,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function qn(e){return e=e.replace(te,"^$1"),e}function _n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=qn;ne.exports.argument=_n});var Ze=c((Cs,Qe)=>{"use strict";Qe.exports=/^#!(.*)/});var et=c((Gs,Je)=>{"use strict";var Ln=Ze();Je.exports=(e="")=>{let t=e.match(Ln);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var nt=c((As,tt)=>{"use strict";var re=require("fs"),Bn=et();function $n(e){let t=150,n=Buffer.alloc(t),r;try{r=re.openSync(e,"r"),re.readSync(r,n,0,t,0),re.closeSync(r)}catch{}return Bn(n.toString())}tt.exports=$n});var it=c((Os,ot)=>{"use strict";var Mn=require("path"),rt=ze(),st=Ye(),jn=nt(),Fn=process.platform==="win32",Un=/\.(?:com|exe)$/i,Dn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Hn(e){e.file=rt(e);let t=e.file&&jn(e.file);return t?(e.args.unshift(e.file),e.command=t,rt(e)):e.file}function Xn(e){if(!Fn)return e;let t=Hn(e),n=!Un.test(t);if(e.options.forceShell||n){let r=Dn.test(t);e.command=Mn.normalize(e.command),e.command=st.command(e.command),e.args=e.args.map(o=>st.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Kn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Xn(r)}ot.exports=Kn});var ut=c((Rs,ct)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Vn(e,t){if(!se)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=at(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function at(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Wn(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}ct.exports={hookChildProcess:Vn,verifyENOENT:at,verifyENOENTSync:Wn,notFoundError:oe}});var ft=c((ks,P)=>{"use strict";var lt=require("child_process"),ie=it(),ae=ut();function dt(e,t,n){let r=ie(e,t,n),s=lt.spawn(r.command,r.args,r.options);return ae.hookChildProcess(s,r),s}function zn(e,t,n){let r=ie(e,t,n),s=lt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ae.verifyENOENTSync(s.status,r),s}P.exports=dt;P.exports.spawn=dt;P.exports.sync=zn;P.exports._parse=ie;P.exports._enoent=ae});var pt=c((Ns,mt)=>{"use strict";mt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var St=c((qs,N)=>{"use strict";var k=require("path"),ht=ee(),gt=e=>{e={cwd:process.cwd(),path:process.env[ht()],execPath:process.execPath,...e};let t,n=k.resolve(e.cwd),r=[];for(;t!==n;)r.push(k.join(n,"node_modules/.bin")),t=n,n=k.resolve(n,"..");let s=k.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(k.delimiter)};N.exports=gt;N.exports.default=gt;N.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=ht({env:t});return e.path=t[n],t[n]=N.exports(e),t}});var xt=c((_s,ce)=>{"use strict";var yt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ce.exports=yt;ce.exports.default=yt});var bt=c((Ls,U)=>{"use strict";var Yn=xt(),F=new WeakMap,wt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Yn(o,e),F.set(o,r),o};U.exports=wt;U.exports.default=wt;U.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var vt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var Qn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=Qn});var ue=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.SIGRTMAX=T.getRealtimeSignals=void 0;var Zn=function(){let e=It-Et+1;return Array.from({length:e},Jn)};T.getRealtimeSignals=Zn;var Jn=function(e,t){return{name:`SIGRT${t+1}`,number:Et+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Et=34,It=64;T.SIGRTMAX=It});var Pt=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var er=require("os"),tr=vt(),nr=ue(),rr=function(){let e=(0,nr.getRealtimeSignals)();return[...tr.SIGNALS,...e].map(sr)};H.getSignals=rr;var sr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=er.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Ct=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.signalsByNumber=C.signalsByName=void 0;var or=require("os"),Tt=Pt(),ir=ue(),ar=function(){return(0,Tt.getSignals)().reduce(cr,{})},cr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}}},ur=ar();C.signalsByName=ur;var lr=function(){let e=(0,Tt.getSignals)(),t=ir.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>dr(s,e));return Object.assign({},...n)},dr=function(e,t){let n=fr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:u}}},fr=function(e,t){let n=t.find(({name:r})=>or.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},mr=lr();C.signalsByNumber=mr});var At=c((Fs,Gt)=>{"use strict";var{signalsByName:pr}=Ct(),hr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",gr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let p=s===void 0?void 0:pr[s].description,S=r&&r.code,x=`Command ${hr({timedOut:u,timeout:h,errorCode:S,signal:s,signalDescription:p,exitCode:o,isCanceled:l})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",B=E?`${x}
${r.message}`:x,$=[B,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=$):r=new Error($),r.shortMessage=B,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=p,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=f&&!u,r};Gt.exports=gr});var Rt=c((Us,le)=>{"use strict";var X=["stdin","stdout","stderr"],Sr=e=>X.some(t=>e[t]!==void 0),Ot=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(r=>e[r]);if(Sr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,X.length);return Array.from({length:n},(r,s)=>t[s])};le.exports=Ot;le.exports.node=e=>{let t=Ot(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var kt=c((Ds,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Bt=c((Hs,O)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(Nt=require("assert"),G=kt(),qt=/^win/i.test(d.platform),q=require("events"),typeof q!="function"&&(q=q.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new q,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),O.exports=function(e,t){if(!!b(global.process)){Nt.equal(typeof e,"function","a callback must be provided for exit handler"),A===!1&&de();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&V()};return m.on(n,e),r}},V=function(){!A||!b(global.process)||(A=!1,G.forEach(function(t){try{d.removeListener(t,W[t])}catch{}}),d.emit=z,d.reallyExit=fe,m.count-=1)},O.exports.unload=V,v=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},W={},G.forEach(function(e){W[e]=function(){if(!!b(global.process)){var n=d.listeners(e);n.length===m.count&&(V(),v("exit",null,e),v("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),O.exports.signals=function(){return G},A=!1,de=function(){A||!b(global.process)||(A=!0,m.count+=1,G=G.filter(function(t){try{return d.on(t,W[t]),!0}catch{return!1}}),d.emit=Lt,d.reallyExit=_t)},O.exports.load=de,fe=d.reallyExit,_t=function(t){!b(global.process)||(d.exitCode=t||0,v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),fe.call(d,d.exitCode))},z=d.emit,Lt=function(t,n){if(t==="exit"&&b(global.process)){n!==void 0&&(d.exitCode=n);var r=z.apply(this,arguments);return v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),r}else return z.apply(this,arguments)}):O.exports=function(){};var Nt,G,qt,q,m,V,v,W,A,de,fe,_t,z,Lt});var Mt=c((Xs,$t)=>{"use strict";var yr=require("os"),xr=Bt(),wr=1e3*5,br=(e,t="SIGTERM",n={})=>{let r=e(t);return vr(e,t,n,r),r},vr=(e,t,n,r)=>{if(!Er(t,n,r))return;let s=Pr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Er=(e,{forceKillAfterTimeout:t},n)=>Ir(e)&&t!==!1&&n,Ir=e=>e===yr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Pr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return wr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Tr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Cr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Gr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,u)=>{s=setTimeout(()=>{Cr(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Ar=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Or=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=xr(()=>{e.kill()});return r.finally(()=>{s()})};$t.exports={spawnedKill:br,spawnedCancel:Tr,setupTimeout:Gr,validateTimeout:Ar,setExitHandler:Or}});var Ft=c((Ks,jt)=>{"use strict";var w=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";w.writable=e=>w(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";w.readable=e=>w(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";w.duplex=e=>w.writable(e)&&w.readable(e);w.transform=e=>w.duplex(e)&&typeof e._transform=="function";jt.exports=w});var Dt=c((Vs,Ut)=>{"use strict";var{PassThrough:Rr}=require("stream");Ut.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Rr({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",u=>{a.push(u),s?i=a.length:i+=u.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Ht=c((Ws,_)=>{"use strict";var{constants:kr}=require("buffer"),Nr=require("stream"),{promisify:qr}=require("util"),_r=Dt(),Lr=qr(Nr.pipeline),me=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=_r(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=kr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Lr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new me)})}),r.getBufferedValue()}_.exports=pe;_.exports.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>pe(e,{...t,array:!0});_.exports.MaxBufferError=me});var Kt=c((zs,Xt)=>{"use strict";var{PassThrough:Br}=require("stream");Xt.exports=function(){var e=[],t=new Br({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Yt=c((Ys,zt)=>{"use strict";var Vt=Ft(),Wt=Ht(),$r=Kt(),Mr=(e,t)=>{t===void 0||e.stdin===void 0||(Vt(t)?t.pipe(e.stdin):e.stdin.end(t))},jr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=$r();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},he=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ge=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Wt(e,{encoding:t,maxBuffer:r}):Wt.buffer(e,{maxBuffer:r})},Fr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=ge(e,{encoding:r,buffer:s,maxBuffer:o}),u=ge(t,{encoding:r,buffer:s,maxBuffer:o}),l=ge(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},he(e,a),he(t,u),he(n,l)])}},Ur=({input:e})=>{if(Vt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};zt.exports={handleInput:Mr,makeAllStream:jr,getSpawnedResult:Fr,validateInputSync:Ur}});var Zt=c((Qs,Qt)=>{"use strict";var Dr=(async()=>{})().constructor.prototype,Hr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Dr,e)]),Xr=(e,t)=>{for(let[n,r]of Hr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:s})}return e},Kr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});Qt.exports={mergePromise:Xr,getSpawnedPromise:Kr}});var tn=c((Zs,en)=>{"use strict";var Jt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Vr=/^[\w.-]+$/,Wr=/"/g,zr=e=>typeof e!="string"||Vr.test(e)?e:`"${e.replace(Wr,'\\"')}"`,Yr=(e,t)=>Jt(e,t).join(" "),Qr=(e,t)=>Jt(e,t).map(n=>zr(n)).join(" "),Zr=/ +/g,Jr=e=>{let t=[];for(let n of e.trim().split(Zr)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};en.exports={joinCommand:Yr,getEscapedCommand:Qr,parseCommand:Jr}});var un=c((Js,R)=>{"use strict";var es=require("path"),Se=require("child_process"),ts=ft(),ns=pt(),rs=St(),ss=bt(),Y=At(),nn=Rt(),{spawnedKill:os,spawnedCancel:is,setupTimeout:as,validateTimeout:cs,setExitHandler:us}=Mt(),{handleInput:ls,getSpawnedResult:ds,makeAllStream:fs,validateInputSync:ms}=Yt(),{mergePromise:rn,getSpawnedPromise:ps}=Zt(),{joinCommand:sn,parseCommand:on,getEscapedCommand:an}=tn(),hs=1e3*1e3*100,gs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?{...process.env,...e}:e;return n?rs.env({env:o,cwd:r,execPath:s}):o},cn=(e,t,n={})=>{let r=ts._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:hs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=gs(n),n.stdio=nn(n),process.platform==="win32"&&es.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},L=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ns(t):t,Q=(e,t,n)=>{let r=cn(e,t,n),s=sn(e,t),o=an(e,t);cs(r.options);let i;try{i=Se.spawn(r.file,r.args,r.options)}catch(S){let y=new Se.ChildProcess,x=Promise.reject(Y({error:S,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return rn(y,x)}let a=ps(i),u=as(i,r.options,a),l=us(i,r.options,u),f={isCanceled:!1};i.kill=os.bind(null,i.kill.bind(i)),i.cancel=is.bind(null,i,f);let p=ss(async()=>{let[{error:S,exitCode:y,signal:x,timedOut:E},B,$,hn]=await ds(i,r.options,l),we=L(r.options,B),be=L(r.options,$),ve=L(r.options,hn);if(S||y!==0||x!==null){let Ee=Y({error:S,exitCode:y,signal:x,stdout:we,stderr:be,all:ve,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:f.isCanceled,killed:i.killed});if(!r.options.reject)return Ee;throw Ee}return{command:s,escapedCommand:o,exitCode:0,stdout:we,stderr:be,all:ve,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ls(i,r.options.input),i.all=fs(i,r.options),rn(i,p)};R.exports=Q;R.exports.sync=(e,t,n)=>{let r=cn(e,t,n),s=sn(e,t),o=an(e,t);ms(r.options);let i;try{i=Se.spawnSync(r.file,r.args,r.options)}catch(l){throw Y({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=L(r.options,i.stdout,i.error),u=L(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Y({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[n,...r]=on(e);return Q(n,r,t)};R.exports.commandSync=(e,t)=>{let[n,...r]=on(e);return Q.sync(n,r,t)};R.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=nn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Q(o,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var Ss={};bn(Ss,{default:()=>pn});var g=require("@raycast/api");var ln=require("@raycast/api"),dn=vn(un()),fn=require("fs"),mn=require("path/posix"),ye=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r}=(0,ln.getPreferenceValues)();if(t?this.cliPath=t:this.cliPath=process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw",!(0,fn.existsSync)(this.cliPath))throw Error(`Invalid Cli Path: ${this.cliPath}`);this.env={BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,mn.dirname)(process.execPath)}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async listItems(t,n){let{stdout:r}=await this.exec(["list",t,"--session",n]);return JSON.parse(r)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(t){let{stdout:n}=await this.exec(t?["status","--session",t]:["status"]);return JSON.parse(n).status}async exec(t){return(0,dn.default)(this.cliPath,t,{env:this.env})}};var xe="sessionToken";async function pn(){let e=await(0,g.getLocalStorageItem)(xe),t=new ye;switch(await(0,g.showToast)(g.ToastStyle.Animated,"Locking Vault..."),await t.status(e)){case"locked":{(0,g.showToast)(g.ToastStyle.Failure,"Vault is already locked!");break}case"unauthenticated":{(0,g.showToast)(g.ToastStyle.Failure,"You are logged out!");break}case"unlocked":{await t.lock(),await(0,g.removeLocalStorageItem)(xe),(0,g.showToast)(g.ToastStyle.Success,"Vault Locked!");break}}}module.exports=En(Ss);0&&(module.exports={});
