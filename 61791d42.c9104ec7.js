(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{189:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(9),o=(t(0),t(276)),i={id:"for-path",title:"ForPath",sidebar_label:"ForPath"},p={id:"version-5.0.12/usages/mapping-configuration/reverse-map/for-path",title:"ForPath",description:"`forPath()` acts exactly the same as `forMember()` except for `forPath()` will operate on the `Source` properties while `forMember()` operates on the `Destination` properties.",source:"@site/versioned_docs/version-5.0.12/usages/mapping-configuration/reverse-map/for-path.md",permalink:"/docs/5.0.12/usages/mapping-configuration/reverse-map/for-path",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.0.12/usages/mapping-configuration/reverse-map/for-path.md",version:"5.0.12",sidebar_label:"ForPath",sidebar:"version-5.0.12/docs",previous:{title:"Reverse Map",permalink:"/docs/5.0.12/usages/mapping-configuration/reverse-map/basic"},next:{title:"Nested Model",permalink:"/docs/5.0.12/usages/features/nested-model"}},c=[],s={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"forPath()")," acts exactly the same as ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," except for ",Object(o.b)("inlineCode",{parentName:"p"},"forPath()")," will operate on the ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," properties while ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," operates on the ",Object(o.b)("inlineCode",{parentName:"p"},"Destination")," properties."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination)\n  .forMember(dest => dest.destMember, ...)\n  .reverseMap()\n  .forPath(src => src.srcMember, ...);\n")))}u.isMDXComponent=!0},276:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p({},r,{},e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||f[m]||o;return t?a.a.createElement(b,p({ref:r},s,{components:t})):a.a.createElement(b,p({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);