# How to create a story


You need to import the component and add the meta-data for versions of that rendering called stories.





1. Create the component and a story for the component one for the design and the other for the documentation
eg: `TrafficLights.tsx` and `TrafficLights.stories.ts`

2. For the documentation page, import constructors from storybook library eg: `{Meta, StoryObj}` and the component which becomes a constructor in its own right.

Look at the example of the Page constructor, the Page documentation and follow the pattern to see if you can make your own documented page. A combination of the Page and Header are good examples to follow as well as the docs.

If you rename a story eg: TrafficLights Base component, rename to Board, the local host disconnects and you need to refresh the page


You can refactor the TrafficLights component and created a circle which can be reused with any colour.