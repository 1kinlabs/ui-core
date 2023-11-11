import React from 'react';

import { map as theme } from '../src/theme/default';

import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { viewports } from '../src/css/media'
import styled from 'styled-components';

import { ThemeProvider } from '../src/theme'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
`

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
        <Wrapper>
          <Story />
        </Wrapper>
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
