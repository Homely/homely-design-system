import styled from 'styled-components/macro';
import BaseButton from '../base-button';

const FlatButtonSc = styled(BaseButton)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ isDesktop }) => (isDesktop ? 17 : 16)}px;
  line-height: 30px;

  /* Primary */
  ${({ primary, theme }) => primary && `color: ${theme.colors.redBase};`}
`;

export default FlatButtonSc;
