(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(276)),c={id:"plain-object",title:"Handle plain JavaScript object",sidebar_label:"Plain Object"},i={id:"usages/features/plain-object",title:"Handle plain JavaScript object",description:"`@nartc/automapper` works on real **instances** of models. However, there are cases where **TypeScript** is _tricked_ to see",source:"@site/docs/usages/features/plain-object.md",permalink:"/docs/next/usages/features/plain-object",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/plain-object.md",version:"next",sidebar_label:"Plain Object",sidebar:"docs",previous:{title:"Inheritance",permalink:"/docs/next/usages/features/inheritance"},next:{title:"Naming Convention",permalink:"/docs/next/usages/features/naming-convention"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works on real ",Object(o.b)("strong",{parentName:"p"},"instances")," of models. However, there are cases where ",Object(o.b)("strong",{parentName:"p"},"TypeScript")," is ",Object(o.b)("em",{parentName:"p"},"tricked")," to see\na ",Object(o.b)("inlineCode",{parentName:"p"},"plain object")," as an ",Object(o.b)("inlineCode",{parentName:"p"},"instance"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Mapper.map()")," (and all other ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," variations) has an overload where you can also pass\nin a ",Object(o.b)("inlineCode",{parentName:"p"},"Source")," model so you can help ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," which model the ",Object(o.b)("inlineCode",{parentName:"p"},"plain object")," belongs to"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class User2 {\n  // some properties\n}\n\nMapper.createMap(User2, UserVm); // assumed you already have a Mapping created between User and UserVm.\nconst userVm = Mapper.map(user, UserVm);\n\n/**\n * If "user" is truly an instance of User2, then it\'s fine. But if "user" is just a Plain JS object\n * and TS is tricked to see "user" as User2, then AutoMapper will have trouble looking for\n * the correct Mapping (User2 and UserVm).\n *\n * In that case, the "Source" argument will help AutoMapper to look for the correct Mapping\n */\nconst userVm = Mapper.map(user, UserVm, User2);\n')))}l.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);