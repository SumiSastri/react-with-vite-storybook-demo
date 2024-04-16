# Mock servers

A quick option to mock a server is the json-server package. A lightweight mock-server, this node-package-manager (npm) package helps you set up API calls without having to set up data bases and cumbersome backends.

While this is not a production ready server, it is good for prototypes and mocks.

See scaffolding section for set up. Mock data needs to be added in `.json` files in the root of the project above the `src` folder. Once the package is installed, you can run the server in watch mode and access the mock data you have set up.

React Router then is used to fetch the data and front-end state-management to display it.

Queries:
1. Create a utility function to fetch the data from the endpoint - see `storybook-demo/src/utils/toDosLoader.ts`

2. Register the loader with the router and component - import the utility function and pass it as a prop of the component - see `storybook-demo/src/main.tsx`

3. In the component you can use the `useLoader()` hook from React Router dom and assign it to the data in a variable see - `storybook-demo/src/components/Dashboard.jsx` - you can now use this data (which is an array of objects) and render it with a map function.

Mutations:
1. Create a utility function to mutate data
2. Register the function with the router and component 
3. Use the Form constructor from React router dom see`storybook-demo/src/components/Create.tsx` for demo 