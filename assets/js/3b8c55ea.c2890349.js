"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return l}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(2263),l=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,o=void 0!==i&&i,s=r.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(944),r=n(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=(0,l.Z)(),g=f.tabGroupChoices,k=f.setTabGroupChoices,h=(0,a.useState)(c),v=h[0],b=h[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=g[d];null!=w&&w!==v&&m.some((function(e){return e.value===w}))&&b(w)}var I=function(e){var t=e.currentTarget,n=N.indexOf(t),a=m[n].value;b(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,l,r,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&r<=u&&l<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var l=N.indexOf(e.target)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:I,onClick:I},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){var a=n(7294),l=n(9443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i=n(1395),o=n(8215),s=n(4996),u=["components"],c={},m="Install Nocalhost",d={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Install Nocalhost",description:"Install VS Code Plugin",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/nh-docs/docs/installation",editUrl:"https://github.com/neaped/nocal-docs-docusaurus/tree/dev/docs/installation.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1627378926,formattedLastUpdatedAt:"7/27/2021",frontMatter:{},sidebar:"docs",previous:{title:"Quick Start",permalink:"/nh-docs/docs/quick-start"},next:{title:"Manger Cluster",permalink:"/nh-docs/docs/guides/manage-cluster"}},p=[{value:"Install VS Code Plugin",id:"install-vs-code-plugin",children:[]},{value:"Install JetBrains Plugin",id:"install-jetbrains-plugin",children:[{value:"Windows",id:"windows",children:[]},{value:"MacOS",id:"macos",children:[]}]},{value:"Upgrade Plugin",id:"upgrade-plugin",children:[]},{value:"Uninstall Plugin",id:"uninstall-plugin",children:[]}],f={toc:p};function g(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-nocalhost"},"Install Nocalhost"),(0,r.kt)("h2",{id:"install-vs-code-plugin"},"Install VS Code Plugin"),(0,r.kt)(i.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open VS Code and go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Extensions")," by click the ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,r.kt)("li",{parentName:"ol"},"Input ",(0,r.kt)("inlineCode",{parentName:"li"},"Nocalhost")," in the search box"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Nocalhost Extension"),", and click the ",(0,r.kt)("strong",{parentName:"li"},"Install")," button.")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vscode-market.png")}),(0,r.kt)("figcaption",null,"Install from VS Code extension market"))),(0,r.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version from our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest"},"Github Repo")),(0,r.kt)("li",{parentName:"ol"},"Open VS Code and go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Extensions")," by click the ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("img",{src:(0,s.Z)("/img/icons/cluster-action-icon.jpg"),width:"20"})," on the top right of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Extension")," list, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Install from VSIX..."),", select the ",(0,r.kt)("inlineCode",{parentName:"li"},"VSIX")," downloaded above")),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vs-manual.jpg")}),(0,r.kt)("figcaption",null,"Manual installation")))),(0,r.kt)("h2",{id:"install-jetbrains-plugin"},"Install JetBrains Plugin"),(0,r.kt)(i.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'File > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'Preferences > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-market.png")}),(0,r.kt)("figcaption",null,"Install from JetBrains extension market"))),(0,r.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version from our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest"},"Github Repo")),(0,r.kt)("li",{parentName:"ol"},"Install plugin: ",(0,r.kt)("kbd",null,"Preferences")," > ",(0,r.kt)("kbd",null,"Plugins")," > ",(0,r.kt)("kbd",null,"Install from disk... "))),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-manual.jpg")}),(0,r.kt)("figcaption",null,"Manual installation")))),(0,r.kt)("h2",{id:"upgrade-plugin"},"Upgrade Plugin"),(0,r.kt)("p",null,"Nocalhost will automatically check and install the latest updates when IDE starts."),(0,r.kt)("h2",{id:"uninstall-plugin"},"Uninstall Plugin"),(0,r.kt)("p",null,"You can fully uninstall Nocalhost plugin in IDE by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Uninstall Nocalhost IDE plugin in your IDE"),(0,r.kt)("li",{parentName:"ol"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},".nh")," folder in your root directory")),(0,r.kt)(i.Z,{defaultValue:"mac",values:[{label:"Mac & Linux",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".nh")," folder is in your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/")," directory, you can remove it by the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf .nh\n"))),(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".nh")," folder is in your ",(0,r.kt)("inlineCode",{parentName:"p"},"<ROOT PATH>/User/username/")," directory, you can just delete it."))))}g.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);