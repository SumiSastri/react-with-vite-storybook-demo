Webpack takes dev files, for example,

    - CSS (cascading style sheet or `.css` files) 
    - node modules
    - JavaScript extension files (`.js`) - from npm library imports
    - imported and exported modules of JavaScript code

and then bundles these files into a commonJs or mainJs file. 

All the JavaScript bundles of files are then transpiled into to JavaScript that browser engines can read and parse.

These transpiled files are fed into a script tag into the root HTML (hyper-text-markup-language file or the `.html` file). 

Wepack uses with another code transpile tool called babel, under the hood as well as other transpilers and code compilers to build the JavaScript files.

Browsers then parse the HTML, CSS and JavaScript files and render the pages on the web.

This process of hydrating HTML pages with JavaScript, can be slow and reduce site performance (speed/ efficiency). Everytime there is change in the page, the hydration process is executed. With React, in the Virtual DOM (document object model), a React algorithm is run to pre-prepare the JavaScript files and hydrate the DOM.

If the hydration is fast site efficiency is better. Developers are constantly looking for tools that will improve site performance.

Vite uses the modular framework of JavaScript bundles. Instead of babel as a transpiler, Vite uses ESBuild, which hooks into each ES-6 (ECMA Script), or more modern JavaScript bundles, to build code modules and packages.  This process is faster as the `import` and `export default` or `export` file structure is accessed to bundle JavaScript. Niether babel nor webpack therefore are required.

Dev files now can move into production level quicker and an app can be deployed from dev to production environments more efficienctly as a whole process is cut out. Hydration is executed quicker when you run `npm run build` to build your app packages as Vite uses Rollup at this stage.

CRA uses webpack and babel under the hood, and many devs prefer to move away from CRA to Vite. However, this is a use-case choice.

For side projects CRA is still fine, but for larger apps, Vite may be a better option to consider as it does the bundling and code-splitting on the fly.

Run the command `npm create vite@latest name-of-your-app`, select the framework of choice - this app uses TypeScript + SWC with React.

Now cd (change directories) into your app and install node modules with ` npm install`

A good tutorial to follow [Traversy Media Vite Crash Course](https://www.youtube.com/watch?v=89NJdbYTgJ8) for setup and scaffolding.

Run `npm run dev` and open your files in  your [local environment](http://localhost:5173/)