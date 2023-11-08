"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6287],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var m=a.createContext({}),o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,m=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),k=o(t),N=p,u=k["".concat(m,".").concat(N)]||k[N]||d[N]||i;return t?a.createElement(u,l(l({ref:n},s),{},{components:t})):a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,l=new Array(i);l[0]=N;var r={};for(var m in n)hasOwnProperty.call(n,m)&&(r[m]=n[m]);r.originalType=e,r[k]="string"==typeof e?e:p,l[1]=r;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},7631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=t(7462),p=(t(7294),t(3905));const i={sidebar_position:3},l="\u7ec4\u4ef6\u90e8\u7f72",r={unversionedId:"core/concepts/componentplan",id:"core/concepts/componentplan",title:"\u7ec4\u4ef6\u90e8\u7f72",description:"ComponentPlan \u4f1a\u5b89\u88c5\u4e00\u4e2a\u7ec4\u4ef6\u5230\u96c6\u7fa4\uff0c\u7c7b\u4f3c\u6267\u884c\u4e00\u6b21 helm install/upgrade \u64cd\u4f5c\uff0c\u53ea\u4e0d\u8fc7\u5c06 helm install/upgrade \u547d\u4ee4\u4e2d\u7684\u53c2\u6570\u56fa\u5316\u5230 ComponentPlan \u7684 spec",source:"@site/docs/core/concepts/componentplan.md",sourceDirName:"core/concepts",slug:"/core/concepts/componentplan",permalink:"/website/docs/core/concepts/componentplan",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6",permalink:"/website/docs/core/concepts/component"},next:{title:"\u7ec4\u4ef6\u8ba2\u9605",permalink:"/website/docs/core/concepts/subscription"}},m={},o=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"CRD \u5b9a\u4e49\u8bf4\u660e",id:"crd-\u5b9a\u4e49\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u72b6\u6001\u63cf\u8ff0",id:"\u72b6\u6001\u63cf\u8ff0",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u955c\u50cf\u8986\u76d6\u7b56\u7565",id:"\u955c\u50cf\u8986\u76d6\u7b56\u7565",level:3},{value:"ComponentPlan \u548c Helm release \u7684\u5173\u7cfb",id:"componentplan-\u548c-helm-release-\u7684\u5173\u7cfb",level:3}],s={toc:o},k="wrapper";function d(e){let{components:n,...i}=e;return(0,p.kt)(k,(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u7ec4\u4ef6\u90e8\u7f72"},"\u7ec4\u4ef6\u90e8\u7f72"),(0,p.kt)("p",null,"ComponentPlan \u4f1a\u5b89\u88c5\u4e00\u4e2a\u7ec4\u4ef6\u5230\u96c6\u7fa4\uff0c\u7c7b\u4f3c\u6267\u884c\u4e00\u6b21 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade")," \u64cd\u4f5c\uff0c\u53ea\u4e0d\u8fc7\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade")," \u547d\u4ee4\u4e2d\u7684\u53c2\u6570\u56fa\u5316\u5230 ComponentPlan \u7684 spec\n\u5b57\u6bb5\u4e2d\uff0c\u5c06\u6d89\u53ca\u5230\u7684 docker \u955c\u50cf\u4ee5\u53ca\u5b89\u88c5\u540e\u96c6\u7fa4\u5bf9\u8c61\u548c\u73b0\u6709\u5bf9\u8c61\u7684 diff \u663e\u793a\u5728 status \u5b57\u6bb5\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u8bbe\u7f6e\u5931\u8d25\u540e\u81ea\u52a8\u91cd\u8bd5\u7684\u6b21\u6570\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,p.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a ComponentPlan \u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: ComponentPlan\nmetadata:\n# labels:\n#   core.kubebb.k8s.com.cn/componentplan-release: nginx\n  name: nginx-15.0.2\n  namespace: kubebb-system\nspec:\n  approved: true\n  component:\n    name: repository-bitnami-sample.nginx\n    namespace: kubebb-system\n  name: my-nginx\n  override:\n    images:\n      - name: docker.io/bitnami/nginx\n        newTag: latest # the default image is docker.io/bitnami/nginx:1.25.1-debian-11-r0, will be replaced by docker.io/bitnami/nginx:latest\n  version: 15.0.2\n#status:\n#  conditions:\n#    - lastTransitionTime: "2023-06-21T03:44:31Z"\n#      reason: ""\n#      status: "True"\n#      type: Approved\n#    - lastTransitionTime: "2023-06-21T03:44:37Z"\n#      reason: ""\n#      status: "True"\n#      type: Installed\n#    - lastTransitionTime: "2023-06-21T03:44:37Z"\n#      reason: ""\n#      status: "True"\n#      type: Succeeded\n#  images:\n#    - docker.io/bitnami/nginx:latest\n#  installedRevision: 3\n#  latest: true\n#  observedGeneration: 5\n#  resources:\n#    - NewCreated: true\n#      apiVersion: v1\n#      kind: Service\n#      name: my-nginx\n#    - NewCreated: true\n#      apiVersion: apps/v1\n#      kind: Deployment\n#      name: my-nginx\n')),(0,p.kt)("p",null,"\u4e0a\u8ff0 ComponentPlan \u5b9a\u4e49\u4e86\u5b89\u88c5\u7684\u7ec4\u4ef6\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"kubebb-system")," \u547d\u540d\u7a7a\u95f4\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"repository-bitnami-sample.nginx"),"\u3002\n\u5b89\u88c5\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"my-nginx"),"\uff0c\u5b89\u88c5\u7248\u672c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"15.0.2"),"\u3002\n\u540c\u65f6\u5728\u5b89\u88c5\u65f6\uff0c\u5c06\u955c\u50cf ",(0,p.kt)("inlineCode",{parentName:"p"},"docker.io/bitnami/nginx")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u66ff\u6362\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"latest"),"\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u524d\u7ec4\u4ef6\u6d89\u53ca\u7684\u955c\u50cf\u4ee5\u53ca\u8d44\u6e90\u3002\u5176\u4e2d\u8d44\u6e90\u4f1a\u6807\u660e\u662f\u65b0\u521b\u5efa\u8fd8\u662f\u66f4\u65b0\u73b0\u6709\u8d44\u6e90\uff0c\u4e00\u4e2a\u66f4\u65b0\u73b0\u6709\u8d44\u6e90\u7684\u4f8b\u5b50\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiVersion: v1\n  kind: Service\n  name: my-wordpress\n  specDiffwithExist: no spec diff, but some field like resourceVersion will update\n- apiVersion: apps/v1\n  kind: Deployment\n  name: my-wordpress\n  specDiffwithExist: |\n    metadata:\n      annotations: map[deployment.kubernetes.io/revision:2] -> <empty> (REMOVED)\n    spec:\n      replicas: 3 -> 1\n      template:\n        spec:\n          containers:\n            '[#0]':\n              image: docker.io/bitnami/wordpress:6.2.2-debian-11-r9 -> docker.io/bitnami/wordpress:6.2.2-debian-11-r11\n              resources:\n                requests:\n                  cpu: 400m -> 300m\n                  memory: 1Gi -> 512Mi\n")),(0,p.kt)("h2",{id:"crd-\u5b9a\u4e49\u8bf4\u660e"},"CRD \u5b9a\u4e49\u8bf4\u660e"),(0,p.kt)("p",null,"CRD \u7684\u4ee3\u7801\u5b9a\u4e49\u4f4d\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/kubebb/core/blob/main/api/v1alpha1/componentplan_types.go"},"componentplan_types.go"),"\u3002\u63a5\u4e0b\u6765\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ca\u5176\u4f5c\u7528\u3002"),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u8bf4\u660e\uff1a\u5bf9\u4e8e\u4e0b\u9762\u7684 yaml\uff0c\u6211\u4eec\u60f3\u8981\u8bbf\u95ee bar \u5b57\u6bb5\uff0c\u4e66\u5199\u683c\u5f0f\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.foo.bar")),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  foo:\n    bar: xx\n"))),(0,p.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,p.kt)("p",null,"ComponentPlan \u7684\u53ef\u9009\u914d\u7f6e\u5339\u914d\u4e86 helm install / upgrade / uninstall \u7684\u53ef\u9009\u53c2\u6570\uff0c\u6709\u4e00\u4e9b\u53c2\u6570 ComponentPlan \u5e76\u4e0d\u652f\u6301:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--create-namespace")," \u53c2\u6570\u4e0d\u652f\u6301\uff0chelm release \u4f1a\u521b\u5efa\u5728 ComponentPlan \u7684\u540c\u540d namespace \u4e2d\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--dry-run")," \u53c2\u6570\u4e0d\u652f\u6301\uff0c\u4e0d\u9700\u8981\u6a21\u62df\uff0c\u6a21\u62df\u8fd0\u884c\u7684\u7ed3\u679c\u4f1a\u51fa\u73b0\u5728 ComponentPlan \u7684 status \u5b57\u6bb5\u4e2d\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--replace")," \u53c2\u6570\u4e0d\u652f\u6301\uff0chelm \u6807\u8bb0\u8be5\u53c2\u6570\u4e0d\u5e94\u8be5\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--render-subchart-notes")," \u53c2\u6570\u4e0d\u652f\u6301\uff0c\u6211\u4eec\u4e0d\u5c55\u793a notes \u4fe1\u606f\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--devel")," \u53c2\u6570\u4e0d\u652f\u6301\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"devel")," \u7248\u672c\uff0c",(0,p.kt)("inlineCode",{parentName:"li"},"spec.version")," \u5b57\u6bb5\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"li"},">0.0.0-0")," \u5373\u53ef\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--nameTemplate")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"--generateName")," \u53c2\u6570\u4e0d\u652f\u6301\uff0c\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u5728\u591a\u6b21\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u751f\u6210\u4e0d\u786e\u5b9a\u7684\u7ed3\u679c\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"spec.name")," \u6765\u751f\u6210\u56fa\u5b9a\u7684\u540d\u79f0\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--reset-values")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"--reuse-values")," \u53c2\u6570\u4e0d\u652f\u6301\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"spec.override.values")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"spec.override.valuesFrom")," \u6765\u91cd\u5199\u914d\u7f6e\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u8ba4\u8bc1\u53c2\u6570\u6bd4\u5982 ",(0,p.kt)("inlineCode",{parentName:"li"},"--username"),"\uff0c\u9700\u8981\u5728 Repository \u4e2d\u6307\u5b9a\u3002")),(0,p.kt)("p",null,"\u5176\u4ed6\u914d\u7f6e\u4e3a\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.componet")),(0,p.kt)("p",{parentName:"li"},"\u8be5\u5b57\u6bb5\u7528\u6765\u6307\u660e\u8981\u76d1\u63a7\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4e00\u822c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," \u6765\u552f\u4e00\u786e\u5b9a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.version")),(0,p.kt)("p",{parentName:"li"},"\u9700\u8981\u5b89\u88c5\u7684\u7ec4\u4ef6\u7248\u672c\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.approved")),(0,p.kt)("p",{parentName:"li"},"\u662f\u5426\u540c\u610f\u5b89\u88c5\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"bool")," \u7c7b\u578b\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5f53\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u5b89\u88c5\u6d41\u7a0b\u3002\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c\u53ea\u4f1a\u89e3\u6790\u8fd9\u4e2a\u7ec4\u4ef6\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"manifest"),"\uff0c\u5e76\u586b\u5145 ",(0,p.kt)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5\uff0c\u65b9\u4fbf\u7528\u6237\u5224\u65ad\u8fd9\u6b21\u5b89\u88c5\u4f1a\u5bf9\u96c6\u7fa4\u4e2d\u73b0\u6709\u8d44\u6e90\u5e26\u6765\u7684\u5f71\u54cd\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.name")),(0,p.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d\u7684\u540d\u79f0\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm release")," \u7684\u540d\u79f0")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.force")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u66f4\u65b0\u65f6\u901a\u8fc7\u66ff\u6362\u7b56\u7565\u5f3a\u5236\u66f4\u65b0\u8d44\u6e90, \u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm upgrade --force")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.timeoutSeconds")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u6574\u6570\u503c\uff0c\u521b\u5efa/\u66f4\u65b0/\u5220\u9664\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"300"),"\uff0c\u5373 5 \u5206\u949f\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --timeout")," \u53c2\u6570")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.wait")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5c06\u7b49\u5f85\u6240\u6709\u7684 Pod\u3001PVC\u3001Service \u548c Deployment\u3001StatefulSet \u6216 ReplicaSet \u7684\u6700\u5c0f\u6570\u91cf\u7684 Pod \u5904\u4e8e\u5c31\u7eea\u72b6\u6001\u624d\u8ba4\u4e3a\u5b89\u88c5/\u66f4\u65b0\u6210\u529f\u3002\u7b49\u5f85\u7684\u65f6\u95f4\u5373\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.timeoutSeconds")," \u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --wait")," \u53c2\u6570\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.waitForJobs")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5c06\u7b49\u5f85\u6240\u6709\u7684 Job \u5b8c\u6210\u624d\u8ba4\u4e3a\u5b89\u88c5/\u66f4\u65b0\u6210\u529f\u3002\u7b49\u5f85\u7684\u65f6\u95f4\u5373\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.timeoutSeconds")," \u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --wait-for-jobs")," \u53c2\u6570\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.description")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u7ed9\u5b89\u88c5/\u66f4\u65b0\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63cf\u8ff0\u3002\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --description")," \u53c2\u6570\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.dependencyUpdate")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5728\u5b89\u88c5/\u66f4\u65b0\u7ec4\u4ef6\u524d\uff0c\u662f\u5426\u66f4\u65b0\u7f3a\u5c11\u7684\u4f9d\u8d56\u9879\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --dependency-update")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.disableHooks")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u963b\u6b62 Hook \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u8fd0\u884c\uff0c\u5e76\u7981\u7528\u5347\u7ea7\u524d/\u540e Hook\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --no-hooks")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.disableOpenAPIValidation")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5b89\u88c5\u8fc7\u7a0b\u5c06\u4e0d\u4f1a\u6839\u636e Kubernetes OpenAPI Schema \u9a8c\u8bc1\u6e32\u67d3\u7684\u6a21\u677f\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --disable-openapi-validation")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.atomic")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5b89\u88c5/\u66f4\u65b0\u8fc7\u7a0b\u4f1a\u5728\u5b89\u88c5/\u66f4\u65b0\u5931\u8d25\u65f6\u5220\u9664\u5b89\u88c5\u3002\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.atomic")," \u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5c06\u81ea\u52a8\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.wait")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --atomic")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.skipCRDs")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u8df3\u8fc7 CRD \u7684\u5b89\u88c5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5c1a\u672a\u5b89\u88c5 CRD\uff0c\u4f1a\u81ea\u52a8\u5b89\u88c5\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --skip-crds")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.enableDNS")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5728\u6e32\u67d3\u6a21\u677f\u65f6\u662f\u5426\u542f\u7528 DNS \u67e5\u8be2\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install/upgrade --enable-dns")," \u53c2\u6570 \u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.historyMax")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u6574\u6570\u503c\uff0c\u9650\u5236\u6bcf\u4e2a release \u4fdd\u5b58\u7684\u6700\u5927 revisions \u6570\u76ee\u3002\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," \u8868\u793a\u65e0\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"10"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.maxRetry")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u6574\u6570\u503c\uff0c\u521b\u5efa/\u66f4\u65b0\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"5"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.cleanupOnFail")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5f53\u5347\u7ea7\u5931\u8d25\u65f6\uff0c\u5141\u8bb8\u5220\u9664\u5728\u6b64\u5347\u7ea7\u4e2d\u521b\u5efa\u7684\u65b0\u8d44\u6e90\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm upgrade --cleanup-on-fail")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.keepHistory")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u5378\u8f7d\u65f6\uff0c\u5220\u9664\u6240\u6709\u76f8\u5173\u8d44\u6e90\uff0c\u5e76\u5c06\u53d1\u5e03\u6807\u8bb0\u4e3a\u5df2\u5220\u9664\uff0c\u4f46\u4fdd\u7559\u53d1\u5e03\u5386\u53f2\u3002\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm uninstall --keep-history")," \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override")," ",(0,p.kt)("em",{parentName:"p"},"\u53ef\u9009\u5b57\u6bb5")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e8e\u8986\u76d6\u539f\u7ec4\u4ef6\u914d\u7f6e\u7684\u5b57\u6bb5\u3002"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.values")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"JSON")," \u683c\u5f0f\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"values"),"\uff0c\u7528\u4e8e\u8986\u76d6\u9ed8\u8ba4\u503c")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.valuesFrom")),(0,p.kt)("p",{parentName:"li"},"\u5b57\u6bb5\u4e3a\u6570\u7ec4\u3002\u5f53\u8981\u8bbe\u5b9a\u7684\u5b57\u6bb5\u504f\u591a\u65f6\uff0c\u6211\u4eec\u4e00\u822c\u5e0c\u671b\u628a ",(0,p.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u5355\u72ec\u62ff\u51fa\u6765\uff0c\u653e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"Secret")," \u4e2d\uff0c\u800c\u4e14\u6211\u4eec\u53ef\u80fd\u4f1a\u6709\u5f88\u591a ",(0,p.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u6587\u4ef6\u3002\u5177\u4f53\u683c\u5f0f\u4e3a\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.valuesFrom[].kind")),(0,p.kt)("p",{parentName:"li"},"\u53ef\u9009\u9879\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"Secret")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"ConfigMap"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.valuesFrom[].name")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Secret")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u7684\u540d\u79f0\uff0c\u4e0d\u9700\u8981 ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace")," \u5b57\u6bb5\uff0c\u56e0\u4e3a\u53ea\u4f1a\u67e5\u627e\u548c\u5f53\u524d ComponentPlan \u540c ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace")," \u7684\u8d44\u6e90\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.valuesFrom[].valuesKey")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Secret")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"data")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u4f1a\u5c1d\u8bd5\u5148\u540e\u67e5\u8be2 ",(0,p.kt)("inlineCode",{parentName:"p"},"ConfigMap")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Data")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"BinaryData")," \u5b57\u6bb5\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Secret")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"StringData")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Data")," \u5b57\u6bb5\u3002")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.set")),(0,p.kt)("p",{parentName:"li"},"\u6570\u7ec4\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm template --set")," \u7684\u53c2\u6570")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.set-string")),(0,p.kt)("p",{parentName:"li"},"\u6570\u7ec4\uff0c\u7c7b\u4f3c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm template --set-string")," \u7684\u53c2\u6570")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.images")),(0,p.kt)("p",{parentName:"li"},"\u6570\u7ec4\u3002\u7c7b\u4f3c ",(0,p.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/references/kustomize/builtins/#_imagetagtransformer_"},(0,p.kt)("inlineCode",{parentName:"a"},"kustomize")," \u7684\u955c\u50cf\u81ea\u5b9a\u4e49\u53c2\u6570")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.images[].name")),(0,p.kt)("p",{parentName:"li"},"\u539f\u59cb\u955c\u50cf\u540d\u79f0\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u53ef\u9009\uff0c\u5982\u679c\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"p"},"tag"),"\uff0c\u5219\u5339\u914d\u7cbe\u786e\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u4e00\u81f4\u624d\u66ff\u6362\uff0c\u6bd4\u5982\uff0c\u5982\u679c\u8be5\u9879\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"docker.io/bitnami/nginx:v1"),"\uff0c\u90a3\u4e48\u53ea\u5339\u914d tag \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"v1")," \u7684 nginx \u955c\u50cf\uff0c\u5982\u679c\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"docker.io/bitnami/nginx:v2")," \u4e0d\u4f1a\u88ab\u66ff\u6362\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.images[].newName")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u4ee3\u539f\u59cb\u955c\u50cf\u540d\u79f0\u7684\u540d\u79f0")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.images[].newTag")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u4ee3\u539f\u59cb ",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u7684\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u540d\u79f0")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"spec.override.images[].digest")),(0,p.kt)("p",{parentName:"li"},"\u66ff\u4ee3\u539f\u59cb ",(0,p.kt)("inlineCode",{parentName:"p"},"tag")," \u7684\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"digest"),"\uff0c\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},"digest")," \u6709\u503c\uff0c\u4f1a\u5ffd\u7565 ",(0,p.kt)("inlineCode",{parentName:"p"},"newTag")," \u7684\u503c\u3002"))))))),(0,p.kt)("h3",{id:"\u72b6\u6001\u63cf\u8ff0"},"\u72b6\u6001\u63cf\u8ff0"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684 ComponentPlan \u72b6\u6001\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  conditions:\n    - lastTransitionTime: "2023-07-25T12:22:12Z"\n      reason: ""\n      status: "True"\n      type: Approved\n    - lastTransitionTime: "2023-07-25T12:25:00Z"\n      message: timed out waiting for the condition\n      reason: UpgradeFailed\n      status: "False"\n      type: Actioned\n    - lastTransitionTime: "2023-07-25T12:25:00Z"\n      reason: ""\n      status: "False"\n      type: Succeeded\n  images:\n    - docker.io/bitnami/nginx:xxxxx\n  installedRevision: 4\n  latest: true\n  observedGeneration: 1\n  resources:\n    - NewCreated: true\n      apiVersion: v1\n      kind: Service\n      name: my-nginx\n    - NewCreated: true\n      apiVersion: apps/v1\n      kind: Deployment\n      name: my-nginx\n')),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions")),(0,p.kt)("p",{parentName:"li"},"\u6570\u7ec4\uff0cComponentPlan \u7684\u72b6\u6001"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions[].lastTransitionTime")),(0,p.kt)("p",{parentName:"li"},"\u4e0a\u6b21\u4ece\u4e00\u79cd\u72b6\u6001\u8f6c\u6362\u5230\u53e6\u4e00\u79cd\u72b6\u6001\u65f6\u7684\u65f6\u95f4\u6233")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions[].reason")),(0,p.kt)("p",{parentName:"li"},"\u673a\u5668\u53ef\u8bfb\u7684\u3001\u9a7c\u5cf0\u7f16\u7801\uff08UpperCamelCase\uff09\u7684\u6587\u5b57\uff0c\u8868\u8ff0\u4e0a\u6b21\u72b6\u51b5\u53d8\u5316\u7684\u539f\u56e0")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions[].message")),(0,p.kt)("p",{parentName:"li"},"\u4eba\u7c7b\u53ef\u8bfb\u7684\u6d88\u606f\uff0c\u7ed9\u51fa\u4e0a\u6b21\u72b6\u6001\u8f6c\u6362\u7684\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions[].status")),(0,p.kt)("p",{parentName:"li"},"\u8868\u660e\u8be5\u72b6\u51b5\u662f\u5426\u9002\u7528\uff0c\u53ef\u80fd\u7684\u53d6\u503c\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},'True"'),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"False")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"Unknown"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.conditions[].type")),(0,p.kt)("p",{parentName:"li"},"\u72b6\u51b5\u7684\u540d\u79f0"),(0,p.kt)("p",{parentName:"li"},"\u53ef\u80fd\u5305\u542b\u4ee5\u4e0b\u72b6\u6001\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Approved")),(0,p.kt)("p",{parentName:"li"},"\u7528\u6237\u5df2\u7ecf\u540c\u610f\u8be5\u7ec4\u4ef6\u5b89\u88c5\u8ba1\u5212\uff08ComponentPlan\uff09\u7684\u5b89\u88c5")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Actioned")),(0,p.kt)("p",{parentName:"li"},"\u67d0\u4e2a\u64cd\u4f5c\u5df2\u7ecf\u5b8c\u6210")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Succeeded")),(0,p.kt)("p",{parentName:"li"},"\u7528\u6237\u671f\u5f85\u7684\u64cd\u4f5c\u5df2\u7ecf\u5168\u90e8\u5b8c\u6210")))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.images")),(0,p.kt)("p",{parentName:"li"},"\u8be5 ComponentPlan \u4f1a\u5f15\u5165\u7684\u955c\u50cf\u5217\u8868")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.installedRevision")),(0,p.kt)("p",{parentName:"li"},"\u8be5 ComponentPlan \u5b89\u88c5\u7684 helm release revision \u7248\u672c\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.latest")),(0,p.kt)("p",{parentName:"li"},"helm release \u7684\u6700\u65b0\u7248\u672c\u662f\u5426\u662f\u8be5 ComponentPlan \u5b89\u88c5\u7684\u3002\u652f\u6301\u591a\u4e2a ComponentPlan \u6309\u90e8\u7f72\u65f6\u95f4\u5b89\u88c5/\u5347\u7ea7\u540c\u4e00\u4e2a helm release\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.observedGeneration")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e8e\u7a0b\u5e8f\u5185\u90e8\u5904\u7406\u3002\u8868\u793a\u8be5 ComponentPlan \u57fa\u4e8e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".metadata.generation")," \u7684\u8fc7\u671f\u6b21\u6570\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},".metadata.generation")," \u5f53\u524d\u4e3a 12\uff0c\u4f46 ",(0,p.kt)("inlineCode",{parentName:"p"},".status.observedGeneration")," \u4e3a 9\uff0c \u5219\u76f8\u5bf9\u4e8e\u5b9e\u4f8b\u7684\u5f53\u524d\u72b6\u6001\u5df2\u8fc7\u671f\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources")),(0,p.kt)("p",{parentName:"li"},"\u6570\u7ec4\uff0cComponentPlan \u6d89\u53ca\u7684\u8d44\u6e90"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources[].specDiffwithExist")),(0,p.kt)("p",{parentName:"li"},"\u5c55\u793a\u8be5\u8d44\u6e90\u7684 manifest \u5728\u8be5 ComponentPlan \u5e94\u7528\u524d\u540e\u7684\u5bf9\u6bd4")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources[].NewCreated")),(0,p.kt)("p",{parentName:"li"},"\u5e03\u5c14\u503c\uff0c\u8be5\u8d44\u6e90\u662f\u5426\u662f\u65b0\u521b\u5efa\u7684")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources[].kind")),(0,p.kt)("p",{parentName:"li"},"\u8be5\u8d44\u6e90\u7684\u7c7b\u578b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources[].name")),(0,p.kt)("p",{parentName:"li"},"\u8be5\u8d44\u6e90\u7684\u540d\u79f0")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"status.resources[].apiVersion")),(0,p.kt)("p",{parentName:"li"},"\u8be5\u8d44\u6e90\u7684 apiVersion \u4fe1\u606f"))))),(0,p.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,p.kt)("p",null,"\u7ec4\u4ef6\u5b89\u88c5\u4ee5 Kubernetes Operator \u65b9\u5f0f\u5b9e\u73b0, \u5e95\u5c42\u901a\u8fc7\u8c03\u7528 Helm Go SDK \u5b9e\u73b0\u7ec4\u4ef6\u5b89\u88c5\u3001\u5347\u7ea7\u548c\u5378\u8f7d\u3002"),(0,p.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\uff0c\u901a\u8fc7\u76d1\u6d4b\u96c6\u7fa4\u4e2d\u662f\u5426\u6709\u540c\u540d ",(0,p.kt)("inlineCode",{parentName:"p"},"helm release")," \u6765\u667a\u80fd\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u76f8\u5173\u51fd\u6570\u8fdb\u884c\u5b89\u88c5\u6216\u5347\u7ea7\u3002"),(0,p.kt)("p",null,"\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\uff0c\u4f1a\u5c06 ComponentPlan \u4e2d\u7684\u914d\u7f6e\u4f20\u9012\u7ed9\u76f8\u5173\u51fd\u6570\uff0c\u529f\u80fd\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"helm install")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u57fa\u672c\u4e00\u81f4\u3002"),(0,p.kt)("p",null,"\u5f53\u5220\u9664 ComponentPlan \u65f6\uff0c\u5224\u65ad\u5f53\u524d\u96c6\u7fa4\u4e2d\u7684\u540c\u540d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm release")," \u7684\u6700\u65b0\u7248\u672c\u662f\u5426\u7531\u5f85\u5220\u9664\u7684 ComponentPlan \u5b89\u88c5\uff0c\u5982\u679c\u662f\uff0c\u5219\u540c\u65f6\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"helm uninstall")," \u76f8\u5173\u51fd\u6570\u5220\u9664\u8be5 helm release\u3002"),(0,p.kt)("p",null,"\u4e00\u4e9b\u7ec6\u8282\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa ComponentPlan \u540e\uff0coperator \u4f1a\u5c1d\u8bd5\u81ea\u52a8\u89e3\u6790\u8be5 ComponentPlan \u4e2d\u5f15\u5165\u7684 helm release \u4f1a\u5bf9\u96c6\u7fa4\u4e2d\u73b0\u6709\u8d44\u6e90\u7684\u5f71\u54cd\uff0c\u7ed3\u679c\u4f1a\u5c55\u793a\u5728 ComponentPlan \u7684 status\n\u5b57\u6bb5\u4e2d\uff0c\u7c7b\u4f3c\u4e8e\u5148\u8fdb\u884c ",(0,p.kt)("inlineCode",{parentName:"li"},"helm install/upgrade --dry-run")," \u540e\uff0c\u5c06\u751f\u6210\u7684 manifest \u518d\u8fdb\u884c ",(0,p.kt)("inlineCode",{parentName:"li"},"kubectl diff")," \u64cd\u4f5c\uff0c"),(0,p.kt)("li",{parentName:"ol"},"\u53ea\u6709 ComponentPlan \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"li"},"spec.approved")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5bf9\u5e94\u7684 ",(0,p.kt)("inlineCode",{parentName:"li"},"helm release")," \u624d\u4f1a\u771f\u6b63\u5b89\u88c5\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5355\u4e2a ComponentPlan \u7684\u955c\u50cf\u66ff\u6362 \uff08\u5373 ",(0,p.kt)("inlineCode",{parentName:"li"},"spec.override.images"),"\n\u5b57\u6bb5\uff09\u7684\u89c4\u5219\u9075\u5faa ",(0,p.kt)("a",{parentName:"li",href:"https://kubectl.docs.kubernetes.io/references/kustomize/builtins/#_imagetagtransformer_"},"kustomize:ImageTagTransformer"),"\n\u89c4\u8303\uff0c\u4ee3\u7801\u5b9e\u73b0\u4e5f\u662f\u76f4\u63a5\u8c03\u7528\u4e86 kustomize \u7684\u8fd9\u90e8\u5206\u4ee3\u7801\uff0c\u964d\u4f4e\u4e86\u7528\u6237\u5b66\u4e60\u6210\u672c\uff0c\u4fdd\u8bc1\u4e86\u4ee3\u7801\u7684\u517c\u5bb9\u6027\u548c\u6709\u6548\u6027\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5355\u4e2a ComponentPlan \u7684\u955c\u50cf\u66ff\u6362\u548c\u6574\u4e2a Repository \u7684\u955c\u50cf\u66ff\u6362\uff0c\u90fd\u662f\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/advanced/#post-rendering"},"Helm:post-rendering")," \u6280\u672f\u5b9e\u73b0\u7684\u3002")),(0,p.kt)("h3",{id:"\u955c\u50cf\u8986\u76d6\u7b56\u7565"},"\u955c\u50cf\u8986\u76d6\u7b56\u7565"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"image-changed",src:t(64).Z,width:"1180",height:"834"})),(0,p.kt)("h3",{id:"componentplan-\u548c-helm-release-\u7684\u5173\u7cfb"},"ComponentPlan \u548c Helm release \u7684\u5173\u7cfb"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"componentplan",src:t(4825).Z,width:"4155",height:"1740"})))}d.isMDXComponent=!0},4825:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/componentplan-helm-release-48f97a6244dca22b6b69f6467ae141f3.png"},64:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-changed-6cc1cd7373beaa44065302ebf7479fc7.png"}}]);