"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="\u6280\u672f\u67b6\u6784",l={unversionedId:"tech-intro/tech-arch",id:"tech-intro/tech-arch",title:"\u6280\u672f\u67b6\u6784",description:"\u76f8\u5173\u6280\u672f\u7ec4\u4ef6",source:"@site/docs/tech-intro/tech-arch.md",sourceDirName:"tech-intro",slug:"/tech-intro/tech-arch",permalink:"/website/en/docs/tech-intro/tech-arch",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6280\u672f\u603b\u89c8",permalink:"/website/en/docs/category/\u6280\u672f\u603b\u89c8"},next:{title:"\u670d\u52a1\u7ec4\u4ef6",permalink:"/website/en/docs/tech-intro/micro-services"}},c={},p=[{value:"\u76f8\u5173\u6280\u672f\u7ec4\u4ef6",id:"\u76f8\u5173\u6280\u672f\u7ec4\u4ef6",level:2},{value:"\u6280\u672f\u67b6\u6784",id:"\u6280\u672f\u67b6\u6784-1",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6280\u672f\u67b6\u6784"},"\u6280\u672f\u67b6\u6784"),(0,a.kt)("h2",{id:"\u76f8\u5173\u6280\u672f\u7ec4\u4ef6"},"\u76f8\u5173\u6280\u672f\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"u4a-component")," \u63d0\u4f9b\u8d26\u53f7\u3001\u8ba4\u8bc1\u3001\u6743\u9650\u53ca\u5ba1\u8ba1\u7ba1\u7406\u529f\u80fd\uff0c\u5305\u542b\u4ee5\u4e0b\u4e3b\u8981\u8d44\u6599",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nginx.com/nginx-ingress-controller/"},"nginx ingress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cert-manager.io/"},"cert-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dexidp/dex"},"\u57fa\u4e8e dex \u6784\u5efa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/clastix/capsule"},"\u591a\u79df\u6237\u57fa\u4e8e capsule \u6784\u5efa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jetstack/kube-oidc-proxy"},"oidc-proxy \u57fa\u4e8e kube-oidc-proxy \u6784\u5efa"))))),(0,a.kt)("h2",{id:"\u6280\u672f\u67b6\u6784-1"},"\u6280\u672f\u67b6\u6784"),(0,a.kt)("p",null,"\u5e73\u53f0\u5f00\u53d1\u91c7\u53d6\u524d\u540e\u7aef\u5206\u79bb\uff0c\u4ee5 K8S \u4e3a\u6838\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u9075\u5faa K8S \u7684\u6269\u5c55\u673a\u5236\u53ca API \u89c4\u8303\uff0c\u6574\u4f53\u5f00\u53d1\u67b6\u6784\u7684\u57fa\u672c\u903b\u8f91\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,a.kt)("img",{alt:"\u56fe 2",src:r(2737).Z,width:"1089",height:"724"}),"  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709\u7ec4\u4ef6\u7684\u5f00\u53d1\u3001\u6269\u5c55\u7684\u8ba4\u8bc1\u90fd\u901a\u8fc7\u7edf\u4e00\u8ba4\u8bc1\u4e2d\u5fc3\u8fdb\u884c\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u7531\u5fae\u524d\u7aef\u7684\u4e3b\u6846\u67b6 DockApp \u7edf\u4e00\u8fdb\u884c\uff0c\u5176\u4ed6\u5fae\u524d\u7aef\u7684\u6269\u5c55\u4e0d\u9700\u8981\u5355\u72ec\u652f\u6301\u540c\u8ba4\u8bc1\u4e2d\u5fc3\u7684\u5904\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u67b6\u6784\u4e0a\u6574\u4f53\u53ef\u4ee5\u6309\u7167\u4e09\u5c42\u6765\u770b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5c42\uff0c\u524d\u7aef\u91c7\u7528\u5fae\u524d\u7aef\u67b6\u6784\uff0c\u5c3d\u91cf\u91c7\u7528\u4f4e\u4ee3\u7801\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u9ad8\u4ee3\u7801\u81ea\u52a8\u5316\u751f\u6210\u6bd4\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5c42\uff0c\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u589e\u52a0 OpenAPI\uff0c\u5f62\u6210\u7edf\u4e00\u7684 BFF \u5c42\uff0c\u5bf9 API \u8fdb\u884c\u805a\u5408\uff0c\u63d0\u4f9b\u524d\u7aef\u6240\u9700\u8981\u7684\u4e1a\u52a1\u573a\u666f\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u91c7\u7528 CRD + controller \u7684 Operator \u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u5f62\u6210\u6570\u636e\u9a71\u52a8\u7684\u6d41\u7a0b\u5f00\u53d1\u6a21\u5f0f")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u5916 API \u4e3b\u8981\u5305\u62ec\u4e24\u90e8\u5206\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece BFF \u5c42\u63d0\u4f9b\u7684 OpenAPI"),(0,a.kt)("li",{parentName:"ul"},"\u4ece K8S \u5c42\u63d0\u4f9b\u7684\u8d44\u6e90 API")),(0,a.kt)("h1",{id:"\u4f7f\u7528\u57df\u540d\u8bbf\u95ee"},"\u4f7f\u7528\u57df\u540d\u8bbf\u95ee"),(0,a.kt)("p",null,"\u5728\u4ee3\u7406\u670d\u52a1\u5668/\u8d1f\u8f7d\u5747\u8861\u4e0a\uff0c\u4f7f\u7528 nip.io \u6765\u652f\u6301 http/https \u57df\u540d\u7684\u7ed1\u5b9a\u65b9\u5f0f\uff0c\u4fbf\u4e8e\u9ed8\u8ba4\u7edf\u4e00\u91c7\u7528\u57df\u540d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 nip.io \u8fdb\u884c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<ip-address>.nip.io\uff0c\u6bd4\u5982 http://192.168.1.123.nip.io"))))}m.isMDXComponent=!0},2737:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6b8d0cb645caee89c8df55940f5c5b3379940f8714667f8fb2dc780f3442b8f0-8fbc2a4fd6aeaaa23274c226eb811799.png"}}]);