(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(9),o=(r(0),r(276)),c={id:"author-use-case",title:"Author's Use-case",sidebar_label:"Author's use-case"},i={id:"introduction/author-use-case",title:"Author's Use-case",description:"At, [ArchitectNow](https://architectnow.net) where I work, we utilize [OpenAPI Specification](https://swagger.io/docs/specification/about/) to document our **API** days in days out, on every projects that we see fit.",source:"@site/docs/introduction/author-use-case.md",permalink:"/docs/next/introduction/author-use-case",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/introduction/author-use-case.md",version:"next",sidebar_label:"Author's use-case",sidebar:"docs",previous:{title:"AutoMapper Anti-pitch",permalink:"/docs/next/introduction/anti-pitch"},next:{title:"Problems with TypeScript",permalink:"/docs/next/introduction/problems-with-typescript"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://architectnow.net"}),"ArchitectNow")," where I work, we utilize ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://swagger.io/docs/specification/about/"}),"OpenAPI Specification")," to document our ",Object(o.b)("strong",{parentName:"p"},"API")," days in days out, on every projects that we see fit.\nCombined with a tool like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/RicoSuter/NSwag"}),"NSwag")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/swagger-api/swagger-codegen"}),"SwaggerCodegen"),", we have an automation pipeline to generate\n",Object(o.b)("strong",{parentName:"p"},"HTTP calls")," for client-side applications whether it is an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://angular.io"}),"Angular")," web application, a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/"}),"React Native")," mobile application, or an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/"}),"Xamarin.Forms")," app.\nAt a high level, we have ",Object(o.b)("strong",{parentName:"p"},"Domain Models")," which are the shape of data that will go in the Database and multiple ",Object(o.b)("em",{parentName:"p"},"conventionally matching")," ",Object(o.b)("strong",{parentName:"p"},"View Models")," that will be exposed to the Client instead of the ",Object(o.b)("strong",{parentName:"p"},"Domain Models")," counterparts.\nWithout ",Object(o.b)("strong",{parentName:"p"},"AutoMapper"),", we would have to manually map a lot of data back and forth on every single API calls."),Object(o.b)("p",null,"Now in ",Object(o.b)("strong",{parentName:"p"},"C#"),", you have ",Object(o.b)("strong",{parentName:"p"},"AutoMapper"),". Not so much in the ",Object(o.b)("strong",{parentName:"p"},"NodeJS")," world. For ",Object(o.b)("strong",{parentName:"p"},"NodeJS")," projects, we leverage an awesome framework called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nestjs.com"}),"NestJS")," \ud83c\udf87. ",Object(o.b)("strong",{parentName:"p"},"NestJS"),"\ntakes on ",Object(o.b)("em",{parentName:"p"},"Angular-like")," architecture which helps so much with building maintainable and scalable server-side applications. When working with ",Object(o.b)("strong",{parentName:"p"},"NestJS"),", we take the same approach as we build a ",Object(o.b)("strong",{parentName:"p"},".NET Core")," application.\nUnfortunately, there is not one ",Object(o.b)("strong",{parentName:"p"},"AutoMapper for TypeScript")," solution that is good enough for us which I mention in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Alternatives")," section. That's why ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," is born."))}u.isMDXComponent=!0},276:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,h=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?n.a.createElement(h,i({ref:t},s,{components:r})):n.a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);