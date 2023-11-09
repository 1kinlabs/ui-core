import React from 'react';

import { map as theme } from '../src/theme/default';

import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { viewports } from '../src/css/media'

import { ThemeProvider } from '../src/theme'

const customViewports = Object.keys(viewports).reduce((acc, key) => {
  acc[key] = {
    name: key,
    styles: {
      width: key === 'desktop'
        ? '100%'
        : `${viewports[key]}px`,
      height: '100%',
    }
  }
  return acc
}, {})

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      },
    },
    docs: {
      theme: themes.dark
    },
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
