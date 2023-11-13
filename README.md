# react-with-vite-storybook-demo
A demo of React with Vite and Storybook

Vite is an alternative to CRA (Create-React-App). The challenges with CRA is that it is built with wepack and babel under the hood. Vite uses ESBuild which is faster.

CRA has been used to build React projects but it has now become clunkier than the options out there, like Vite. It is more difficult working with TypeScript, creating a production-ready app and updates of the internals (webpack/ babel and others) can be buggy.

[Vite docs](https://vitejs.dev/guide/)

Vite is great for client-side apps, less so for server-side rendered pages.

Other options are Astro and Gatsby for SSG (static-side-generation). These are good for server-side rendering and static sites where the content does not change.

NextJS is a framework that uses React under the hood and uses server-side-rendering(SSR), static-site-generation (SSG) as well as just client or server side rendering. You can pick and mix with this framework. Once you need authentication and server-side data in a larger app, this is a great choice.

Fullstack frameworks which handles both the front-end and backend, Remix is the most popular as it has been acquired by Shopify. Redwood, Blitz are other options at this level of app builders.
