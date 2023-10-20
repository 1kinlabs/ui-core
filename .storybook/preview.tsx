import React from 'react';

import { map as theme } from '../src/theme/default';

import type { Preview } from "@storybook/react";

import { ThemeProvider } from '../src/theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: '1Kin',
      values: [
        {
          name: '1Kin',
          value: theme.neutral.darkest
        }
      ]
    }
  },
};

export default preview;
