(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{137:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return m}));var n=t(1),a=t(9),o=(t(0),t(276)),c={id:"map-from",title:"MapFrom",sidebar_label:"MapFrom"},i={id:"version-5.x/usages/mapping-configuration/for-member/map-from",title:"MapFrom",description:"Let's take a look at the following snippet",source:"@site/versioned_docs/version-5.x/usages/mapping-configuration/for-member/map-from.md",permalink:"/docs/5.x/usages/mapping-configuration/for-member/map-from",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.x/usages/mapping-configuration/for-member/map-from.md",version:"5.x",sidebar_label:"MapFrom",sidebar:"version-5.x/docs",previous:{title:"ForMember Basic",permalink:"/docs/5.x/usages/mapping-configuration/for-member/basic"},next:{title:"Condition",permalink:"/docs/5.x/usages/mapping-configuration/for-member/condition"}},p=[],s={rightToc:p};function m(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's take a look at the following snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm)\n  .forMember(\n    dest => dest.fullName,\n    opts => opts.mapFrom(src => src.firstName + ' ' + src.lastName)\n  )\n  .forMember(\n    dest => dest.isAdult,\n    opts => opts.mapFrom(src => src.age >= 18)\n  );\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," takes in a callback that receives the ",Object(o.b)("inlineCode",{parentName:"p"},"source")," and needs to return a value with a ",Object(o.b)("inlineCode",{parentName:"p"},"type")," that matches ",Object(o.b)("inlineCode",{parentName:"p"},"dest => dest.<some_member>"),".\n",Object(o.b)("strong",{parentName:"p"},"TypeScript")," will provide strong-typings for the consumers."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://p42.f3.n0.cdn.getcloudapp.com/items/WnuN17mb/Screen+Recording+2020-02-15+at+01.36+PM.gif?v=30cdc579dd34646b4e6c0b51129c2005",alt:"Type Inference"}))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," will set the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/5.x/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"MapFrom"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const user = new User();\nuser.firstName = 'Chau';\nuser.lastName = 'Tran';\nuser.age = 28;\nuser.bio = 'Developer';\n\nconst vm = Mapper.map(user, UserVm);\n/**\n * UserVm {\n *   firstName: 'Chau',\n *   lastName: 'Tran',\n *   fullName: 'Chau Tran',\n *   age: 28,\n *   isAdult: true,\n *   bio: 'Developer'\n * }\n */\n")))}m.isMDXComponent=!0},276:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),m=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},u=function(e){var r=m(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(t),b=n,f=u["".concat(c,".").concat(b)]||u[b]||l[b]||o;return t?a.a.createElement(f,i({ref:r},s,{components:t})):a.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);