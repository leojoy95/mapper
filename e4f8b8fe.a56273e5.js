(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{258:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(9),o=(t(0),t(276)),i={id:"basic",title:"Reverse Map",sidebar_label:"Basic"},p={id:"version-5.0.12/usages/mapping-configuration/reverse-map/basic",title:"Reverse Map",description:"`@nartc/automapper` supports **Reverse Mapping** by chaining `reverseMap()` after `createMap()`. This will create a reversed `Mapping` for the two models that were passed in `createMap()`",source:"@site/versioned_docs/version-5.0.12/usages/mapping-configuration/reverse-map/basic.md",permalink:"/docs/5.0.12/usages/mapping-configuration/reverse-map/basic",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.0.12/usages/mapping-configuration/reverse-map/basic.md",version:"5.0.12",sidebar_label:"Basic",sidebar:"version-5.0.12/docs",previous:{title:"PreCondition",permalink:"/docs/5.0.12/usages/mapping-configuration/for-member/pre-condition"},next:{title:"ForPath",permalink:"/docs/5.0.12/usages/mapping-configuration/reverse-map/for-path"}},c=[],s={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," supports ",Object(o.b)("strong",{parentName:"p"},"Reverse Mapping")," by chaining ",Object(o.b)("inlineCode",{parentName:"p"},"reverseMap()")," after ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()"),". This will create a reversed ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")," for the two models that were passed in ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination) // <-- create `Mapping<Source, Destination>`\n  .reverseMap(); // <-- create `Mapping<Destination, Source>`\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"reverseMap()")," returns a ",Object(o.b)("inlineCode",{parentName:"p"},"CreateReversedMapFluentFunctions")," which will allow you to chain ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/5.0.12/usages/features/callbacks"}),"Callbacks")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"for-path"}),"ForPath"),"."))}u.isMDXComponent=!0},276:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p({},r,{},e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(f,p({ref:r},s,{components:t})):a.a.createElement(f,p({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);