import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = [{
  name: 'Custom View Port',
  styles: {
    height: '812px',
    width: '375px'
  },
  type: 'mobile'
}]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {...MINIMAL_VIEWPORTS, ...customViewports}
    }
  },
};

export default preview;
