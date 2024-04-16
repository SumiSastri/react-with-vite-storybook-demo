# React, Vite, TypeScript, Chakra and Storybook Demo app

Versions: React v19, Chakra v2,  Storybook v7, Node v20,

Pre-requisites:

- HTML (Hypertext Markup Language)
- CSS (Cascading Style Sheets)
- JS (JavaScript)
- React - a JS library
- JS (JavaScript), TypeScript is a super script of JavaScript
- NodeJS - with Node installed in your local environment
- Mock servers - json-server
- GitHub - version control

## Scripts

_Repo Access_ 

See docs section for scaffolding 

- cd storybook-demo

- Run `npm run dev` and open your files in  your [app localhost](http://localhost:5173/)

Backend - watch mode with mockserver - json-server

- Run `json-server -w ./mocks/db.json` to get [Endpoint for data](http://localhost:3000/toDos)

- For the storybook section you can use the script `npm run storybook`[storybook localhost](http://localhost:6006/)

- Run `npm run build` this creates a distribution file that will hydrate your HTML files open the [production environment](http://localhost:4173/) with an `npm run preview`

_Note_
- You need both the backend and frontend servers running on 2 terminals

- To see changes on your stories you need to run the scripts for storybook on one tab and to see how this is implemented in your react-app you need to run a second localhost server with the scripts to see the rendering of your stories in the app.
