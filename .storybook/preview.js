import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { addDecorator } from '@storybook/react';
import "../src/components/layout.css"
import theme from '../src/theme';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))
