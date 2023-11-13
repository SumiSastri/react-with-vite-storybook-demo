# react-with-vite-storybook-demo

A demo of React with Vite and Storybook Version 7. There are breaking changes compared to V6. Storybook is currently on v7.5 and aims frequent minor updates going forward from the major V7 update.

[Storybook documentation](https://storybook.js.org/docs/react/get-started/install/)

Vite is an alternative to CRA (Create-React-App). The challenges with CRA is that it is built with wepack and babel under the hood. Vite uses ESBuild which is faster.

CRA has been used to build React projects but it has now become clunkier than the options out there, like Vite. It is more difficult working with TypeScript, creating a production-ready app and updates of the internals (webpack/ babel and others) can be buggy.

[Vite docs](https://vitejs.dev/guide/)

## Scripts

_Repo Access_ 

- Run `npm run dev` and open your files in  your [local environment](http://localhost:5173/)

- Run `npm run build` this creates a distribution file that will hydrate your HTML files open the [production environment](http://localhost:4173/) with an `npm run preview`

- Once you have installed storybook you can use the script `npm run storybook` note this now [runs on a different local host port](http://localhost:6006/)

_Note_
To see changes on your stories you need to run the scripts for storybook on one tab and to see how this is implemented in your react-app you need to run a second localhost server with the scripts to see the rendering of your stories in the app.
