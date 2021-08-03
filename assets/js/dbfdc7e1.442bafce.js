"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3504],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(d,r(r({ref:t},s),{},{components:n})):a.createElement(d,r({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],l={title:"Basic"},p="Deployments",c={unversionedId:"config/config-deploy",id:"config/config-deploy",isDocsHomePage:!1,title:"Basic",description:"Application deployments are configured within the application section of the .nocalhost/config.yaml",source:"@site/docs/config/config-deploy.md",sourceDirName:"config",slug:"/config/config-deploy",permalink:"/nh-docs/docs/config/config-deploy",editUrl:"https://github.com/neaped/nocal-docs-docusaurus/tree/dev/docs/config/config-deploy.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1627972766,formattedLastUpdatedAt:"8/3/2021",frontMatter:{title:"Basic"},sidebar:"docs",previous:{title:"Config Reference",permalink:"/nh-docs/docs/config/config-ref"},next:{title:"helm",permalink:"/nh-docs/docs/config/config-deploy-helm"}},s=[{value:"Configure Application Name",id:"configure-application-name",children:[]},{value:"Configure Application Type",id:"configure-application-type",children:[]},{value:"Configure Application Source Path",id:"configure-application-source-path",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployments"},"Deployments"),(0,o.kt)("p",null,"Application deployments are configured within the ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},".nocalhost/config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"application:                    # struct    | required | Specify application configuration\n    name: foo-app               # string    | required | Application name\n    manifestType: rawManifest   # srting    | required | Application k8s manifest type\n    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo\n    resourcePath: []            # string[]  | required | Set the application resource path\n    ignoredPath: []             # string[]  | optional | \n    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.\n    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml\n")),(0,o.kt)("h2",{id:"configure-application-name"},"Configure Application Name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: foo-app\n")),(0,o.kt)("h2",{id:"configure-application-type"},"Configure Application Type"),(0,o.kt)("p",null,"Nocalhost will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifestType")," property to deploy and upgrade applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default Value:")," null"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supports Types:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmGit")," - Helm application in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmRepo")," - Helm application in Helm repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmLocal")," - Helm application in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifest")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestLocal")," - Application with manifest yaml config in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeGit")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeLocal")," - Application with manifest yaml config in local directory")),(0,o.kt)("h2",{id:"configure-application-source-path"},"Configure Application Source Path"),(0,o.kt)("p",null,"Set application source path, all files in this path will be sync to remote container in development mode. This property corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"manifestType"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default Value:")," ",'["."]'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configs corresponds to ",(0,o.kt)("inlineCode",{parentName:"strong"},"manifestType"),":")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmGit:")," chart path: relative path of git repo root."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmLocal:")," chart path: relative path of local helm chart path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmRepo:")," no meaning"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifest:")," manifest files path: multi relative paths of git repo root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestLocal:")," manifest files path: multi relative paths of local application path"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeGit:")," kustomize file path: relative path of git repo"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeLocal:")," kustomize file path: multi relative paths of local application path")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the source path configuration for application level,"),(0,o.kt)("h3",{parentName:"div",id:"applicationignoredpath"},(0,o.kt)("inlineCode",{parentName:"h3"},"application[*].ignoredPath")),(0,o.kt)("h3",{parentName:"div",id:"applicationonpreinstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"application[*].onPreInstall")),(0,o.kt)("p",{parentName:"div"},"Before installing the application, Nocalhost will execute several jobs as stated below, and wait for the completion of the job execution before installing the application."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"onPreInstall:\n    - path: ...\n    - path: ...\n")),(0,o.kt)("h4",{parentName:"div",id:"applicationonpreinstallpath"},(0,o.kt)("inlineCode",{parentName:"h4"},"application[*].onPreInstall.path")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'path: "job-1.yaml"\n    name: xxx-job\n    priority: 5\n')))))}u.isMDXComponent=!0}}]);