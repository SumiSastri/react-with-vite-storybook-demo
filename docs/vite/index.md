
# How Vite works under the hood

Vite uses the modular framework of JavaScript bundles. Instead of babel as a transpiler, Vite uses ESBuild, which hooks into each ES-6 (ECMA Script), or more modern JavaScript bundles, to build code modules and packages.  This process is faster as the `import` and `export default` or `export` file structure is accessed to bundle JavaScript. Niether babel nor webpack therefore are required.

Dev files now can move into production level quicker and an app can be deployed from dev to production environments more efficienctly as a whole process is cut out. Hydration is executed quicker when you run `npm run build` to build your app packages as Vite uses Rollup at this stage.

CRA uses webpack and babel under the hood, and many devs prefer to move away from CRA to Vite. However, this is a use-case choice.

For side projects CRA is still fine, but for larger apps, Vite may be a better option to consider as it does the bundling and code-splitting on the fly.

Vite is great for client-side apps, less so for server-side rendered pages.

Other options are Astro and Gatsby for SSG (static-side-generation). These are good for server-side rendering and static sites where the content does not change.

NextJS is a framework that uses React under the hood and uses server-side-rendering(SSR), static-site-generation (SSG) as well as just client or server side rendering. You can pick and mix with this framework. Once you need authentication and server-side data in a larger app, this is a great choice.

Fullstack frameworks which handles both the front-end and backend, Remix is the most popular as it has been acquired by Shopify. Redwood, Blitz are other options at this level of app builders.
