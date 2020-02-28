import styled from 'styled-components/macro';
import BaseButton from '../base-button';

const SolidButtonSc = styled(BaseButton)`
  padding: ${({ theme, short }) =>
    short ? `7px ${theme.spacing[6]}px` : `11px ${theme.spacing[6]}px`};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  border-radius: 22px;
  text-align: center;

  /* Primary */
  color: ${({ theme }) => theme.colors.whiteBase};
  background-color: ${({ theme }) => theme.colors.redBase};

  &:hover {
    background-color: #FD6D90;
  }
`;

export default SolidButtonSc;
