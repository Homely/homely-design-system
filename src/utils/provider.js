import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PageInfoProvider } from '../context/pageInfo-context';
import theme from '../shared/theme';

export const withPageInfo = (children, pageInfo) => (
  <PageInfoProvider pageInfo={pageInfo}>{children}</PageInfoProvider>
);

export const withTheme = children => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default { withPageInfo, withTheme };
