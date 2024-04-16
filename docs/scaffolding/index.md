# Core app scaffolding - React, TypeScript, Vite

Run the command `npm create vite@latest name-of-your-app`, select the framework of choice - this app uses TypeScript + SWC with React.

Now cd (change directories) into your app and install node modules with ` npm install`

Run `npm run dev` and open your files in  your [local environment](http://localhost:5173/)

Run `npm run build` this creates a distribution file that will hydrate your HTML files open the [production environment](http://localhost:4173/) with an `npm run preview`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`

- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Adding Chakra 

Chakra is an `npm` package, 

Create a repo in GitHub and link it to your local repo

- Install `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

[Chakra UI Docs](https://chakra-ui.com/getting-started)

Once installed the `ChakraProvider`  as a constructor can be imported and wraps the `main.tsx` so that the components can be used in a React app.

See `storybook-demo/src/main.tsx`

[Chakra Icons docs](https://v2.chakra-ui.com/docs/components/icon/usage#using-chakra-ui-icons)

`npm i @chakra-ui/icons`

## Adding a mockserver - json server 
`npm install -g json-server` 

Add mock data - in root above `src` folder in a `.json` file

Adding watch mode
`json-server -w ./mocks/db.json`

This should give you the end-point http://localhost:3000/tasks

## Adding Storybook 

To scaffold cd (change directories) into storybook-demo and install the packages with the script `npx storybook@latest init`

Accept ES Lint config and note that the packages take a little while to install.

You can run the script `npm run storybook`` now to see the files.

The package ships with demo files that you can tinker with. Import the `Button` story into your main app to see how the component that ships with the Storybook package works.

[Following Tute](https://www.youtube.com/watch?v=CuGZgYo6-XY)

There are breaking changes compared to V6. Storybook is currently on v7.5 and aims frequent minor updates going forward from the major V7 update.

[Storybook documentation](https://storybook.js.org/docs/react/get-started/install/)