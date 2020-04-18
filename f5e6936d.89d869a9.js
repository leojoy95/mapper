(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{266:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return u}));var n=o(1),r=o(9),a=(o(0),o(276)),i={id:"why",title:"Why AutoMapper for TypeScript?",sidebar_label:"Why AutoMapper?"},s={id:"version-5.x/introduction/why",title:"Why AutoMapper for TypeScript?",description:"**AutoMapper** is a tool that provides `Object - Object` mapping by **convention**. If you construct your **ViewModels (DTOs, VMs)** with properties that are consistent with your **Domain Models**, then you have established a **convention** and **AutoMapper** is a great tool for this type of mapping operation, based on projects' needs.",source:"@site/versioned_docs/version-5.x/introduction/why.md",permalink:"/docs/5.x/introduction/why",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.x/introduction/why.md",version:"5.x",sidebar_label:"Why AutoMapper?",sidebar:"version-5.x/docs",next:{title:"AutoMapper Anti-pitch",permalink:"/docs/5.x/introduction/anti-pitch"}},p=[],c={rightToc:p};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"AutoMapper")," is a tool that provides ",Object(a.b)("inlineCode",{parentName:"p"},"Object - Object")," mapping by ",Object(a.b)("strong",{parentName:"p"},"convention"),". If you construct your ",Object(a.b)("strong",{parentName:"p"},"ViewModels (DTOs, VMs)")," with properties that are consistent with your ",Object(a.b)("strong",{parentName:"p"},"Domain Models"),", then you have established a ",Object(a.b)("strong",{parentName:"p"},"convention")," and ",Object(a.b)("strong",{parentName:"p"},"AutoMapper")," is a great tool for this type of mapping operation, based on projects' needs.\nIt will take away all the ",Object(a.b)("em",{parentName:"p"},"boring manual mappings"),". The original ",Object(a.b)("strong",{parentName:"p"},"AutoMapper")," in ",Object(a.b)("strong",{parentName:"p"},"C#")," world was created by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://jimmybogard.com/"}),"Jimmy Bogard"),". While it seems convenient,\n",Object(a.b)("strong",{parentName:"p"},"AutoMapper")," is the kind of tool that you either love to use it or hate it. Jimmy writes a blog post on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://jimmybogard.com/automappers-design-philosophy/"}),"AutoMapper's Design Philosophy")," that expresses his opinions on his library.\nThe same philosophy applies to ",Object(a.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," as I take a lot of inspiration from the original ",Object(a.b)("strong",{parentName:"p"},"C# AutoMapper"),". I will quote the last part of the blog post because I think it is a good summary on Jimmy's thoughts regarding ",Object(a.b)("strong",{parentName:"p"},"AutoMapper")," as a tool"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"AutoMapper works because it enforces a convention. It assumes that your destination types are a subset of the source type. It assumes that everything on your destination type is meant to be mapped. It assumes that the destination member names follow the exact name of the source type. It assumes that you want to flatten complex models into simple ones. ",Object(a.b)("br",null),Object(a.b)("br",null),"\nAll of these assumptions come from our original use case - view models for MVC, where all of those assumptions are in line with our view model design. With AutoMapper, we could enforce our view model design philosophy. This is the true power of conventions - laying down a set of enforceable design rules that help you streamline development along the way.",Object(a.b)("br",null),Object(a.b)("br",null),"\nBy enforcing conventions, we let our developers focus on the value add activities, and less on the activities that provided zero or negative value, like designing bespoke view models or writing a thousand dumb unit tests.",Object(a.b)("br",null),Object(a.b)("br",null),"\nAnd this is why our usage of AutoMapper has stayed so steady over the years - because our design philosophy for view models hasn't changed. If you find yourself hating a tool, it's important to ask - for what problems was this tool designed to solve? And if those problems are different than yours, perhaps that tool isn't a good fit.")))}u.isMDXComponent=!0},276:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s({},t,{},e)),o},l=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(o),m=n,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||a;return o?r.a.createElement(d,s({ref:t},c,{components:o})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);