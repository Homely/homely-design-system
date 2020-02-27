import React from 'react';
import PropTypes from 'prop-types';

const PageInfoContext = React.createContext();

const PageInfoProvider = props => {
  // const { pageInfo } = props;
  const pageInfo = { isDesktop: true}
  return <PageInfoContext.Provider value={pageInfo} {...props} />;
};

PageInfoProvider.propTypes = {
  pageInfo: PropTypes.object.isRequired,
};

const usePageInfo = () => React.useContext(PageInfoContext);

export { PageInfoContext, PageInfoProvider, usePageInfo };
