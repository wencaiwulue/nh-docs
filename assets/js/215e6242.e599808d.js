(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4412],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(944),i=n(6010),a="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=(0,o.Z)(),y=m.tabGroupChoices,v=m.setTabGroupChoices,g=(0,r.useState)(s),h=g[0],b=g[1],k=r.Children.toArray(e.children),N=[];if(null!=d){var w=y[d];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&b(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,o,i,a,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,c=a.innerHeight,u=a.innerWidth,n>=0&&i<=u&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8610:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=(n(1395),n(8215),n(4996)),l=["components"],c={},u="Deploy by IDE Plugin",s={unversionedId:"guides/deploy/deploy-by-plugin",id:"guides/deploy/deploy-by-plugin",isDocsHomePage:!1,title:"Deploy by IDE Plugin",description:"You need to have application configuration in your .nocalhost folder in your application source code directory. Refer to Nocalhost Configuration to",source:"@site/docs/guides/deploy/deploy-by-plugin.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploy-by-plugin",permalink:"/nh-docs/docs/guides/deploy/deploy-by-plugin",editUrl:"https://github.com/neaped/nocal-docs-docusaurus/tree/dev/docs/guides/deploy/deploy-by-plugin.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1627383803,formattedLastUpdatedAt:"7/27/2021",frontMatter:{},sidebar:"docs",previous:{title:"Manger Cluster",permalink:"/nh-docs/docs/guides/manage-cluster"},next:{title:"Deploy from Helm",permalink:"/nh-docs/docs/guides/deploy/deploy-from-helm"}},p=[{value:"Select the Installation Source",id:"select-the-installation-source",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-by-ide-plugin"},"Deploy by IDE Plugin"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Configuration Needed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to have application configuration in your ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost")," folder in your application source code directory. Refer to ",(0,i.kt)("a",{parentName:"p",href:"../nocalhost-config"},"Nocalhost Configuration")," to "))),(0,i.kt)("h2",{id:"select-the-installation-source"},"Select the Installation Source"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select any namespace"),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("img",{src:(0,a.Z)("/img/icons/install-app-icon.jpg"),width:"20"})," icon to deploy application"),(0,i.kt)("li",{parentName:"ol"},"Choose the installation source")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/plugin/vs-install-app.png")}),(0,i.kt)("figcaption",null,"Select the installation source")),(0,i.kt)("p",null,"Nocalhost supports to "),(0,i.kt)("p",null,"When you deploy an application by Nocalhost IDE plugin, Nocalhost will analyze the deployment configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost")," folder in your application directory, looking for clues on how to deploy your application."))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);