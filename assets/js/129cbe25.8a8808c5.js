"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1452],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},s),{},{components:t})):o.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3919:function(e,n,t){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}t.d(n,{b:function(){return o},Z:function(){return r}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return i}});var o=t(2263),r=t(3919);function a(){var e=(0,o.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,l=void 0!==i&&i,c=a.absolute,p=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return p?e+s:s}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},4951:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=t(4996),l=["components"],c={},p="Configure Services",s={unversionedId:"guides/service-config",id:"guides/service-config",isDocsHomePage:!1,title:"Configure Services",description:"No Need to Configure Service unless Essential",source:"@site/docs/guides/service-config.md",sourceDirName:"guides",slug:"/guides/service-config",permalink:"/nh-docs/docs/guides/service-config",editUrl:"https://github.com/neaped/nh-docs/docs/guides/service-config.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1627378926,formattedLastUpdatedAt:"7/27/2021",frontMatter:{},sidebar:"docs",previous:{title:"Application Enhancement",permalink:"/nh-docs/docs/guides/app-enhance"},next:{title:"Configure DevContainer",permalink:"/nh-docs/docs/guides/devcontainer-config"}},d=[{value:"No Need to Configure Service unless Essential",id:"no-need-to-configure-service-unless-essential",children:[]},{value:"How to Add Service Configuration",id:"how-to-add-service-configuration",children:[]},{value:"How Service Supports DevMode",id:"how-service-supports-devmode",children:[{value:"name and serviceType",id:"name-and-servicetype",children:[]},{value:"gitUrl",id:"giturl",children:[]},{value:"image",id:"image",children:[]},{value:"workDir (Optional)",id:"workdir-optional",children:[]},{value:"sync (Optional)",id:"sync-optional",children:[]},{value:"portForward",id:"portforward",children:[]}]},{value:"Service Specify Startup Sequence Dependencies",id:"service-specify-startup-sequence-dependencies",children:[{value:"dependLabelSelector",id:"dependlabelselector",children:[]}]}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-services"},"Configure Services"),(0,a.kt)("h3",{id:"no-need-to-configure-service-unless-essential"},"No Need to Configure Service unless Essential"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Service")," does not have to be configured. If you have not modify any ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," configuration, but want to configure it before entering the DevMode, the Nocalhost IDE plugin will automatically generate a template file for you, you need to modify it and save it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select a microservice to be developed and click ",(0,a.kt)("img",{src:(0,i.Z)("/img/icons/nocalhost-config-icon.jpg"),width:"20"})," to configure")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/best/best-service-config.png")}),(0,a.kt)("figcaption",null,"Nocalhost service configuration")),(0,a.kt)("h3",{id:"how-to-add-service-configuration"},"How to Add Service Configuration"),(0,a.kt)("p",null,"There is no intrusion to user's Kubernetes manifest configuration when using Nocalhost. If you need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),", please add a ",(0,a.kt)("inlineCode",{parentName:"p"},".nocalhost/")," folder under your repository and add a ",(0,a.kt)("a",{parentName:"p",href:"../reference/nh-config"},"config.yaml")," file. Then you can make changes locally through the IDE, these changes ",(0,a.kt)("strong",{parentName:"p"},"only")," take effect ",(0,a.kt)("strong",{parentName:"p"},"locally"),"."),(0,a.kt)("p",null,"For example, our sample application ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/bookinfo"},"bookinfo")," has the following configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'- name: productpage\n  serviceType: deployment\n  dependLabelSelector: \n    jobs:\n      - "dep-job"\n  containers:\n    - name: productpage\n      install: \n        portForward:   \n          - 39080:9080\n      dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n            - ".idea"\n        portForward:\n        - 39080:9080\n')),(0,a.kt)("p",null,"When the user successfully deploys the application, Nocalhost can automatically read these default configurations and automatically apply them to the deployment and DevMode."),(0,a.kt)("h2",{id:"how-service-supports-devmode"},"How Service Supports DevMode"),(0,a.kt)("p",null,"We use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," configuration of this microservice as an example to illustrate several key configuration items that ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," supports ",(0,a.kt)("inlineCode",{parentName:"p"},"development mode"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'- name: productpage\n  serviceType: deployment\n  dependLabelSelector: \n    jobs:\n      - "dep-job"\n  containers:\n    - name: productpage\n      install: \n        portForward:   \n          - 39080:9080\n      dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage\n        shell: bash\n        workDir: /home/nocalhost-dev\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n            - ".idea"\n        portForward:\n        - 39080:9080\n')),(0,a.kt)("h3",{id:"name-and-servicetype"},"name and serviceType"),(0,a.kt)("p",null,"When you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceType")," are ",(0,a.kt)("strong",{parentName:"p"},"required items"),", used to locate a manifest, currently Nocalhost only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceType"),"."),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceType")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{2}","{2}":!0},"- name: productpage\n  serviceType: deployment\n")),(0,a.kt)("h3",{id:"giturl"},"gitUrl"),(0,a.kt)("p",null,"It is used to indicate the source code repo url corresponding to this microservice. When entering the ",(0,a.kt)("inlineCode",{parentName:"p"},"DevMode"),", you can choose to synchronize a local directory to the development container, or you can choose to pull it from a remote warehouse."),(0,a.kt)("p",null,"If you have configured ",(0,a.kt)("inlineCode",{parentName:"p"},"gitUrl")," when entering ",(0,a.kt)("inlineCode",{parentName:"p"},"DevMode"),", Nocalhost will automatically clone the codes from this ",(0,a.kt)("inlineCode",{parentName:"p"},"gitUrl")," for you. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},"containers:\n...\n    dev:\n      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git\n...\n")),(0,a.kt)("h3",{id:"image"},"image"),(0,a.kt)("p",null,"You can use your own image for the container when entering ",(0,a.kt)("inlineCode",{parentName:"p"},"DevMode"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"containers:\n...\n    dev:\n      gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git\n      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage\n...\n")),(0,a.kt)("h3",{id:"workdir-optional"},"workDir (Optional)"),(0,a.kt)("p",null,"It is used to indicate the working directory in remote container after entering the ",(0,a.kt)("inlineCode",{parentName:"p"},"DevMode")," and the directory where the synchronized files are stored. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/nocalhost-dev")," will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"containers:\n...\n    dev:\n    ...\n      workDir: /home/nocalhost-dev\n    ...\n...\n")),(0,a.kt)("h3",{id:"sync-optional"},"sync (Optional)"),(0,a.kt)("p",null,"You can select a group of configuration items, choose which folders of the source directory to synchronize to the development container, the default value is ",(0,a.kt)("inlineCode",{parentName:"p"},'"."'),". The type of file synchronization can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"sent")," one-way or ",(0,a.kt)("inlineCode",{parentName:"p"},"sendreceive")," two-way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{3}","{3}":!0},"containers:\n...\n      sync:\n        type: send\n        filePattern:\n          - ./\n        ignoreFilePattern:\n          - .git\n          - .github\n          - .idea\n...\n")),(0,a.kt)("h3",{id:"portforward"},"portForward"),(0,a.kt)("p",null,"There are two port-forward configurations"),(0,a.kt)("h4",{id:"automatically-port-forward-after-application-deployment"},"Automatically Port-Forward after Application Deployment"),(0,a.kt)("p",null,"After the application is successfully installed, Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"...\n  containers:\n    - name: productpage\n      install: \n        portForward:   \n          - 39080:9080\n")),(0,a.kt)("h4",{id:"automatically-port-forward-when-entered-devmode"},"Automatically Port-Forward when Entered DevMode"),(0,a.kt)("p",null,"After entering the DevMode,  Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},"containers:\n...\n      portForward:\n        - 39080:9080\n")),(0,a.kt)("p",null,"It is also possible to support not specifying the local port, such as ",(0,a.kt)("inlineCode",{parentName:"p"},":10000"),". Nocalhost will randomly forward the designated remote port to a local port."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),'"More Configuration Information"')),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../reference/nh-config"},"Nocalhost Configuration")," for more detailed configuration of Nocalhost."))),(0,a.kt)("h2",{id:"service-specify-startup-sequence-dependencies"},"Service Specify Startup Sequence Dependencies"),(0,a.kt)("p",null,"Nocalhost supports control startup sequence based on dependencies."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"Kubernetes version limit"')),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This feature depends on Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"admission webhooks"),", so please ensure that the minimum version of the Kubernetes cluster is v1.16.0 or Above, and make sure to enable ",(0,a.kt)("strong",{parentName:"p"},"MutatingAdmissionWebhook")," and ",(0,a.kt)("strong",{parentName:"p"},"ValidatingAdmissionWebhook")," controllers."))),(0,a.kt)("h3",{id:"dependlabelselector"},"dependLabelSelector"),(0,a.kt)("p",null,"The label selector of the workload that the service depends on. There are two configuration items here:"),(0,a.kt)("h4",{id:"pods"},"pods"),(0,a.kt)("p",null,"Specify the dependent Pods label selector (the current service will wait for the selected Pod by the label selector to be in the Ready state before starting)"),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," depends on another Pod named ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," can be configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},'- name: productpage\n  serviceType: deployment\n  dependLabelSelector: \n    pods:\n      - "name=foo"\n      - "app.kubernetes.io/name=foo"\n')),(0,a.kt)("h4",{id:"jobs"},"jobs"),(0,a.kt)("p",null,"Specify the dependent Jobs label selector (the current service will wait for the selected job by the label selector to execute before starting)"),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," depends on another job named ",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"productpage")," can be configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},'- name: productpage\n  serviceType: deployment\n  dependLabelSelector: \n    jobs:\n      - "job-name=bar"\n      - "app.kubernetes.io/name=bar"\n')))}m.isMDXComponent=!0}}]);