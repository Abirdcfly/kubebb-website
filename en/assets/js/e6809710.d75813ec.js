"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),k=l,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:3},o="\u90e8\u7f72\u5e95\u5ea7\u7ec4\u4ef6",p={unversionedId:"quick-start/buildingbase_quickstart",id:"quick-start/buildingbase_quickstart",title:"\u90e8\u7f72\u5e95\u5ea7\u7ec4\u4ef6",description:"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd\u5e95\u5ea7\u7ec4\u4ef6\u7684\u90e8\u7f72\u6b65\u9aa4\uff0c\u5305\u62ec\u76f8\u5173\u7684\u5f00\u6e90\u6280\u672f\u7ec4\u4ef6\u3001\u524d\u63d0\u6761\u4ef6\u4ee5\u53ca\u5feb\u901f\u90e8\u7f72\uff0c\u5e76\u5c06\u90e8\u7f72\u7684\u96c6\u7fa4\u6dfb\u52a0\u5230\u670d\u52a1\u95e8\u6237\u4e0a\u3002",source:"@site/docs/quick-start/buildingbase_quickstart.md",sourceDirName:"quick-start",slug:"/quick-start/buildingbase_quickstart",permalink:"/website/en/docs/quick-start/buildingbase_quickstart",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u5185\u6838",permalink:"/website/en/docs/quick-start/core_quickstart"},next:{title:"\u4f53\u9a8c\u81ea\u5b9a\u4e49\u914d\u7f6e",permalink:"/website/en/docs/quick-start/buildingbase_customization"}},i={},s=[{value:"\u901a\u8fc7\u5185\u6838\u90e8\u7f72(\u63a8\u8350)",id:"\u901a\u8fc7\u5185\u6838\u90e8\u7f72\u63a8\u8350",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"1. \u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93",id:"1-\u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93",level:4},{value:"2. \u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4",id:"2-\u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4",level:4},{value:"3. \u90e8\u7f72<code>Cluster Component</code>",id:"3-\u90e8\u7f72cluster-component",level:4},{value:"4. \u90e8\u7f72<code>U4A Component</code>",id:"4-\u90e8\u7f72u4a-component",level:4},{value:"5. \u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237",id:"5-\u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237",level:4},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:3},{value:"1. \u5378\u8f7d<code>U4A Component</code>",id:"1-\u5378\u8f7du4a-component",level:4},{value:"2. \u5378\u8f7d<code>Cluster Component</code>",id:"2-\u5378\u8f7dcluster-component",level:4},{value:"\u901a\u8fc7Helm\u90e8\u7f72",id:"\u901a\u8fc7helm\u90e8\u7f72",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72-1",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d-1",level:3}],m={toc:s},c="wrapper";function u(e){let{components:n,...r}=e;return(0,l.kt)(c,(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u90e8\u7f72\u5e95\u5ea7\u7ec4\u4ef6"},"\u90e8\u7f72\u5e95\u5ea7\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd\u5e95\u5ea7\u7ec4\u4ef6\u7684\u90e8\u7f72\u6b65\u9aa4\uff0c\u5305\u62ec\u76f8\u5173\u7684\u5f00\u6e90\u6280\u672f\u7ec4\u4ef6\u3001\u524d\u63d0\u6761\u4ef6\u4ee5\u53ca\u5feb\u901f\u90e8\u7f72\uff0c\u5e76\u5c06\u90e8\u7f72\u7684\u96c6\u7fa4\u6dfb\u52a0\u5230\u670d\u52a1\u95e8\u6237\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u901a\u8fc7\u5185\u6838\u90e8\u7f72\u63a8\u8350"},"\u901a\u8fc7\u5185\u6838\u90e8\u7f72(\u63a8\u8350)"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u524d\u9700\u5b8c\u6210",(0,l.kt)("a",{parentName:"p",href:"./core_quickstart"},"\u5b89\u88c5\u5185\u6838"),"\u3002")),(0,l.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("h4",{id:"1-\u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"},"1. \u521b\u5efa\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"./core_quickstart#%E4%BD%BF%E7%94%A8%E5%AE%98%E6%96%B9%E7%BB%84%E4%BB%B6%E4%BB%93%E5%BA%93"},"\u4f7f\u7528\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"))),(0,l.kt)("h4",{id:"2-\u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4"},"2. \u521b\u5efa\u5e95\u5ea7\u7ec4\u4ef6\u7a7a\u95f4"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4ec5\u652f\u6301\u4f7f\u7528\u547d\u540d\u7a7a\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"u4a-system"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl create namespace u4a-system\n")),(0,l.kt)("h4",{id:"3-\u90e8\u7f72cluster-component"},"3. \u90e8\u7f72",(0,l.kt)("inlineCode",{parentName:"h4"},"Cluster Component")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u90e8\u7f72\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"p"},"cluster_componentplan.yaml"),"\u5982\u4e0b:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/examples/cluster-component"},"\u53c2\u8003"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: cluster-component\n  namespace: u4a-system\nspec:\n  approved: true\n  name: cluster-component\n  version: 0.1.3\n  override:\n    set:\n    - ingress-nginx.controller.nodeSelector.kubernetes\\.io/hostname=kubebb-core-control-plane\n  component:\n    name: kubebb.cluster-component\n    namespace: kubebb-system\n")),(0,l.kt)("p",null,"\u9700\u8c03\u6574\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"override.set.ingress-nginx.controller.nodeSelector.kubernetes\\.io/hostname")," \u5c06\u4f5c\u4e3a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubebb/components/tree/main/charts/cluster-component/charts/ingress-nginx"},"ingress-nginx"),"\u670d\u52a1\u8282\u70b9")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"./prerequisite#kind%E5%BC%80%E5%8F%91%E9%9B%86%E7%BE%A4"},"kind\u5f00\u53d1\u96c6\u7fa4"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"kubebb-core-control-plane"),"\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u90e8\u7f72:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl apply -nu4a-system -f cluster_componentplan.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cluster Component"),"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl get componentplan -nu4a-system cluster-component -oyaml\n")),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001\u5982\u4e0b\u65f6\uff0c\u8868\u793a\u7ec4\u4ef6\u90e8\u7f72\u6210\u529f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  conditions:\n  - lastTransitionTime: "2023-07-25T08:15:41Z"\n    reason: ""\n    status: "True"\n    type: Approved\n  - lastTransitionTime: "2023-07-25T08:15:44Z"\n    reason: InstallSuccess\n    status: "True"\n    type: Actioned\n  - lastTransitionTime: "2023-07-25T08:15:44Z"\n    reason: ""\n    status: "True"\n    type: Succeeded\n')),(0,l.kt)("h4",{id:"4-\u90e8\u7f72u4a-component"},"4. \u90e8\u7f72",(0,l.kt)("inlineCode",{parentName:"h4"},"U4A Component")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u90e8\u7f72\u4fe1\u606f",(0,l.kt)("inlineCode",{parentName:"p"},"u4a_componentplan.yaml"),"\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n  name: u4a-component\n  namespace: u4a-system\nspec:\n  approved: true\n  name: u4a-component\n  version: 0.1.3\n  wait: true\n  override:\n    valuesFrom:\n    - kind: ConfigMap\n      name: u4acm\n      valuesKey: "values.yaml"\n  component:\n    name: kubebb.u4a-component\n    namespace: kubebb-system\n')),(0,l.kt)("p",null,"\u5176\u4e2d,\u7ec4\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"U4A-Component"),"\u7684\u53c2\u6570\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap"),"\u65b9\u5f0f\u6ce8\u5165\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap"),"\u7684\u521b\u5efa\u6d41\u7a0b\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components/tree/main/examples/u4a-component#install-u4a-component"},"U4A\u7ec4\u4ef6\u90e8\u7f72\u6d41\u7a0b")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u90e8\u7f72:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl apply -nu4a-system -f u4a_componentplan.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"U4A Component"),"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl get componentplan -nu4a-system u4a-component -oyaml\n")),(0,l.kt)("h4",{id:"5-\u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237"},"5. \u8bbf\u95ee\u5e95\u5ea7\u670d\u52a1\u95e8\u6237"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u95e8\u6237\u670d\u52a1\u7684\u8bbf\u95ee\u5730\u5740:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(base) \u279c  ~ kubectl get ingress -nu4a-system\nNAME                             CLASS    HOSTS                          ADDRESS   PORTS     AGE\nbff-server-ingress               <none>   portal.172.18.0.2.nip.io             80, 443   4h55m\nbff-server-ingress-socket        <none>   portal.172.18.0.2.nip.io             80, 443   4h55m\nkube-oidc-proxy-server-ingress   <none>   k8s.172.18.0.2.nip.io                80, 443   4h55m\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"p"},"https://portal.172.18.0.2.nip.io"),"\u5373\u53ef\u8fdb\u5165\u670d\u52a1\u95e8\u6237\u3002\u9ed8\u8ba4\u7684\u7528\u6237\u540d\u5bc6\u7801\u4e3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d: ",(0,l.kt)("inlineCode",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u7801: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubebb-admin"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u7531\u4e8e\u4f7f\u7528\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://nip.io/"},"nip.io"),"\u4f5c\u4e3a\u57df\u540d\u89e3\u6790\u670d\u52a1\uff0c\u56e0\u6b64\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"HOSTS"),"\u4e2d\u7684\u57df\u540d\u89e3\u6790\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"ADDRESS"),"\u5bf9\u5e94\u7684IP\u5730\u5740\u4e0a\u3002")),(0,l.kt)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("h4",{id:"1-\u5378\u8f7du4a-component"},"1. \u5378\u8f7d",(0,l.kt)("inlineCode",{parentName:"h4"},"U4A Component")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl delete componentplan -nu4a-system u4a-component\n")),(0,l.kt)("h4",{id:"2-\u5378\u8f7dcluster-component"},"2. \u5378\u8f7d",(0,l.kt)("inlineCode",{parentName:"h4"},"Cluster Component")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    kubectl delete componentplan -nu4a-system cluster-component\n")),(0,l.kt)("h2",{id:"\u901a\u8fc7helm\u90e8\u7f72"},"\u901a\u8fc7Helm\u90e8\u7f72"),(0,l.kt)("h3",{id:"\u90e8\u7f72-1"},"\u90e8\u7f72"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u90e8\u7f72 u4a-component \u7ec4\u4ef6\uff0c\u8d1f\u8d23\u63d0\u4f9b\u57fa\u4e8e Kubernetes \u7684\u8d26\u53f7\u3001\u8ba4\u8bc1\u3001\u6743\u9650\u548c\u5ba1\u8ba1\u7684\u529f\u80fd\u3002\u5e76\u4e14\uff0c\u57fa\u4e8e\u8be5\u7ec4\u4ef6\u5e95\u5ea7\uff0c\u53ef\u4ee5\u6309\u7167\u540e\u9762\u7684\u6b65\u9aa4\u6dfb\u52a0\u66f4\u591a\u7684\u529f\u80fd\u7ec4\u4ef6\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u90e8\u7f72\u4e00\u4e2a ingress nginx controller\uff0cingressclass \u540d\u5b57\u4e3a 'portal-ingress'\uff0c\u540c\u65f6\uff0c\u90e8\u7f72 cert-manager \u7528\u6765\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406.")),(0,l.kt)("p",null,"\u672c\u6b65\u9aa4\u5b8c\u6210\u540e\uff0c\u4f1a\u90e8\u7f72\u4ee5\u4e0b\u670d\u52a1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u7ba1\u7406\uff1acert-manager"),(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\uff1aingress-nginx"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u79df\u6237\u7ba1\u7406\uff1acapsule"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6ca1\u6709\u5f00\u542f OIDC \u7684 Kubernetes \u96c6\u7fa4\u4e0a\u63d0\u4f9b OIDC \u4ee3\u7406\uff1akube-oidc-proxy"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b OIDC \u53ca IAM \u670d\u52a1\uff1aoidc-server"),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u805a\u5408\u670d\u52a1\uff0c\u4e3a\u5bf9\u591a\u4e2a\u8d44\u6e90\u63d0\u4f9b\u7edf\u4e00\u7684\u89c6\u56fe\u8d44\u6e90\uff1aresource-view-controller")),(0,l.kt)("p",null,"\u83b7\u53d6\u672c\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u540e\uff0c\u8fdb\u5165 u4a-component \u76ee\u5f55\uff0c\u5e76\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u90e8\u7f72\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa namespace ",(0,l.kt)("inlineCode",{parentName:"li"},"u4a-namespace"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns u4a-system\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8f91 u4a-component/values.yaml\uff08helm\u7684\u914d\u7f6e\u6587\u4ef6\uff09 \u6765\u66ff\u6362\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<replaced-ingress-nginx-ip>"),", \u66ff\u6362\u4e3a ingress nginx \u6240\u90e8\u7f72\u8282\u70b9\u7684 IP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528\u81ea\u5df1\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u6ce8\u610f\u66f4\u65b0 registryServer \u53ca\u5176\u4ed6\u955c\u50cf\u5730\u5740"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"charts/cluster-component/values.yaml")," \u6587\u4ef6\uff0c\u66ff\u6362",(0,l.kt)("inlineCode",{parentName:"p"},"<replaced-ingress-node-name>")," \u4e3a ingress nginx \u6240\u90e8\u7f72\u8282\u70b9\u7684\u540d\u79f0"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress-nginx:\n# MUST update this value\n  deployedHost: &deployedHost\n    <replaced-ingress-node-name>\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 helm \u5b89\u88c5 u4a-component"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"# \u90e8\u7f72\u7ec4\u4ef6\n# 1. \u90e8\u7f72 cluster-component\n$ helm install --wait -n u4a-system cluster-component -f charts/cluster-component/values.yaml charts/cluster-component\n# \u7b49\u5f85\u6240\u6709\u7684 pod \u6b63\u5e38\u8fd0\u884c\uff0c\u9ed8\u8ba4 ingress-nginx \u4f1a\u5bf9\u5916\u66b4\u9732 80\uff0c443 \u7aef\u53e3\n\n# 2. \u90e8\u7f72 u4a-component\n$ helm install --wait -n u4a-system u4a-component .\n# \u7b49\u5f85\u6240\u6709\u7684 pod \u6b63\u5e38\u8fd0\u884c\n$ kubectl get pod -n u4a-system\nNAME                                                          READY   STATUS    RESTARTS   AGE\nbff-server-6c9b4b97f5-gqrx6                                   1/1     Running   0          45m\ncapsule-controller-manager-6cf656b98c-sjm5n                   1/1     Running   0          66m\ncert-manager-756fd78bff-wb2vh                                 1/1     Running   0          76m\ncert-manager-cainjector-64685f8d48-qg69v                      1/1     Running   0          76m\ncert-manager-webhook-5c46d68c6b-f4dkh                         1/1     Running   0          76m\ncluster-component-ingress-nginx-controller-5bd67897dd-5m9n7   1/1     Running   0          76m\nkube-oidc-proxy-5f4598c77c-fzl5q                              1/1     Running   0          65m\noidc-server-85db495594-k6pkt                                  2/2     Running   0          65m\nresource-view-controller-76d8c79cf-smkj5                      1/1     Running   0          66m\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5b89\u88c5\u6210\u529f\u7ed3\u675f\u540e\uff0c\u63a7\u5236\u53f0\u4f1a\u6709\u4ee5\u4e0b\u63d0\u793a:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NOTES:\n1. Get the  ServiceAccount token by running these commands:\n\n  export TOKENNAME=$(kubectl get serviceaccount/host-cluster-reader -n u4a-system -o jsonpath='{.secrets[0].name}')\n  kubectl get secret $TOKENNAME -n u4a-system -o jsonpath='{.data.token}' | base64 -d\n")),(0,l.kt)("p",{parentName:"li"},"\u6309\u7167\u63d0\u793a\u7684\u6b65\u9aa4\uff0c\u4fdd\u5b58 token\uff0c\u4f1a\u5728\u540e\u9762\u6dfb\u52a0\u96c6\u7fa4\u7684\u6b65\u9aa4\u4e2d\u4f7f\u7528\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6b64\u65f6\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5728\u7b2c 2 \u6b65\u4e2d\u914d\u7f6e\u7684 ingress \u5730\u5740:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"https://portal.<replaced-ingress-nginx-ip>.nip.io")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5982\u679c\u7531\u4e8e\u73af\u5883\u4e0d\u652f\u6301\u81ea\u52a8\u89e3\u6790 nip.io, \u53ef\u4ee5\u624b\u52a8\u5c06\u57df\u540d\u548c ip \u7684\u6620\u5c04\u6dfb\u52a0\u5230\u672c\u5730\u7684 hosts \u6587\u4ef6\u4e2d. \u4f7f\u7528\u9ed8\u8ba4\u7684 admin/kubebb-admin \u7528\u6237\u4fe1\u606f\u767b\u5f55\uff0c\u767b\u5f55\u540e\u63a7\u5236\u53f0\u5982\u4e0b\u56fe\u6240\u793a\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u56fe 2",src:t(151).Z,width:"1402",height:"478"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u73af\u5883\u51c6\u5907\uff0c\u521b\u5efa\u96c6\u7fa4\u7ba1\u7406\u7684 namespace\uff0c\u76ee\u524d\u5fc5\u987b\u4f7f\u7528 'cluster-system'."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl create ns cluster-system\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7ba1\u7406\u5e73\u53f0\u6dfb\u52a0\u5f53\u524d\u96c6\u7fa4. \u8bbf\u95ee\u201c\u7ba1\u7406\u63a7\u5236\u53f0\u201d\uff0c'\u96c6\u7fa4\u7ba1\u7406'\uff0c\u70b9\u51fb '\u6dfb\u52a0\u96c6\u7fa4'\u3002"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"API Host, \u4f7f\u7528\u5b89\u88c5\u65f6\u914d\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hostK8sApiWithOidc")," \u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"API Token, \u4f7f\u7528\u6b65\u9aa4 4 \u4e2d\u4fdd\u5b58\u7684 token  ."))),(0,l.kt)("p",null,"\u73b0\u5728\u901a\u8fc7\u670d\u52a1\u95e8\u6237\uff0c\u5df2\u7ecf\u5c06\u5f53\u524d\u7684\u90e8\u7f72\u96c6\u7fa4\u8fdb\u884c\u4e86\u7eb3\u7ba1\uff1b\u540c\u65f6\uff0c\u5728\u201c\u79df\u6237\u7ba1\u7406\u201d\u4e2d\uff0c\u4f1a\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u7cfb\u7edf\u79df\u6237\uff0c\u540d\u79f0\u4e3a'system-tenant'."),(0,l.kt)("h3",{id:"\u5378\u8f7d-1"},"\u5378\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm uninstall cluster-comoponent -n u4a-system\nhelm uninstall u4a-component -n u4a-system\nkubectl delete ns u4a-system\n")))}u.isMDXComponent=!0},151:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/5e2e1023efba5f947965f4e079471928781ee74cff236bb0872267d111237626-19731abc49d36fd59cc95fb6af885d3a.png"}}]);