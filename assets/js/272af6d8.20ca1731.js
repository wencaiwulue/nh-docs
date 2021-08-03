"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[966],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,l=void 0!==i&&i,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(944),a=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,o.Z)(),y=f.tabGroupChoices,v=f.setTabGroupChoices,h=(0,r.useState)(s),g=h[0],b=h[1],k=r.Children.toArray(e.children),N=[];if(null!=d){var w=y[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&b(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,o,a,i,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},1796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return y}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(1395),l=n(8215),c=n(4996),u=["components"],s={},p="Deploy by IDE Plugin",d={unversionedId:"guides/deploy/deploy-by-ide",id:"guides/deploy/deploy-by-ide",isDocsHomePage:!1,title:"Deploy by IDE Plugin",description:"XXXX",source:"@site/docs/guides/deploy/deploy-by-ide.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploy-by-ide",permalink:"/nh-docs/docs/guides/deploy/deploy-by-ide",editUrl:"https://github.com/neaped/nocal-docs-docusaurus/tree/dev/docs/guides/deploy/deploy-by-ide.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1627972766,formattedLastUpdatedAt:"8/3/2021",frontMatter:{},sidebar:"docs",previous:{title:"Manger Cluster",permalink:"/nh-docs/docs/guides/manage-cluster"},next:{title:"Deploy from Helm",permalink:"/nh-docs/docs/guides/deploy/deploy-from-helm"}},m=[{value:"Choose Application Source Path",id:"choose-application-source-path",children:[]}],f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-by-ide-plugin"},"Deploy by IDE Plugin"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Requirements")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"XXXX"))),(0,a.kt)("p",null,"You can select the deployment method of matching type to deploy your application in Kubernetes with Nocalhost IDE plugin. Nocalhost supports to use the following types to install application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manifest"),(0,a.kt)("li",{parentName:"ul"},"Helm"),(0,a.kt)("li",{parentName:"ul"},"Kustomize")),(0,a.kt)("h2",{id:"choose-application-source-path"},"Choose Application Source Path"),(0,a.kt)(i.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select a namespace"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("img",{src:(0,c.Z)("/img/icons/install-app-icon.jpg"),width:"20"})," icon to deploy application"),(0,a.kt)("li",{parentName:"ol"},"Choose the installation source")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/vs-install-app.png")}),(0,a.kt)("figcaption",null,"Select the installation source"))),(0,a.kt)(l.Z,{value:"jet",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Right click a namespace, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Install Application")),(0,a.kt)("li",{parentName:"ol"},"Choose the installation source")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/jb-install-app.png")}),(0,a.kt)("figcaption",null,"Select the installation source")))),(0,a.kt)("p",null,"Nocalhost supports to install application from local directory, Git repository and Helm repository."),(0,a.kt)(i.Z,{defaultValue:"local",values:[{label:"From Local Directory",value:"local"},{label:"From Git Repository",value:"git"},{label:"From Helm Repository",value:"helm"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"local",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the application directory"),(0,a.kt)("li",{parentName:"ol"},"Nocalhost will analyze the deployment configuration in the ",(0,a.kt)("inlineCode",{parentName:"li"},".nocalhost")," folder in your application directory, looking for clues on how to deploy your application."))),(0,a.kt)(l.Z,{value:"git",mdxType:"TabItem"}),(0,a.kt)(l.Z,{value:"helm",mdxType:"TabItem"})))}y.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);