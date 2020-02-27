import React from 'react';
import { PageInfoProvider } from '../src/context/pageInfo-context';

export const PageInfoDecorator = (storyFn, pageInfo) => (
  <PageInfoProvider pageInfo={pageInfo}>{storyFn()}</PageInfoProvider>
);

export default PageInfoDecorator;
