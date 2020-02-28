import styled from 'styled-components/macro';
import { BaseButton } from '../base-button';

const activeStyle = theme => `
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.redBase};
  border-color: ${theme.colors.redBase};
  background-color: #FEECF1;
`;

const OutlineButtonSc = styled(BaseButton)`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.headerText};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 22px;

  user-select: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.redBase};
    border-color: ${({ theme }) => theme.colors.redBase};
    svg {
      stroke: ${({ theme }) => theme.colors.redBase};
    }
  }

  /* Large */
  ${({ large }) =>
    large &&
    `
    padding: 8px 24px;
    font-size: 16px;
    line-height: 26px;
  `}

  /* Small */
  ${({ small }) =>
    small &&
    `
    padding: 2px 16px;
    font-size: 13px;
    line-height: 26px;
  `}

  /* Active */
  ${({ active, theme }) =>
    active &&
    `
    ${activeStyle(theme)}
  `}

  /* Active - checkbox */
  input:checked + & {
    ${({ theme }) => activeStyle(theme)}
  }

  /* Primary */
  ${({ primary, theme }) =>
    primary &&
    `
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.redBase};
    border-color: ${theme.colors.redBase};
    &:hover {
      background-color: #FEECF1;
    }
  `}
`;

export default OutlineButtonSc;
