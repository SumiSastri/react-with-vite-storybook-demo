
# Chakra scaffolding and key features

Chakra is an `npm` package, pre-requisites are
- HTML (Hypertext Markup Language)
- CSS (Cascading Style Sheets)
- JS (JavaScript)
- React - a JS library
- NodeJS - with Node installed in your local environment
- GitHub - version control

Create a repo in GitHub and link it to your local repo

- Install `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

[Chakra UI Docs](https://chakra-ui.com/getting-started)

Once installed the `ChakraProvider`  as a constructor can be imported and wraps the `main.tsx` so that the components can be used in a React app.

Chakra documentation is very easy to follow - this section provides some useful sections of the documentation to review.

- [Design Principles Docs](https://chakra-ui.com/getting-started/principles)

- [Style props docs](https://chakra-ui.com/docs/styled-system/style-props)

- [The sx prop docs](https://chakra-ui.com/docs/styled-system/the-sx-prop)

- Another section of the docs worth highlighting are the [hooks section](https://chakra-ui.com/docs/hooks/use-boolean) which starts with the `useBoolean` hook and then lists all the other hooks you can use below.

- Colors are notated slightly differently see docs for [default theme](https://chakra-ui.com/docs/styled-system/theme)

- Responsive Styles - [see NetNinja tute](https://www.youtube.com/watch?v=QbLTBTfZ1Hk&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP&index=5)

- Icons can be used by installing the Chakra icons component and you can create custom icons which is quite useful check the [Icon package docs](https://chakra-ui.com/docs/components/icon/usage). It makes compatibility of your icons library (of which there are several - fontawesome is popular) higher and may be a better option to consider.