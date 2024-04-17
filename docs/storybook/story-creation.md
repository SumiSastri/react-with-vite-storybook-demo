# How to create a story

Storybook ships with example stories and tools to view these stories. You can browse the existing stories by running the `npm run storybook` script.

The [tools that storybook ships with](https://storybook.js.org/docs/get-started/browse-stories) are the view in different viewports - tablets, phones and desktops, plus others like a measure which tells you the height and width of the element, a zoom and other useful features as described in the docs.

Stories are structured in a component story format (CSF) using a `.stories` file extension. This differentiates it from the component format which are written in `.jsx` or `.tsx` formats in React with JavaScript or TypeScript.

A story defines the different states, or data inputs that a component may have. The simplest way to create stories is to render a component with different arguments multiple times.
Arguments are equivalent to props in a React component, they are not exactly the same thing but to simplify the explanation, args can be see as props.

A story is created from a base component eg: `TrafficLights.tsx` and `TrafficLights.stories.ts` which is filed under the `/stories` folder. 

To create a story you import this component and create a `.stories.ts`. You now can export a story of that component as an object that describes the component in its metadata.

The metadata object has key-value pairs, such as the title, the component and tags. See the demo with `/stories/TrafficLights.stories.ts`. These key-value pairs are used to define the nature of the story that is being exported.

To document the story, import constructors from storybook library eg: `{Meta, StoryObj}` and the component becomes a constructor - the template is bound and a new blueprint is created. This is in v7 earlier version used the `template.bind()` method.

You can automatically generate documentation with the `tags: ['autodocs'],` prop. The docs are created when props are defined. If your props are not defined, no docs are generated (see Traffic Lights, for example, where props are not clearly defined therefore the autodocs plugin does not work).

The way to create a story and render different arguments is to create a utility function that does this `/stories/Circle.stories.ts` in this demo, we create several circles with different colors based on the args or props that show the different coloured circles.

__Args vs ArgTypes__

Arg types are props with logic, for example event handlers, or any functionality added to the element.


__Variants__

