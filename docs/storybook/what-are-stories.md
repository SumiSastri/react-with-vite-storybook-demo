# What is a story in Storybook

Once you have scaffolded your project and successfuly run a story in your app, you can use the prebuilt file structure that Storybook ships with.

In the `src/stories` folder you can create bespoke stories or components and document the code in them.

Stories are representations of the UI of your components. The default renders the default state of the component. Other stories are renders of different versions or compositions of that basic story. For example, a button may have a default render, but look different when disabled. The disabled button is a story version of the default story of the button.

A more detailed discussion of [what's a story in the Storybook docs](https://storybook.js.org/docs/get-started/whats-a-story).

In developer terms, a story is an object that describes how to render a component. You can have multiple stories per component.
