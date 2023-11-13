
# Building JavaScript files in a webapp

Before a software package can be released into production mode, all the JavaScript files have to be bundled and built.

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

This app uses Vite to build production ready files.