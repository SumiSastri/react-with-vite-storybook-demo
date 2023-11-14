# How to create a new story

Once you have scaffolded your project and successfuly run a story in your app, you can use the prebuilt file structure that Storybook ships with.

In the `src/stories` folder you can create bespoke stories or components and document the code in them.

1. Create the component and a story for the component one for the design and the other for the documentation
eg: `TrafficLights.tsx` and `TrafficLights.stories.ts`

2. For the documentation page, import constructors from storybook library eg: `{Meta, StoryObj}` and the component which becomes a constructor in its own right.

Look at the example of the Page constructor, the Page documentation and follow the pattern to see if you can make your own documented page. A combination of the Page and Header are good examples to follow as well as the docs.

If you rename a story eg: TrafficLights Base component, rename to Board, the local host disconnects and you need to refresh the page