(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(276)),i={id:"basic",title:"Reverse Map",sidebar_label:"Basic"},p={id:"usages/mapping-configuration/reverse-map/basic",title:"Reverse Map",description:"`@nartc/automapper` supports **Reverse Mapping** by chaining `reverseMap()` after `createMap()`. This will create a reversed `Mapping` for the two models that were passed in `createMap()`",source:"@site/docs/usages/mapping-configuration/reverse-map/basic.md",permalink:"/docs/next/usages/mapping-configuration/reverse-map/basic",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/mapping-configuration/reverse-map/basic.md",version:"next",sidebar_label:"Basic",sidebar:"docs",previous:{title:"PreCondition",permalink:"/docs/next/usages/mapping-configuration/for-member/pre-condition"},next:{title:"ForPath",permalink:"/docs/next/usages/mapping-configuration/reverse-map/for-path"}},c=[],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," supports ",Object(o.b)("strong",{parentName:"p"},"Reverse Mapping")," by chaining ",Object(o.b)("inlineCode",{parentName:"p"},"reverseMap()")," after ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()"),". This will create a reversed ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," for the two models that were passed in ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination) // <-- create `Mapping<Source, Destination>`\n  .reverseMap(); // <-- create `Mapping<Destination, Source>`\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reverseMap()")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"CreateReversedMapFluentFunctions")," which will allow you to chain ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/usages/features/callbacks"}),"Callbacks")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"for-path"}),"ForPath"),"."))}u.isMDXComponent=!0},276:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(f,p({ref:t},s,{components:r})):a.a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);