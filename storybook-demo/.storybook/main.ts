import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],    
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // autogenerate docs for all components set globally
  docs: {
    autodocs: true,
  },
};
export default config;
