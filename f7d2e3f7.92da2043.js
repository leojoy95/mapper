(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(276)),i={id:"plugin",title:"Transformer Plugin",sidebar_label:"Plugin"},p={id:"version-6.0.0/plugin",title:"Transformer Plugin",description:"As you have already noticed throughout the documentations, `@AutoMap()` decorator is used on every single property of every single class. This is not required for all properties",source:"@site/versioned_docs/version-6.0.0/plugin.md",permalink:"/docs/plugin",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/plugin.md",version:"6.0.0",sidebar_label:"Plugin",sidebar:"version-6.0.0/docs",previous:{title:"NestJS Integration",permalink:"/docs/nest"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Webpack",id:"webpack",children:[]},{value:"Rollup",id:"rollup",children:[]},{value:"ttypescript",id:"ttypescript",children:[]},{value:"NestJS CLI",id:"nestjs-cli",children:[]}]}],c={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As you have already noticed throughout the documentations, ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator is used on every single property of every single class. This is not required for all properties\nbut it's only required to be put on the properties that are not going to be ",Object(o.b)("strong",{parentName:"p"},"custom-configured")," by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/usages/mapping-configuration/for-member/basic"}),"ForMember"),". Despite that,\nit still introduces a lot of boilerplate code with all those ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can be accompanied by a ",Object(o.b)("strong",{parentName:"p"},"Transformer Plugin")," that is published on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@nartc/automapper-transformer-plugin"}),"NPM")," under the name ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper-transformer-plugin"),".\nYou can check out the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nartc/automapper-transformer-plugin"}),"Github")," repository."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://badges.greenkeeper.io/nartc/automapper-transformer-plugin.svg",alt:"Greenkeeper badge"}))),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/travis/nartc/automapper-transformer-plugin",alt:"travis"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@nartc/automapper-transformer-plugin",alt:"bundlephobia"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/npm/dt/@nartc/automapper-transformer-plugin",alt:"downloads"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/npm/v/@nartc/automapper-transformer-plugin",alt:"npm"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://badgen.net/github/license/nartc/automapper-transformer-plugin",alt:"license"}))),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class Profile {\n  bio: string;\n  age: number;\n}\n\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n}\n")),Object(o.b)("p",null,"The above TS code will be compiled to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Profile {}\nclass User {}\n")),Object(o.b)("p",null,"We need to decorate the ",Object(o.b)("inlineCode",{parentName:"p"},"field declarations")," with ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," in order for ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," to work properly."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class Profile {\n  @AutoMap()\n  bio: string;\n  @AutoMap()\n  age: number;\n}\n\nclass User {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap(() => Profile)\n  profile: Profile;\n}\n")),Object(o.b)("p",null,"That will get very verbose very soon. ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper-transformer-plugin")," can help that."),Object(o.b)("p",null,"This plugin utilizes ",Object(o.b)("strong",{parentName:"p"},"Abstract Syntax Tree")," (",Object(o.b)("strong",{parentName:"p"},"AST"),") to run a ",Object(o.b)("inlineCode",{parentName:"p"},"before")," transformer.\nThe plugin will look at files that end with ",Object(o.b)("inlineCode",{parentName:"p"},"*.model.ts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"*.vm.ts")," and keep the ",Object(o.b)("strong",{parentName:"p"},"metadata")," of the ",Object(o.b)("inlineCode",{parentName:"p"},"classes")," in a form of a ",Object(o.b)("inlineCode",{parentName:"p"},"static function"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper-transformer-plugin")," keeps the metadata as follow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class Profile {\n  static __NARTC_AUTOMAPPER_METADATA_FACTORY() {\n    return { bio: () => String, age: () => Number };\n  }\n}\n\nclass User {\n  static __NARTC_AUTOMAPPER_METADATA_FACTORY() {\n    return {\n      firstName: () => String,\n      lastName: () => String,\n      profile: () => Profile,\n    };\n  }\n}\n")),Object(o.b)("p",null,"This allows ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," to look at these models and run the ",Object(o.b)("inlineCode",{parentName:"p"},"static function")," to hold the metadata for each model, exactly like what ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," would do for you. In fact, internally, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," calls the static function and iterates over the result then calls ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMap()")," directly."),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Transformers")," bring great value to developers but they are an experimental feature in ",Object(o.b)("strong",{parentName:"p"},"TypeScript"),". Hence, to use it, you'd need to modify your build steps directly and each build tool has different setup."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper-transformer-plugin")," will only add the minimum amount of code relating to the ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator. If you want to have extra options (options from ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," library), you'd want to still decorate the fields manually."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Union"),": Currently, ",Object(o.b)("inlineCode",{parentName:"li"},"@nartc/automapper-transformer-plugin")," will handle most ",Object(o.b)("inlineCode",{parentName:"li"},"Nullable")," (",Object(o.b)("inlineCode",{parentName:"li"},"type | null"),") and ",Object(o.b)("inlineCode",{parentName:"li"},"Maybe")," (",Object(o.b)("inlineCode",{parentName:"li"},"propKey?: type"),") cases. However, for complex cases where you have unions with different types (",Object(o.b)("inlineCode",{parentName:"li"},"string | number | boolean")," or ",Object(o.b)("inlineCode",{parentName:"li"},"ClassA | ClassB"),"), please consider decorate the property (field) manually with ",Object(o.b)("inlineCode",{parentName:"li"},"@AutoMap()")," decorator.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"npm install @nartc/automapper-transformer-plugin --save-dev\n# or shorthand version\nnpm i -D @nartc/automapper-transformer-plugin\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper-transformer-plugin")," only has one configuration option for now"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface TsAutoMapperPluginOptions {\n  modelFileNameSuffix?: string[];\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"modelFileNameSuffix")," is default to ",Object(o.b)("inlineCode",{parentName:"p"},"['.model.ts', '.vm.ts']")),Object(o.b)("h3",{id:"webpack"},"Webpack"),Object(o.b)("p",null,"I hope you are using ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader")," or some form of ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader forks"),". Configure your ",Object(o.b)("inlineCode",{parentName:"p"},"webpack.config.js")," as follows to turn on the plugin"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"...\nconst tsAutoMapperPlugin = require('@nartc/automapper-transformer-plugin');\nconst pluginOptions = {\n  modelFileNameSuffix: [...]\n};\n\nmodule.exports = {\n  ...\n  module: {\n    rules: [\n      ...\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: {\n          getCustomTransformers: program => ({\n            before: [tsAutoMapperPlugin(program, pluginOptions).before]\n          })\n        }\n      }\n      ...\n    ]\n  }\n  ...\n};\n")),Object(o.b)("h3",{id:"rollup"},"Rollup"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"rollup-plugin-typescript2")," as it has ",Object(o.b)("inlineCode",{parentName:"p"},"tranformers")," capability."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import tsAutomapperPlugin from '@nartc/automapper-transformer-plugin';\nimport typescript from 'rollup-plugin-typescript2';\nconst pluginOptions = {\n  modelFileNameSuffix: [...]\n};\n\nexport default {\n  ...\n  preserveModules: true, // <-- turn on preserveModules\n  plugins: [\n    ...\n    typescript({\n      transformers: [service => ({\n        before: [tsAutomapperPlugin(service.getProgram(), pluginOptions).before]\n      })]\n    }),\n    ...\n  ]\n}\n")),Object(o.b)("h3",{id:"ttypescript"},"ttypescript"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ttypescript")," patches ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," in order to use ",Object(o.b)("inlineCode",{parentName:"p"},"transformers")," in ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cevek/ttypescript"}),"ttypescript's README")," for how to use this with module bundlers such as ",Object(o.b)("inlineCode",{parentName:"p"},"webpack")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Rollup"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    ...,\n    "plugins": [\n        {\n            "transform": "@nartc/automapper-transformer-plugin",\n            "modelFileNameSuffix": [...]\n        }\n    ],\n    ...\n  }\n}\n')),Object(o.b)("p",null,"Check out this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nartc/automapper-transformer-plugin-examples"}),"Examples Repo")," out."),Object(o.b)("h3",{id:"nestjs-cli"},"NestJS CLI"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nestjs/cli")," can enable ",Object(o.b)("strong",{parentName:"p"},"Transformers")," by default. To use this plugin with ",Object(o.b)("inlineCode",{parentName:"p"},"nestjs/cli"),", modify your ",Object(o.b)("inlineCode",{parentName:"p"},"nest-cli.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"{5-7,16-23}","{5-7,16-23}":!0}),'{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": [\n      "@nartc/automapper-transformer-plugin"\n    ]\n  }\n}\n\n// or with options\n{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": [\n      {\n        "name": "@nartc/automapper-transformer-plugin",\n        "options": {\n          "modelFileNameSuffix": [".dto.ts", ".vm.ts"]\n        }\n      }\n    ]\n  }\n}\n\n')))}s.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,p({ref:t},c,{components:n})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);