(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(276)),i={id:"problems-with-typescript",title:"Problems with TypeScript",sidebar_label:"Problems with TypeScript"},p={id:"version-5.x/introduction/problems-with-typescript",title:"Problems with TypeScript",description:"[Reflection](https://en.wikipedia.org/wiki/Reflection_(computer_programming)) plays a huge part in the **auto** part of an **AutoMapper**. And it is especially *not that great* in **TypeScript** (although, **Reflection** in **TypeScript** has been improving). Let's take a look at the following snippet:",source:"@site/versioned_docs/version-5.x/introduction/problems-with-typescript.md",permalink:"/docs/5.x/introduction/problems-with-typescript",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-5.x/introduction/problems-with-typescript.md",version:"5.x",sidebar_label:"Problems with TypeScript",sidebar:"version-5.x/docs",previous:{title:"Author's Use-case",permalink:"/docs/5.x/introduction/author-use-case"},next:{title:"Getting started",permalink:"/docs/5.x/guides/getting-started"}},c=[],s={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Reflection_(computer_programming)"}),"Reflection")," plays a huge part in the ",Object(o.b)("strong",{parentName:"p"},"auto")," part of an ",Object(o.b)("strong",{parentName:"p"},"AutoMapper"),". And it is especially ",Object(o.b)("em",{parentName:"p"},"not that great")," in ",Object(o.b)("strong",{parentName:"p"},"TypeScript")," (although, ",Object(o.b)("strong",{parentName:"p"},"Reflection")," in ",Object(o.b)("strong",{parentName:"p"},"TypeScript")," has been improving). Let's take a look at the following snippet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n    firstName: string;\n    lastName: string;\n}\n")),Object(o.b)("p",null,"the above ",Object(o.b)("inlineCode",{parentName:"p"},".ts")," code will be compiled to the following in ",Object(o.b)("inlineCode",{parentName:"p"},".js")," (depending on the ",Object(o.b)("strong",{parentName:"p"},"JS")," flavor you picked for your ",Object(o.b)("inlineCode",{parentName:"p"},"target"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class User {}\n\n// or in older ES\nfunction User() {}\n")),Object(o.b)("p",null,"Now, when you try to ",Object(o.b)("inlineCode",{parentName:"p"},"instantiate")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"new up"),") a ",Object(o.b)("inlineCode",{parentName:"p"},"User")," by writing the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const user = new User();\nconsole.log(user);\n")),Object(o.b)("p",null,"You would expect to get ",Object(o.b)("inlineCode",{parentName:"p"},"User { firstName: undefined, lastName: undefined }")," printed out to the ",Object(o.b)("strong",{parentName:"p"},"console"),", wouldn't you? At least, it was my expectation. But in reality, you would get ",Object(o.b)("inlineCode",{parentName:"p"},"User {}"),". Now you're sitting there wondering where ",Object(o.b)("inlineCode",{parentName:"p"},"firstName")," and ",Object(o.b)("inlineCode",{parentName:"p"},"lastName")," go.\nNext, let's take a look at some similar snippets in ",Object(o.b)("strong",{parentName:"p"},"C#"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"// SomeFileName.cs\n\n// Same Domain model as in TypeScript\nclass User {\n    public string FirstName {get; set;}\n    public string LastName {get; set;}\n    // ... some additional properties ...\n}\n\n// Some ViewModel class\nclass UserVm {\n    public string FirstName {get; set;}\n    public string LastName {get; set;}\n    // ... some additional properties ...\n}\n\n...\n// Create the Mapping between User and UserVm\nCreateMap<User, UserVm>();\n...\n\n...\n// Actual map from User to UserVm\nvar userVm = Mapper.Map<UserVm>(user);\n...\n")),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"C#"),", ",Object(o.b)("strong",{parentName:"p"},"AutoMapper")," will be able to ",Object(o.b)("em",{parentName:"p"},"conventionally map")," ",Object(o.b)("inlineCode",{parentName:"p"},"User.FirstName")," to ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm.FirstName")," because of ",Object(o.b)("strong",{parentName:"p"},"Convention"),". The two classes share the same property names.\nIn ",Object(o.b)("strong",{parentName:"p"},"TypeScript"),", you cannot do that ",Object(o.b)("strong",{parentName:"p"},"without")," having to do a bit extra work. The ",Object(o.b)("inlineCode",{parentName:"p"},"User")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm"),") instance in ",Object(o.b)("strong",{parentName:"p"},"TypeScript")," does not contain any properties because we\n",Object(o.b)("strong",{parentName:"p"},"never actually declared")," them in the class \ud83d\ude05. If you are interested in learning more about this whole process, read my ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nartc.netlify.com/blogs/automapper-typescript/"}),"blog post"),"."))}l.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,p({ref:t},s,{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);