(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{30539:function(e,t,n){Promise.resolve().then(n.bind(n,66153))},66153:function(e,t,n){"use strict";n.r(t),n.d(t,{Chat:function(){return er}});var s,r,a,l,o=n(44462),i=n(39546),c=n(57632),d=n(25882),u=n(88936);let f=(0,u.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),m=i.forwardRef((e,t)=>{let{className:n,variant:s,size:r,asChild:a=!1,...l}=e,i=a?d.g7:"button";return(0,o.jsx)(i,{className:(0,c.cn)(f({variant:s,size:r,className:n})),ref:t,...l})});m.displayName="Button";var h=n(37101),p=n(82982),x=n(14717),g=n(53055);function v(e){let{onSubmit:t,input:n,setInput:s,isLoading:r}=e,{formRef:a,onKeyDown:l}=function(){let e=(0,i.useRef)(null);return{formRef:e,onKeyDown:t=>{if("Enter"===t.key&&!t.shiftKey&&!t.nativeEvent.isComposing){var n;null===(n=e.current)||void 0===n||n.requestSubmit(),t.preventDefault()}}}}(),d=i.useRef(null),u=(0,g.useRouter)();return i.useEffect(()=>{d.current&&d.current.focus()},[]),(0,o.jsx)("form",{onSubmit:async e=>{e.preventDefault(),(null==n?void 0:n.trim())&&(s(""),await t(n))},ref:a,children:(0,o.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,o.jsxs)(x.u,{children:[(0,o.jsx)(x.aJ,{asChild:!0,children:(0,o.jsxs)("button",{onClick:e=>{e.preventDefault(),u.refresh(),u.push("/")},className:(0,c.cn)(f({size:"sm",variant:"outline"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"),children:[(0,o.jsx)(p.IconPlus,{}),(0,o.jsx)("span",{className:"sr-only",children:"New Chat"})]})}),(0,o.jsx)(x._v,{children:"New Chat"})]}),(0,o.jsx)(h.Z,{ref:d,tabIndex:0,onKeyDown:l,rows:1,value:n,onChange:e=>s(e.target.value),placeholder:"Send a message.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"}),(0,o.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,o.jsxs)(x.u,{children:[(0,o.jsx)(x.aJ,{asChild:!0,children:(0,o.jsxs)(m,{type:"submit",size:"icon",disabled:r||""===n,children:[(0,o.jsx)(p.IconArrowElbow,{}),(0,o.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,o.jsx)(x._v,{children:"Send message"})]})})]})})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=i.useState(!1);return i.useEffect(()=>{let t=()=>{n(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[e]),t}function y(e){let{className:t,...n}=e,s=b();return(0,o.jsxs)(m,{variant:"outline",size:"icon",className:(0,c.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",s?"opacity-0":"opacity-100",t),onClick:()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"}),...n,children:[(0,o.jsx)(p.IconArrowDown,{}),(0,o.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}function j(e){let{href:t,children:n}=e;return(0,o.jsxs)("a",{href:t,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,o.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function w(e){let{className:t,...n}=e;return(0,o.jsxs)("p",{className:(0,c.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",t),...n,children:["Open source LLM helper factor built with"," ",(0,o.jsx)(j,{href:"https://github.com/unit-mesh/chocolate-factory",children:"Chocolate Factory"}),"."]})}function N(e){let{id:t,isLoading:n,stop:s,append:r,reload:a,input:l,setInput:i,messages:c}=e;return(0,o.jsxs)("div",{className:"fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%",children:[(0,o.jsx)(y,{}),(0,o.jsxs)("div",{className:"mx-auto sm:max-w-3xl sm:px-4",children:[(0,o.jsx)("div",{className:"flex h-10 items-center justify-center",children:n?(0,o.jsxs)(m,{variant:"outline",onClick:()=>s(),className:"bg-background",children:[(0,o.jsx)(p.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==c?void 0:c.length)>0&&(0,o.jsxs)(m,{variant:"outline",onClick:()=>a(),className:"bg-background",children:[(0,o.jsx)(p.IconRefresh,{className:"mr-2"}),"Regenerate response"]})}),(0,o.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,o.jsx)(v,{onSubmit:async e=>{await r({id:t,content:e,role:"user"})},input:l,setInput:i,isLoading:n}),(0,o.jsx)(w,{className:"hidden sm:block"})]})]})]})}var k=n(42862);let C=k.fC,_=k.ZA,S=k.B4,E=i.forwardRef((e,t)=>{let{className:n,children:s,...r}=e;return(0,o.jsxs)(k.xz,{ref:t,className:(0,c.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),...r,children:[s,(0,o.jsx)(k.JO,{asChild:!0,children:(0,o.jsx)(p.IconChevronUpDown,{className:"opacity-50"})})]})});E.displayName=k.xz.displayName;let I=i.forwardRef((e,t)=>{let{className:n,children:s,position:r="popper",...a}=e;return(0,o.jsx)(k.h_,{children:(0,o.jsx)(k.VY,{ref:t,className:(0,c.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===r&&"translate-y-1",n),position:r,...a,children:(0,o.jsx)(k.l_,{className:(0,c.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s})})})});I.displayName=k.VY.displayName;let L=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,o.jsx)(k.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",n),...s})});L.displayName=k.__.displayName;let O=i.forwardRef((e,t)=>{let{className:n,children:s,...r}=e;return(0,o.jsxs)(k.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...r,children:[(0,o.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,o.jsx)(k.wU,{children:(0,o.jsx)(p.IconCheck,{className:"h-4 w-4"})})}),(0,o.jsx)(k.eT,{children:s})]})});O.displayName=k.ck.displayName;let T=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,o.jsx)(k.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});T.displayName=k.Z0.displayName;let z=[{label:"Frontend",value:"frontend"},{label:"OpenAPI",value:"openapi"},{label:"Code Interpreter (Kotlin)",value:"code-interpreter"},{label:"TestCase",value:"testcase"},{label:"SQL",value:"sql"},{label:"Custom",value:"custom"}];function D(e){var t;let{setDomain:n}=e,[s,r]=(0,i.useState)(z[0].value);return(0,o.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,o.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,o.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to use Chocolate Factory!"}),(0,o.jsxs)("p",{className:"mb-2 leading-normal text-muted-foreground",children:["This is an open source LLM application engine designed to empower you in creating your very own AI assistant. Built with"," ",(0,o.jsx)(j,{href:"https://unitmesh.cc",children:"Unit Mesh Team"}),"."]}),(0,o.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start with select a LLM helper here:"}),(0,o.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:(0,o.jsxs)(C,{value:s,onValueChange:e=>{r(e),n(e)},children:[(0,o.jsx)(E,{children:(0,o.jsx)(S,{placeholder:"Select a domain…","aria-label":s,children:null===(t=z.find(e=>e.value===s))||void 0===t?void 0:t.label})}),(0,o.jsx)(I,{children:(0,o.jsx)(_,{children:z.map(e=>(0,o.jsx)(O,{value:e.value,disabled:e.value===s,children:e.label},e.value))})})]})})]})})}var R=n(98184);function A(e){let{trackVisibility:t}=e,n=b(),{ref:s,entry:r,inView:a}=(0,R.YD)({trackVisibility:t,delay:100,rootMargin:"0px 0px -150px 0px"});return i.useEffect(()=>{n&&t&&!a&&(null==r||r.target.scrollIntoView({block:"start"}))},[a,r,n,t]),(0,o.jsx)("div",{ref:s,className:"h-px w-full"})}var J=n(44032);let M=i.forwardRef((e,t)=>{let{className:n,orientation:s="horizontal",decorative:r=!0,...a}=e;return(0,o.jsx)(J.f,{ref:t,decorative:r,orientation:s,className:(0,c.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",n),...a})});M.displayName=J.f.displayName;var U=n(4627),H=n(73249),P=n(6479),F=n(67629);function Z(e){let{timeout:t=2e3}=e,[n,s]=i.useState(!1);return{isCopied:n,copyToClipboard:e=>{var n;(null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText)&&e&&navigator.clipboard.writeText(e).then(()=>{s(!0),setTimeout(()=>{s(!1)},t)})}}}let B={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="ABCDEFGHJKLMNPQRSTUVWXY3456789",s="";for(let t=0;t<e;t++)s+=n.charAt(Math.floor(Math.random()*n.length));return t?s.toLowerCase():s},Y=(0,i.memo)(e=>{let{language:t,value:n}=e;if("interpreter"==t){"string"==typeof n&&(n=JSON.parse(n));let e=n;if("html"==e.msgType)return(0,o.jsx)("div",{className:"relative w-full font-sans codeblock bg-zinc-950",children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content.html}})})}let{isCopied:s,copyToClipboard:r}=Z({timeout:2e3});return(0,o.jsxs)("div",{className:"relative w-full font-sans codeblock bg-zinc-950",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100",children:[(0,o.jsx)("span",{className:"text-xs lowercase",children:t}),(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsxs)(m,{variant:"ghost",className:"hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=B[t]||".file",s="file-".concat(V(3,!0)).concat(e),r=window.prompt("Enter file name",s);if(!r)return;let a=new Blob([n],{type:"text/plain"}),l=URL.createObjectURL(a),o=document.createElement("a");o.download=r,o.href=l,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(l)},size:"icon",children:[(0,o.jsx)(p.IconDownload,{}),(0,o.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,o.jsxs)(m,{variant:"ghost",size:"icon",className:"text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{s||r(n)},children:[s?(0,o.jsx)(p.IconCheck,{}):(0,o.jsx)(p.IconCopy,{}),(0,o.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,o.jsx)(P.Z,{language:t,style:F.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:n})]})});Y.displayName="CodeBlock";var K=n(1373);let W=(0,i.memo)(K.D,(e,t)=>e.children===t.children&&e.className===t.className);function q(e){let{message:t,className:n,...s}=e,{isCopied:r,copyToClipboard:a}=Z({timeout:2e3});return(0,o.jsx)("div",{className:(0,c.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",n),...s,children:(0,o.jsxs)(m,{variant:"ghost",size:"icon",onClick:()=>{r||a(t.content)},children:[r?(0,o.jsx)(p.IconCheck,{}):(0,o.jsx)(p.IconCopy,{}),(0,o.jsx)("span",{className:"sr-only",children:"Copy message"})]})})}function X(e){let{message:t,...n}=e;return(0,o.jsxs)("div",{className:(0,c.cn)("group relative mb-4 flex items-start md:-ml-12"),...n,children:[(0,o.jsx)("div",{className:(0,c.cn)("flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow","user"===t.role?"bg-background":"bg-primary text-primary-foreground"),children:"user"===t.role?(0,o.jsx)(p.IconUser,{}):(0,o.jsx)(p.IconOpenAI,{})}),(0,o.jsxs)("div",{className:"flex-1 px-1 ml-4 space-y-2 overflow-hidden",children:[(0,o.jsx)(W,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[U.Z,H.Z],components:{p(e){let{children:t}=e;return(0,o.jsx)("p",{className:"mb-2 last:mb-0",children:t})},code(e){let{node:t,inline:n,className:s,children:r,...a}=e;if(r.length){if("▍"==r[0])return(0,o.jsx)("span",{className:"mt-1 cursor-default animate-pulse",children:"▍"});r[0]=r[0].replace("`▍`","▍")}let l=/language-(\w+)/.exec(s||"");return n?(0,o.jsx)("code",{className:s,...a,children:r}):(0,o.jsx)(Y,{language:l&&l[1]||"",value:String(r).replace(/\n$/,""),...a},Math.random())}},children:t.content}),(0,o.jsx)(q,{message:t})]})]})}function Q(e){let{messages:t}=e;return t.length?(0,o.jsx)("div",{className:"relative mx-auto max-w-3xl px-4",children:t.map((e,n)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(X,{message:e}),n<t.length-1&&(0,o.jsx)(M,{className:"my-4 md:my-8"})]},n))}):null}(s=a||(a={}))[s.NONE=0]="NONE",s[s.ONE_CHAT=1]="ONE_CHAT",s[s.MULTI_CHAT=2]="MULTI_CHAT";class G{get currentPrompt(){return this.prompts.find(e=>!e.isDone)}static default(){return new G}constructor(){this.prompts=[]}}(r=l||(l={})).Classify="Classify",r.Clarify="Clarify",r.Analyze="Analyze",r.Design="Design",r.Execute="Execute",r.Custom="Custom";var $=n(26062);let ee=e=>{let t=e.indexOf(":"),n=e.slice(0,t),s=Object.keys(et).find(e=>et[e]===Number(n)),r=e.slice(t+1),a=r;if(!r)return{type:s,value:""};try{a=JSON.parse(r)}catch(e){console.error("Failed to parse JSON value:",r)}return{type:s,value:a}},et={text:0,function_call:1,data:2},en=async(e,t,n,s,r,a,l,o,i,d,u)=>{var f,m;let h=l.current;n(t.messages,!1);let p=await fetch(e,{method:"POST",body:JSON.stringify({messages:u?t.messages:t.messages.map(e=>{let{role:t,content:n,name:s,function_call:r}=e;return{role:t,content:n,...void 0!==s&&{name:s},...void 0!==r&&{function_call:r}}}),...a.current.body,...null===(f=t.options)||void 0===f?void 0:f.body,...void 0!==t.functions&&{functions:t.functions},...void 0!==t.function_call&&{function_call:t.function_call}}),credentials:a.current.credentials,headers:{...a.current.headers,...null===(m=t.options)||void 0===m?void 0:m.headers},...null!==o.current&&{signal:o.current.signal}}).catch(e=>{throw n(h,!1),e});if(d)try{await d(p)}catch(e){throw e}if(!p.ok)throw n(h,!1),Error(await p.text()||"Failed to fetch the chat response.");if(!p.body)throw Error("The response body is empty.");let x="true"===p.headers.get("X-Experimental-Stream-Data"),g=new Date,v=p.body.getReader(),b=function(e){let t=new TextDecoder;return e?function(e){let n=t.decode(e,{stream:!0}).split("\n");return n.map(ee).filter(Boolean)}:function(e){return e?t.decode(e,{stream:!0}):""}}(x),y=[],j=[],w={},N=[],k=0;if(x){for(;;){let{value:e}=await v.read();if(e&&(N.push(e),k+=e.length,10!==e[e.length-1]))continue;if(0===N.length)break;let a=new Uint8Array(k),l=0;for(let e of N)a.set(e,l),l+=e.length;N.length=0,k=0;let i=b(a);if("string"==typeof i)throw Error("Invalid response format. Complex mode was set but the response is a string. This should never happen.");for(let{type:e,value:a}of i){"text"===e&&(w.text?w.text={...w.text,content:(w.text.content||"")+a}:w.text={id:(0,c.x0)(),role:"assistant",content:a,createdAt:g});let l=null;if("function_call"===e){w.function_call=a;let e=w.function_call;if(e&&"string"==typeof e){let t=JSON.parse(e).function_call;l={id:(0,c.x0)(),role:"assistant",content:"",function_call:t,name:t.name,createdAt:g},w.function_call=l}}if("data"===e){let e=JSON.parse(a);w.data?w.data=[...w.data,...e]:w.data=e}let i=w.data,d=w.text,u=[l,d].filter(Boolean);if(n([...t.messages,...u],!1),s([...r||[],...i||[]],!1),null===o.current){v.cancel();break}}}for(let[e,t]of Object.entries(w))i&&"text"===e&&i(t),"data"===e?j.push(t):y.push(t);return{messages:y,data:j}}{let e="",s=(0,c.x0)(),r={id:s,createdAt:g,content:"",role:"assistant"};for(;;){let{done:s,value:a}=await v.read();if(s)break;if((e+=b(a)).startsWith("data:")&&(e=e.replace("data:","")),e.startsWith('{"function_call":'))r.function_call=e;else try{let t=JSON.parse(e),n=t.messages[0].content;console.log(n),"object"==typeof n&&(n=JSON.stringify(n).content),r.content=n,r.object=t}catch(t){r.content=e}if(n([...t.messages,{...r}],!1),null===o.current){v.cancel();break}}if(e.startsWith('{"function_call":')){let s=JSON.parse(e).function_call;r.function_call=s,n([...t.messages,{...r}])}return i&&i(r),r}};var es=n(33451);function er(e){var t,n;let{id:s,initialMessages:r,className:a}=e,[d,u]=(0,i.useState)(z[0].value),[f,m]=(0,i.useState)(G.default()),[h,p]=(0,i.useState)((null==f?void 0:null===(t=f.prompts)||void 0===t?void 0:t.length)?f.prompts[0]:null),[x,g]=(0,i.useState)(null!==(n=null==h?void 0:h.stage)&&void 0!==n?n:l.Classify);(0,i.useEffect)(()=>{fetch("http://localhost:18080/api/workflows/".concat(d)).then(e=>e.json()).then(e=>{var t;m(e);let n=(null==e?void 0:e.length)?e[0]:null;p(n),g(null!==(t=n.stage)&&void 0!==t?t:l.Classify)})},[d]);let{messages:v,append:b,reload:y,stop:j,isLoading:w,input:k,setInput:C}=function(){let{api:e="/api/chat",id:t,initialMessages:n=[],initialInput:s="",sendExtraMessageFields:r,experimental_onFunctionCall:a,onResponse:l,onFinish:o,onError:d,credentials:u,headers:f,body:m}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=(0,i.useId)(),p=t||h,{data:x,mutate:g}=(0,$.ZP)([e,p],null,{fallbackData:n}),{data:v=!1,mutate:b}=(0,$.ZP)([p,"loading"],null),{data:y,mutate:j}=(0,$.ZP)([p,"streamData"],null),w=(0,i.useRef)(x||[]);(0,i.useEffect)(()=>{w.current=x||[]},[x]);let N=(0,i.useRef)(null),k=(0,i.useRef)({credentials:u,headers:f,body:m});(0,i.useEffect)(()=>{k.current={credentials:u,headers:f,body:m}},[u,f,m]);let[C,_]=(0,i.useState)(),S=(0,i.useCallback)(async t=>{try{b(!0);let n=new AbortController;for(N.current=n;;){let n=await en(e,t,g,j,y,k,w,N,o,l,r);if("messages"in n){let e=!1;for(let s of n.messages)if(void 0!==s.function_call&&"string"!=typeof s.function_call&&(e=!0,a)){let e=s.function_call,n=await a(w.current,e);if(void 0===n)break;t=n}if(!e)break}else{if(void 0===n.function_call||"string"==typeof n.function_call)break;if(a){let e=n.function_call,s=await a(w.current,e);if(void 0===s)break;t=s}}}N.current=null}catch(e){if("AbortError"===e.name)return N.current=null,null;d&&e instanceof Error&&d(e),_(e)}finally{b(!1)}},[g,b,e,k,l,o,d,_,j,y,r,a,w.current,N.current]),E=(0,i.useCallback)(async function(e){let{options:t,functions:n,function_call:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.id||(e.id=(0,c.x0)());let r={messages:w.current.concat(e),options:t,...void 0!==n&&{functions:n},...void 0!==s&&{function_call:s}};return S(r)},[S]),I=(0,i.useCallback)(async function(){let{options:e,functions:t,function_call:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0===w.current.length)return null;let s=w.current[w.current.length-1];if("assistant"===s.role){let s={messages:w.current.slice(0,-1),options:e,...void 0!==t&&{functions:t},...void 0!==n&&{function_call:n}};return S(s)}let r={messages:w.current,options:e,...void 0!==t&&{functions:t},...void 0!==n&&{function_call:n}};return S(r)},[S]),L=(0,i.useCallback)(()=>{N.current&&(N.current.abort(),N.current=null)},[]),O=(0,i.useCallback)(e=>{g(e,!1),w.current=e},[g]),[T,z]=(0,i.useState)(s),D=(0,i.useCallback)(function(e){let{options:t,functions:n,function_call:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;r&&(k.current={...k.current,...r}),e.preventDefault(),T&&(E({content:T,role:"user",createdAt:new Date},{options:t,functions:n,function_call:s}),z(""))},[T,E]);return{messages:x||[],error:C,append:E,reload:I,stop:L,setMessages:O,input:T,setInput:z,handleInputChange:e=>{z(e.target.value)},handleSubmit:D,isLoading:v,data:y}}({api:"http://localhost:18080/api/chat",initialMessages:r,id:s,headers:{"Content-Type":"application/json;charset=UTF-8","X-Experimental-Stream-Data":"true"},body:{stage:x,id:s,domain:d},onError:e=>{console.error(e),es.toast.error(JSON.stringify(e))},onFinish:e=>{let t=e.object;if(t.result){var n;g(null===(n=t.result)||void 0===n?void 0:n.nextStage)}}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:(0,c.cn)("pb-[200px] pt-4 md:pt-10",a),children:v.length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Q,{messages:v}),(0,o.jsx)(A,{trackVisibility:w})]}):(0,o.jsx)(D,{setDomain:e=>{u(e)}})}),(0,o.jsx)(N,{id:s,isLoading:w,stop:j,append:b,reload:y,messages:v,input:k,setInput:C})]})}}},function(e){e.O(0,[802,664,811,33,191,744],function(){return e(e.s=30539)}),_N_E=e.O()}]);