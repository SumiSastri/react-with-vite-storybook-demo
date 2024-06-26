
# How Vite works under the hood

[Vite docs](https://vitejs.dev/guide/)

A good tutorial to follow [Traversy Media Vite Crash Course](https://www.youtube.com/watch?v=89NJdbYTgJ8) for setup and scaffolding.

In the past create-react-app or CRA was used as a code compiler/builder for React projects. However the process of bundling, compiling and building is clunkier as CRA uses Babel and webpack under the hood.

Vite uses the modular framework of JavaScript bundles. Instead of Babel as a transpiler, Vite uses ES-Build, which hooks into each ES-6 (ECMA Script), or more modern JavaScript bundles, to build code modules and packages.  

This process is faster as the `import` and `export default` or `export` file structure is accessed to bundle JavaScript. Niether Babel nor webpack are required.

Dev files now can move into production level quicker and an app can be deployed from dev to production environments more efficienctly as a whole process is cut out. Hydration is executed quicker when you run `npm run build` to build your app packages as Vite uses Rollup at this stage.

CRA uses webpack and Babel under the hood, and many devs prefer to move away from CRA to Vite. However, this is a use-case choice.

For side projects CRA is still fine, but for larger apps, Vite may be a better option to consider as it does the bundling and code-splitting on the fly.

Vite is great for client-side apps, less so for server-side rendered pages.

Other options are Astro and Gatsby for SSG (static-side-generation). These are good for server-side rendering (SSR) and static sites where the content does not change.

NextJS is a framework that uses React under the hood. It uses SSR and SSG as well as just client or server side rendering. You can pick and mix with this framework. Once you need authentication and server-side data in a larger app, this is a great choice.

For fullstack frameworks which handle both the frontend and backend, Remix is the most popular as it has been acquired by Shopify. Redwood, Blitz are other options at this level of app builders.

## Context setting - building JavaScript files in a webapp

Before a software package can be released into production mode, all the JavaScript files have to be bundled and built.

Webpack takes dev files, for example,

    - CSS (cascading style sheet or `.css` files) 
    - node modules
    - JavaScript extension files (`.js`) - from npm library imports
    - imported and exported modules of JavaScript code

and then bundles these files into a commonJs or mainJs file. 

All the JavaScript bundles of files are then transpiled into to JavaScript that browser engines can read and parse.

These transpiled files are fed into a script tag into the root HTML (hyper-text-markup-language file or the `.html` file). 

Wepack uses with another code transpile tool called Babel, under the hood as well as other transpilers and code compilers to build the JavaScript files.

Browsers then parse the HTML, CSS and JavaScript files and render the pages on the web.

This process of hydrating HTML pages with JavaScript, can be slow and reduce site performance (speed/ efficiency). Everytime there is change in the page, the hydration process is executed. With React, in the Virtual DOM (document object model), a React algorithm is run to pre-prepare the JavaScript files and hydrate the DOM.

If the hydration is fast site efficiency is better. Developers are constantly looking for tools that will improve site performance.
