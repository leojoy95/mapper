(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),o=(n(0),n(276)),i={id:"date-time",title:"Handle DateTime objects",sidebar_label:"Date Time"},c={id:"usages/features/date-time",title:"Handle DateTime objects",description:"Dealing with `DateTime` is always a hard thing to get right and there are so many different options to manipulate `Date` object in **JavaScript**.",source:"@site/docs/usages/features/date-time.md",permalink:"/docs/next/usages/features/date-time",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/date-time.md",version:"next",sidebar_label:"Date Time",sidebar:"docs",previous:{title:"Handle Getters",permalink:"/docs/next/usages/features/getters"},next:{title:"Map Callbacks",permalink:"/docs/next/usages/features/callbacks"}},p=[{value:"<code>Date</code> object",id:"date-object",children:[]},{value:"<code>Moment</code> object",id:"moment-object",children:[]}],b={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Dealing with ",Object(o.b)("inlineCode",{parentName:"p"},"DateTime")," is always a hard thing to get right and there are so many different options to manipulate ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," object in ",Object(o.b)("strong",{parentName:"p"},"JavaScript"),"."),Object(o.b)("h3",{id:"date-object"},Object(o.b)("inlineCode",{parentName:"h3"},"Date")," object"),Object(o.b)("p",null,"Internally, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," does not use any 3rd-party library to manipulate ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," object. Therefore, you might want to turn to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/mapping-configuration/for-member/basic"}),"ForMember"),"\nto achieve the desired result when dealing with ",Object(o.b)("inlineCode",{parentName:"p"},"DateTime"),". There are ",Object(o.b)("strong",{parentName:"p"},"three")," very powerful libraries that deal with vanilla ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," object: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://date-fns.org/"}),"date-fns"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/iamkun/dayjs"}),"dayjs"),",\nand ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://moment.github.io/luxon/"}),"Luxon"),"."),Object(o.b)("p",null,"Check the following snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Foo {\n  @AutoMap()\n  someDate: Date;\n}\n\nclass FooVm {\n  @AutoMap()\n  someDate: Date;\n}\n")),Object(o.b)("p",null,"Everything will work properly here. Now check the following case"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Foo {\n  @AutoMap()\n  someDate: Date;\n}\n\nclass FooVm {\n  @AutoMap()\n  someDate: string;\n}\n")),Object(o.b)("p",null,"When we ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," ",Object(o.b)("inlineCode",{parentName:"p"},"Foo")," to ",Object(o.b)("inlineCode",{parentName:"p"},"FooVm"),", ",Object(o.b)("inlineCode",{parentName:"p"},"FooVm.someDate")," will be ",Object(o.b)("em",{parentName:"p"},"made")," into type ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"string"),". Because there are different ways to turn a ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," into a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," cannot decide for the consumers which to use so ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," just maps the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," over. The best way to handle this is to use ",Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," and\ncustomize your mapping configuration between ",Object(o.b)("inlineCode",{parentName:"p"},"Foo.someDate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FooVm.someDate")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Foo, FooVm)\n    .forMember(dest => dest.someDate, mapFrom(src => src.someDate.toDateString());\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Learn more about ",Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/mapping-configuration/for-member/basic"}),"ForMember"))),Object(o.b)("p",null,"You can also leverage a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../mapping-configuration/for-member/convert-using.md"}),"Converter")," or a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/mapping-configuration/for-member/resolver"}),"Resolver")," for reusability. Again, if you have to handle more complex cases\nregarding ",Object(o.b)("inlineCode",{parentName:"p"},"DateTime"),", I highly recommend the libraries I mentioned above."),Object(o.b)("h3",{id:"moment-object"},Object(o.b)("inlineCode",{parentName:"h3"},"Moment")," object"),Object(o.b)("p",null,"Same complexity and limitation apply to ",Object(o.b)("inlineCode",{parentName:"p"},"Moment")," object with one extra caveat"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"{4}","{4}":!0}),"import moment from 'moment';\n\nclass Foo {\n  @AutoMap(() => moment)\n  someMoment: moment.Moment;\n}\n\nclass FooVm {\n  @AutoMap()\n  someMoment: string;\n}\n")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"Moment")," property needs to be decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap(() => moment)"),". Internally, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will based on the ",Object(o.b)("inlineCode",{parentName:"p"},"typeFunction")," to determine if this ",Object(o.b)("inlineCode",{parentName:"p"},"property"),"\nis a ",Object(o.b)("inlineCode",{parentName:"p"},"Moment")," object or not because ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," does not (and does not want to) have ",Object(o.b)("inlineCode",{parentName:"p"},"moment")," as its ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," so the consumers need to provide this extra information."),Object(o.b)("p",null,"Again, for complex cases, please use ",Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," to customize the mapping configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Foo, FooVm)\n    .forMember(dest => dest.someMoment, mapFrom(src => src.someMoment.toISOString());\n")))}m.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||l[u]||o;return n?r.a.createElement(d,c({ref:t},b,{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);