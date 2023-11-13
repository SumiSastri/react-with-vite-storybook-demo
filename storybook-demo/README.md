# React + TypeScript + Vite

_Scaffolding_

Run the command `npm create vite@latest name-of-your-app`, select the framework of choice - this app uses TypeScript + SWC with React.

Now cd (change directories) into your app and install node modules with ` npm install`

A good tutorial to follow [Traversy Media Vite Crash Course](https://www.youtube.com/watch?v=89NJdbYTgJ8) for setup and scaffolding.

Run `npm run dev` and open your files in  your [local environment](http://localhost:5173/)
Runb `npm run build` this creates a distribution file that will hydrate your HTML files open the [production environment](http://localhost:4173/) with an `npm run preview`


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
